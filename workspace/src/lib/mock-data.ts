export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "active" | "draft";
  inventory: number;
  color: string;
  size: string;
  description?: string;
  materials?: string;
  rating?: number;
  reviews?: number;
  tone?: "sand" | "clay" | "slate" | "olive" | "ink" | "rose" | "mist";
  tag?: string;
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
    description: "Lightweight linen with a relaxed drape and soft structure.",
    materials: "Linen blend",
    rating: 4.8,
    reviews: 112,
    tone: "sand",
    tag: "Best seller",
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
    description: "Breathable knit with a tailored collar and matte finish.",
    materials: "Cotton knit",
    rating: 4.6,
    reviews: 86,
    tone: "slate",
    tag: "New",
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
    description: "Clean chino silhouette with a modern taper.",
    materials: "Stretch cotton",
    rating: 4.5,
    reviews: 58,
    tone: "clay",
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
    description: "Structured utility jacket with refined hardware.",
    materials: "Canvas",
    rating: 4.9,
    reviews: 41,
    tone: "olive",
    tag: "Limited",
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
    description: "Soft pleats with a fluid waistline.",
    materials: "Tencel blend",
    rating: 4.7,
    reviews: 64,
    tone: "ink",
  },
  {
    id: "pr-006",
    name: "Rosewood Wrap Dress",
    category: "Essentials",
    price: 142,
    status: "active",
    inventory: 29,
    color: "Rose",
    size: "M",
    description: "Signature wrap dress with subtle sheen and flow.",
    materials: "Silk blend",
    rating: 4.9,
    reviews: 102,
    tone: "rose",
    tag: "Editor pick",
  },
  {
    id: "pr-007",
    name: "Mist Daywear Tee",
    category: "Tops",
    price: 54,
    status: "active",
    inventory: 80,
    color: "Mist",
    size: "M",
    description: "Everyday tee with a polished neckline.",
    materials: "Organic cotton",
    rating: 4.4,
    reviews: 31,
    tone: "mist",
  },
  {
    id: "pr-008",
    name: "Sandline Tailored Trouser",
    category: "Bottoms",
    price: 118,
    status: "active",
    inventory: 37,
    color: "Sand",
    size: "30",
    description: "Tailored trouser with a soft crease and fluid drape.",
    materials: "Wool blend",
    rating: 4.6,
    reviews: 47,
    tone: "sand",
  },
];

export const categoryOptions = [
  "Outerwear",
  "Tops",
  "Bottoms",
  "Essentials",
  "Accessories",
];

export type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
  level: "info" | "warning" | "critical";
  channel: "order" | "inventory" | "customer" | "system";
};

export const mockNotifications: NotificationItem[] = [
  {
    id: "nt-1001",
    title: "New order placed",
    detail: "Order #1048 for Linen Drift Overshirt is pending fulfillment.",
    time: "2 mins ago",
    level: "info",
    channel: "order",
  },
  {
    id: "nt-1002",
    title: "Low stock alert",
    detail: "Atlas Utility Jacket is down to 3 units in NYC warehouse.",
    time: "12 mins ago",
    level: "warning",
    channel: "inventory",
  },
  {
    id: "nt-1003",
    title: "New customer review",
    detail: "4-star review on Canyon Chino: \"Perfect fit and fabric.\"",
    time: "34 mins ago",
    level: "info",
    channel: "customer",
  },
  {
    id: "nt-1004",
    title: "Payment retry required",
    detail: "Order #1043 payment failed twice. Reach out to customer.",
    time: "1 hr ago",
    level: "critical",
    channel: "order",
  },
  {
    id: "nt-1005",
    title: "Sync completed",
    detail: "Catalog sync finished with 0 errors.",
    time: "2 hrs ago",
    level: "info",
    channel: "system",
  },
];
