import products from "../data/items.json";

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
};

export default service;
