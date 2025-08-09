
//Create Interfaces to be used in the application

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}


// create my dummy data

  export const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Beautiful Fitted Cap",
      price: 19900.99,
      originalPrice: 24900.99,
      image: "./images/nice-cap.jpg",
      
    },
    {
      id: 2,
      name: "Stylish Handbag",
      price: 29900.99,
      image: "./images/nice-bag.jpg",
      
    },
    {
      id: 3,
      name: "Knitted Sweatshirt",
      price: 8900.99,
      originalPrice: 11900.99,
      image: "images/nice-sweater.jpg",
      
    },
    {
      id: 4,
      name: "Premium Sneakers",
      price: 17900,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      
    }
  ];

  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Stephen Kelechi",
      rating: 5,
      comment: "Amazing products and lightning-fast delivery! The quality exceeded my expectations.",
      avatar: "images/khaycee.jpeg"
    },
    {
      id: 2,
      name: "Michael Owen",
      rating: 5,
      comment: "Best shopping experience I've had online. Customer service is top-notch!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amy Gracious",
      rating: 4,
      comment: "Great variety of products and competitive prices. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

 export const categories = [
    {
        id: 1,
        title: "Don't miss Today", 
        text: "50% OFF",
        image: "./images/cat-img-1.jpg",
        color: "from-blue-500 to-purple-600" 
    },
    {
        id: 2,
        title: "New Collection", 
        text: "Need Now",
        image: "./images/cat-img-2.jpg",
        color: "from-blue-500 to-purple-600" 
    },
    {
        id: 3,
        title: "Your Looks", 
        text: "Must Haves",
        image: "./images/cat-img-3.jpg",
        color: "from-blue-500 to-purple-600" 
    },
    {
        id: 4,
        title: "Take 20% OFF", 
        text: "Summer Sales",
        image: "./images/cat-img-4.jpg",
        color: "from-blue-500 to-purple-600" 
    },
    
  ];

export const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      description: "Up to 50% off on selected items",
      image: "./images/slider-img-1.jpg"
    },
    {
      title: "Limited Offer This Week",
      subtitle: "Innovation meets style",
      description: "Free shipping on orders over $100",
      image: "./images/slider-img-2.jpg"
    }
  ];
