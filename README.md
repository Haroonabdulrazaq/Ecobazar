# Ecobazar 🛒

A modern, responsive e-commerce platform built with React, TypeScript, and Redux Toolkit, specializing in fresh produce and organic products. Ecobazar provides a seamless shopping experience with features like product browsing, shopping cart management, and secure checkout.

## Live Link 🔗

[Ecobazar Live Site](https://ecobazar-sandy.vercel.app/)

## Screenshot 📷

![screenshot](./src/assets/images/eco-bazar.png)

## Video Demo 🎥

[Ecobazar Demo Video](https://drive.google.com/file/d/1HH_jmkdh2-cVaG99HdNd032Psd4r9LFC/view?usp=sharing)

## Features 🚀

### 🛍️ **E-commerce Functionality**

- **Product Catalog**: Browse featured products, hot deals, best sellers, and top-rated items
- **Category Navigation**: Organized product categories including vegetables, fruits, meat, fish, snacks, and beverages
- **Product Search & Filtering**: Find products by category, price range, and ratings
- **Product Details**: View product images, prices, ratings, and descriptions

### 🛒 **Shopping Cart System**

- **Add/Remove Items**: Add products to cart with quantity management
- **Cart Persistence**: Redux state management for cart items
- **Quantity Controls**: Increment/decrement product quantities
- **Real-time Updates**: Dynamic cart total calculations
- **Coupon System**: Apply discount codes (6-character alphanumeric validation)

### 💳 **Checkout & Payment**

- **Billing Information**: Comprehensive form with validation using Formik + Yup
- **Address Management**: Billing and shipping address handling
- **Payment Methods**: Multiple payment options (Cash on Delivery, PayPal, Amazon Pay)
- **Order Summary**: Real-time cart total and shipping calculations
- **Form Validation**: Client-side validation with error handling

### 🎨 **User Interface**

- **Responsive Design**: Mobile-first approach with Tailwind CSS and SCSS
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Product Carousel**: Featured product showcase with navigation
- **Testimonials**: Customer reviews and ratings display
- **Instagram Integration**: Social media feed display

### 🔧 **Technical Features**

- **State Management**: Redux Toolkit for global state management
- **Routing**: React Router for navigation between pages
- **Type Safety**: Full TypeScript implementation
- **Form Handling**: Formik with Yup validation
- **Modern React**: Built with React 19 and modern hooks
- **Performance**: Optimized rendering and lazy loading

## Set up Locally 🔧

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/haroonabdulrazaq/ecobazar.git
   cd ecobazar
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BillingForm.tsx # Checkout form with validation
│   ├── Carousel.tsx    # Product showcase carousel
│   ├── FeaturedProducts.tsx # Main product grid
│   ├── Header.tsx      # Site header with navigation
│   ├── ShoppingCart.tsx # Cart management component
│   └── ...             # Other UI components
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product listing page
│   ├── Cart.tsx        # Shopping cart page
│   └── Checkout.tsx    # Checkout process
├── state/              # Redux state management
│   ├── features/       # Feature slices
│   │   └── cart/       # Shopping cart state
│   └── store/          # Redux store configuration
├── common/             # Shared utilities
│   ├── data.ts         # Product and category data
│   ├── interface.ts    # TypeScript interfaces
│   └── validation.ts   # Form validation schemas
└── assets/             # Static assets
    ├── images/         # Product and UI images
    └── stylesheets/    # SCSS styling files
```

### Technologies Used

- **Frontend**: React 19, TypeScript, SCSS
- **State Management**: Redux Toolkit, React Redux
- **Routing**: React Router DOM
- **Forms**: Formik, Yup validation
- **Styling**: Tailwind CSS, SCSS modules
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Code Quality**: ESLint, Prettier

## Hosted on Vercel 🚀

The project is hosted on Vercel. You can access the live site at [Ecobazar](https://ecobazar-sandy.vercel.app/)

## Author 👨

👤 **Haroon Abdulrazaq**

- Github: [@Haroonabdulrazaq](https://github.com/Haroonabdulrazaq)
- Twitter: [@hanq_o](https://twitter.com/hanq_o)
- Linkedin: [linkedin](https://www.linkedin.com/in/haroonabdulrazaq)
- Portfolio: [Portfolio](https://haroonabdulrazaq.github.io/Portfolio/)

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License.
