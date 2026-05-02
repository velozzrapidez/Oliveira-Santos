'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 9999,
        width: 62,
        height: 62,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
        transition: 'all 0.4s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.5)',
        textDecoration: 'none',
        animation: visible ? 'pulse-glow 2s ease-in-out infinite' : 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1.12)';
        el.style.boxShadow = '0 12px 40px rgba(37,211,102,0.6)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '0 8px 32px rgba(37,211,102,0.45)';
      }}
    >
      {/* Pulse ring */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.5)',
          animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
        }}
      />
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
      <MessageCircle size={28} color="#fff" fill="#fff" strokeWidth={1.5} />
    </a>
  );
}
