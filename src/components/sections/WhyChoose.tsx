
import React from 'react';
import AnimatedCard from '../ui/AnimatedCard';

const WhyChoose = () => {
  const reasons = [
    {
      title: "Produtos Testados",
      description: "Todas as nossas iscas são rigorosamente testadas por pescadores profissionais antes de chegar ao mercado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-brand-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Margem Atrativa",
      description: "Oferecemos preços competitivos para lojistas, garantindo uma margem saudável em cada venda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-brand-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Entrega Rápida",
      description: "Logística eficiente para todo o Brasil, com prazos reduzidos e rastreamento em tempo real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-brand-orange">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: "Suporte Técnico",
      description: "Assessoria completa para revendedores, com treinamentos sobre características e benefícios dos produtos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-brand-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="por-que-escolher" className="section bg-gray-50">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-[#111111]/10 text-[#111111] text-sm font-medium rounded-full mb-3">
          Diferenciais
        </span>
        <h2 className="heading-lg text-brand-black mb-4">Vantagens para Seu Negócio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Qualidade que aumenta o giro de estoque e a fidelização dos seus clientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <AnimatedCard key={index} delay={index * 100}>
            <div className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-black">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
