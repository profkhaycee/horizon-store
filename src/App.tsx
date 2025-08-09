import { useState } from 'react'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import { categories, featuredProducts, testimonials } from './Data.ts'
import ProductCard from './components/Productcard.tsx'
import Footer from './components/Footer.tsx'

import './App.css'

function App() {
  
  const [cartCountT, setCartCount] = useState<number>(0);
  
  const addToCart = () => {
    console.log('Product added to cart');
    setCartCount(prev => prev + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi ${index < Math.floor(rating) ? 'bi-star-fill text-yellow-400' : 'bi-star text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <>
      <Header cartCount={cartCountT} />
      <Hero />

      {/* Categories */}
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-2xl h-64">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className='text-lg text-white mb-2 self-end mr-3 font-semibold'>{category.title}</p>
                    <h2 className="text-4xl font-bold text-white text-center">{category.text}</h2>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              
              <ProductCard key={product.id} product={product} onAddToCart={addToCart}  />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <i className="bi bi-truck text-4xl  text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $100</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <i className="bi bi-shield text-4xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <i className="bi bi-arrow-clockwise text-4xl text-purple-600"></i> 
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy on all items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join millions of happy customers and discover your next favorite product today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
              Browse Products
              <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Sign Up for Deals
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
