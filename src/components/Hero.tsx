import React, {useState, useEffect} from "react";
import { heroSlides } from "../Data";

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3500); 

        return () => clearInterval(interval);
    }, []);

    return (

    <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <img
          src={heroSlides[currentSlide].image}
          alt="Hero"
          className="w-full h-full object-cover transition-all transition-opacity duration-2000 opacity-100"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-2xl text-white mb-2 font-bold">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-xl text-gray-100 mb-8">
                {heroSlides[currentSlide].description}
              </p>
              
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
                  Shop Now
                  <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

    )
}

export default Hero