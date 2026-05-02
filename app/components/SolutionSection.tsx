'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Zap, MessageCircle } from 'lucide-react';

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

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

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
      <div style={{
        position: 'absolute', top: '50%', right: '-15%', transform: 'translateY(-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', 
          gap: '3rem', 
          alignItems: 'start' 
        }}>

          {/* Left Side: Content & Stats */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
          }}>
            <div className="gold-divider" style={{ marginBottom: '1.25rem' }} />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.2, marginBottom: '1.5rem',
            }}>
              A solução que você precisava <span className="gold-text">finalmente existe</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              O escritório <strong style={{ color: '#fff' }}>Oliveira & Santos</strong> é especializado em destravar benefícios negados e acelerar processos previdenciários.
            </p>

            <div style={{ 
              background: 'rgba(212,168,67,0.1)', 
              padding: '1.25rem', 
              borderRadius: '1rem', 
              border: '1px dashed rgba(212,168,67,0.4)',
              marginBottom: '2rem'
            }}>
              <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>
                🎁 <span style={{ color: '#f0c040' }}>OFERTA LIMITADA:</span> A análise inicial do seu caso, que normalmente custaria <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>R$ 150,00</span>, será 100% GRATUITA para quem entrar em contato agora.
              </p>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem',
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '1rem',
                  padding: '1rem',
                }}>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.6rem', fontWeight: 900,
                    color: '#f0c040', lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}>{value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn pulse-glow"
              id="solution-whatsapp-btn"
              style={{ width: 'fit-content' }}
            >
              <MessageCircle size={20} />
              GARANTIR MINHA CONSULTA GRATUITA
            </a>
          </div>

          {/* Right Side: Image & Differentials */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            {/* Featured Image */}
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              marginBottom: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid rgba(212,168,67,0.2)'
            }}>
              <img 
                src="/filhosegurandodedodopai.webp" 
                alt="Pai e filho" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,26,53,0.3), transparent)'
              }} />
            </div>

            {/* Differentials */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {differentials.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} style={{
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '1rem',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '8px',
                    background: 'rgba(212,168,67,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <Icon size={18} color="#f0c040" />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: 1.4 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
