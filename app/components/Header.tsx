'use client';

import { useState, useEffect } from 'react';
import { Scale, Phone, Menu, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dr. Ricardo', href: '#advogado' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(10, 22, 40, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,67,0.15)' : 'none',
        padding: '1rem 1.5rem',
      }}
    >
      <div
        className="container-max"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f0c040, #c9a84c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Scale size={20} color="#0a1628" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                lineHeight: 1.1,
                color: '#fff',
                letterSpacing: '0.01em',
              }}
            >
              Oliveira & Santos
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                color: '#d4a843',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Advocacia Previdenciária
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0c040')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)')}
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gold-btn" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
            <Phone size={15} />
            Falar Agora
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: '0.25rem' }}
          className="flex md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10,22,40,0.98)',
            borderTop: '1px solid rgba(212,168,67,0.15)',
            borderBottom: '1px solid rgba(212,168,67,0.15)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <Phone size={18} />
            Falar com Advogado no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
