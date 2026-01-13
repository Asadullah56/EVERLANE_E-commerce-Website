import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
  index?: number;
}

const CategoryCard = ({ name, slug, image, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/men/${slug}`} className="category-card group block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-square overflow-hidden"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="category-overlay" />
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-background text-sm font-medium uppercase tracking-wider">
              {name}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
