import {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addProducts,
  addProductReview,
  PRODUCT_TYPE,
} from "./products.model";

export default {
  Query: {
    products: () => {
      return getAllProducts();
    },
    product: (_: PRODUCT_TYPE, args: { id: string }) => {
      return getProductById(args.id);
    },
    productByPrice: (_: PRODUCT_TYPE, args: { max: number; min: number }) => {
      return getProductByPrice(args.max, args.min);
    },
  },
  Mutation: {
    addProduct: (
      _: PRODUCT_TYPE,
      args: { id: string; name: string; description: string; price: number }
    ) => {
      return addProducts(args.id, args.name, args.description, args.price);
    },
    addProductReview: (
      _: PRODUCT_TYPE,
      args: { productID: string; rating: number; comments: string }
    ) => {
      return addProductReview(args.productID, args.rating, args.comments);
    },
  },
};
