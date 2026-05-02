'use client';

import { MessageCircle, CheckCircle, Smartphone, Gift, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
        backgroundImage: 'linear-gradient(to right, #04091a 25%, rgba(4, 9, 26, 0.85) 45%, rgba(10, 22, 40, 0.15) 100%), url("/imgcabecalho.webp")',
        backgroundSize: '100% 100%, 75%',
        backgroundPosition: 'center, right -5% center',
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
        {/* Pre-headline badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212,168,67,0.12)',
            border: '1px solid rgba(212,168,67,0.3)',
            borderRadius: '9999px',
            padding: '0.5rem 1.25rem',
            marginBottom: '2rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f0c040', display: 'inline-block' }} />
          <span style={{ color: '#f0c040', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Especialistas em INSS · Análise 100% Gratuita
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff',
            maxWidth: 860,
            margin: '0 auto 1.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'all 0.7s ease 0.15s',
          }}
        >
          Teve seu benefício do INSS{' '}
          <span className="gold-text">negado?</span>{' '}
          Você pode estar perdendo dinheiro todos os meses.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 640,
            margin: '0 auto 2.75rem',
            lineHeight: 1.7,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.3s',
          }}
        >
          Fale agora com um advogado especialista e descubra se você tem direito a receber — sem custo e sem burocracia.
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.45s',
            marginBottom: '3rem',
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn bounce-soft"
            style={{ fontSize: '1.1rem', padding: '1.125rem 2.5rem' }}
            id="hero-whatsapp-btn"
          >
            <MessageCircle size={22} />
            Falar com Especialista no WhatsApp
          </a>
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
