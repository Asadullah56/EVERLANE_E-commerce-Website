import { motion } from 'framer-motion';
import CategoryCard from '@/components/product/CategoryCard';
import PromoCard from '@/components/home/PromoCard';
import Hero from '@/components/home/Hero';
import Layout from '@/components/layout/Layout';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const promoCards = [
  {
    title: 'New Arrivals',
    buttonText: 'Shop',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&q=80',
    link: '/men/new-arrivals',
  },
  {
    title: 'Best-Sellers',
    buttonText: 'Shop Your Favorites',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    link: '/best-sellers',
  },
  {
    title: 'The Holiday Outfit',
    buttonText: 'Shop',
    image: 'https://images.unsplash.com/photo-1512353087810-25dfcd100962?w=800&q=80',
    link: '/men/new-arrivals',
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Shop by Category */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-10"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} {...category} index={index} />
          ))}
        </div>
      </section>

      {/* Promo Cards */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {promoCards.map((promo, index) => (
            <PromoCard key={promo.title} {...promo} index={index} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <a
            href="/men/new-arrivals"
            className="text-sm uppercase tracking-wider font-medium hover:underline underline-offset-4"
          >
            View All
          </a>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
            <p className="text-muted-foreground mb-6">
              Sign up for exclusive access to new arrivals, promotions, and more.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
