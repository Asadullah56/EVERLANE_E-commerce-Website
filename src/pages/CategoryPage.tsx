import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products, Product } from '@/data/products';

const filterCategories = [
  { name: 'Category', options: ['Everyday', 'Sweaters & Cardigans', 'Outerwear', 'Shirts', 'Pants'] },
  { name: 'Featured', options: ['20% off', 'New Arrivals', 'Best Sellers'] },
  { name: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
  { name: 'Material', options: ['Cotton', 'Wool', 'Denim', 'Synthetic'] },
];

const colorOptions = [
  { name: 'Black', hex: '#000000' },
  { name: 'Blue', hex: '#1B2A4A' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'Green', hex: '#228B22' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Grey', hex: '#808080' },
];

const sortOptions = [
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('newest');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<string[]>(['Category']);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c.name))
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [sortBy, selectedColors]);

  const toggleFilter = (filterName: string) => {
    setExpandedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    );
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const categoryTitle = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'All Products';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Men</span>
          <span className="mx-2">&gt;</span>
          <span>Clothing</span>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{categoryTitle}</span>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-semibold"
          >
            {categoryTitle}
          </motion.h1>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    Sort by: {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-[160px]">
              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`color-swatch ${selectedColors.includes(color.name) ? 'selected' : ''}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Filter Accordions */}
              {filterCategories.map((filter) => (
                <div key={filter.name} className="border-t border-border py-4">
                  <button
                    onClick={() => toggleFilter(filter.name)}
                    className="flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider"
                  >
                    {filter.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedFilters.includes(filter.name) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFilters.includes(filter.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2">
                          {filter.options.map((option) => (
                            <label key={option} className="filter-checkbox">
                              <input type="checkbox" className="w-4 h-4 border-border" />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {showFilters && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFilters(false)}
                className="fixed inset-0 bg-foreground/30 z-50 lg:hidden"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-background z-50 overflow-y-auto lg:hidden"
              >
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  {/* Mobile filters content */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Color</h4>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => toggleColor(color.name)}
                          className={`color-swatch ${selectedColors.includes(color.name) ? 'selected' : ''}`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                  {filterCategories.map((filter) => (
                    <div key={filter.name} className="border-t border-border py-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                        {filter.name}
                      </h4>
                      <div className="space-y-2">
                        {filter.options.map((option) => (
                          <label key={option} className="filter-checkbox">
                            <input type="checkbox" className="w-4 h-4 border-border" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-border">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="btn-primary w-full"
                  >
                    Show Results
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default CategoryPage;
