
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ 
  title, 
  description, 
  imageSrc, 
  index 
}: { 
  title: string; 
  description: string; 
  imageSrc: string; 
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-brand-black">{title}</h3>
          <p className="text-gray-600 mb-4 flex-1">{description}</p>
          <button className="text-brand-green font-medium group-hover:text-brand-orange transition-colors duration-300 inline-flex items-center mt-auto">
            Ver detalhes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Iscas de Superfície",
      description: "Modelos flutuantes ideais para água doce, perfeitos para pescarias matutinas e noturnas.",
      imageSrc: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Iscas de Meia Água",
      description: "Ação intermediária versátil para diversas espécies, com movimento realista e cores atrativas.",
      imageSrc: "https://images.unsplash.com/photo-1596442828814-1227dd9bbcd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Iscas de Fundo",
      description: "Modelos pesados para águas profundas, projetados para alcançar peixes em zonas de difícil acesso.",
      imageSrc: "https://images.unsplash.com/photo-1516178151160-2a42e646f274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Kits Personalizados",
      description: "Combinações estratégicas para diferentes espécies e ambientes, perfeitas para revenda.",
      imageSrc: "https://images.unsplash.com/photo-1632911643511-53c991881118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section id="produtos" className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-sm font-medium rounded-full mb-3">
            Catálogo
          </span>
          <h2 className="heading-lg text-brand-black mb-4">Linha Completa para Revenda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Produtos desenvolvidos para maximizar as capturas e a satisfação dos seus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
