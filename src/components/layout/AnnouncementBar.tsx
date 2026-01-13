import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-foreground text-background py-2.5 px-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1" />
        <a
          href="#"
          className="flex items-center gap-1 text-xs tracking-wide hover:opacity-80 transition-opacity"
        >
          Get early access on launches and offers. Sign Up For Texts
          <ChevronRight className="w-3 h-3" />
        </a>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="US"
                className="w-4 h-3 object-cover"
              />
              USD
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
