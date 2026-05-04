'use client';

import { useRef } from 'react';
import {
  Users, RefreshCw, HeartPulse, Accessibility, Baby, MessageCircle,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const areas = [
  {
    icon: Users,
    title: 'Aposentadoria por Idade',
    desc: 'Descubra se você já atingiu os requisitos e quanto vai receber todos os meses.',
    tag: 'Mais solicitado',
  },
  {
    icon: HeartPulse,
    title: 'Aposentadoria por Invalidez',
    desc: 'Se uma doença ou acidente impediu você de trabalhar, pode ter direito à aposentadoria.',
    tag: null,
  },
  {
    icon: RefreshCw,
    title: 'Revisão de Benefício',
    desc: 'Está recebendo menos do que deveria? Analisamos se o INSS calculou corretamente.',
    tag: 'Dinheiro de volta',
  },
  {
    icon: HeartPulse,
    title: 'Auxílio-Doença',
    desc: 'Afastado por problema de saúde? Te ajudamos a garantir o benefício enquanto se recupera.',
    tag: null,
  },
  {
    icon: Accessibility,
    title: 'BPC / LOAS',
    desc: 'Benefício para idosos e pessoas com deficiência de baixa renda. Saiba se você tem direito.',
    tag: null,
  },
  {
    icon: Baby,
    title: 'Pensão por Morte',
    desc: 'Perdeu um familiar que contribuía ao INSS? A família pode ter direito à pensão.',
    tag: null,
  },
];

export default function AreasSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="areas"
      className="section-pad"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1a35 100%)', position: 'relative' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          <div className="gold-divider" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#fff', marginBottom: '1.25rem',
          }}>
            Especialidades <span className="gold-text">Dominantes</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 650, margin: '0 auto', lineHeight: 1.8, fontSize: '1.1rem' }}>
            Nossa expertise cobre todo o espectro previdenciário, com foco em resultados práticos e na reversão de negativas administrativas e judiciais.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {areas.map(({ icon: Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Tag */}
              {tag && (
                <div style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: 'rgba(212,168,67,0.2)',
                  border: '1px solid rgba(212,168,67,0.4)',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.7rem', fontWeight: 800,
                  color: '#f0c040', letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  {tag}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.05))',
                border: '1px solid rgba(212,168,67,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Icon size={26} color="#f0c040" />
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 800, fontSize: '1.25rem',
                color: '#fff', marginBottom: '0.75rem',
              }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{desc}</p>

              {/* Bottom CTA */}
              <motion.a
                whileHover={{ x: 5 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#d4a843',
                  fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} />
                Consultar viabilidade
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
