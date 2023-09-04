import products from "../data/items.json";
import { useContext } from "react";
import { useFilterContext } from "../context/FilterContext";

const service = {
  getData: (
    { from, to } = { from: 0, to: products.length },

    locationFilter,
    careLevelFilter,
    sizeFilter,
    priceRange,
    searchText
  ) => {
    return new Promise((resolve, reject) => {
      const filteredData = products.filter((item) => {
        if (
          searchText &&
          !(
            item.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
            item.family.toLowerCase().startsWith(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase())
          )
        ) {
          return false;
        }

        if (
          locationFilter &&
          locationFilter.length > 0 &&
          !locationFilter.includes(item.location)
        ) {
          return false;
        }

        if (
          (careLevelFilter.easy ||
            careLevelFilter.moderate ||
            careLevelFilter.high) &&
          !careLevelFilter[item.care_level.toLowerCase()]
        ) {
          return false;
        }

        if (
          sizeFilter.length > 0 &&
          !sizeFilter.some((size) => item.sizes[size].available)
        ) {
          return false;
        }
        const priceInRange = Object.entries(item.sizes).some(
          ([size, sizeDetails]) => {
            if (!sizeDetails.available) return false;

            // If the sizeFilter array has selected sizes, only consider the sizes within the sizeFilter
            if (sizeFilter.length > 0 && !sizeFilter.includes(size))
              return false;

            const price = sizeDetails.price;
            return price >= priceRange[0] && price <= priceRange[1];
          }
        );

        if (!priceInRange) {
          return false;
        }

        return true;
      });

      const data = filteredData.slice(from, to);

      resolve({
        count: filteredData.length,
        data: data,
      });
    });
  },

  getProductById: (id) => {
    const product = products.find((p) => p.id === id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  },
};

export default service;
