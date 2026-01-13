import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PromoCardProps {
  title: string;
  buttonText: string;
  image: string;
  link: string;
  bgColor?: string;
  index?: number;
}

const PromoCard = ({ title, buttonText, image, link, index = 0 }: PromoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link} className="block group">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-background p-4 inline-block">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">{title}</h3>
              <span className="text-xs uppercase tracking-wider underline underline-offset-4">
                {buttonText}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default PromoCard;
