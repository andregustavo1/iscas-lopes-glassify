
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5514996279878";
  
  return (
    <div id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-brand-black/80 to-brand-black/40 z-10"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/fisherman-s-hand-with-fresh-caught-fish_23-2147894204.jpg?t=st=1742908552~exp=1742912152~hmac=f78db1ba25c8561b3c6db642d4ab52740ab66f08709691a5583d22b4498afedf&w=996')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 to-brand-black/50  z-20" />
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
            <a href={whatsappUrl} className="btn-primary">
              Contate-nos Via WhatsApp
            </a>
            <a href={whatsappUrl} className="px-6 py-3 text-white hover:text-brand-orange transition-colors duration-300 flex items-center">
              <span>Fale Conosco</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>


    </div>
  );
};

export default Hero;
