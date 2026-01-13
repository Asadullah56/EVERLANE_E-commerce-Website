import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="product-card group"
    >
      <Link to={`/product/${product.id}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="product-image relative"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-background text-foreground text-[10px] uppercase tracking-wider font-medium px-2 py-1">
              New
            </span>
          )}
          {product.isSale && (
            <span className="absolute top-3 right-3 bg-sale text-sale-foreground text-[10px] uppercase tracking-wider font-medium px-2 py-1">
              Sale
            </span>
          )}
        </motion.div>

        <div className="mt-3">
          <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-sm font-medium ${product.isSale ? 'text-sale' : ''}`}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className="w-3.5 h-3.5 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
