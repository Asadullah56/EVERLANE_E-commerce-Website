import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, Ruler, Leaf, ChevronDown, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ImageGallery from '@/components/product/ImageGallery';
import ProductCard from '@/components/product/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const accordionItems = [
  {
    title: 'Free Shipping & Returns',
    icon: Truck,
    content: 'Free standard shipping on orders over $75. Free returns within 30 days.',
  },
  {
    title: 'Easy Returns',
    icon: RotateCcw,
    content: 'Not quite right? Return it within 30 days for a full refund or exchange.',
  },
  {
    title: 'Size & Fit',
    icon: Ruler,
    content: 'Model is 6\'1" and wearing size M. This item has a relaxed, oversized fit.',
  },
  {
    title: 'Sustainability',
    icon: Leaf,
    content: 'Made with recycled materials. We\'re committed to reducing our environmental impact.',
  },
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/men/new-arrivals" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize || !selectedColor) return;

    setIsAdding(true);
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        color: selectedColor.name,
        size: selectedSize,
        quantity: 1,
        image: product.images[0],
      });
      setIsAdding(false);
    }, 300);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/men" className="hover:text-foreground">Men</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/men/clothing" className="hover:text-foreground">Clothing</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <ImageGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:sticky lg:top-[160px] lg:self-start"
          >
            <div className="flex items-start gap-2 mb-2">
              {product.isNew && (
                <span className="text-xs uppercase tracking-wider font-medium bg-secondary px-2 py-1">
                  New
                </span>
              )}
              {product.isSale && (
                <span className="text-xs uppercase tracking-wider font-medium bg-sale text-sale-foreground px-2 py-1">
                  Sale
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xl font-semibold ${product.isSale ? 'text-sale' : ''}`}>
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">
                Color: <span className="font-normal">{selectedColor?.name}</span>
              </h4>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor?.name === color.name
                        ? 'border-foreground scale-110'
                        : 'border-border hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">Size</h4>
                <button className="text-sm underline underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAddToBag}
              disabled={!selectedSize || isAdding}
              className={`btn-primary w-full mb-4 flex items-center justify-center gap-2 ${
                !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isAdding ? (
                <>
                  <Check className="w-5 h-5" />
                  Added!
                </>
              ) : (
                'Add to Bag'
              )}
            </button>

            {!selectedSize && (
              <p className="text-sm text-muted-foreground text-center mb-6">
                Please select a size
              </p>
            )}

            {/* Product Details */}
            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-medium mb-3">Details</h4>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-foreground rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion Sections */}
            <div className="mt-6">
              {accordionItems.map((item, index) => (
                <div key={item.title} className="border-t border-border">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                    className="w-full py-4 flex items-center justify-between text-sm font-medium"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 text-sm text-muted-foreground"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductPage;
