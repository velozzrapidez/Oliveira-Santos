'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, ClipboardList, CheckCircle2, Rocket } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Clique no WhatsApp',
    desc: 'Inicie uma conversa agora mesmo. Nosso time responde em até 2 horas em dias úteis.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Conte seu caso',
    desc: 'Sem formulários complicados. Apenas nos diga sua situação com suas próprias palavras.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Receba a análise gratuita',
    desc: 'Avaliamos seu caso e informamos se você tem direito ao benefício — sem custo algum.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'A gente cuida do resto',
    desc: 'Se decidir contratar, nossa equipe assume todo o processo até o benefício ser aprovado.',
  },
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

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      id="como-funciona"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #080e1e 0%, #0a1628 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '4rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease',
        }}>
          <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700, color: '#fff', marginBottom: '1rem',
          }}>
            Como funciona — <span className="gold-text">simples assim</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Sem burocracia, sem papelada, sem sair de casa. Você inicia e nós conduzimos o processo até o final.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
        }}>
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={step}
              style={{
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                position: 'relative',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `all 0.6s ease ${0.12 * i + 0.2}s`,
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '3.5rem',
                  right: '-0.75rem',
                  width: '1.5rem', height: 2,
                  background: 'linear-gradient(90deg, rgba(212,168,67,0.4), transparent)',
                  display: 'none', // hidden on mobile; desktop via CSS
                }} className="md:block" />
              )}

              {/* Step number */}
              <div style={{
                fontSize: '0.7rem', fontWeight: 800,
                color: '#d4a843', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '1rem',
              }}>
                Passo {step}
              </div>

              {/* Icon circle */}
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.05))',
                border: '2px solid rgba(212,168,67,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 24px rgba(212,168,67,0.1)',
              }}>
                <Icon size={30} color="#f0c040" />
              </div>

              <h3 style={{
                fontWeight: 700, fontSize: '1.05rem',
                color: '#fff', marginBottom: '0.75rem',
              }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, fontSize: '0.88rem' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center', marginTop: '3rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s ease 0.7s',
        }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            id="howitworks-whatsapp-btn"
            style={{ fontSize: '1.05rem', padding: '1.1rem 2.25rem' }}
          >
            <MessageCircle size={21} />
            Começar agora — é gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
