
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/5514996279878";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? 'glass-dark shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <div className="text-2xl font-bold text-white">
            <span className="text-brand-orange">Iscas</span> Lopes
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Sobre', 'Produtos', 'Por que escolher', 'Contato'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className={`font-medium transition-colors duration-300 hover:text-brand-orange ${
                scrolled ? 'text-white' : 'text-white'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href={whatsappUrl}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="btn-primary text-sm"
        >
          Contate-nos
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
