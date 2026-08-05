import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import walluIcon from './icon.png';
import founderPhoto from './Assane Sow.jpeg';
import appleStoreBadge from './apple store.svg';
import playStoreBadge from './playstore.svg';
import appInterfaceImg from './page accueil appli mobile.png';
import walluAiImg from './wallu ia.png';
import coursierImg from './coursier wallu.png';

/* ═══════════════════════════════════════════════════════════
   ICONS & DATA
   ═══════════════════════════════════════════════════════════ */
const Icon = ({ name, size = 24, className, style }) => {
  const icons = {
    check: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />,
    chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
    map: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
    phone: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.22-3.919-6.815-6.815l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    shopping: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
    sparkles: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
    star: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
    truck: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
    zap: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeLinecap="round" strokeLinejoin="round"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    twitter: <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z" strokeLinecap="round" strokeLinejoin="round"/>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/></>
  };
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className} style={style}>
      {icons[name] || null}
    </svg>
  );
};

/* ═══════════════════════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════════════════════ */
const TRANSLATIONS = {
  fr: {
    langBtn: 'EN',
    navServices: 'Services',
    navProfessions: 'Métiers',
    navFounder: 'Mon histoire',
    navAvis: 'Avis',
    navFaq: 'FAQ',
    navDownload: 'Télécharger',
    navDownloadFree: 'Télécharger gratuitement',
    heroEyebrow: 'Application N°1 au Sénégal',
    heroTitle1: 'Tout ce dont vous ',
    heroTitle2: 'avez besoin,',
    heroTitle3: ' à portée de main',
    heroSub: 'Wallu connecte chaque Sénégalais à des prestataires vérifiés, des coursiers de confiance, des livreurs et une marketplace locale. Zéro commission, contact direct.',
    statProviders: 'Prestataires',
    statProfessions: 'Métiers',
    statCities: 'Villes couvertes',
    trust1: 'Prestataires vérifiés (NIN)',
    trust2: 'Zéro commission',
    trust3: 'Partout au Sénégal',
    trust4: '4.8 ★ sur les stores',
    trust5: 'Contact direct, sans intermédiaire',
    whyBadge: 'Pourquoi Wallu',
    whyHeading: 'Conçu pour la réalité sénégalaise',
    whySub: 'Une application qui comprend vos besoins du quotidien, qu\'il s\'agisse de trouver un artisan, de faire vos courses ou de vendre vos produits.',
    feat1Title: 'Habitat et entretien',
    feat1Desc: 'Plombier, électricien, peintre, menuisier, carreleur, maçon, nettoyage... Tous les artisans du domicile vérifiés et disponibles près de chez vous.',
    feat2Title: 'Service à la personne',
    feat2Desc: 'Ménage, repassage, aide aux courses, garde d\'enfants... Des aides de confiance pour faciliter votre quotidien à la maison.',
    feat3Title: 'Livraison et taxi bagages',
    feat3Desc: 'Livraison express de colis, transport de bagages lourds, aide au déménagement léger. Service rapide de votre porte à destination.',
    feat4Title: 'Location de matériel',
    feat4Desc: 'Véhicules utilitaires, outils de bricolage, matériel de jardinage et d\'entretien. Louez ce dont vous avez besoin sans frais cachés.',
    feat5Title: 'Bien-être et santé',
    feat5Desc: 'Médecin d\'urgences, coach sportif, psychologue, massages relaxants. Prenez soin de vous avec des professionnels vérifiés.',
    feat6Title: 'Mobilité et transport',
    feat6Desc: 'Taxi, VTC, dépanneur, remorqueur, mécanicien. Toutes les solutions de transport et de réparation automobile à portée de main.',
    partner1Title: 'Artisans & Prestataires',
    partner1Desc: 'Vous avez un savoir-faire ? Rejoignez Wallu pour trouver des clients près de chez vous et augmenter vos revenus. Forte demande client et zéro commission.',
    partner1Btn: 'Devenir prestataire',
    partner2Title: 'Livreurs',
    partner2Desc: 'Devenez livreur partenaire et gagnez de l\'argent à votre rythme. Que vous ayez une moto "Tiak-Tiak" ou une camionnette, inscrivez-vous facilement.',
    partner2Btn: 'Devenir livreur',
    partner3Title: 'Commerçants & Boutiques',
    partner3Desc: 'Vous avez des articles à vendre ? Créez votre boutique sur Wallu Vente, touchez des milliers d\'acheteurs partout au Sénégal et vendez sans frais.',
    partner3Btn: 'Créer ma boutique',
    interfaceBadge: 'Interface',
    interfaceHeading: 'Découvrez l\'application',
    interfaceSub: 'Une interface claire, intuitive et pensée pour faciliter votre quotidien au Sénégal.',
    srvBadge: 'Nos Services',
    srvHeading: 'Les 5 piliers de Wallu',
    srvSub: 'Une seule application pour tous vos besoins du quotidien.',
    profBadge: 'Tous les métiers',
    profHeading: 'Des experts pour chaque besoin',
    profSub: 'Wallu réunit plus de 26 corps de métiers disponibles dans tout le Sénégal. Trouvez le spécialiste dont vous avez besoin en quelques secondes.',
    founderBadge: 'Mon histoire',
    founderQuote: 'Wallu est né d\'un constat simple : trouver un prestataire de confiance au Sénégal relevait trop souvent du bouche-à-oreille ou du hasard. Nous avons décidé de changer ça.',
    founderP1: 'Wallu a été créée avec une ambition claire : digitaliser l\'économie locale du Sénégal en donnant à chaque artisan, coursier et commerçant les outils pour se faire connaître et prospérer, et à chaque famille le moyen de trouver des services fiables en quelques secondes.',
    founderP2: 'Notre vision est de construire un écosystème de confiance où les Sénégalais, qu\'ils soient à Dakar, Touba, Ziguinchor ou Saint-Louis, peuvent accéder à des services de qualité, vendre leurs produits et simplifier leur quotidien grâce à la technologie. Wallu, c\'est la communauté sénégalaise au service de ses membres.',
    founderP3: 'Aujourd\'hui, Wallu est disponible sur l\'App Store et le Google Play Store. Notre mission reste la même : rapprocher les Sénégalais, soutenir l\'économie locale et construire une application dont tout un peuple peut être fier.',
    founderRole: 'Fondateur & Directeur Général, Wallu',
    testiBadge: 'Avis Utilisateurs',
    testiHeading: 'Ce que les Sénégalais disent de Wallu',
    testiSub: 'Des milliers d\'utilisateurs simplifient leur quotidien avec Wallu chaque jour.',
    faqBadge: 'Questions Fréquentes',
    faqHeading: 'Tout ce que vous voulez savoir',
    faqSub: 'Des questions sur Wallu ? Voici les réponses aux questions les plus courantes.',
    ctaBadge: 'Télécharger Wallu',
    ctaHeading: 'Simplifiez votre quotidien dès aujourd\'hui',
    ctaSub: 'Rejoignez des milliers de Sénégalais qui font confiance à Wallu pour leurs services, leurs courses et leurs livraisons.',
    ctaStatsActive: 'Prestataires actifs',
    ctaStatsRating: 'Note moyenne',
    ctaStatsCities: 'Villes couvertes',
    ctaStatsFree: 'Gratuit à télécharger',
    footerDesc: 'L\'application de services N°1 au Sénégal. Prestataires vérifiés, livraisons, courses et marketplace locale. 100% sénégalais.',
    footerNavTitle: 'Navigation',
    footerLegalTitle: 'Légal',
    footerContactTitle: 'Contact',
    footerPrivacy: 'Politique de Confidentialité',
    footerTerms: 'Conditions d\'utilisation',
    footerLegal: 'Mentions légales',
    footerRights: '© 2026 Wallu SN. Tous droits réservés. Application disponible au Sénégal.',
  },
  en: {
    langBtn: 'FR',
    navServices: 'Services',
    navProfessions: 'Professions',
    navFounder: 'My Story',
    navAvis: 'Reviews',
    navFaq: 'FAQ',
    navDownload: 'Download',
    navDownloadFree: 'Download for free',
    heroEyebrow: 'N°1 App in Senegal',
    heroTitle1: 'Everything you ',
    heroTitle2: 'need,',
    heroTitle3: ' at your fingertips',
    heroSub: 'Wallu connects every Senegalese to verified service providers, trusted couriers, delivery drivers, and a local marketplace. Zero commission, direct contact.',
    statProviders: 'Providers',
    statProfessions: 'Professions',
    statCities: 'Cities covered',
    trust1: 'Verified Providers (NIN)',
    trust2: 'Zero Commission',
    trust3: 'Everywhere in Senegal',
    trust4: '4.8 ★ on stores',
    trust5: 'Direct contact, no middleman',
    whyBadge: 'Why Wallu',
    whyHeading: 'Designed for the Senegalese reality',
    whySub: 'An app that understands your daily needs, whether it\'s finding an artisan, running errands, or selling your products.',
    feat1Title: 'Home Maintenance',
    feat1Desc: 'Plumber, electrician, painter, carpenter, tiler, mason, cleaning... All home artisans verified and available near you.',
    feat2Title: 'Personal Services',
    feat2Desc: 'Cleaning, ironing, errands, childcare... Trusted help to make your daily life at home easier.',
    feat3Title: 'Delivery & Baggage Taxi',
    feat3Desc: 'Express parcel delivery, heavy baggage transport, light moving assistance. Fast service from your door to the destination.',
    feat4Title: 'Equipment Rental',
    feat4Desc: 'Utility vehicles, DIY tools, gardening and cleaning equipment. Rent what you need without hidden fees.',
    feat5Title: 'Health & Wellness',
    feat5Desc: 'Emergency doctor, sports coach, psychologist, relaxing massages. Take care of yourself with verified professionals.',
    feat6Title: 'Mobility & Transport',
    feat6Desc: 'Taxi, VTC, breakdown service, towing, mechanic. All transport and car repair solutions at your fingertips.',
    partner1Title: 'Artisans & Providers',
    partner1Desc: 'Do you have a skill? Join Wallu to find clients near you and increase your income. High customer demand and zero commission.',
    partner1Btn: 'Become a provider',
    partner2Title: 'Delivery Partners',
    partner2Desc: 'Become a delivery partner and earn money at your own pace. Whether you have a "Tiak-Tiak" moto or a van, sign up easily.',
    partner2Btn: 'Become a driver',
    partner3Title: 'Merchants & Shops',
    partner3Desc: 'Have items to sell? Create your shop on Wallu Vente, reach thousands of buyers across Senegal and sell without fees.',
    partner3Btn: 'Create my shop',
    interfaceBadge: 'Interface',
    interfaceHeading: 'Discover the app',
    interfaceSub: 'A clear, intuitive interface designed to simplify your daily life in Senegal.',
    srvBadge: 'Our Services',
    srvHeading: 'The 5 pillars of Wallu',
    srvSub: 'A single app for all your daily needs.',
    profBadge: 'All Professions',
    profHeading: 'Experts for every need',
    profSub: 'Wallu brings together over 26 professions available throughout Senegal. Find the specialist you need in seconds.',
    founderBadge: 'My Story',
    founderQuote: 'Wallu was born from a simple observation: finding a reliable provider in Senegal too often relied on word-of-mouth or chance. We decided to change that.',
    founderP1: 'Wallu was created with a clear ambition: to digitize the local economy of Senegal by giving every artisan, courier, and merchant the tools to become known and prosper, and every family the means to find reliable services in seconds.',
    founderP2: 'Our vision is to build an ecosystem of trust where the Senegalese, whether they are in Dakar, Touba, Ziguinchor, or Saint-Louis, can access quality services, sell their products, and simplify their daily lives through technology. Wallu is the Senegalese community serving its members.',
    founderP3: 'Today, Wallu is available on the App Store and Google Play Store. Our mission remains the same: bringing the Senegalese closer, supporting the local economy, and building an app an entire nation can be proud of.',
    founderRole: 'Founder & CEO, Wallu',
    testiBadge: 'User Reviews',
    testiHeading: 'What the Senegalese are saying about Wallu',
    testiSub: 'Thousands of users simplify their daily lives with Wallu every day.',
    faqBadge: 'Frequently Asked Questions',
    faqHeading: 'Everything you want to know',
    faqSub: 'Questions about Wallu? Here are the answers to the most common ones.',
    ctaBadge: 'Download Wallu',
    ctaHeading: 'Simplify your daily life today',
    ctaSub: 'Join thousands of Senegalese who trust Wallu for their services, errands, and deliveries.',
    ctaStatsActive: 'Active providers',
    ctaStatsRating: 'Average rating',
    ctaStatsCities: 'Cities covered',
    ctaStatsFree: 'Free to download',
    footerDesc: 'The N°1 services app in Senegal. Verified providers, deliveries, errands, and a local marketplace. 100% Senegalese.',
    footerNavTitle: 'Navigation',
    footerLegalTitle: 'Legal',
    footerContactTitle: 'Contact',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerLegal: 'Legal Notice',
    footerRights: '© 2026 Wallu SN. All rights reserved. App available in Senegal.',
  }
};

const DATA = {
  fr: {
    professions: [
      // Habitat et entretien
      { name: 'Peintre', icon: 'check', cat: 'Habitat' },
      { name: 'Carreleur', icon: 'check', cat: 'Habitat' },
      { name: 'Menuisier', icon: 'check', cat: 'Habitat' },
      { name: 'Électricien', icon: 'zap', cat: 'Habitat' },
      { name: 'Plombier', icon: 'zap', cat: 'Habitat' },
      { name: 'Maçon', icon: 'check', cat: 'Habitat' },
      { name: 'Serrurier', icon: 'check', cat: 'Habitat' },
      // Service à la personne
      { name: 'Femme de ménage', icon: 'users', cat: 'Personne' },
      { name: 'Homme de ménage', icon: 'users', cat: 'Personne' },
      { name: 'Aide-ménagère', icon: 'users', cat: 'Personne' },
      { name: 'Nounou / Baby-sitter', icon: 'users', cat: 'Personne' },
      // Livraison
      { name: 'Livreur express', icon: 'truck', cat: 'Livraison' },
      // Location de matériel
      { name: 'Loueur de matériel', icon: 'check', cat: 'Location' },
      { name: "Loueur d'équipement", icon: 'check', cat: 'Location' },
      { name: 'Jardinier', icon: 'map', cat: 'Location' },
      // Bien-être & Santé
      { name: 'Coach sportif', icon: 'star', cat: 'Sante' },
      { name: 'Psychologue', icon: 'star', cat: 'Sante' },
      { name: 'Masseur / Masseuse', icon: 'star', cat: 'Sante' },
      // Mobilité & Transport
      { name: 'Dépanneur', icon: 'zap', cat: 'Mobilite' },
      { name: 'Chauffeur de taxi', icon: 'truck', cat: 'Mobilite' },
      { name: 'Chauffeur VTC', icon: 'truck', cat: 'Mobilite' },
      { name: 'Remorqueur', icon: 'truck', cat: 'Mobilite' },
      { name: 'Mécanicien', icon: 'check', cat: 'Mobilite' },
      // Autres
      { name: 'Couturier / Tailleur', icon: 'check', cat: 'Autre' },
      { name: 'Coiffeur / Coiffeuse', icon: 'check', cat: 'Autre' },
      { name: 'Photographe', icon: 'check', cat: 'Autre' },
      { name: 'Traiteur', icon: 'check', cat: 'Autre' },
    ],
    services: [
      {
        id: 'prestataires',
        icon: 'users',
        label: 'Prestataires',
        title: 'Des artisans vérifiés et notés',
        desc: 'Besoin d\'un plombier, électricien, menuisier ou d\'une nounou ? Accédez à plus de 26 métiers différents. Comparez les profils, vérifiez les avis, et contactez-les directement.',
        features: [
          'Zéro commission : Contact direct via Appel ou WhatsApp, aucun frais caché.',
          'Sécurité absolue : Tous les prestataires fournissent leur pièce d\'identité (NIN).',
          'Hyper-Localisation : Trouvez les meilleurs artisans juste à côté de chez vous.',
        ],
        color: '#083A64',
        image: '/artisan_real.jpg'
      },
      {
        id: 'yobbuulma',
        icon: 'truck',
        label: 'Yobbuul ma',
        title: 'Livraison express en moto ou camionnette',
        desc: 'Que ce soit un petit colis urgent ou un déménagement, nos livreurs partenaires sont disponibles. Choisissez la moto "Tiak-Tiak" pour les petits plis ou la camionnette pour les grandes livraisons.',
        features: [
          'Rapide & Flexible : Moto pour la ville, camionnette pour le lourd.',
          'Zéro commission : Payez directement le livreur au juste prix.',
          'Couverture nationale : Expédiez vos colis partout au Sénégal.',
        ],
        color: '#FFD900',
        image: '/yobbuulma_real.jpg'
      },
      {
        id: 'ndouguilma',
        icon: 'shopping',
        label: 'Ndouguilma',
        title: 'Vos courses au marché, sans bouger',
        desc: 'Confiez vos commissions à un coursier de confiance. Listez vos besoins (légumes frais, pharmacie, boutique, dépôt d\'argent) et il s\'en charge pour vous.',
        features: [
          'Polyvalent : Supermarché, pharmacie, marché local, Wave ou Orange Money.',
          'Confiance totale : Le NIN est obligatoire pour tous nos coursiers.',
          'Livraison directe : Gagnez du temps et restez chez vous.',
        ],
        color: '#0A6EBD',
        image: coursierImg
      },
      {
        id: 'vente',
        icon: 'shopping',
        label: 'Wallu Vente',
        title: 'Achetez et vendez partout au Sénégal',
        desc: 'Wallu Vente est votre marketplace 100% sénégalaise. Mettez en vente vos articles et atteignez des acheteurs dans tout le pays. Le contact est direct.',
        features: [
          'Zéro commission : Vendez sans frais, gardez 100% de vos revenus.',
          'Vendeurs vérifiés : Un écosystème de confiance pour acheter sereinement.',
          'Catégories variées : Mode, électronique, véhicules, immobilier, food.',
        ],
        color: '#FFD900',
        image: '/client.png'
      },
      {
        id: 'walluai',
        icon: 'star',
        label: 'Wallu AI',
        title: 'Votre assistant intelligent intégré',
        desc: 'Besoin d\'aide pour trouver un service ou utiliser l\'application ? Wallu AI, propulsé par les dernières technologies, est là pour vous guider.',
        features: [
          'Texte : Écrivez naturellement à l\'assistant pour formuler vos demandes.',
          'Recherche instantanée : Trouvez immédiatement le bon prestataire ou service.',
          'Assistance 24/7 : Wallu AI ne dort jamais et vous aide à tout moment.',
        ],
        color: '#083A64',
        image: walluAiImg
      },
    ],
    testimonials: [
      { letter: 'F', name: 'Fatou Ndiaye', role: 'Mère de famille, Dakar', text: 'Le service Ndouguilma m\'a sauvée ! Je n\'ai plus le temps d\'aller au marché avec mon travail. Le coursier m\'amène mes légumes frais directement à la maison. Dieureudieuf Wallu !' },
      { letter: 'M', name: 'Moussa Diop', role: 'Utilisateur régulier, Pikine', text: 'J\'avais une fuite d\'eau à 22h. J\'ai trouvé un plombier sur Wallu en 5 minutes. J\'ai pu voir sa note et sa carte vérifiée avant de l\'appeler. Très rassurant, vraiment professionnel.' },
      { letter: 'A', name: 'Aminata Sow', role: 'Commerçante, Thiès', text: 'Mes ventes ont explosé depuis que j\'ai mis ma boutique sur Wallu Vente. Les clients m\'appellent directement et Wallu ne me prend aucune commission. C\'est incroyable !' },
      { letter: 'I', name: 'Ibrahima Fall', role: 'Entrepreneur, Rufisque', text: 'Pour envoyer mes colis vers Pikine ou Guédiawaye, j\'utilise toujours Yobbuul ma. Les livreurs sont rapides, polis et toujours à l\'heure. Je recommande à tout le monde.' },
      { letter: 'O', name: 'Ousmane Kane', role: 'Menuisier, Parcelles Assainies', text: 'Je suis artisan sur Wallu depuis 6 mois. Mon planning est plein chaque semaine. C\'est la meilleure application pour nous les prestataires, on est directement en contact avec les clients.' },
      { letter: 'A', name: 'Awa Sy', role: 'Retraitée, Saint-Louis', text: 'Mon fils m\'a inscrite sur Wallu. Maintenant je commande mes médicaments avec Ndouguilma sans bouger de chez moi. Les coursiers sont très respectueux avec les personnes âgées.' },
    ],
    faqs: [
      { q: 'Qu\'est-ce que Wallu ?', a: 'Wallu est une super-application sénégalaise qui vous connecte directement avec des prestataires, des coursiers pour vos commissions (Ndouguilma), des livreurs (Yobbuul ma) et une marketplace. Sans intermédiaire ni commission.' },
      { q: 'L\'application est-elle gratuite ?', a: 'Oui, Wallu est 100% gratuit à télécharger et à utiliser. Vous payez directement le prestataire ou le vendeur selon le prix convenu. Wallu ne prend aucune commission sur vos transactions.' },
      { q: 'Comment fonctionne Ndouguilma ?', a: 'Vous ouvrez l\'app, décrivez votre commission (marché, pharmacie, Wave, etc.), un coursier vérifié accepte la demande, effectue les achats et vous livre.' },
      { q: 'Les profils sont-ils vraiment vérifiés ?', a: 'Oui. La pièce d\'identité nationale (NIN) est exigée, notamment pour les coursiers. En plus, le système d\'avis et de badges "Top Profil" garantit la confiance.' },
      { q: 'Comment fonctionne Wallu AI ?', a: 'C\'est un assistant intégré. Vous pouvez lui écrire ou lui parler directement dans l\'application pour lui demander de trouver un plombier, de vous expliquer comment vendre un article, etc.' },
      { q: 'Wallu est disponible dans quelle ville ?', a: 'De Dakar à Saint-Louis, de Ziguinchor à Tambacounda, Wallu couvre tout le territoire national avec plus de 70 villes couvertes.' },
    ]
  },
  en: {
    professions: [
      // Home maintenance
      { name: 'Painter', icon: 'check', cat: 'Home' },
      { name: 'Tiler', icon: 'check', cat: 'Home' },
      { name: 'Carpenter', icon: 'check', cat: 'Home' },
      { name: 'Electrician', icon: 'zap', cat: 'Home' },
      { name: 'Plumber', icon: 'zap', cat: 'Home' },
      { name: 'Mason', icon: 'check', cat: 'Home' },
      { name: 'Locksmith', icon: 'check', cat: 'Home' },
      // Personal services
      { name: 'Housekeeper (F)', icon: 'users', cat: 'Personal' },
      { name: 'Housekeeper (M)', icon: 'users', cat: 'Personal' },
      { name: 'Home Helper', icon: 'users', cat: 'Personal' },
      { name: 'Nanny / Baby-sitter', icon: 'users', cat: 'Personal' },
      // Delivery
      { name: 'Express Courier', icon: 'truck', cat: 'Delivery' },
      // Equipment rental
      { name: 'Equipment Rental', icon: 'check', cat: 'Rental' },
      { name: 'Tool Rental', icon: 'check', cat: 'Rental' },
      { name: 'Gardener', icon: 'map', cat: 'Rental' },
      // Health & Wellness
      { name: 'Sports Coach', icon: 'star', cat: 'Health' },
      { name: 'Psychologist', icon: 'star', cat: 'Health' },
      { name: 'Masseur / Masseuse', icon: 'star', cat: 'Health' },
      // Mobility & transport
      { name: 'Breakdown Service', icon: 'zap', cat: 'Mobility' },
      { name: 'Taxi Driver', icon: 'truck', cat: 'Mobility' },
      { name: 'VTC Driver', icon: 'truck', cat: 'Mobility' },
      { name: 'Tow Truck', icon: 'truck', cat: 'Mobility' },
      { name: 'Mechanic', icon: 'check', cat: 'Mobility' },
      // Others
      { name: 'Tailor', icon: 'check', cat: 'Other' },
      { name: 'Hairdresser', icon: 'check', cat: 'Other' },
      { name: 'Photographer', icon: 'check', cat: 'Other' },
      { name: 'Caterer', icon: 'check', cat: 'Other' },
    ],
    services: [
      {
        id: 'prestataires',
        icon: 'users',
        label: 'Providers',
        title: 'Verified artisans rated by the community',
        desc: 'Need a plumber, electrician, carpenter or a nanny? Access over 26 different professions. Compare profiles, check reviews, and contact them directly via call or WhatsApp.',
        features: [
          'Zero Commission: Direct contact via Call or WhatsApp, no hidden fees.',
          'Absolute Security: All providers submit their National ID (NIN).',
          'Hyper-Localization: Find the best artisans right in your neighborhood.',
        ],
        color: '#083A64',
        image: '/artisan_real.jpg'
      },
      {
        id: 'yobbuulma',
        icon: 'truck',
        label: 'Yobbuul ma',
        title: 'Express delivery by moto or van',
        desc: 'Whether it\'s an urgent small package to deliver or a complete move, our delivery partners are available. Choose the moto for small items or the van for large deliveries.',
        features: [
          'Fast & Flexible: Moto for the city, van for heavy loads.',
          'Zero Commission: Pay the driver directly at a fair price.',
          'National Coverage: Ship your packages anywhere in Senegal.',
        ],
        color: '#FFD900',
        image: '/yobbuulma_real.jpg'
      },
      {
        id: 'ndouguilma',
        icon: 'shopping',
        label: 'Ndouguilma',
        title: 'Your errands run for you',
        desc: 'Entrust your shopping and errands to a trusted courier. List your needs (fresh vegetables, pharmacy, shop, money deposit) and they take care of it.',
        features: [
          'Versatile: Supermarket, pharmacy, local market, Wave or Orange Money.',
          'Total Trust: NIN is mandatory for all our couriers.',
          'Direct Delivery: Save time and stay comfortable at home.',
        ],
        color: '#0A6EBD',
        image: coursierImg
      },
      {
        id: 'vente',
        icon: 'shopping',
        label: 'Wallu Vente',
        title: 'Buy and sell everywhere in Senegal',
        desc: 'Wallu Vente is your 100% Senegalese marketplace. Sell your items and reach buyers across the country. Contact is direct.',
        features: [
          'Zero Commission: Sell for free, keep 100% of your earnings.',
          'Verified Sellers: A trusted ecosystem to buy with peace of mind.',
          'Varied Categories: Fashion, electronics, vehicles, real estate, food.',
        ],
        color: '#FFD900',
        image: '/client.png'
      },
      {
        id: 'walluai',
        icon: 'star',
        label: 'Wallu AI',
        title: 'Your built-in smart assistant',
        desc: 'Need help finding a service or using the app? Wallu AI is here to guide you.',
        features: [
          'Text: Write naturally to the assistant to make your requests.',
          'Instant Search: Find the right provider or service immediately.',
          '24/7 Support: Wallu AI never sleeps and helps you anytime.',
        ],
        color: '#083A64',
        image: walluAiImg
      },
    ],
    testimonials: [
      { letter: 'F', name: 'Fatou Ndiaye', role: 'Mother, Dakar', text: 'The Ndouguilma service saved me! I no longer have time to go to the market with my job. The courier brings my fresh vegetables directly to the house.' },
      { letter: 'M', name: 'Moussa Diop', role: 'Regular User, Pikine', text: 'I had a water leak at 10 PM. I found a plumber on Wallu in 5 minutes. I could see his rating and verified ID before calling him. Very reassuring, truly professional.' },
      { letter: 'A', name: 'Aminata Sow', role: 'Merchant, Thiès', text: 'My sales skyrocketed since I put my shop on Wallu Vente. Clients call me directly and Wallu takes zero commission. It\'s incredible!' },
      { letter: 'I', name: 'Ibrahima Fall', role: 'Entrepreneur, Rufisque', text: 'To send my packages, I always use Yobbuul ma. The drivers are fast, polite, and always on time. I recommend to everyone.' },
      { letter: 'O', name: 'Ousmane Kane', role: 'Carpenter, Parcelles Assainies', text: 'I\'ve been an artisan on Wallu for 6 months. My schedule is full every week. It\'s the best app for us providers, we are directly in contact with clients.' },
      { letter: 'A', name: 'Awa Sy', role: 'Retiree, Saint-Louis', text: 'My son signed me up on Wallu. Now I order my medicines with Ndouguilma without leaving home. The couriers are very respectful to the elderly.' },
    ],
    faqs: [
      { q: 'What is Wallu?', a: 'Wallu is a Senegalese super-app that connects you directly with service providers, couriers for your errands (Ndouguilma), delivery drivers (Yobbuul ma) and a local marketplace. Without middleman or commission.' },
      { q: 'Is the app free?', a: 'Yes, Wallu is 100% free to download and use. You pay the provider or seller directly according to the agreed price. Wallu takes zero commission on your transactions.' },
      { q: 'How does Ndouguilma work?', a: 'You open the app, describe your errand (market, pharmacy, Wave, etc.), a trusted courier accepts the request, does the shopping and delivers to you.' },
      { q: 'Are the profiles truly verified?', a: 'Yes. The National Identity Card (NIN) is required, especially for couriers. Plus, the rating system and "Top Profile" badges guarantee trust.' },
      { q: 'How does Wallu AI work?', a: 'It\'s a built-in assistant. You can text or speak to it directly in the app to ask it to find a plumber, explain how to sell an item, etc.' },
      { q: 'In which cities is Wallu available?', a: 'Everywhere in Senegal! Dakar, Thiès, Saint-Louis, Touba, Ziguinchor, Kaolack, Mbour and all other towns.' },
    ]
  },
};

function TestiCard({ letter, name, role, text }) {
  return (
    <div className="testi-card">
      <div className="testi-header">
        <div className="testi-avatar">{letter}</div>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-role">{role}</div>
        </div>
      </div>
      <div className="testi-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={16} style={{ color: 'var(--yellow)' }} />
        ))}
      </div>
      <p className="testi-text">&ldquo;{text}&rdquo;</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item${open ? ' active' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <span>{question}</span>
        <Icon name="plus" size={20} className="faq-icon" />
      </div>
      <div className="faq-answer" style={{ maxHeight: open ? '400px' : '0' }}>
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('fr');
  const t = TRANSLATIONS[lang];
  const data = DATA[lang];

  const [activeService, setActiveService] = useState('prestataires');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  // Nav scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]); // Re-run when lang changes because text elements might be recreated

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.15)' : 'none' }}>
        <div className="nav-inner">
          <div className="nav-logo">
            <img src={walluIcon} alt="Wallu Logo" />
            Wallu
          </div>

          <nav className="nav-links">
            <a onClick={() => scrollTo('services')}>{t.navServices}</a>
            <a onClick={() => scrollTo('professions')}>{t.navProfessions}</a>
            <a onClick={() => scrollTo('founder')}>{t.navFounder}</a>
            <a onClick={() => scrollTo('testimonials')}>{t.navAvis}</a>
            <a onClick={() => scrollTo('faq')}>{t.navFaq}</a>
          </nav>

          <div className="nav-cta">
            <button className="lang-btn" onClick={toggleLanguage}>
              <Icon name="globe" size={16} /> {t.langBtn}
            </button>
            <a href="#download" className="btn-nav">{t.navDownload}</a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: 'rgba(5,40,68,0.98)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a onClick={() => scrollTo('services')} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{t.navServices}</a>
                <a onClick={() => scrollTo('professions')} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{t.navProfessions}</a>
                <a onClick={() => scrollTo('founder')} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{t.navFounder}</a>
                <a onClick={() => scrollTo('testimonials')} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{t.navAvis}</a>
                <a onClick={() => scrollTo('faq')} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>{t.navFaq}</a>
                <a href="#download" className="btn-nav" style={{ textAlign: 'center' }}>{t.navDownloadFree}</a>
                <button className="lang-btn" onClick={toggleLanguage} style={{ justifyContent: 'center' }}>
                  <Icon name="globe" size={16} /> {t.langBtn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="hero-eyebrow">
                  <span></span>
                  🇸🇳 {t.heroEyebrow}
                </div>

                <h1>
                  {t.heroTitle1}<em>{t.heroTitle2}</em>{t.heroTitle3}
                </h1>

                <p className="hero-sub">
                  {t.heroSub}
                </p>

                <div className="hero-actions">
                  <div className="store-badge-wrap">
                    <a href="https://apps.apple.com/app/wallu/id6796547523" target="_blank" rel="noopener noreferrer" className="store-badge">
                      <img src={appleStoreBadge} alt="App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=wallu.sn&hl=fr" target="_blank" rel="noopener noreferrer" className="store-badge">
                      <img src={playStoreBadge} alt="Google Play" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
              >
                <div className="hero-glow" />
                <div className="hero-phone-mockup">
                  <img src="/artisan_real.jpg" alt="Wallu Application" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="scroll-hint">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </div>
        </section>

        {/* ── TRUST BAR ──────────────────────────────────────── */}
        <section className="trust-bar">
          <div className="container">
            <div className="trust-inner">
              {[
                { icon: 'shield', text: t.trust1 },
                { icon: 'zap', text: t.trust2 },
                { icon: 'map', text: t.trust3 },
                { icon: 'star', text: t.trust4 },
                { icon: 'phone', text: t.trust5 },
              ].map((item, i) => (
                <div className="trust-item" key={i}>
                  <Icon name={item.icon} size={18} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────────────────── */}
        <section className="features-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge">✦ {t.whyBadge}</div>
              <h2 style={{ color: 'var(--blue)' }}>{t.whyHeading}</h2>
              <p>{t.whySub}</p>
            </div>

            <div className="features-grid">
              {[
                { icon: 'shield', title: t.feat1Title, desc: t.feat1Desc },
                { icon: 'phone', title: t.feat2Title, desc: t.feat2Desc },
                { icon: 'zap', title: t.feat3Title, desc: t.feat3Desc },
                { icon: 'map', title: t.feat4Title, desc: t.feat4Desc },
                { icon: 'star', title: t.feat5Title, desc: t.feat5Desc },
                { icon: 'sparkles', title: t.feat6Title, desc: t.feat6Desc },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="feature-card fade-up"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="feature-icon-wrap">
                    <Icon name={f.icon} size={26} />
                  </div>
                  <h3>{f.title}</h3>
                  <p style={{ margin: 0 }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERFACE SHOWCASE (YASSIR STYLE) ─────────────────────────────── */}
        <section className="interface-section">
          <div className="container" style={{ padding: 0 }}>
            <div className="interface-container fade-up">
              
              {/* Left Column (Text & Buttons) */}
              <div className="interface-text-col">
                <div className="interface-item">
                  <h3>{t.partner1Title}</h3>
                  <p>{t.partner1Desc}</p>
                  <a href="#download" className="interface-btn">{t.partner1Btn}</a>
                </div>
                
                <div className="interface-item">
                  <h3>{t.partner2Title}</h3>
                  <p>{t.partner2Desc}</p>
                  <a href="#download" className="interface-btn">{t.partner2Btn}</a>
                </div>
                
                <div className="interface-item">
                  <h3>{t.partner3Title}</h3>
                  <p>{t.partner3Desc}</p>
                  <a href="#download" className="interface-btn">{t.partner3Btn}</a>
                </div>
              </div>

              {/* Right Column (Image Mockup) */}
              <div className="interface-img-col">
                <div className="interface-shape shape-1"></div>
                <div className="interface-shape shape-2"></div>
                <img src={appInterfaceImg} alt="Interface Wallu" className="interface-mockup" />
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICES (4 pillars) ────────────────────────────── */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header fade-up">
              <h2>{t.srvHeading}</h2>
              <p>{t.srvSub}</p>
            </div>
            
            <div className="services-tabs fade-up">
              {data.services.map(s => (
                <button
                  key={s.id}
                  className={`service-tab ${activeService === s.id ? 'active' : ''}`}
                  onClick={() => setActiveService(s.id)}
                  style={{ '--active-color': s.color }}
                >
                  <Icon name={s.icon} size={16} /> <span>{s.label}</span>
                </button>
              ))}
            </div>

            <div className="service-panels fade-up">
              <AnimatePresence mode="wait">
              {data.services.map(s => (
                activeService === s.id && (
                <motion.div 
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="service-panel active"
                >
                  <div className="service-panel-inner">
                    <div className="sp-content">
                      <div className="sp-eyebrow" style={{ color: 'var(--yellow)', borderColor: 'rgba(255,217,0,0.4)', background: 'rgba(255,217,0,0.12)' }}>✦ {s.label}</div>
                      <h3 className="sp-title">{s.title}</h3>
                      <p className="sp-desc">{s.desc}</p>
                      
                      <div className="sp-features">
                        {s.features.map((f, i) => {
                           const parts = f.split(':');
                           const fTitle = parts[0];
                           const fDesc = parts.slice(1).join(':');
                           return (
                             <div key={i} className="sp-feature-item">
                                <div className="check" style={{ background: 'rgba(255,217,0,0.2)', border: '1px solid rgba(255,217,0,0.4)' }}>
                                  <Icon name="check" size={12} style={{ color: '#FFD900' }} />
                                </div>
                               <div>
                                 <strong style={{ color: 'var(--yellow)' }}>{fTitle.trim()}</strong>{fDesc ? <span style={{ color: 'rgba(255,255,255,0.85)' }}>: {fDesc.trim()}</span> : ''}
                               </div>
                             </div>
                           );
                        })}
                       </div>
                      <a href="#download" className="btn-nav" style={{ background: 'var(--yellow)', color: 'var(--blue)', border: 'none', display: 'inline-block' }}>{t.navDownload}</a>
                    </div>
                    
                    <div className="sp-img-wrap">
                      <img src={s.image} alt={s.label} />
                    </div>
                  </div>
                </motion.div>
                )
              ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── PROFESSIONS ────────────────────────────────────── */}
        <section id="professions" className="professions-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge">✦ {t.profBadge}</div>
              <h2>{t.profHeading}</h2>
              <p>{t.profSub}</p>
            </div>

            <div className="professions-grid">
              {data.professions.map((p, i) => (
                <div
                  key={i}
                  className="profession-card fade-up"
                  style={{ transitionDelay: `${(i % 6) * 0.06}s` }}
                >
                  <div className="prof-icon">
                    <Icon name={p.icon} size={20} />
                  </div>
                  <span className="prof-name">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER SECTION ────────────────────────────────── */}
        <section id="founder" className="founder-section">
          <div className="container">
            <div className="founder-grid">
              {/* Photo */}
              <motion.div
                className="founder-img-wrap fade-up"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="founder-img-frame">
                  <img
                    src={founderPhoto}
                    alt="Assane Sow – Founder & CEO Wallu"
                  />
                </div>
                <div className="founder-img-badge">
                  <div className="badge-num">🇸🇳</div>
                  <div className="badge-label">Fièrement sénégalais</div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="founder-content fade-up"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="section-badge" style={{ marginBottom: '24px' }}>✦ {t.founderBadge}</div>

                <blockquote className="founder-quote">
                  "{t.founderQuote}"
                </blockquote>

                <p className="founder-story">
                  {t.founderP1}
                </p>
                <p className="founder-story">
                  {t.founderP2}
                </p>
                <p className="founder-story">
                  {t.founderP3}
                </p>

                <div className="founder-name-block">
                  <div className="founder-name">Assane Sow</div>
                  <div className="founder-role">{t.founderRole}</div>
                  <div className="founder-tag">
                    <Icon name="map" size={14} /> Dakar, Sénégal
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────── */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge">✦ {t.testiBadge}</div>
              <h2>{t.testiHeading}</h2>
              <p>{t.testiSub}</p>
            </div>

            <div className="testi-grid">
              {data.testimonials.map((tInfo, i) => (
                <div key={i} className="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <TestiCard {...tInfo} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge">✦ {t.faqBadge}</div>
              <h2>{t.faqHeading}</h2>
              <p>{t.faqSub}</p>
            </div>
            <div className="faq-list fade-up">
              {data.faqs.map((f, i) => (
                <FAQItem key={i} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section id="download" className="cta-section">
          <div className="container">
            <div className="cta-inner fade-up">
              <div className="section-badge" style={{ background: 'rgba(255,217,0,0.15)', color: 'var(--yellow)', border: '1px solid rgba(255,217,0,0.3)' }}>
                ✦ {t.ctaBadge}
              </div>
              <h2>{t.ctaHeading}</h2>
              <p>{t.ctaSub}</p>

              <div className="cta-stores">
                <a
                  href="https://apps.apple.com/app/wallu/id6796547523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-store-btn"
                >
                  <img src={appleStoreBadge} alt="App Store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=wallu.sn&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-store-btn android-btn"
                >
                  <img src={playStoreBadge} alt="Google Play" />
                </a>
              </div>


            </div>
          </div>
        </section>
      </main>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header fade-up">
            <h2>Contactez-nous</h2>
            <p>Notre équipe est à votre disposition pour toute question ou support technique.</p>
          </div>
          <div className="contact-cards fade-up">
             <div className="contact-card">
                <div className="contact-icon"><Icon name="users" size={24} /></div>
                <h3>Gestion & Partenariats</h3>
                <p>Pour toute question commerciale ou demande de partenariat.</p>
                <div className="contact-links-stack">
                  <a href="tel:+221774682474" className="contact-link">+221 77 468 24 74</a>
                  <a href="mailto:assane-service@wallu.sn" className="contact-link">assane-service@wallu.sn</a>
                </div>
             </div>
             <div className="contact-card">
                <div className="contact-icon"><Icon name="mail" size={24} /></div>
                <h3>Support Développeur</h3>
                <p>Pour les problèmes techniques ou suggestions sur l'application.</p>
                <div className="contact-links-stack">
                  <a href="tel:+221777542053" className="contact-link">+221 77 754 20 53</a>
                  <a href="mailto:support@wallu.sn" className="contact-link">support@wallu.sn</a>
                  <a href="mailto:momardiop0311@gmail.com" className="contact-link">momardiop0311@gmail.com</a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={walluIcon} alt="Wallu" />
                Wallu
              </div>
              <p className="footer-desc">
                {t.footerDesc}
              </p>
              <div className="footer-socials">
                <a href="https://www.facebook.com/wallusn" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <Icon name="facebook" size={18} />
                </a>
                <a href="https://www.instagram.com/wallu.sn" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <Icon name="instagram" size={18} />
                </a>
                <a href="https://twitter.com/wallusn" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter / X">
                  <Icon name="twitter" size={18} />
                </a>
              </div>
              
              <div className="footer-lang-btn" onClick={toggleLanguage}>
                <div className="lang-icon-circle">
                  <Icon name="globe" size={18} />
                </div>
                <span>{lang === 'fr' ? 'Français' : 'English'}</span>
                <Icon name="chevronDown" size={16} />
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-col">
              <h4>{t.footerNavTitle}</h4>
              <ul>
                <li><a onClick={() => scrollTo('services')}>{t.navServices}</a></li>
                <li><a onClick={() => scrollTo('professions')}>{t.navProfessions}</a></li>
                <li><a onClick={() => scrollTo('founder')}>{t.navFounder}</a></li>
                <li><a onClick={() => scrollTo('testimonials')}>{t.navAvis}</a></li>
                <li><a onClick={() => scrollTo('faq')}>{t.navFaq}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>{t.footerLegalTitle}</h4>
              <ul>
                <li><a href="/privacy.html" target="_blank">{t.footerPrivacy}</a></li>
                <li><a href="https://docs.google.com/document/d/1KS3E0WOi-Uj1U6fDjcMuLgjnolnwYCkPQSTaLNID9VA/edit" target="_blank" rel="noopener noreferrer">{t.footerTerms}</a></li>
                <li><a href="#">{t.footerLegal}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>{t.footerContactTitle}</h4>
              <ul>
                <li className="footer-contact-item">
                  <Icon name="mail" size={16} />
                  <a href="mailto:assane-service@wallu.sn">assane-service@wallu.sn</a>
                </li>
                <li className="footer-contact-item">
                  <Icon name="phone" size={16} />
                  <a href="tel:+221777542053">+221 77 754 20 53</a>
                </li>
                <li className="footer-contact-item">
                  <Icon name="mail" size={16} />
                  <a href="mailto:support@wallu.sn">support@wallu.sn</a>
                </li>
                <li className="footer-contact-item">
                  <Icon name="mail" size={16} />
                  <a href="mailto:momardiop0311@gmail.com">momardiop0311@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>{t.footerRights} • Développé par Momar Diop</p>
            <div className="footer-bottom-links">
              <a href="/privacy.html">{t.footerPrivacy}</a>
              <a href="https://docs.google.com/document/d/1KS3E0WOi-Uj1U6fDjcMuLgjnolnwYCkPQSTaLNID9VA/edit" target="_blank" rel="noopener noreferrer">{t.footerTerms}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
