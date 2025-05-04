export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Кофейная кружка",
      price: 9.99,
      description: "Керамическая кружка объёмом 350 мл.",
    },
    {
      id: 2,
      name: 'Футболка "webShop"',
      price: 19.99,
      description: "Мягкая хлопковая футболка с логотипом проекта.",
    },
    {
      id: 3,
      name: "Эко-сумка",
      price: 7.5,
      description: "Многоразовая тканевая сумка для покупок.",
    },
  ];

  res.status(200).json(products);
}
