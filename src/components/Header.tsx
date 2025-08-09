import React from "react";

interface HeaderProps {
  cartCount: number;
}
const Header: React.FC<HeaderProps> = ({cartCount}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
  <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex justify-between items-center space-x-8">
          <div className="flex items-center">
            <img src="/images/horizon-logo.png" className="logo-main" />
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-sky-700 bg-clip-text text-transparent mr-auto">
              <span>Horizon Store </span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
        </nav>

        <div className="flex items-center space-x-4">
          <i className="bi bi-person text-xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"></i>
          <div className="relative">
            <i className="bi bi-cart text-xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"></i>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <i className="bi bi-x text-2xl text-blue-600"></i>
            ) : (
              <i className="bi bi-list text-2xl text-blue-600"></i>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
        <nav className="space-y-2">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About Us</a>
        </nav>
      </div>
    )}
  </header>
);

}

export default Header;