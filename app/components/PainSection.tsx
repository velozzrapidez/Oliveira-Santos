'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock, FileX, HelpCircle } from 'lucide-react';

const pains = [
  {
    icon: FileX,
    title: 'Benefício negado sem explicação',
    desc: 'O INSS manda uma carta técnica que ninguém entende, e você fica sem saber o que fazer.',
  },
  {
    icon: Clock,
    title: 'Meses de espera sem resposta',
    desc: 'Você aguarda em filas intermináveis, liga repetidamente e não consegue resolver nada.',
  },
  {
    icon: AlertTriangle,
    title: 'Medo de perder o prazo',
    desc: 'Existe um prazo para recorrer. Deixar passar pode significar perder o direito ao benefício.',
  },
  {
    icon: HelpCircle,
    title: 'Não sabe por onde começar',
    desc: 'O processo previdenciário é complexo. Sem orientação especializada, é quase impossível avançar.',
  },
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

export default function PainSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      id="problema"
      className="section-pad"
      style={{ 
        backgroundImage: 'linear-gradient(180deg, rgba(4, 9, 26, 0.98) 0%, rgba(8, 14, 30, 0.85) 50%, rgba(4, 9, 26, 0.98) 100%), url("/idososnahorta.webp")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative' 
      }}
    >
      {/* Top border accent */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)' }} />

      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Sabemos o quanto isso é{' '}
            <span className="gold-text">frustrante</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Você trabalhou a vida inteira, contribuiu com o INSS durante anos e, quando mais precisou, recebeu uma negativa. Não está sozinho — e existe saída.
          </p>
        </div>

        {/* Pain cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {pains.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass-card"
              style={{
                padding: '1.75rem',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `all 0.6s ease ${0.1 * i + 0.2}s`,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'rgba(212,168,67,0.1)',
                  border: '1px solid rgba(212,168,67,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Icon size={22} color="#f0c040" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.625rem' }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontSize: '0.9rem' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom empathy quote */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            background: 'rgba(212,168,67,0.06)',
            border: '1px solid rgba(212,168,67,0.2)',
            borderLeft: '4px solid #d4a843',
            borderRadius: '1rem',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.6s',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontSize: '1rem', fontStyle: 'italic' }}>
            "A burocracia do INSS foi pensada para ser complexa. Mas com a orientação certa, o que parece impossível se torna um processo claro e direto."
          </p>
          <p style={{ marginTop: '0.75rem', color: '#d4a843', fontWeight: 600, fontSize: '0.875rem' }}>
            — Dr. Ricardo Oliveira, Advogado Previdenciário
          </p>
        </div>
      </div>
    </section>
  );
}
