'use client';

import { useRef } from 'react';
import { TrendingUp, Users, Globe, Zap, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const stats = [
  { value: '+1.000', label: 'Clientes Atendidos' },
  { value: '10+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Taxa de Aprovação' },
  { value: '48h', label: 'Resposta Média' },
];

const differentials = [
  { icon: Zap, title: 'Resposta rápida', desc: 'Atendimento via WhatsApp em até 2 horas' },
  { icon: Globe, title: 'Atuação 100% digital', desc: 'Resolva tudo sem sair de casa' },
  { icon: Users, title: 'Linguagem simples', desc: 'Sem juridiquês. Você entende cada passo' },
  { icon: TrendingUp, title: 'Resultado comprovado', desc: 'Mais de mil casos resolvidos com sucesso' },
];

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="solucao"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #0d1a35 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orb */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        style={{
          position: 'absolute', top: '50%', right: '-15%', transform: 'translateY(-50%)',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} 
      />

      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))', 
          gap: '4rem', 
          alignItems: 'start' 
        }}>

          {/* Left Side: Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900, color: '#fff',
              lineHeight: 1.2, marginBottom: '1.5rem',
            }}>
              A solução definitiva para o seu <span className="gold-text">benefício travado</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
              No escritório <strong style={{ color: '#fff' }}>Oliveira & Santos</strong>, transformamos processos complexos em vitórias reais. Nossa metodologia foca na agilidade e transparência total com o cliente.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{ 
                background: 'rgba(212,168,67,0.1)', 
                padding: '1.5rem', 
                borderRadius: '1.25rem', 
                border: '1px solid rgba(212,168,67,0.3)',
                marginBottom: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: '#f0c040', color: '#04091a', fontWeight: 900, fontSize: '0.7rem', borderBottomLeftRadius: '1rem', textTransform: 'uppercase' }}>
                Exclusivo
              </div>
              <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>
                <span style={{ color: '#f0c040' }}>BÔNUS DE HOJE:</span> Análise técnica gratuita do seu caso para os primeiros 10 contatos. Garanta sua vaga agora.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2.5rem',
            }}>
              {stats.map(({ value, label }, i) => (
                <motion.div 
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-panel hover-glow"
                  style={{
                    borderRadius: '1.25rem',
                    padding: '1.25rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem', fontWeight: 900,
                    color: '#f0c040', lineHeight: 1.1,
                    marginBottom: '0.4rem',
                  }}>{value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn pulse-glow"
                style={{ width: 'fit-content', padding: '1.25rem 2.5rem' }}
              >
                <MessageCircle size={22} />
                QUERO MINHA ANÁLISE AGORA
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Image & Differentials */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Featured Image with Reveal Effect */}
            <div style={{
              position: 'relative',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
              border: '2px solid rgba(212,168,67,0.1)'
            }}>
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/filhosegurandodedodopai.webp" 
                alt="Pai e filho" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.4), transparent)'
              }} />
            </div>

            {/* Differentials */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              {differentials.map(({ icon: Icon, title, desc }, i) => (
                <motion.div 
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '1.25rem',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.05))',
                    border: '1px solid rgba(212,168,67,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon size={20} color="#f0c040" />
                  </div>
                  <h3 style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
