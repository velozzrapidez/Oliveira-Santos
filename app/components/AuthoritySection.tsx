'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Briefcase, Star, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const credentials = [
  { icon: Briefcase, label: 'OAB/SP 234.567', desc: 'Registro ativo na Ordem dos Advogados do Brasil' },
  { icon: BookOpen, label: 'Pós-graduação em Previdenciário', desc: 'Especialização pela PUC-SP em Direito Previdenciário' },
  { icon: Award, label: '+10 anos de experiência', desc: 'Atuando exclusivamente em causas previdenciárias' },
  { icon: Star, label: '+1.000 casos resolvidos', desc: 'Histórico comprovado de resultados para clientes' },
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

export default function AuthoritySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

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
      {/* Decorative */}
      <div style={{
        position: 'absolute', bottom: '-15%', right: '-10%',
        width: 450, height: 450, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}>

          {/* Left: Photo placeholder + name */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
          }}>
            {/* Avatar / Photo block */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
              {/* Photo with gradient overlay for text */}
              <div style={{
                width: 280,
                maxWidth: '100%',
                height: 380,
                borderRadius: '1.5rem',
                backgroundImage: 'url("/foto.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                border: '2px solid rgba(212,168,67,0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}>
                {/* Floating Text Overlay */}
                <div style={{
                  width: '100%', padding: '2rem 1.25rem 1.25rem',
                  background: 'linear-gradient(0deg, rgba(4,9,26,0.95) 0%, rgba(4,9,26,0.7) 50%, transparent 100%)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.15rem', color: '#fff' }}>
                    Dr. Ricardo Oliveira
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#d4a843', fontWeight: 600, marginTop: '0.3rem', letterSpacing: '0.05em' }}>
                    Advogado Previdenciário
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute', top: '1rem', right: '-1.5rem',
                background: 'linear-gradient(135deg, #f0c040, #c9a84c)',
                color: '#04091a', borderRadius: '0.875rem',
                padding: '0.5rem 0.875rem',
                boxShadow: '0 8px 24px rgba(212,168,67,0.4)',
                fontSize: '0.75rem', fontWeight: 800,
                textAlign: 'center', lineHeight: 1.3,
                whiteSpace: 'nowrap',
              }}>
                OAB/SP<br />Ativo
              </div>
            </div>

            {/* Quote */}
            <blockquote style={{
              borderLeft: '3px solid #d4a843',
              paddingLeft: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              fontStyle: 'italic',
              fontSize: '0.95rem',
            }}>
              "Acredito que todo trabalhador brasileiro merece acesso a seus direitos previdenciários sem precisar entender juridiquês. Por isso, explico cada passo com clareza e luto pelo que é justo."
            </blockquote>
          </div>

          {/* Right: Credentials */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            <div className="gold-divider" style={{ marginBottom: '1.25rem' }} />
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.1, marginBottom: '1.25rem',
            }}>
              Especialista em causas de <span className="gold-text">alto risco contra o INSS</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8, fontSize: '1.1rem',
              marginBottom: '2rem',
            }}>
              O <strong>Dr. Ricardo Oliveira (OAB/GO 67.890)</strong> é referência regional em Direito Previdenciário com foco exclusivo em reverter negativas do INSS. Com uma atuação técnica e dominante, ele lidera uma equipe que já recuperou milhões de reais em atrasados para centenas de aposentados.
            </p>

            {/* Credentials list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {credentials.map(({ icon: Icon, label, desc }, i) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.875rem',
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.35 + i * 0.1}s`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                    background: 'rgba(212,168,67,0.1)',
                    border: '1px solid rgba(212,168,67,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#f0c040" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              id="authority-whatsapp-btn"
            >
              <MessageCircle size={20} />
              Falar com Dr. Ricardo agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
