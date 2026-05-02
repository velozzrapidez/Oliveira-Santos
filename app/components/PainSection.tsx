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
        background: 'linear-gradient(180deg, #04091a 0%, #0a1628 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)' }} />

      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left: Content */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
          }}>
            <div className="gold-divider" style={{ marginBottom: '1.25rem' }} />
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              Sabemos o quanto isso é{' '}
              <span className="gold-text">frustrante</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Você trabalhou a vida inteira, contribuiu com o INSS durante anos e, quando mais precisou, recebeu uma negativa. Não está sozinho — e existe saída.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {pains.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: `opacity 0.6s ease ${0.1 * i + 0.3}s`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Icon size={18} color="#f0c040" />
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{title}</h3>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, fontSize: '0.8rem' }}>{desc}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '3rem',
                padding: '1.5rem',
                background: 'rgba(212,168,67,0.05)',
                borderLeft: '4px solid #d4a843',
                borderRadius: '0.5rem',
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "A burocracia do INSS foi pensada para ser complexa. Mas com a orientação certa, o que parece impossível se torna um processo claro."
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(212,168,67,0.2)'
            }}>
              <img 
                src="/idososnahorta.webp" 
                alt="Idosos na horta" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(4,9,26,0.4), transparent)'
              }} />
            </div>
            
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(212,168,67,0.3)',
              borderRadius: '1rem',
              zIndex: -1
            }} />
          </div>

        </div>
      </div>
    </section>
  );
}
