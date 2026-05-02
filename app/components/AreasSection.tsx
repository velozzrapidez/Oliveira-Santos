'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Users, RefreshCw, HeartPulse, Accessibility, Baby, MessageCircle,
} from 'lucide-react';

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

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function AreasSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

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
        <div style={{
          textAlign: 'center', marginBottom: '3.5rem',
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease',
        }}>
          <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700, color: '#fff', marginBottom: '1rem',
          }}>
            Áreas de <span className="gold-text">Atuação</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Atuamos em todas as principais áreas do Direito Previdenciário. Se o seu caso não está na lista, fale conosco — provavelmente também podemos ajudar.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {areas.map(({ icon: Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="glass-card"
              style={{
                padding: '2rem 1.75rem',
                position: 'relative',
                overflow: 'hidden',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `all 0.6s ease ${0.08 * i + 0.2}s`,
              }}
            >
              {/* Tag */}
              {tag && (
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(212,168,67,0.15)',
                  border: '1px solid rgba(212,168,67,0.35)',
                  borderRadius: '9999px',
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.7rem', fontWeight: 600,
                  color: '#f0c040', letterSpacing: '0.04em',
                }}>
                  {tag}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(212,168,67,0.05))',
                border: '1px solid rgba(212,168,67,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <Icon size={24} color="#f0c040" />
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: '1.1rem',
                color: '#fff', marginBottom: '0.625rem',
              }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, fontSize: '0.88rem' }}>{desc}</p>

              {/* Bottom CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                  marginTop: '1.25rem', color: '#d4a843',
                  fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '0.6rem')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '0.375rem')}
              >
                <MessageCircle size={14} />
                Verificar meu direito →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
