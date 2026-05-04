'use client';

import { useRef } from 'react';
import { Award, BookOpen, Briefcase, Star, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const credentials = [
  { icon: Briefcase, label: 'OAB/SP 234.567', desc: 'Registro ativo na Ordem dos Advogados do Brasil' },
  { icon: BookOpen, label: 'Pós-graduação em Previdenciário', desc: 'Especialização pela PUC-SP em Direito Previdenciário' },
  { icon: Award, label: '+10 anos de experiência', desc: 'Atuando exclusivamente em causas previdenciárias' },
  { icon: Star, label: '+1.000 casos resolvidos', desc: 'Histórico comprovado de resultados para clientes' },
];

export default function AuthoritySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="advogado"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #0d1a35 0%, #0a1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute', bottom: '-15%', right: '-10%',
          width: 450, height: 450, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} 
      />
      
      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* Left: Professional Photo Presentation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', padding: '1rem' }}>
              {/* Outer Decorative Frame */}
              <div style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid rgba(212, 168, 67, 0.2)',
                borderRadius: '2rem',
                transform: 'rotate(-3deg)',
                zIndex: 0
              }} />

              {/* Main Photo Container */}
              <div className="corporate-border" style={{
                width: 300,
                height: 420,
                borderRadius: '1.75rem',
                backgroundImage: 'url("/foto.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}>
                {/* Floating Info Overlay */}
                <div style={{
                  width: '100%', padding: '2.5rem 1.5rem 1.5rem',
                  background: 'linear-gradient(0deg, rgba(4,9,26,0.98) 0%, rgba(4,9,26,0.7) 60%, transparent 100%)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginBottom: '0.25rem' }}>
                    Dr. Ricardo Oliveira
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#d4a843', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Especialista Sênior
                  </div>
                </div>
              </div>

              {/* Floating Status Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: 15 }}
                animate={isInView ? { scale: 1, rotate: 12 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                style={{
                  position: 'absolute', top: '10%', right: '-2rem',
                  background: 'linear-gradient(135deg, #f0c040, #c9a84c)',
                  color: '#04091a', borderRadius: '1rem',
                  padding: '0.75rem 1.25rem',
                  boxShadow: '0 12px 32px rgba(212,168,67,0.5)',
                  fontSize: '0.8rem', fontWeight: 900,
                  textAlign: 'center', lineHeight: 1.2,
                  zIndex: 2,
                }}
              >
                OAB/SP<br />REGULAR
              </motion.div>
            </div>

            <motion.blockquote 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                marginTop: '2.5rem',
                borderLeft: '4px solid #d4a843',
                paddingLeft: '1.5rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                fontSize: '1rem',
                maxWidth: 320
              }}
            >
              "Minha missão é garantir que a justiça seja feita para quem contribuiu a vida toda e agora precisa do Estado."
            </motion.blockquote>
          </motion.div>

          {/* Right: Corporate Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900, color: '#fff',
              lineHeight: 1.1, marginBottom: '1.5rem',
            }}>
              Domínio Técnico em <span className="gold-text">Causas Complexas</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8, fontSize: '1.15rem',
              marginBottom: '2.5rem',
            }}>
              Com mais de uma década de dedicação exclusiva ao Direito Previdenciário, o <strong>Dr. Ricardo Oliveira</strong> construiu uma reputação de excelência em Itumbiara e região. Sua abordagem combina rigor técnico e atendimento humanizado.
            </p>

            {/* Credentials list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {credentials.map(({ icon: Icon, label, desc }, i) => (
                <motion.div 
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-panel hover-lift"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1.25rem',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: '12px', flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.05))',
                    border: '1px solid rgba(212,168,67,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color="#f0c040" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>{label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>{desc}</div>
                  </div>
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
                style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}
              >
                <MessageCircle size={22} />
                AGENDAR CONSULTA COM O DOUTOR
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
