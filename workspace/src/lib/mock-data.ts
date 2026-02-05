export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "active" | "draft";
  inventory: number;
  color: string;
  size: string;
};

export const mockProducts: Product[] = [
  {
    id: "pr-001",
    name: "Linen Drift Overshirt",
    category: "Outerwear",
    price: 128,
    status: "active",
    inventory: 42,
    color: "Sand",
    size: "M",
  },
  {
    id: "pr-002",
    name: "Slate Knit Polo",
    category: "Tops",
    price: 78,
    status: "active",
    inventory: 66,
    color: "Slate",
    size: "L",
  },
  {
    id: "pr-003",
    name: "Canyon Chino",
    category: "Bottoms",
    price: 92,
    status: "draft",
    inventory: 18,
    color: "Clay",
    size: "32",
  },
  {
    id: "pr-004",
    name: "Atlas Utility Jacket",
    category: "Outerwear",
    price: 164,
    status: "active",
    inventory: 11,
    color: "Olive",
    size: "XL",
  },
  {
    id: "pr-005",
    name: "Harbor Pleat Skirt",
    category: "Essentials",
    price: 88,
    status: "draft",
    inventory: 23,
    color: "Ink",
    size: "S",
  },
];

export const categoryOptions = [
  "Outerwear",
  "Tops",
  "Bottoms",
  "Essentials",
  "Accessories",
];
