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
        const hasNoAvailableSizes = !Object.values(item.sizes).some(
          (size) => size.available
        );

        // Check if any filter is active
        const isAnyFilterActive =
          searchText ||
          locationFilter.length > 0 ||
          careLevelFilter.easy ||
          careLevelFilter.moderate ||
          careLevelFilter.high ||
          sizeFilter.length > 0;

        // Exclude out-of-stock products when any filter is active
        if (isAnyFilterActive && hasNoAvailableSizes) {
          return false;
        }

        // When sizeFilter is not applied, include products with no available sizes
        if (sizeFilter.length === 0 && hasNoAvailableSizes) {
          return true;
        }

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

      filteredData.sort((a, b) => {
        const aAvailable = Object.values(a.sizes).some(
          (size) => size.available
        );
        const bAvailable = Object.values(b.sizes).some(
          (size) => size.available
        );

        if (aAvailable && !bAvailable) {
          return -1; // a comes first
        } else if (!aAvailable && bAvailable) {
          return 1; // b comes first
        }
        return 0; // no change in order
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
