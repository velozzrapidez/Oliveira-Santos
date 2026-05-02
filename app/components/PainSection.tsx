'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock, FileX, HelpCircle, CheckCircle2, MessageCircle } from 'lucide-react';
const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%21+Vim+pela+se%C3%A7%C3%A3o+de+identifica%C3%A7%C3%A3o+do+site.';

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
                fontWeight: 800,
                color: '#fff',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              Você está passando por <span className="gold-text">alguma dessas situações?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Se você se identifica com um dos pontos abaixo, você está perdendo tempo e dinheiro precioso todos os meses.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {[
                'Teve o benefício negado pelo INSS recentemente',
                'Está esperando resposta há meses e nada acontece',
                'Não sabe se já tem idade ou tempo para se aposentar',
                'Acha que o valor que recebe hoje está errado (Revisão)',
                'Precisa de auxílio-doença ou BPC/LOAS urgente'
              ].map((item, i) => (
                <div 
                  key={i}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '1rem', 
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `all 0.5s ease ${0.1 * i + 0.3}s`
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={14} color="#f0c040" />
                  </div>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: 'rgba(212,168,67,0.05)',
                borderLeft: '4px solid #d4a843',
                borderRadius: '0.5rem',
                marginBottom: '2rem'
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "O erro da maioria é achar que o INSS vai resolver sozinho. Sem pressão técnica, seu caso fica parado no fundo da pilha."
              </p>
              <p style={{ marginTop: '0.5rem', color: '#d4a843', fontWeight: 700, fontSize: '0.8rem' }}>
                — DR. RICARDO OLIVEIRA (OAB/GO)
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn pulse-glow"
              style={{ width: 'fit-content' }}
            >
              <MessageCircle size={20} />
              QUERO RESOLVER MINHA SITUAÇÃO
            </a>
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
