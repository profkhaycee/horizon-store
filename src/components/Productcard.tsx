 
import { featuredProducts } from "../Data";

interface ProductCardProps{
    product: typeof featuredProducts[0],
    onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="bi bi-heart text-gray-600"></i>
                  </button>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                      Sale
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">₦{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₦{product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => onAddToCart()}
                      className="w-full mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    );
}

export default ProductCard;

