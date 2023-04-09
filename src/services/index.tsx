import products from "../data/items.json";
import soils from "../data/soil.json";

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = products.slice(from, to);

      resolve({
        count: products.length,
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

  getSoilTypeById: (id) => {
    const soilType = soils.find((soil) => soil.id === id);

    if (!soilType) {
      throw new Error(`Soil type with id ${id} not found`);
    }
    return soilType;
  },
};

export default service;

// getSoilTypes: (soil) => {

//   const soilImage = soils.find((p) => p.id === soil);

//   return soilImage;

// },
