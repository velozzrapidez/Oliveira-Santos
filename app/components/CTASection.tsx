'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Shield, Lock, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const guarantees = [
  { icon: Shield, label: 'Dados protegidos pela LGPD' },
  { icon: Lock, label: 'Atendimento 100% sigiloso' },
  { icon: Phone, label: 'Sem compromisso inicial' },
];

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      id="contato"
      className="section-pad"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(160deg, rgba(10, 22, 40, 0.95) 0%, rgba(15, 31, 61, 0.85) 50%, rgba(10, 22, 40, 0.98) 100%), url("/idososorrindo.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,58,138,0.3) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Gold border top */}
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
      }} />

      <div
        className="container-max"
        style={{
          padding: '0 1.5rem',
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          maxWidth: 760,
        }}
      >
        {/* Pre-headline */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(212,168,67,0.1)',
          border: '1px solid rgba(212,168,67,0.25)',
          borderRadius: '9999px',
          padding: '0.4rem 1.1rem',
          marginBottom: '1.75rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s ease',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f0c040' }} />
          <span style={{ color: '#f0c040', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Análise Gratuita · Sem Compromisso
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.15s',
          }}
        >
          Não deixe seu dinheiro{' '}
          <span className="gold-text">parado no INSS</span>
        </h2>

        {/* Sub */}
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          lineHeight: 1.75,
          maxWidth: 560,
          margin: '0 auto 2.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.3s',
        }}>
          Cada dia sem agir pode ser um dia de benefício perdido. Fale agora com um especialista e descubra o que você tem direito a receber.
        </p>

        {/* Main CTA */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 0.6s ease 0.45s',
          marginBottom: '2.5rem',
        }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn pulse-glow"
            id="final-cta-whatsapp-btn"
            style={{ fontSize: '1.15rem', padding: '1.25rem 2.75rem' }}
          >
            <MessageCircle size={24} />
            Falar com advogado agora
          </a>
        </div>

        {/* Guarantee badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s ease 0.6s',
        }}>
          {guarantees.map(({ icon: Icon, label }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '9999px',
            }}>
              <Icon size={14} color="#d4a843" />
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
