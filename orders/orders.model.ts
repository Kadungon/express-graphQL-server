const Orders = [
  {
    date: "2023-05-01",
    subtotal: 4000,
    items: [
      {
        product: {
          id: 1,
          description: "RUST Developer Guide",
          price: 2000,
        },
        subtotal: "",
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return Orders;
};

export { getAllOrders, Orders };
