export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  description: string;
  details: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'The ReWool Oversized Shirt Jacket',
    price: 107,
    originalPrice: 158,
    category: 'men',
    subcategory: 'outerwear',
    colors: [
      { name: 'Olive Plaid', hex: '#4A5D23' },
      { name: 'Black', hex: '#000000' },
      { name: 'Brown Plaid', hex: '#8B4513' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    description: 'A versatile shirt jacket made from recycled wool blend for warmth and sustainability.',
    details: ['Recycled wool blend', 'Oversized fit', 'Button front closure', 'Two chest pockets'],
    isNew: true,
    isSale: true,
  },
  {
    id: '2',
    name: 'The Good Cardigan',
    price: 102,
    originalPrice: 128,
    category: 'men',
    subcategory: 'sweaters',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://plus.unsplash.com/premium_photo-1689531916407-d64dedd6126d?q=80&w=513&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    ],
    description: 'A classic cardigan crafted from premium organic cotton.',
    details: ['Organic cotton', 'Regular fit', 'Button front', 'Ribbed cuffs and hem'],
    isSale: true,
  },
  {
    id: '3',
    name: 'The Performance Chino',
    price: 88,
    category: 'men',
    subcategory: 'pants',
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Black', hex: '#000000' },
      { name: 'Olive', hex: '#556B2F' },
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    ],
    description: 'Comfortable performance chinos with 4-way stretch.',
    details: ['4-way stretch fabric', 'Slim fit', 'Hidden coin pocket', 'Machine washable'],
    isNew: true,
  },
  {
    id: '4',
    name: 'The Organic Cotton Crew',
    price: 40,
    category: 'men',
    subcategory: 'tees',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80',
    ],
    description: 'A wardrobe essential made from 100% organic cotton.',
    details: ['100% organic cotton', 'Relaxed fit', 'Crew neck', 'Pre-shrunk'],
  },
  {
    id: '5',
    name: 'The Slim Fit Jean',
    price: 78,
    category: 'men',
    subcategory: 'denim',
    colors: [
      { name: 'Indigo', hex: '#3F51B5' },
      { name: 'Washed Black', hex: '#2C2C2C' },
      { name: 'Light Wash', hex: '#87CEEB' },
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80',
    ],
    description: 'Classic slim fit jeans with just the right amount of stretch.',
    details: ['98% cotton, 2% elastane', 'Slim fit', '5-pocket styling', 'Button fly'],
  },
  {
    id: '6',
    name: 'The French Terry Hoodie',
    price: 68,
    category: 'men',
    subcategory: 'sweatshirts',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Heather Grey', hex: '#9CA3AF' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Forest', hex: '#228B22' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80',
    ],
    description: 'Lightweight French terry hoodie perfect for layering.',
    details: ['French terry fabric', 'Relaxed fit', 'Kangaroo pocket', 'Drawstring hood'],
    isNew: true,
  },
  {
    id: '7',
    name: 'The Oxford Shirt',
    price: 78,
    category: 'men',
    subcategory: 'shirts',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Light Blue', hex: '#ADD8E6' },
      { name: 'Pink', hex: '#FFB6C1' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=800&q=80',
    ],
    description: 'A timeless Oxford shirt made from premium cotton.',
    details: ['100% cotton', 'Regular fit', 'Button-down collar', 'Chest pocket'],
  },
  {
    id: '8',
    name: 'The Puffer Jacket',
    price: 168,
    category: 'men',
    subcategory: 'outerwear',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    ],
    description: 'Recycled down puffer for maximum warmth.',
    details: ['Recycled down fill', 'Water-resistant shell', 'Zip front', 'Stand collar'],
    isNew: true,
  },
];

export const categories = [
  { name: 'Shirts', slug: 'shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80' },
  { name: 'Denim', slug: 'denim', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
  { name: 'Tees', slug: 'tees', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
  { name: 'Pants', slug: 'pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80' },
  { name: 'Sweatshirts', slug: 'sweatshirts', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80' },
  { name: 'Outerwear', slug: 'outerwear', image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.subcategory === category || p.category === category);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.isSale);
};
