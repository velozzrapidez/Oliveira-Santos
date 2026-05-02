import { Scale, Phone, Mail, MapPin, Share2, MessageSquare } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+uma+an%C3%A1lise+gratuita+do+meu+caso+no+INSS.';

const areas = [
  'Aposentadoria por Idade',
  'Aposentadoria por Invalidez',
  'Revisão de Benefício',
  'Auxílio-Doença',
  'BPC / LOAS',
  'Pensão por Morte',
];

export default function Footer() {
  return (
    <footer style={{ background: '#04091a', borderTop: '1px solid rgba(212,168,67,0.15)', padding: '4rem 1.5rem 2rem' }}>
      <div className="container-max">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #f0c040, #c9a84c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scale size={20} color="#0a1628" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>Oliveira & Santos</div>
                <div style={{ fontSize: '0.63rem', color: '#d4a843', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Advocacia Previdenciária</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Especialistas em Direito Previdenciário. Conquistamos o benefício que o INSS negou, com atendimento humano e resultado comprovado.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[Share2, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.2s' }}>
                  <Icon size={16} color="#d4a843" />
                </a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ color: '#f0c040', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Áreas de Atuação</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {areas.map((area) => (
                <li key={area}>
                  <a href="#areas" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#d4a843', fontSize: '0.55rem' }}>▶</span>
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f0c040', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Phone, label: 'WhatsApp', value: '(11) 99999-9999', href: WHATSAPP_URL },
                { icon: Mail, label: 'E-mail', value: 'contato@oliveirasantos.adv.br', href: 'mailto:contato@oliveirasantos.adv.br' },
                { icon: MapPin, label: 'Atuação', value: 'São Paulo – SP (100% online)', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '8px', flexShrink: 0, background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={15} color="#d4a843" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} Oliveira & Santos Advocacia. Todos os direitos reservados. OAB/SP.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de Privacidade', 'LGPD'].map((item) => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
