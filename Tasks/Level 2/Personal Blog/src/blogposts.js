import reactImage from './assets/react.png'
import asiaImage from './assets/hidden-gems-asia.png'
import pizzaImage from './assets/pizza.png'
import typescriptImage from './assets/typescript.png'
import parisImage from './assets/paris.png'
import dietImage from './assets/diet.png'
import apiNodeImage from './assets/api-node.png'
import hikingImage from './assets/hiking.png'

const blogPosts =  [
    {
      id: 1,
      title: "Getting Started with React Development",
      description: "Learn the fundamentals of React and build your first component. This comprehensive guide covers everything from JSX to state management.",
      image: reactImage,
      date: "2025-01-15",
      category: "Tech"
    },
    {
      id: 2,
      title: "Exploring the Hidden Gems of Southeast Asia",
      description: "Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in Thailand, Vietnam, and Cambodia.",
      image: asiaImage,
      date: "2025-01-10",
      category: "Travel"
    },
    {
      id: 3,
      title: "The Art of Homemade Pizza Making",
      description: "Master the perfect pizza dough, sauce, and toppings. From traditional Margherita to creative gourmet combinations.",
      image: pizzaImage,
      date: "2025-01-08",
      category: "Food"
    },
    {
      id: 4,
      title: "Modern Web Development with TypeScript",
      description: "Enhance your JavaScript projects with TypeScript's type safety and modern development features.",
      image: typescriptImage,
      date: "2025-01-05",
      category: "Tech"
    },
    {
      id: 5,
      title: "A Weekend in Paris: Culture and Cuisine",
      description: "Experience the magic of Paris through its iconic landmarks, world-class museums, and exquisite French cuisine.",
      image: parisImage,
      date: "2025-01-03",
      category: "Travel"
    },
    {
      id: 6,
      title: "Healthy Mediterranean Diet Recipes",
      description: "Explore nutritious and delicious Mediterranean dishes that promote heart health and longevity.",
      image: dietImage,
      date: "2025-01-01",
      category: "Food"
    },
    {
      id: 7,
      title: "Building Scalable APIs with Node.js",
      description: "Learn to create robust and scalable REST APIs using Node.js, Express, and MongoDB.",
      image: apiNodeImage,
      date: "2024-12-28",
      category: "Tech"
    },
    {
      id: 8,
      title: "Hiking the Swiss Alps: A Complete Guide",
      description: "Plan your perfect hiking adventure in the Swiss Alps with detailed trail information and stunning photography.",
      image: hikingImage,
      date: "2024-12-25",
      category: "Travel"
    }
]

export default blogPosts