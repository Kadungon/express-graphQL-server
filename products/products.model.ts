const Products = [
  {
    id: "1",
    name: "GSHOCK 65",
    description:
      "A line of watches manufactured by the Japanese electronics company Casio, designed to resist mechanical stress, shock and vibration",
    price: 12000,
    reviews: [
      {
        rating: 5,
        comments: "good",
      },
    ],
  },
  {
    id: "2",
    name: "PS5",
    description:
      "Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, 5",
    price: 49000,
    reviews: [
      {
        rating: 5,
        comments: "good",
      },
    ],
  },
  {
    id: "3",
    name: "The Rust Programming Language",
    description: "RUST Developer Guide",
    price: 2000,
    reviews: [
      {
        rating: 5,
        comments: "good",
      },
    ],
  },
];

const getAllProducts = () => {
  return Products;
};

const getProductByPrice = (max: number, min: number) => {
  return Products.filter(
    (products) => products.price >= min && products.price <= max
  );
};

const getProductById = (id: string) => {
  return Products.find((product) => product.id === id);
};

const addProducts = (
  id: string,
  name: string,
  description: string,
  price: number
) => {
  let product = Products.find((product) => product.id === id);

  if (product) {
    return {
      data: JSON.stringify(product),
      errors: [
        {
          code: "SOME_ERROR_CODE",
          message: "Duplicate ID Product already exists",
        },
      ],
    };
  }
  const newProduct = {
    id: id,
    name: name,
    description: description,
    price: price,
    reviews: [],
  };

  Products.push(newProduct);

  return {
    errors: [],
    data: JSON.stringify(newProduct),
  };
};

const addProductReview = (id: string, rating: number, comments: string) => {
  let product = Products.find((product) => product.id === id);

  const newReview = {
    rating: rating,
    comments: comments,
  };

  product?.reviews.push(newReview);

  return product;
};

type PRODUCT_TYPE = typeof Products;

export {
  Products,
  getAllProducts,
  getProductByPrice,
  getProductById,
  addProducts,
  addProductReview,
  PRODUCT_TYPE,
};
