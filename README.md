Amazon Clone
A full-featured Amazon clone built with React, Tailwind CSS, and Firebase. This project replicates the core functionality of Amazon's e-commerce platform with modern UI/UX design.

🚀 Features
🔐 Authentication
User registration and login with Firebase Authentication
Secure password management
Persistent user sessions

🛍️ E-commerce Features
Product browsing by categories
Product search functionality
Shopping cart with quantity management
Add/remove items from cart
Increment/decrement item quantities
Real-time cart total calculation

🎨 UI/UX
Responsive design for all screen sizes
Amazon-like color scheme and styling
Smooth animations and transitions
Modern card-based product display
Clean and intuitive navigation

📦 Product Management
Display products from FakeStore API
Product details with images, ratings, and descriptions
Category-based filtering
Price display with currency formatting

🛠️ Tech Stack
Frontend Framework: React 18
Styling: Tailwind CSS
Authentication: Firebase Auth
Database: Firebase Firestore
Routing: React Router DOM

UI Components:
Material-UI (Rating components)
Lucide React (Icons)
HTTP Client: Axios
Carousel: react-responsive-carousel
State Management: React Context API + useReducer


🚀 Getting Started
Prerequisites
Node.js (v14 or higher)
npm or yarn
Firebase account

Installation
Clone the repository:
git clone https://github.com/belema7/amazon-clone.git
cd amazon-clone

Install dependencies:
npm install
# or
yarn install

Set up Firebase:
Create a new Firebase project
Enable Authentication and Firestore
Copy your Firebase config
Create firebase.js in src directory with your config

Start the development server:
npm start
# or
yarn start
Open http://localhost:3000 in your browser.

🔧 Configuration
Firebase Setup
Create a firebase.js file in the src directory:
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

📱 Features in Detail
Shopping Cart
Add/remove products
Adjust quantities with increment/decrement buttons
Real-time total calculation
Persistent cart state
Delete individual items
Product Display
Grid and flex layouts
Product ratings with stars
Price formatting
Product descriptions
Category filtering

User Interface
Responsive header with navigation
Hero carousel with images
Category cards with hover effects
Mobile-friendly design
Amazon-like color scheme

🎯 Future Enhancements
Payment integration (Stripe/PayPal)
User order history
Product reviews system
Wishlist functionality
Admin dashboard
Product search with filters
Order tracking
Email notifications
Social login (Google, Facebook)

Product recommendations
🤝 Contributing
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request


👏 Acknowledgments
FakeStore API for product data
Firebase for backend services
Tailwind CSS for styling
React for the frontend framework

📞 Contact
Your Name - @belemagr - belemagirma31@gmail.com

Project Link: https://github.com/belema7/amazon-clone

Made by [Belema]