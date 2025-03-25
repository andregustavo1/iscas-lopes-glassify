
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyChoose from '../components/sections/WhyChoose';
import Products from '../components/sections/Products';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
