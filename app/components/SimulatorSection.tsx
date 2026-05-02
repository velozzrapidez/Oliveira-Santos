'use client';

import { useState, useEffect, useRef } from 'react';
import { Calculator, ChevronRight, CheckCircle2, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%21+Finalizei+o+simulador+e+gostaria+de+saber+meu+resultado.';

const steps = [
  {
    id: 1,
    question: 'Qual o seu objetivo principal hoje?',
    options: [
      { label: 'Aposentar pela primeira vez', icon: '👴' },
      { label: 'Revisar valor que já recebo', icon: '💰' },
      { label: 'Destravar auxílio-doença/BPC', icon: '🏥' },
      { label: 'Outro benefício do INSS', icon: '📄' },
    ]
  },
  {
    id: 2,
    question: 'Você já teve algum benefício NEGADO pelo INSS?',
    options: [
      { label: 'Sim, uma ou mais vezes', icon: '❌' },
      { label: 'Ainda não pedi', icon: '⏳' },
      { label: 'Está em análise', icon: '🔍' },
    ]
  },
  {
    id: 3,
    question: 'Há quanto tempo você contribui para o INSS?',
    options: [
      { label: 'Menos de 15 anos', icon: '🌱' },
      { label: 'Entre 15 e 25 anos', icon: '🌿' },
      { label: 'Mais de 25 anos', icon: '🌳' },
    ]
  }
];

export default function SimulatorSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOption = (label: string) => {
    const newAnswers = [...answers, label];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setIsFinished(true);
      }, 2000);
    }
  };

  return (
    <section id="simulador" className="section-pad" style={{ background: '#04091a', position: 'relative' }}>
      <div className="container-max" style={{ padding: '0 1.5rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="gold-divider" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Simulador de <span className="gold-text">Viabilidade</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto' }}>
            Responda 3 perguntas rápidas e descubra em menos de 1 minuto se você tem chances reais de conseguir seu benefício.
          </p>
        </div>

        <div style={{ 
          maxWidth: 700, 
          margin: '0 auto', 
          background: 'rgba(255,255,255,0.03)', 
          border: '1px solid rgba(212,168,67,0.2)', 
          borderRadius: '2rem',
          padding: '2.5rem',
          position: 'relative',
          minHeight: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
        }} ref={containerRef}>
          
          {!isFinished && !analyzing && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ color: '#d4a843', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>Pergunta {steps[currentStep].id} de 3</span>
                <div style={{ display: 'flex', gap: 4 }}>
                  {steps.map((_, i) => (
                    <div key={i} style={{ width: 30, height: 4, borderRadius: 2, background: i <= currentStep ? '#d4a843' : 'rgba(255,255,255,0.1)' }} />
                  ))}
                </div>
              </div>

              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.3 }}>
                {steps[currentStep].question}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {steps[currentStep].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOption(opt.label)}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '1rem',
                      padding: '1.25rem',
                      color: '#fff',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(212,168,67,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                    <span style={{ fontWeight: 600 }}>{opt.label}</span>
                    <ChevronRight size={18} style={{ marginLeft: 'auto', opacity: 0.3 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {analyzing && (
            <div style={{ textAlign: 'center' }}>
              <div className="pulse-glow" style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(212,168,67,0.1)', border: '2px solid #d4a843', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Calculator size={40} color="#d4a843" />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Analisando viabilidade...</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Aguarde enquanto cruzamos seus dados com a legislação atual.</p>
            </div>
          )}

          {isFinished && (
            <div style={{ textAlign: 'center', animation: 'fadeInUp 0.6s ease both' }}>
              <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <CheckCircle2 size={36} color="#22c55e" />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Simulação Concluída!</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Identificamos <strong style={{ color: '#22c55e' }}>pontos favoráveis</strong> no seu perfil para {answers[0].toLowerCase()}. 
                O próximo passo é validar os documentos com um especialista.
              </p>
              
              <div style={{ 
                background: 'rgba(212,168,67,0.1)', 
                border: '1px solid rgba(212,168,67,0.3)', 
                borderRadius: '1rem', 
                padding: '1.5rem', 
                marginBottom: '2rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem', color: '#f0c040', marginBottom: '0.5rem' }}>
                  <AlertCircle size={20} />
                  <span style={{ fontWeight: 700 }}>Bônus Ativado:</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  Ao clicar abaixo, você garante sua <strong>Consultoria Gratuita (Valor: R$ 150,00)</strong> para validar este resultado.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn pulse-glow"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1.2rem', padding: '1.25rem' }}
              >
                <MessageCircle size={24} />
                VER MEU RESULTADO DETALHADO
              </a>
            </div>
          )}

        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
          🔒 Seus dados estão protegidos e não serão compartilhados.
        </div>

      </div>
    </section>
  );
}
