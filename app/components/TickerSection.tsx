'use client';

export default function TickerSection() {
  const items = [
    "Aposentadoria por Idade",
    "Auxílio-Doença",
    "Pensão por Morte",
    "Aposentadoria por Invalidez",
    "BPC / LOAS",
    "Revisão de Benefício",
    "Atendimento em Todo o Brasil",
    "Análise Gratuita",
  ];

  // Duplicamos os itens para garantir que a rolagem infinita não tenha quebras
  const tickerItems = [...items, ...items, ...items];

  return (
    <div style={{
      background: 'linear-gradient(90deg, #b8943a, #f0c040, #b8943a)',
      color: '#04091a',
      padding: '0.65rem 0',
      overflow: 'hidden',
      display: 'flex',
      whiteSpace: 'nowrap',
      position: 'relative',
      zIndex: 20,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div className="ticker-track">
        {tickerItems.map((item, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', margin: '0 1.5rem' }}>
            <span style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {item}
            </span>
            <span style={{ marginLeft: '3rem', color: 'rgba(4, 9, 26, 0.4)', fontSize: '0.6rem' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
