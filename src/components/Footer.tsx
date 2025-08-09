import React from "react"

const Footer: React.FC = () => {

    return(
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Horizon Store
              </h3>
              <p className="text-gray-300">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-300 mb-4">Follow us on social media for updates and exclusive offers.</p>
              
              <div className="flex space-x-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-colors">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-colors">
                  <i className="bi bi-twitter"></i>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-colors">
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2025 Horizon Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;