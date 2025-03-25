
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-brand-black/80 to-brand-black/40 z-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581094488858-2587e6d6e45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-30 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            <span className="inline-block px-3 py-1 bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-sm font-medium rounded-full mb-3">
              Qualidade Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl text-white mb-6 text-shadow-lg"
          >
            Iscas Artificiais Feitas com <span className="text-brand-orange">Precisão</span> e Paixão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Fabricação especializada para lojistas e pescadores profissionais que buscam produtos de alta performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="btn-primary">
              Conheça Nossos Produtos
            </button>
            <button className="px-6 py-3 text-white hover:text-brand-orange transition-colors duration-300 flex items-center">
              <span>Saiba mais</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"
      />
    </div>
  );
};

export default Hero;
