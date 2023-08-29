import { NextApiRequest, NextApiResponse } from "next";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 },
];

export default function handler(req, res) {
  const { id } = req.query;
  const productId = Number(id);

  if (!isNaN(productId)) {
    const product = products.find((p) => p.id === productId);

    if (product) {
      return res.status(200).json({ price: product.price });
    }
  }

  res.status(404).json({ message: "Product not found" });
}
