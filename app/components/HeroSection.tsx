'use client';

import { MessageCircle, CheckCircle, Smartphone, Gift, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const badges = [
  { icon: CheckCircle, text: 'Atendimento Imediato' },
  { icon: Smartphone, text: '100% Online' },
  { icon: Gift, text: 'Análise Gratuita' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#04091a',
        backgroundImage: isMobile
          ? 'linear-gradient(180deg, rgba(4,9,26,0.85) 0%, rgba(4,9,26,0.97) 60%), url("/imgcabecalho.webp")'
          : 'linear-gradient(to right, #04091a 25%, rgba(4, 9, 26, 0.85) 45%, rgba(10, 22, 40, 0.15) 100%), url("/imgcabecalho.webp")',
        backgroundSize: isMobile ? 'cover' : '100% 100%, 75%',
        backgroundPosition: isMobile ? 'center' : 'center, right -5% center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Large glowing orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,58,138,0.4) 0%, transparent 70%)',
          }}
        />
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gold line accents */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: 0,
            right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.15), transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container-max"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '8rem 1.5rem 5rem',
          textAlign: 'center',
        }}
      >
        {/* Pre-headline badge with Urgency */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212,168,67,0.15)',
            border: '1px solid rgba(212,168,67,0.4)',
            borderRadius: '9999px',
            padding: '0.6rem 1.5rem',
            marginBottom: '2rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease',
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff4444', display: 'inline-block', boxShadow: '0 0 10px #ff4444' }} className="pulse-glow" />
          <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            ÚLTIMAS VAGAS PARA ANÁLISE GRATUITA HOJE
          </span>
        </div>

        {/* Main Headline - More Aggressive */}
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#ffffff',
            maxWidth: 950,
            margin: '0 auto 1.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'all 0.7s ease 0.15s',
          }}
        >
          Seu benefício foi <span className="gold-text">negado?</span> Você pode estar deixando de receber valores todos os meses.
        </h1>

        {/* Subheadline - More Direct */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 720,
            margin: '0 auto 3rem',
            lineHeight: 1.6,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.3s',
          }}
        >
          Descubra agora se você tem direito e como destravar seu pagamento — <strong style={{ color: '#f0c040' }}>análise gratuita em minutos.</strong>
        </p>

        {/* CTA Button - Stronger Glow & Feedback */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.45s',
            marginBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn pulse-glow"
            style={{ 
              fontSize: '1.25rem', 
              padding: '1.25rem 3rem', 
              whiteSpace: 'normal', 
              textAlign: 'center',
              boxShadow: '0 0 50px rgba(37, 211, 102, 0.4)' 
            }}
            id="hero-whatsapp-btn"
          >
            <MessageCircle size={24} />
            QUERO SABER SE TENHO DIREITO AGORA
          </a>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500 }}>
            ⚡ Resposta rápida por ordem de chegada
          </span>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.6s',
          }}
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
              }}
            >
              <Icon size={16} color="#f0c040" />
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            opacity: 0.45,
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4a843' }}>
            Saiba mais
          </span>
          <ChevronDown size={20} color="#d4a843" style={{ animation: 'bounce-soft 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
