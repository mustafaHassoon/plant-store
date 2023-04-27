import products from "../data/items.json";

const service = {
  getData: (
    { from, to } = { from: 0, to: products.length },
    heightFilter,
    locationFilter,
    careLevelFilter,
    sizeFilter,
    priceRange
  ) => {
    return new Promise((resolve, reject) => {
      const filteredData = products.filter((item) => {
        if (heightFilter && !item.sizes[heightFilter].available) {
          return false;
        }

        if (
          (locationFilter.indoor || locationFilter.outdoor) &&
          !locationFilter[item.location]
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
        const priceInRange = Object.values(item.sizes).some((size) => {
          if (!size.available) return false;
          const price = size.price;
          return price >= priceRange[0] && price <= priceRange[1];
        });

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
