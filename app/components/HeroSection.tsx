'use client';

import { MessageCircle, CheckCircle, Smartphone, Gift, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const badges = [
  { icon: CheckCircle, text: 'Atendimento Imediato' },
  { icon: Smartphone, text: '100% Online' },
  { icon: Gift, text: 'Análise Gratuita' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#04091a',
      }}
    >
      {/* Background Image Layer */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/imgcabecalho.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Gradient Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(4,9,26,0.95) 0%, rgba(4,9,26,0.8) 40%, rgba(4,9,26,0.2) 100%)',
        zIndex: 1
      }} />

      {/* Decorative background elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        {/* Large glowing orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
        
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.5
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(212,168,67,0.15)',
            border: '1px solid rgba(212,168,67,0.4)',
            borderRadius: '9999px',
            padding: '0.75rem 1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff4444', display: 'inline-block', boxShadow: '0 0 10px #ff4444' }} className="pulse-glow" />
          <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            ÚLTIMAS VAGAS PARA ANÁLISE GRATUITA HOJE
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#ffffff',
            maxWidth: 1000,
            margin: '0 auto 2rem',
          }}
        >
          Seu benefício foi <span className="gold-text">negado?</span> Você pode estar deixando de receber todos os meses.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 800,
            margin: '0 auto 3.5rem',
            lineHeight: 1.6,
          }}
        >
          Descubra agora se você tem direito e como destravar seu pagamento — <strong style={{ color: '#f0c040' }}>análise gratuita e imediata.</strong>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(37, 211, 102, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn pulse-glow"
            style={{ 
              fontSize: '1.35rem', 
              padding: '1.5rem 4rem', 
              boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)' 
            }}
          >
            <MessageCircle size={28} />
            VERIFICAR MEU DIREITO AGORA
          </motion.a>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 600 }}>
            ⚡ Resposta instantânea via WhatsApp
          </span>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.25rem',
          }}
        >
          {badges.map(({ icon: Icon, text }) => (
            <motion.div
              key={text}
              whileHover={{ y: -5, background: 'rgba(255,255,255,0.1)' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                padding: '0.6rem 1.25rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Icon size={18} color="#f0c040" />
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: 0.6,
          }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', fontWeight: 800 }}>
            Role para descobrir
          </span>
          <ChevronDown size={24} color="#d4a843" />
        </motion.div>
      </div>
    </section>
  );
}
