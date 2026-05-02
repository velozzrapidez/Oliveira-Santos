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
        backgroundImage: 'linear-gradient(180deg, rgba(8, 14, 30, 0.95) 0%, rgba(10, 22, 40, 0.85) 50%, rgba(10, 22, 40, 0.95) 100%), url("/filhosegurandodedodopai.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', top: '50%', right: '-15%', transform: 'translateY(-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,58,138,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2.5rem', alignItems: 'center' }}>

          {/* Left: Text */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
          }}>
            <div className="gold-divider" style={{ marginBottom: '1.25rem' }} />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.25, marginBottom: '1.25rem',
            }}>
              A solução que você precisava <span className="gold-text">finalmente existe</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1.5rem' }}>
              O escritório <strong style={{ color: '#fff' }}>Oliveira & Santos</strong> é especializado em destravar benefícios negados e acelerar processos previdenciários. Nossa equipe conhece cada detalhe da legislação do INSS — e usa isso a seu favor.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '2rem' }}>
              Você não precisa entender de direito. Você só precisa nos contar sua situação. A gente cuida do resto.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              id="solution-whatsapp-btn"
            >
              <MessageCircle size={20} />
              Quero minha análise gratuita
            </a>
          </div>

          {/* Right: Stats + Differentials */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem',
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{
                  background: 'rgba(212,168,67,0.08)',
                  border: '1px solid rgba(212,168,67,0.2)',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2rem', fontWeight: 900,
                    color: '#f0c040', lineHeight: 1,
                    marginBottom: '0.375rem',
                  }}>{value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {differentials.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.875rem',
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                    background: 'rgba(212,168,67,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#f0c040" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
