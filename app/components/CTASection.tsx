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
        background: 'linear-gradient(160deg, #04091a 0%, #0f1f3d 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Gold border top */}
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left: Content */}
          <div style={{
            textAlign: 'left',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
          }}>
            {/* Pre-headline */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(212,168,67,0.1)',
              border: '1px solid rgba(212,168,67,0.25)',
              borderRadius: '9999px',
              padding: '0.4rem 1.1rem',
              marginBottom: '1.75rem',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f0c040' }} />
              <span style={{ color: '#f0c040', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Análise Gratuita · Sem Compromisso
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Não deixe seu dinheiro{' '}
              <span className="gold-text">parado no INSS</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              Cada dia sem agir pode ser um dia de benefício perdido. Fale agora com um especialista e descubra o que você tem direito a receber.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn pulse-glow"
              id="final-cta-whatsapp-btn"
              style={{ fontSize: '1.15rem', padding: '1.25rem 2.5rem', width: 'fit-content' }}
            >
              <MessageCircle size={24} />
              Falar com advogado agora
            </a>

            {/* Guarantee badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '2.5rem',
            }}>
              {guarantees.map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <Icon size={14} color="#d4a843" />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              border: '2px solid rgba(212,168,67,0.25)'
            }}>
              <img 
                src="/idososorrindo.webp" 
                alt="Idoso sorrindo" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(4,9,26,0.5), transparent)'
              }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
