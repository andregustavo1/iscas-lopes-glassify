
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex-shrink-0 mr-4 text-brand-orange text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-brand-black">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const whatsappUrl = "https://wa.me/5514996279878";
  
  return (
    <section id="contato" className="section bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-sm font-medium rounded-full mb-3">
            Entre em Contato
          </span>
          <h2 className="heading-lg text-brand-black mb-4">Fale Conosco</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vamos fortalecer seu estoque com as melhores iscas!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="space-y-4">
              <ContactItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="WhatsApp"
                content={
                  <a href={whatsappUrl} className="hover:text-brand-orange transition-colors duration-300">
                    (14) 99627-9878
                  </a>
                }
                delay={0.1}
              />
              
              <ContactItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="E-mail"
                content={
                  <a href="mailto:comercial@iscaslopes.com.br" className="hover:text-brand-orange transition-colors duration-300">
                    comercial@iscaslopes.com.br
                  </a>
                }
                delay={0.2}
              />
              
              <ContactItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Localização"
                content="São Paulo, Brasil - Atendemos todo o território nacional"
                delay={0.3}
              />
              
              <ContactItem
                icon={
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                }
                title="Instagram"
                content={
                  <a href="https://instagram.com/iscaslopes" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors duration-300">
                    @iscaslopes
                  </a>
                }
                delay={0.4}
              />
            </div>
          </div>
          
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0254648900745!2d-46.63466385023837!3d-23.550739279579572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa5a0a9b41%3A0x4d52a707bed00b9e!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1sen!2sbr!4v1652275988309!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        
        <div className="bg-[#111111] text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para Revender Iscas de Alta Qualidade?</h3>
            <p className="mb-8 text-white/90">
              Aumente suas vendas e fidelize seus clientes com produtos que realmente funcionam.
            </p>
            <a href={whatsappUrl} className="btn-primary bg-white text-[#111111] hover:bg-gray-100">
              Entrar em Contato Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
