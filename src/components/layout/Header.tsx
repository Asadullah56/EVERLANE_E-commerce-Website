import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import AnnouncementBar from './AnnouncementBar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mainNavLinks = [
  { name: 'Women', href: '/women' },
  { name: 'Men', href: '/men' },
  { name: 'About', href: '/about' },
  { name: 'Everworld Stories', href: '/stories' },
];

const subNavLinks = [
  { name: 'Holiday Gifting', href: '/gifts' },
  { name: 'New Arrivals', href: '/men/new-arrivals' },
  { name: 'Best-Sellers', href: '/best-sellers' },
  { name: 'Clothing', href: '/men/clothing' },
  { name: 'Tops & Sweaters', href: '/men/sweaters' },
  { name: 'Pants & Jeans', href: '/men/pants' },
  { name: 'Outerwear', href: '/men/outerwear' },
  { name: 'Shoes & Bags', href: '/shoes' },
  { name: 'Sale', href: '/sale', isSale: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'hsl(0 0% 100% / 0.98)' : 'hsl(0 0% 100%)',
          boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        }}
        className="bg-background"
      >
        {/* Main Nav */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Nav - Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainNavLinks.map((link) => (
                <Link key={link.name} to={link.href} className="nav-link">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-[0.2em] uppercase"
            >
              EVERLANE
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>

              {/* Account Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="p-2 hover:opacity-70 transition-opacity hidden sm:block"
                    aria-label="Account"
                  >
                    <User className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {user ? (
                    <>
                      <DropdownMenuItem disabled className="text-xs text-muted-foreground">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem onClick={() => navigate('/auth')}>
                      Sign In / Create Account
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={toggleCart}
                className="p-2 hover:opacity-70 transition-opacity relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-foreground text-background text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Sub Nav - Desktop */}
        <nav className="hidden lg:block border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8 py-3">
              {subNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase tracking-wider font-medium transition-colors hover:opacity-70 ${
                    link.isSale ? 'text-sale' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm uppercase tracking-wider font-medium py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-border pt-4 mt-2">
                  {subNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block text-sm tracking-wide py-2 ${
                        link.isSale ? 'text-sale font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                {/* Mobile Auth Link */}
                <div className="border-t border-border pt-4 mt-2">
                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium py-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  ) : (
                    <Link
                      to="/auth"
                      className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium py-2"
                    >
                      <User className="w-4 h-4" />
                      Sign In / Create Account
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
