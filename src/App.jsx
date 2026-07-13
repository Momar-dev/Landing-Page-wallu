import React, { useEffect, useState } from 'react';
import { Apple, Play, ChevronRight, Briefcase, Truck, Package, ShoppingBag, ShieldCheck } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container header-content">
          <div className="logo">Wallu</div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#partenaires">Devenir Partenaire</a>
            <a href="#contact">Contact</a>
            <a href="#telecharger" className="btn-glass" style={{ padding: '8px 20px', fontSize: '14px' }}>
              Télécharger
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1><span className="text-gradient">L'application</span> multiservices qui simplifie votre quotidien</h1>
            <p>Commandez un coursier, trouvez un prestataire qualifié ou faites vos achats en ligne, le tout depuis une seule application sécurisée.</p>
            
            <div className="store-buttons">
              <button className="store-btn">
                <Apple className="icon" />
                <div className="text">
                  <small>Bientôt sur</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="store-btn">
                <Play className="icon" />
                <div className="text">
                  <small>Bientôt sur</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="app-screen">
                <div className="app-header">
                  Aythia ! 👋
                </div>
                <div className="app-body">
                  <div className="app-card" style={{marginTop: '20px'}}>
                    <div className="app-card-icon" style={{color: '#062F51'}}><Briefcase size={20} /></div>
                    <div className="app-card-text">
                      <div>Trouver un Prestataire</div>
                      <div>Plombier, Menuisier...</div>
                    </div>
                  </div>
                  <div className="app-card">
                    <div className="app-card-icon" style={{color: '#10b981'}}><Truck size={20} /></div>
                    <div className="app-card-text">
                      <div>Demander un Coursier</div>
                      <div>Livraison express 24/7</div>
                    </div>
                  </div>
                  <div className="app-card">
                    <div className="app-card-icon" style={{color: '#f59e0b'}}><ShoppingBag size={20} /></div>
                    <div className="app-card-text">
                      <div>Boutique Wallu</div>
                      <div>Achetez des produits locaux</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="features">
        <div className="container">
          <h2 className="section-title">Tout ce dont vous avez besoin</h2>
          <p className="section-subtitle">Wallu regroupe tous les services essentiels en une seule application fluide et sécurisée.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Briefcase /></div>
              <h3>Prestataires Qualifiés</h3>
              <p>Trouvez rapidement des artisans et professionnels de confiance pour tous vos travaux et besoins du quotidien.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Package /></div>
              <h3>Coursiers & Livreurs</h3>
              <p>Envoyez ou recevez vos colis en un temps record grâce à notre flotte de livreurs disponibles partout.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><ShoppingBag /></div>
              <h3>Marketplace</h3>
              <p>Découvrez et achetez des produits proposés par les vendeurs de notre réseau, livrés directement chez vous.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck /></div>
              <h3>Sécurité Garantie</h3>
              <p>Tous nos partenaires sont vérifiés (Pièce d'identité) pour garantir votre tranquillité d'esprit lors de chaque transaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partenaires" className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2 className="section-title" style={{color: 'white', marginBottom: '20px'}}>Rejoignez le réseau Wallu</h2>
              <p style={{color: '#94a3b8', fontSize: '18px', marginBottom: '40px'}}>Vous êtes un professionnel, un livreur ou un commerçant ? Augmentez vos revenus en rejoignant notre plateforme de mise en relation.</p>
              <button className="btn-primary">
                Devenir Partenaire <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{fontSize: '24px', marginBottom: '16px'}}>Wallu</div>
              <p>L'application multiservices qui révolutionne le quotidien au Sénégal. Tous vos services, une seule app.</p>
            </div>
            <div className="footer-col">
              <h4>Liens Rapides</h4>
              <ul className="footer-links">
                <li><a href="#services">Nos Services</a></li>
                <li><a href="#partenaires">Devenir Partenaire</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Légal</h4>
              <ul className="footer-links">
                <li><a href="#cgu">Conditions d'utilisation</a></li>
                <li><a href="#privacy">Politique de confidentialité</a></li>
                <li><a href="mailto:contact@wallu.sn">contact@wallu.sn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Wallu. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
