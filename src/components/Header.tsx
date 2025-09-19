import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-orange">
                    <Menu className="h-4 w-4 mr-2" />
                    All Categories
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuLabel>Shop by Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/category/electronics" className="w-full">Electronics</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Clothing</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-white">
                      <DropdownMenuItem asChild>
                        <Link to="/category/clothing-men" className="w-full">Men</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/category/clothing-women" className="w-full">Women</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/category/clothing-kids" className="w-full">Kids</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem asChild>
                    <Link to="/category/home" className="w-full">Home & Garden</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/category/sports" className="w-full">Sports & Outdoors</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/category/books" className="w-full">Books</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/category/beauty" className="w-full">Beauty & Health</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/category/automotive" className="w-full">Automotive</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex gap-6">
              <Link to="/" className="text-white hover:text-orange transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-orange transition-colors">About</Link>
              <Link to="/shop" className="text-white hover:text-orange transition-colors">Shop</Link>
              <Link to="/contact" className="text-white hover:text-orange transition-colors">Contact Us</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;