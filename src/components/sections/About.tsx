
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Image, Clock, Users } from 'lucide-react';

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="text-brand-orange mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

const About = () => {
  const benefits = [
    {
      icon: <Shield size={36} />,
      title: "Materiais Premium",
      description: "Utilizamos apenas componentes de alta qualidade para garantir durabilidade e performance.",
    },
    {
      icon: <Image size={36} />,
      title: "Designs Exclusivos",
      description: "Criamos padrões únicos e atrativos que se destacam na água e atraem os peixes.",
    },
    {
      icon: <Clock size={36} />,
      title: "Durabilidade Comprovada",
      description: "Nossas iscas são projetadas para resistir ao uso intensivo e múltiplas capturas.",
    },
    {
      icon: <Users size={36} />,
      title: "Atendimento Personalizado",
      description: "Oferecemos suporte dedicado para lojistas, com condições comerciais atrativas.",
    },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1484506269679-8d378ca825b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mixBlendMode: 'soft-light'
      }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-3">
                Nossa História
              </span>
              <h2 className="heading-lg text-white mb-6">Sobre a Iscas Lopes</h2>
              <p className="text-white/90 mb-6 text-lg">
                Especializada na fabricação de iscas artificiais de alta performance, a Iscas Lopes une tradição e inovação para atender lojistas e pescadores exigentes. Nossos produtos são desenvolvidos com materiais duráveis e designs testados em campo, garantindo resultados superiores em qualquer tipo de pesca.
              </p>
              <p className="text-white/90 mb-8">
                Com anos de experiência no mercado, entendemos as necessidades específicas de quem vive da pesca, seja profissional ou esportiva. Nossa equipe desenvolve cada produto pensando na eficiência e na praticidade que os pescadores buscam em suas jornadas.
              </p>
              <button className="btn-primary">
                Conheça Nossa História
              </button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AboutCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
