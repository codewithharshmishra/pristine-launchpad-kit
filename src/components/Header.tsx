import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b border-white/10">
          <div className="text-sm">
            <span className="text-secondary-foreground">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/contact" className="hover:text-orange cursor-pointer">Customer Service</Link>
            <Link to="/track-order" className="hover:text-orange cursor-pointer">Track Your Order</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-white">
              E<span className="text-orange">Store</span>
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-2 bg-white text-gray-900 border-0 rounded-lg"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 bg-orange hover:bg-orange/90 text-white px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-orange">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" className="text-white hover:text-orange relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/10 py-3">
          <div className="flex items-center gap-8">
            <Link to="/shop">
              <Button variant="ghost" className="text-white hover:text-orange">
                <Menu className="h-4 w-4 mr-2" />
                All Categories
              </Button>
            </Link>
            <div className="flex gap-6">
              <Link to="/category/electronics" className="text-white hover:text-orange transition-colors">Electronics</Link>
              <Link to="/category/fashion" className="text-white hover:text-orange transition-colors">Fashion</Link>
              <Link to="/category/home" className="text-white hover:text-orange transition-colors">Home</Link>
              <Link to="/category/sports" className="text-white hover:text-orange transition-colors">Sports</Link>
              <Link to="/category/books" className="text-white hover:text-orange transition-colors">Books</Link>
              <Link to="/deals" className="text-white hover:text-orange transition-colors">Deals</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;