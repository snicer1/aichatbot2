import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
const Navbar = React.lazy(() => import('./components/layout/Navbar'));
const Footer = React.lazy(() => import('./components/layout/Footer'));
const ChatbotWidget = React.lazy(() => import('./components/layout/ChatbotWidget'));

// Page Components
const Home = React.lazy(() => import('./components/pages/Home'));
const Services = React.lazy(() => import('./components/pages/Services'));
const HowItWorks = React.lazy(() => import('./components/pages/HowItWorks'));
const Blog = React.lazy(() => import('./components/pages/Blog'));
const Contact = React.lazy(() => import('./components/pages/Contact'));

// Loading Component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <motion.div
      animate={{
        rotate: 360,
        borderRadius: ["25%", "25%", "50%", "50%", "25%"],
      }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        width: '50px',
        height: '50px',
        border: `4px solid var(--primary-color)`,
        borderTopColor: 'transparent',
        margin: '20% auto',
      }}
    />
  </div>
);

function App() {
  return (
    <div className="app">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ChatbotWidget />
      </Suspense>
    </div>
  );
}

export default App;