import React, { useState } from 'react';
import { Globe, MapPin, Star, ShieldCheck, ShoppingBag, Truck, Wrench, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import appleStoreBadge from './apple store.svg';
import playStoreBadge from './playstore.svg';
import walluIcon from './icon.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {question}
        <ChevronDown className="faq-icon" size={20} />
      </div>
      <div className="faq-answer">
        {answer}
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, letter, text }) => (
  <div className="testi-card">
    <div className="testi-header">
      <div className="testi-avatar">{letter}</div>
      <div>
        <div className="testi-name">{name}</div>
        <div className="testi-role">{role}</div>
      </div>
    </div>
    <div className="testi-stars">
      <Star size={16} fill="#10b981" color="#10b981"/>
      <Star size={16} fill="#10b981" color="#10b981"/>
      <Star size={16} fill="#10b981" color="#10b981"/>
      <Star size={16} fill="#10b981" color="#10b981"/>
      <Star size={16} fill="#10b981" color="#10b981"/>
    </div>
    <p className="testi-text">"{text}"</p>
  </div>
);

function App() {
  const [lang, setLang] = useState('FR');

  const content = {
    FR: {
      nav: ['Services', 'Témoignages', 'FAQ'],
      heroBadge: 'Nouveau',
      heroTitle: 'L\'application de chaque jour au Sénégal',
      heroSub: 'Trouvez des prestataires vérifiés, commandez vos courses au marché (Ndouguilma), ou faites-vous livrer en toute simplicité. Zéro commission, contact direct.',
      features: [
        { icon: <ShieldCheck size={32} />, title: 'Prestataires Vérifiés', desc: 'Identité et profil vérifiés pour votre sécurité à Dakar et partout au Sénégal.' },
        { icon: <MessageSquare size={32} />, title: 'Contact Direct', desc: 'Appelez ou envoyez un WhatsApp directement au prestataire. Pas d\'intermédiaire.' },
        { icon: <Star size={32} />, title: 'Zéro Commission', desc: 'Payez directement le prestataire après le service. Wallu ne prend rien sur vos transactions.' }
      ],
      servicesTitle: 'Tout ce dont vous avez besoin, en une app',
      servicesSub: 'Découvrez les piliers de Wallu.',
      services: [
        { 
          title: 'Wallu Course (Ndouguilma)', 
          desc: 'Plus le temps d\'aller au marché de Castors ou de Sandaga ? Déléguez vos courses quotidiennes. Vous listez vos besoins, un de nos coursiers de confiance prend en charge votre commande, fait les achats et vous livre directement chez vous. Un vrai gain de temps pour les familles sénégalaises.', 
          tags: ['Marché', 'Courses', 'Gain de temps', 'Légumes frais'],
          img: '/ndouguilma_sn_v2.png'
        },
        { 
          title: 'Wallu Prestataires', 
          desc: 'Besoin d\'un plombier en urgence, d\'une nounou pour ce soir, ou d\'un électricien fiable ? Trouvez les meilleurs professionnels autour de vous. Leurs profils sont vérifiés avec leur pièce d\'identité (NIN). Discutez avec eux et mettez-vous d\'accord sur le prix.', 
          tags: ['Artisans', 'Aide à domicile', 'Réparation', 'Sécurité'],
          img: '/artisan_sn_v2.png'
        },
        { 
          title: 'Wallu Livraison & Transport', 
          desc: 'Faites livrer vos colis, vos repas ou commandez un taxi bagages rapidement et en toute sécurité. Que ce soit sur une moto "Tiak-Tiak" ou une camionnette pour un déménagement, nos livreurs sont prêts et disponibles dans toutes les zones de Dakar.', 
          tags: ['Colis', 'Déménagement', 'Rapide', 'Moto & Voiture'],
          img: '/livreur_sn_v2.png'
        },
        { 
          title: 'Wallu Boutique', 
          desc: 'Achetez des produits locaux directement depuis l\'application auprès de vendeurs vérifiés. De la mode à l\'électronique, soutenez l\'économie locale et contactez les vendeurs directement.', 
          tags: ['Marketplace', 'Achat Local', 'E-commerce'],
          img: '/ndouguilma_sn_v2.png'
        },
        { 
          title: 'Wallu AI (Votre Assistant Vocal)', 
          desc: 'Notre assistant intelligent comprend parfaitement le Wolof et le Français. Vous ne savez pas comment trouver un service ? Demandez-lui simplement vocalement, il vous guidera à travers l\'application comme un vrai ami.', 
          tags: ['Intelligence Artificielle', 'Vocal', 'Wolof', 'Assistance'],
          img: '/ai_3d.png'
        }
      ],
      testimonialsTitle: 'Ce que les Sénégalais disent de Wallu',
      testimonialsSub: 'Des milliers d\'utilisateurs simplifient leur quotidien.',
      testimonials: [
        { name: 'Fatou Ndiaye', role: 'Mère de famille', text: 'Le service Ndouguilma m\'a sauvée ! Je n\'ai plus le temps d\'aller au marché avec mon travail. Le coursier m\'amène mes légumes frais directement à la maison.', letter: 'F' },
        { name: 'Moussa Diop', role: 'Utilisateur régulier', text: 'J\'avais une fuite d\'eau à 22h. J\'ai trouvé un plombier sur Wallu en 5 minutes. J\'ai pu voir sa note et sa carte vérifiée avant de l\'appeler. Très rassurant.', letter: 'M' },
        { name: 'Aminata Sow', role: 'Commerçante', text: 'Mes ventes ont explosé depuis que j\'ai mis ma boutique sur Wallu Vente. Les clients m\'appellent directement, et Wallu ne me prend aucune commission !', letter: 'A' },
        { name: 'Ibrahima Fall', role: 'Entrepreneur', text: 'Pour envoyer mes colis vers Pikine ou Rufisque, j\'utilise toujours les livreurs Wallu. Ils sont rapides, polis et toujours à l\'heure.', letter: 'I' },
        { name: 'Awa Sy', role: 'Cliente', text: 'L\'assistant vocal en Wolof est génial pour ma mère qui ne lit pas très bien le français. Elle peut demander un service et l\'application l\'aide toute seule.', letter: 'A' },
        { name: 'Ousmane Kane', role: 'Menuisier', text: 'Je suis artisan sur Wallu. Mon planning est plein. C\'est la meilleure application pour nous les prestataires, on est directement en contact avec les clients.', letter: 'O' }
      ],
      faqTitle: 'Questions Fréquentes',
      faqs: [
        { q: 'Qu\'est-ce que Wallu ?', a: 'Wallu est une super-application sénégalaise qui vous connecte directement avec des prestataires, coursiers et vendeurs locaux, sans intermédiaire.' },
        { q: 'L\'application prend-elle des commissions ?', a: 'Non ! Avec Wallu, vous payez directement le prestataire ou le vendeur. Nous ne prenons aucune commission sur vos transactions.' },
        { q: 'Comment fonctionne le service Ndouguilma ?', a: 'Vous listez vos besoins, un coursier prend en charge votre commande, va au marché, et vous livre directement chez vous.' },
        { q: 'Comment devenir prestataire ?', a: 'Téléchargez l\'application, allez dans la section "Devenir partenaire" et soumettez votre pièce d\'identité (NIN). Après vérification, votre profil sera visible.' }
      ],
      ctaTitle: 'Simplifiez votre quotidien dès aujourd\'hui',
      downloadBtn: 'Télécharger gratuitement'
    },
    EN: {
      nav: ['Services', 'Testimonials', 'FAQ'],
      heroBadge: 'New',
      heroTitle: 'The everyday app in Senegal',
      heroSub: 'Find verified professionals, get your market errands done (Ndouguilma), or request deliveries easily. Zero commission, direct contact.',
      features: [
        { icon: <ShieldCheck size={32} />, title: 'Verified Professionals', desc: 'Identity and profiles verified for your safety in Dakar and across Senegal.' },
        { icon: <MessageSquare size={32} />, title: 'Direct Contact', desc: 'Call or send a WhatsApp directly to the provider. No middleman.' },
        { icon: <Star size={32} />, title: 'Zero Commission', desc: 'Pay the provider directly after the service. Wallu takes nothing from your transactions.' }
      ],
      servicesTitle: 'Everything you need, in one app',
      servicesSub: 'Discover the pillars of Wallu.',
      services: [
        { 
          title: 'Wallu Errands (Ndouguilma)', 
          desc: 'No time to go to the market? Delegate your daily shopping. List your needs, one of our trusted couriers takes your order, does the shopping and delivers directly to your home. A real time saver for Senegalese families.', 
          tags: ['Market', 'Groceries', 'Time-saving', 'Fresh Vegetables'],
          img: '/ndouguilma_sn_v2.png'
        },
        { 
          title: 'Wallu Providers', 
          desc: 'Need an emergency plumber, a nanny for tonight, or a reliable electrician? Find the best professionals around you. Their profiles are verified with their ID (NIN). Chat with them and agree on the price.', 
          tags: ['Professionals', 'Home Care', 'Repairs', 'Safety'],
          img: '/artisan_sn_v2.png'
        },
        { 
          title: 'Wallu Delivery & Transport', 
          desc: 'Get your packages or meals delivered, or order a cargo taxi quickly and safely. Whether on a "Tiak-Tiak" motorbike or a van for moving, our delivery drivers are ready and available in all areas of Dakar.', 
          tags: ['Packages', 'Moving', 'Fast', 'Moto & Car'],
          img: '/livreur_sn_v2.png'
        },
        { 
          title: 'Wallu Shop', 
          desc: 'Buy local products directly from the app from verified sellers. From fashion to electronics, support the local economy and contact sellers directly.', 
          tags: ['Marketplace', 'Local Shopping', 'E-commerce'],
          img: '/ndouguilma_sn_v2.png'
        },
        { 
          title: 'Wallu AI (Your Voice Assistant)', 
          desc: 'Our smart assistant perfectly understands Wolof and French. Don\'t know how to find a service? Just ask vocally, it will guide you through the app like a real friend.', 
          tags: ['Artificial Intelligence', 'Voice', 'Wolof', 'Assistance'],
          img: '/ai_3d.png'
        }
      ],
      testimonialsTitle: 'What Senegalese say about Wallu',
      testimonialsSub: 'Thousands of users are simplifying their daily lives.',
      testimonials: [
        { name: 'Fatou Ndiaye', role: 'Mother', text: 'The Ndouguilma service saved me! I no longer have time to go to the market with my job. The courier brings my fresh vegetables right to the house.', letter: 'F' },
        { name: 'Moussa Diop', role: 'Regular user', text: 'I had a water leak at 10 PM. I found a plumber on Wallu in 5 minutes. I was able to see his rating and verified ID before calling him. Very reassuring.', letter: 'M' },
        { name: 'Aminata Sow', role: 'Shop owner', text: 'My sales have skyrocketed since I put my shop on Wallu Shop. Customers call me directly, and Wallu takes zero commission!', letter: 'A' },
        { name: 'Ibrahima Fall', role: 'Entrepreneur', text: 'To send my packages to Pikine or Rufisque, I always use Wallu delivery drivers. They are fast, polite, and always on time.', letter: 'I' },
        { name: 'Awa Sy', role: 'Customer', text: 'The Wolof voice assistant is great for my mother who doesn\'t read French very well. She can ask for a service and the app helps her on its own.', letter: 'A' },
        { name: 'Ousmane Kane', role: 'Carpenter', text: 'I am an artisan on Wallu. My schedule is full. It is the best application for us providers, we are directly in contact with customers.', letter: 'O' }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'What is Wallu?', a: 'Wallu is a Senegalese super-app connecting you directly with local providers, couriers, and sellers, without middlemen.' },
        { q: 'Does the app take commissions?', a: 'No! With Wallu, you pay the provider or seller directly. We take zero commission on your transactions.' },
        { q: 'How does Ndouguilma work?', a: 'List your needs, a courier takes your order, goes to the market, and delivers directly to your home.' },
        { q: 'How to become a provider?', a: 'Download the app, go to "Become a partner" and submit your ID (NIN). After verification, your profile goes live.' }
      ],
      ctaTitle: 'Simplify your daily life today',
      downloadBtn: 'Download for free'
    }
  };

  const t = content[lang];

  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo">
            <img src={walluIcon} alt="Wallu" style={{width:'40px',height:'40px',borderRadius:'12px',objectFit:'cover'}} />
            Wallu
          </div>
          <nav className="nav-links">
            <a href="#services">{t.nav[0]}</a>
            <a href="#testimonials">{t.nav[1]}</a>
            <a href="#faq">{t.nav[2]}</a>
            <button className="lang-toggle" onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}>
              <Globe size={16} /> {lang}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-grid">
            <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="service-tag" style={{ display: 'inline-block', marginBottom: '16px' }}>
                <Sparkles size={16} style={{display:'inline', verticalAlign:'middle', marginRight:'4px'}}/> {t.heroBadge}
              </motion.div>
              <motion.h1 variants={fadeIn}>
                {t.heroTitle} <span>Wallu.</span>
              </motion.h1>
              <motion.p variants={fadeIn}>
                {t.heroSub}
              </motion.p>
              <motion.div className="hero-badges" variants={fadeIn}>
                <a href="#download" className="store-badge"><img src={appleStoreBadge} alt="App Store" className="store-badge-img"/></a>
                <a href="#download" className="store-badge"><img src={playStoreBadge} alt="Google Play" className="store-badge-img"/></a>
              </motion.div>
            </motion.div>
            <motion.div className="hero-image-wrap" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <img src="/livreur_sn_v2.png" alt="Wallu App" className="hero-image" style={{objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(6,47,81,0.1)'}} />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="features-grid">
              {t.features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p style={{marginBottom: 0}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesSub}</p>
            </div>
            
            <div className="services-list">
              {t.services.map((service, index) => (
                <div key={index} className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="service-image-wrap">
                    <img src={service.img} alt={service.title} className="service-image" />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <div className="service-tags">
                      {service.tags.map((tag, i) => <span key={i} className="service-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>{t.testimonialsTitle}</h2>
              <p>{t.testimonialsSub}</p>
            </div>
            <div className="testi-grid">
              {t.testimonials.map((testi, i) => (
                <TestimonialCard key={i} {...testi} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-header">
              <h2>{t.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {t.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="cta">
          <div className="container">
            <h2>{t.ctaTitle}</h2>
            <div className="hero-badges" style={{justifyContent: 'center'}}>
              <a href="#download" className="store-badge"><img src={appleStoreBadge} alt="App Store" className="store-badge-img"/></a>
              <a href="#download" className="store-badge"><img src={playStoreBadge} alt="Google Play" className="store-badge-img"/></a>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{gridColumn: 'span 2'}}>
              <div className="footer-logo">
                <img src={walluIcon} alt="Wallu" style={{width:'40px',height:'40px',borderRadius:'12px',objectFit:'cover'}} />
                Wallu
              </div>
              <p style={{color: 'rgba(255,255,255,0.7)', maxWidth: '300px'}}>
                {lang === 'FR' ? 'L\'application qui facilite le quotidien des Sénégalais.' : 'The app that makes daily life easier for Senegalese.'}
              </p>
            </div>
            <div className="footer-col">
              <h4>Liens Rapides</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Témoignages</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>Dakar, Sénégal</li>
                <li>contact@wallu.sn</li>
                <li>+221 77 000 00 00</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Wallu. {lang === 'FR' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const Sparkles = ({size, style}) => <svg style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>;

export default App;
