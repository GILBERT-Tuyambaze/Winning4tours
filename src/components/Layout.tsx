import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Explore Tours', href: '/explore-tours' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white/95 dark:bg-gray-900  flex items-center justify-center">
                <img src="logo.png"/>
              </div>
              <div className="text-2xl font-bold text-safari-green dark:text-warm-sand">
                Winning4Tours
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-safari-green dark:hover:text-warm-sand ${
                    location.pathname === item.href
                      ? 'text-safari-green dark:text-warm-sand'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-warm-sand" />
                ) : (
                  <Moon className="h-4 w-4 text-safari-green" />
                )}
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-warm-sand" />
                ) : (
                  <Moon className="h-4 w-4 text-safari-green" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-safari-green dark:hover:text-warm-sand ${
                      location.pathname === item.href
                        ? 'text-safari-green dark:text-warm-sand'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-safari-green dark:bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-warm-sand mb-4">Winning4Tours
                <div className="w-12 h-12  flex items-center justify-center">
                 <img src="logo.png" alt="Winning4Tours logo" />
              </div>
              </h3>
              <p className="text-gray-300 mb-4">
                East Africa, Beyond the Ordinary. Experience unforgettable adventures 
                with our expertly crafted tours.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-warm-sand mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: winning4tours@gmail.com</p>
                <p>Phone: +250 732 288 858</p>
                <p>Address: Kigali – Rwanda</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-warm-sand mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <Link 
                  to="/destinations" 
                  className="block text-gray-300 hover:text-warm-sand transition-colors"
                >
                  Destinations
                </Link>
                <Link 
                  to="/explore-tours" 
                  className="block text-gray-300 hover:text-warm-sand transition-colors"
                >
                  Explore Tours
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-gray-300 hover:text-warm-sand transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/terms-and-conditions" 
                  className="block text-gray-300 hover:text-warm-sand transition-colors"
                >
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Winning4Tours. All rights reserved. || <a href="https://tuyambaze-gilbert.vercel.app" className="text-gray-300 hover:text-orange-500" target="_blank" rel="noopener noreferrer">developed by Gilbert TUYAMBAZE, click here to visit me too </a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}