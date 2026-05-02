'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria das Graças S.',
    city: 'São Paulo – SP',
    stars: 5,
    problem: 'Tive meu auxílio-doença negado duas vezes pelo INSS',
    text: 'Fiquei mais de um ano tentando resolver por conta própria e não conseguia nada. Uma amiga me indicou o Dr. Ricardo e em poucos meses meu benefício foi aprovado. Ele explicou tudo em detalhes, sem palavras difíceis, e me deixou tranquila durante o processo. Recomendo de olhos fechados!',
    result: 'Auxílio-doença aprovado em 4 meses',
  },
  {
    name: 'José Antônio R.',
    city: 'Campinas – SP',
    stars: 5,
    problem: 'Queria me aposentar mas não sabia se tinha direito',
    text: 'Entrei em contato pelo WhatsApp sem muita esperança. Para minha surpresa, o atendimento foi imediato e descobri que já tinha direito à aposentadoria há mais de um ano. O processo correu bem rápido e hoje estou aposentado. A equipe é muito atenciosa e competente.',
    result: 'Aposentadoria por idade concedida',
  },
  {
    name: 'Ana Lúcia F.',
    city: 'Santos – SP',
    stars: 5,
    problem: 'Meu BPC/LOAS tinha sido negado e não sabia mais o que fazer',
    text: 'Minha mãe tem 72 anos e ficou sem renda após a negativa do BPC. Achei o escritório pelo Google e fiz contato. Em menos de uma semana já tinham toda a documentação organizada. Resultado: benefício aprovado e minha mãe está muito bem amparada. Muito obrigada!',
    result: 'BPC/LOAS aprovado para a mãe',
  },
  {
    name: 'Carlos Mendes',
    city: 'Belo Horizonte – MG',
    stars: 5,
    problem: 'Pensão por morte cortada subitamente',
    text: 'Após o falecimento da minha esposa, o INSS cortou a pensão com a justificativa de falta de documentos. Procurei o escritório e, mesmo sendo de outro estado, o atendimento digital foi perfeito. Eles entraram com mandado de segurança e reestabeleceram o benefício.',
    result: 'Pensão reestabelecida',
  },
  {
    name: 'Roberto Silva',
    city: 'Curitiba – PR',
    stars: 5,
    problem: 'Valor da aposentadoria veio muito abaixo do esperado',
    text: 'Trabalhei 35 anos contribuindo no teto e me aposentaram com quase um salário mínimo. O escritório fez a análise gratuita, encontrou um erro no cálculo do INSS e entrou com pedido de revisão. O valor triplicou e recebi os atrasados. Mudou minha vida.',
    result: 'Revisão aprovada com atrasados',
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} color="#f0c040" fill="#f0c040" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section
      id="depoimentos"
      className="section-pad"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #080e1e 100%)', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: '5%', right: '5%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)',
      }} />

      <div className="container-max" style={{ padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700, color: '#fff', marginBottom: '1rem',
          }}>
            Quem já resolveu com a <span className="gold-text">nossa ajuda</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Veja o que nossos clientes falam sobre o atendimento e os resultados que conquistaram.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to current index
              let diff = index - currentIndex;
              if (diff > Math.floor(testimonials.length / 2)) {
                diff -= testimonials.length;
              } else if (diff < -Math.floor(testimonials.length / 2)) {
                diff += testimonials.length;
              }

              // Determine properties based on position
              const isActive = diff === 0;
              const xPos = diff * 35; // Percentage shift horizontally
              const scale = isActive ? 1 : 0.85 - Math.abs(diff) * 0.1;
              const zIndex = 10 - Math.abs(diff);
              const opacity = Math.abs(diff) > 2 ? 0 : isActive ? 1 : 0.6;
              const blur = isActive ? '0px' : '4px';

              return (
                <motion.div
                  key={testimonial.name}
                  initial={false}
                  animate={{
                    x: `${xPos}%`,
                    scale: scale,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: `blur(${blur})`,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    width: 'min(90vw, 450px)',
                    background: isActive ? 'rgba(15, 31, 61, 0.95)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? 'rgba(212,168,67,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '1.25rem',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 20px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(12px)',
                    cursor: isActive ? 'default' : 'pointer',
                    pointerEvents: Math.abs(diff) <= 1 ? 'auto' : 'none'
                  }}
                  onClick={() => {
                    if (diff === 1) nextSlide();
                    if (diff === -1) prevSlide();
                  }}
                >
                  <Quote size={28} color="rgba(212,168,67,0.25)" style={{ position: 'absolute', top: '1.5rem', right: '1.75rem' }} />

                  <div>
                    <StarRating count={testimonial.stars} />
                    <div style={{
                      marginTop: '0.75rem', color: '#f0c040', fontSize: '0.8rem', fontWeight: 600,
                      background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)',
                      borderRadius: '6px', padding: '0.3rem 0.625rem', display: 'inline-block',
                    }}>
                      Problema: {testimonial.problem}
                    </div>
                  </div>

                  <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontSize: '0.9rem', flex: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.25)', borderRadius: '8px', padding: '0.5rem 0.875rem', width: 'fit-content'
                  }}>
                    <span style={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 700 }}>✓ {testimonial.result}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212,168,67,0.3), rgba(212,168,67,0.1))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                    }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.875rem' }}>{testimonial.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>{testimonial.city}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button 
            onClick={prevSlide}
            style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,168,67,0.15)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,168,67,0.4)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,168,67,0.15)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,168,67,0.4)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
