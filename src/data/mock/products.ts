export type Product = {
  name: string;
  revenue: number;
  orders: number;
  image: string;
};

export const mockProducts: Product[] = [
  { name: "Premium Leather Bag", revenue: 12500, orders: 45, image: "🎒" },
  { name: "Urban Sneakers", revenue: 9800, orders: 82, image: "👟" },
  { name: "Classic Watch", revenue: 8400, orders: 24, image: "⌚" },
  { name: "Sunglasses", revenue: 4200, orders: 110, image: "🕶️" },
  { name: "Cotton T-Shirt", revenue: 2100, orders: 150, image: "👕" },
];
