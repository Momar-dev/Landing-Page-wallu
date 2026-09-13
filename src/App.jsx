import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const walluIcon = '/icon.png';
import founderPhoto from './Assane Sow.jpeg';
import appleStoreBadge from './apple store.svg';
import playStoreBadge from './playstore.svg';
import appInterfaceImg from './page accueil appli mobile.png';


/* ═══════════════════════════════════════════════════════════
   ICONS & DATA
   ═══════════════════════════════════════════════════════════ */
const Icon = ({ name, size = 24, className, style }) => {
  const icons = {
    check: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />,
    chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />,
    chevronLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />,
    chevronRight: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />,
    arrowRight: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />,
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
    user: <><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></>,
    wrench: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.07a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.446.108.905.05 1.344" />,
    tools: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-.058.439-.241.855-.544 1.218l-7.618 9.141a2.548 2.548 0 11-3.586-3.586l9.141-7.618c.363-.303.779-.486 1.218-.544A4.5 4.5 0 0121.75 6.75z" />,
    bike: <><circle cx="5.5" cy="17.5" r="3.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="18.5" cy="17.5" r="3.5" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 6h-3l-3 7h6.5l2-4.5H19M5.5 17.5l4-7.5M12 17.5V13" /></>,
    car: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h16.5m-16.5 0a2.25 2.25 0 00-2.25 2.25v.75a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.75a2.25 2.25 0 00-2.25-2.25m15 0a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-.75a2.25 2.25 0 012.25-2.25m-13.5-3l1.875-5.625A2.25 2.25 0 0110.25 4.5h3.5a2.25 2.25 0 012.133 1.531L17.75 12" />,
    package: <><path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5V7.5L12 2.25 3 7.5v9l9 5.25 9-5.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" /></>,
    tag: <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.386a10.96 10.96 0 003.545-3.545c.486-.827.313-1.908-.386-2.607L9.425 3.425A2.25 2.25 0 009.568 3zM6 6h.008v.008H6V6z" />,
    bot: <><rect x="3" y="11" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="5" r="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4M8 15h.01M16 15h.01" /></>,
    messageSquare: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    smartphone: <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />,
    home: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
    zap: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeLinecap="round" strokeLinejoin="round"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    twitter: <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z" strokeLinecap="round" strokeLinejoin="round"/>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/></>,
    linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16.73.65 13 2.48a13.38 13.38 0 00-7 0C2.27.65 1.09 1 1.09 1A5.07 5.07 0 001 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>,
    tiktok: <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" strokeLinecap="round" strokeLinejoin="round"/>,
    paint: <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l9.75 9.75" />,
    scissors: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm0 0l6.656 3.843m-3.808 2.199l-1.312.758m0 0a3 3 0 11-5.196-3 3 3 0 015.196 3zm0 0l6.656-3.843m0 0l5.856-3.38m-5.856 3.38l5.856 3.38" />,
    camera: <><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><circle cx="12" cy="13" r="3.75" strokeLinecap="round" strokeLinejoin="round" /></>,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
    utensils: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v7.5M5.25 3v4.5a3 3 0 003 3v10.5m0-18v7.5m3-7.5v4.5a3 3 0 01-3 3M18.75 3v18m0-18a3.75 3.75 0 00-3.75 3.75v5.25c0 1.243.605 2.344 1.538 3.033L16.5 21" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
    lock: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    fish: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c-2.5-3-6-4.5-10.5-4.5A9.75 9.75 0 002.25 12a9.75 9.75 0 006.75 4.5c4.5 0 8-1.5 10.5-4.5zm0 0l2.25-2.25m-2.25 2.25l2.25 2.25M6.75 10.5h.008v.008H6.75V10.5z" />,
    leaf: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c0-5 4-10 12-12-1 8-6 12-12 12zm0 0c3-2 6-5 8-8m-8 8l-3 3" />,
    cross: <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5h6v4.5h4.5v6H15v4.5H9V15H4.5V9H9V4.5z" />,
    flag: <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V4.5a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.2 2.4L16 8l1.7 2.6a1.5 1.5 0 01-1.2 2.4H4.5V17H3z" />,
    x: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
    heroSub: 'Wallu connecte chaque Sénégalais à des artisans vérifiés et notés, des coursiers de confiance (Ndouguilma), des livreurs et des commerçants. Une plateforme accessible et transparente avec une forte demande de clients.',
    statProviders: 'Prestataires',
    statProfessions: 'Métiers',
    statCities: 'Villes couvertes',
    trust1: 'Prestataires vérifiés (NIN)',
    trust2: 'Forte demande de clients',
    trust3: 'Partout au Sénégal',
    trust4: 'Note 4.8/5 sur les stores',
    trust5: 'Contact direct, sans intermédiaire',
    whyBadge: 'Pourquoi Wallu',
    whyHeading: 'Conçu pour la réalité sénégalaise',
    whySub: 'Une plateforme moderne, transparente et sécurisée qui réinvente l\'accès aux services du quotidien au Sénégal.',
    whyCards: [
      {
        id: 'habitat',
        icon: 'wrench',
        badge: 'Habitat & Dépannage',
        stat: '100% Vérifiés NIN',
        title: 'Artisans du domicile & Entretien',
        desc: 'Plombiers, électriciens, peintres, menuisiers, carreleurs et maçons qualifiés. Trouvez en direct le professionnel certifié le plus proche.',
        highlights: ['Vérification d\'identité NIN', 'Tarifs directs sans surcoût', 'Interventions d\'urgence 24/7'],
        color: '#083A64',
        accentColor: '#FFD900',
        featured: true
      },
      {
        id: 'commission',
        icon: 'shield',
        badge: 'Transparence & Accès',
        stat: 'Forte Demande',
        title: 'Plateforme accessible & Forte demande',
        desc: 'Une plateforme accessible et transparente pour les prestataires et clients. Un flux constant de demandes au quotidien, contact direct et relations équitables.',
        highlights: ['Forte demande de clients qualifiés', 'Contact direct WhatsApp & Appel', 'Conditions claires et transparentes'],
        color: '#0A6EBD',
        accentColor: '#38BDF8',
        featured: false
      },
      {
        id: 'personne',
        icon: 'users',
        badge: 'Services à Domicile',
        stat: 'Profils notés 4.8/5',
        title: 'Aide à la personne & Vie de famille',
        desc: 'Ménage régulier, repassage, nounous de confiance et gardes d\'enfants. Des prestataires bienveillants évalués par la communauté.',
        highlights: ['Avis clients certifiés', 'Disponibilité flexible'],
        color: '#083A64',
        accentColor: '#4ADE80',
        featured: false
      },
      {
        id: 'territoire',
        icon: 'map',
        badge: 'Couverture Nationale',
        stat: '70+ Villes au Sénégal',
        title: 'Disponible dans toutes les régions',
        desc: 'De Dakar à Touba, de Thiès à Saint-Louis et Ziguinchor, trouvez des prestataires et livreurs où que vous soyez.',
        highlights: ['Géolocalisation précise', 'Réseau actif en régions'],
        color: '#0A6EBD',
        accentColor: '#FFD900',
        featured: false
      },
      {
        id: 'transport',
        icon: 'truck',
        badge: 'Mobilité & Express',
        stat: 'Motos & Camionnettes',
        title: 'Livraison express & Dépannage auto',
        desc: 'Courses urgentes Ndouguilma, livraison Tiak-Tiak, remorquage rapide ou taxi privé en quelques clics.',
        highlights: ['Course à la demande', 'Suivi de commande direct'],
        color: '#083A64',
        accentColor: '#F59E0B',
        featured: false
      },
      {
        id: 'sante',
        icon: 'star',
        badge: 'Bien-être & Événements',
        stat: 'Sur mesure',
        title: 'Santé, Beauté & Événementiel',
        desc: 'Coachs sportifs, coiffeurs à domicile, masseurs, photographes et traiteurs pour sublimer vos moments importants.',
        highlights: ['Prise de rendez-vous facile', 'Professionnels dédiés'],
        color: '#0A6EBD',
        accentColor: '#EC4899',
        featured: false
      }
    ],
    partnerBadge: 'Réseau Partenaires',
    partnerHeading: 'Rejoignez l\'écosystème Wallu & développez votre activité',
    partnerSub: 'Une plateforme accessible et transparente avec une forte demande de clients pour chaque artisan, coursier et commerçant du Sénégal.',
    partner1Title: 'Artisans & Prestataires',
    partner1Desc: 'Vous avez un savoir-faire ? Rejoignez Wallu pour répondre à une forte demande de clients près de chez vous et augmenter vos revenus sur une plateforme accessible et transparente.',
    partner1Btn: 'Devenir prestataire',
    partner1Tags: ['Forte demande clients', 'Paiement direct', 'Modèle transparent'],
    partner2Title: 'Livreurs & Coursiers',
    partner2Desc: 'Devenez livreur partenaire et gagnez de l\'argent à votre rythme. Que vous ayez une moto "Tiak-Tiak" ou une camionnette, inscrivez-vous facilement.',
    partner2Btn: 'Devenir livreur',
    partner2Tags: ['Horaires flexibles', 'Moto ou Fourgon', 'Gains immédiats'],
    partner3Title: 'Commerçants & Boutiques',
    partner3Desc: 'Vous avez des articles à vendre ? Créez votre boutique sur Wallu Vente, touchez des milliers d\'acheteurs partout au Sénégal et profitez d\'une forte visibilité.',
    partner3Btn: 'Créer ma boutique',
    partner3Tags: ['Forte visibilité', 'Vitrine digitale', 'Portée nationale'],
    interfaceBadge: 'Interface',
    interfaceHeading: 'Découvrez l\'application',
    interfaceSub: 'Une interface claire, intuitive et pensée pour faciliter votre quotidien au Sénégal.',
    srvBadge: 'Nos Services',
    srvHeading: 'Les 5 piliers de Wallu',
    srvSub: 'Une seule application pour tous vos besoins du quotidien.',
    profBadge: 'Plus de 30 métiers',
    profHeading: 'Des artisans vérifiés et notés',
    profSub: 'Wallu réunit plus de 30 corps de métiers disponibles dans tout le Sénégal. Des artisans vérifiés et notés par la communauté, prêts à intervenir.',
    profSearchPlaceholder: 'Rechercher un métier (ex: plombier, carreleur, climatisation, nounou...)',
    profNotFound: 'Aucun métier ne correspond à votre recherche.',
    profResetSearch: 'Réinitialiser la recherche',
    profFoundCount: 'métiers disponibles',
    profAvailableTag: 'Disponible',
    profCtaTitle: 'Vous exercez un métier et souhaitez trouver des clients ?',
    profCtaSub: 'Rejoignez les 1200+ prestataires vérifiés de Wallu, développez votre visibilité et augmentez vos revenus grâce à une forte demande de clients sur une plateforme accessible et transparente.',
    profCtaBtn: 'S\'inscrire comme prestataire',
    profCtaTag: 'Plateforme accessible & Forte demande',
    founderBadge: 'Mon histoire',
    founderQuote: 'Wallu est né d\'un constat simple : trouver un prestataire de confiance au Sénégal relevait trop souvent du bouche-à-oreille ou du hasard. Nous avons décidé de changer ça.',
    founderP1: 'Wallu a été créée avec une ambition claire : digitaliser l\'économie locale du Sénégal en donnant à chaque artisan, coursier et commerçant les outils pour se faire connaître et prospérer, et à chaque famille le moyen de trouver des services fiables en quelques secondes.',
    founderP2: 'Notre vision est de construire un écosystème de confiance où les Sénégalais, qu\'ils soient à Dakar, Touba, Ziguinchor ou Saint-Louis, peuvent accéder à des services de qualité, vendre leurs produits et simplifier leur quotidien grâce à la technologie. Wallu, c\'est la communauté sénégalaise au service de ses membres.',
    founderP3: 'Aujourd\'hui, Wallu est disponible sur l\'App Store et le Google Play Store. Notre mission reste la même : rapprocher les Sénégalais, soutenir l\'économie locale et construire une application dont tout un peuple peut être fier.',
    founderRole: 'Fondateur & Directeur Général, Wallu',
    testiBadge: 'Avis Utilisateurs',
    testiHeading: 'Ce que les Sénégalais disent de Wallu',
    testiSub: 'Des milliers d\'utilisateurs simplifient leur quotidien avec Wallu chaque jour.',
    testiScrollHint: 'Faites défiler pour voir plus d\'avis',
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
    heroSub: 'Wallu connects every Senegalese to verified and rated artisans, trusted couriers (Ndouguilma), delivery drivers, and local merchants. An accessible and transparent platform with high customer demand.',
    statProviders: 'Providers',
    statProfessions: 'Professions',
    statCities: 'Cities covered',
    trust1: 'Verified Providers (NIN)',
    trust2: 'High customer demand',
    trust3: 'Everywhere in Senegal',
    trust4: '4.8/5 on app stores',
    trust5: 'Direct contact, no middleman',
    whyBadge: 'Why Wallu',
    whyHeading: 'Designed for the Senegalese reality',
    whySub: 'A modern, transparent, and secure platform revolutionizing access to everyday services in Senegal.',
    whyCards: [
      {
        id: 'habitat',
        icon: 'wrench',
        badge: 'Home & Repairs',
        stat: '100% NIN Verified',
        title: 'Home Artisans & Maintenance',
        desc: 'Qualified plumbers, electricians, painters, carpenters, tilers, and masons. Instantly find the nearest certified professional.',
        highlights: ['NIN identity verification', 'Direct prices without markup', '24/7 emergency calls'],
        color: '#083A64',
        accentColor: '#FFD900',
        featured: true
      },
      {
        id: 'commission',
        icon: 'shield',
        badge: 'Transparency & Access',
        stat: 'High Demand',
        title: 'Accessible platform & High client demand',
        desc: 'An accessible and transparent platform with steady customer volume to grow your business. Direct contact, fair and clear terms.',
        highlights: ['High daily customer demand', 'Direct WhatsApp & Phone contact', 'Clear and transparent terms'],
        color: '#0A6EBD',
        accentColor: '#38BDF8',
        featured: false
      },
      {
        id: 'personne',
        icon: 'users',
        badge: 'Home Services',
        stat: '4.8/5 Rated Profiles',
        title: 'Personal Assistance & Family Life',
        desc: 'Regular housekeeping, ironing, trusted nannies, and babysitters. Caring service providers rated by the community.',
        highlights: ['Certified user reviews', 'Flexible schedule'],
        color: '#083A64',
        accentColor: '#4ADE80',
        featured: false
      },
      {
        id: 'territoire',
        icon: 'map',
        badge: 'Nationwide Reach',
        stat: '70+ Cities in Senegal',
        title: 'Available across all regions',
        desc: 'From Dakar to Touba, Thiès to Saint-Louis and Ziguinchor, connect with service providers and couriers wherever you are.',
        highlights: ['Precise geolocation', 'Active regional network'],
        color: '#0A6EBD',
        accentColor: '#FFD900',
        featured: false
      },
      {
        id: 'transport',
        icon: 'truck',
        badge: 'Mobility & Express',
        stat: 'Motos & Vans',
        title: 'Express delivery & Auto assistance',
        desc: 'Urgent Ndouguilma market errands, Tiak-Tiak parcel courier, towing assistance or private taxi in a few taps.',
        highlights: ['On-demand runs', 'Direct status tracking'],
        color: '#083A64',
        accentColor: '#F59E0B',
        featured: false
      },
      {
        id: 'sante',
        icon: 'star',
        badge: 'Health & Events',
        stat: 'Tailored Services',
        title: 'Health, Wellness & Events',
        desc: 'Fitness coaches, home hairdressers, massage therapists, photographers, and caterers for your memorable moments.',
        highlights: ['Easy booking', 'Dedicated experts'],
        color: '#0A6EBD',
        accentColor: '#EC4899',
        featured: false
      }
    ],
    partnerBadge: 'Partner Network',
    partnerHeading: 'Join the Wallu ecosystem & grow your business',
    partnerSub: 'An accessible and transparent platform with high customer demand for every artisan, driver, and merchant in Senegal.',
    partner1Title: 'Artisans & Providers',
    partner1Desc: 'Do you have a skill? Join Wallu to meet high customer demand near you and grow your business on an accessible and transparent platform.',
    partner1Btn: 'Become a provider',
    partner1Tags: ['High customer demand', 'Direct payment', 'Transparent model'],
    partner2Title: 'Delivery Partners & Couriers',
    partner2Desc: 'Become a delivery partner and earn money at your own pace. Whether you have a "Tiak-Tiak" moto or a van, sign up easily.',
    partner2Btn: 'Become a driver',
    partner2Tags: ['Flexible hours', 'Moto or Van', 'Instant earnings'],
    partner3Title: 'Merchants & Shops',
    partner3Desc: 'Have items to sell? Create your shop on Wallu Vente, reach thousands of buyers across Senegal and gain high visibility.',
    partner3Btn: 'Create my shop',
    partner3Tags: ['High visibility', 'Digital storefront', 'Nationwide reach'],
    interfaceBadge: 'Interface',
    interfaceHeading: 'Discover the app',
    interfaceSub: 'A clear, intuitive interface designed to simplify your daily life in Senegal.',
    srvBadge: 'Our Services',
    srvHeading: 'The 5 pillars of Wallu',
    srvSub: 'A single app for all your daily needs.',
    profBadge: 'Over 30 professions',
    profHeading: 'Verified and rated artisans',
    profSub: 'Wallu brings together over 30 professions available throughout Senegal. Verified and rated artisans ready to assist you.',
    profSearchPlaceholder: 'Search a profession (e.g. plumber, tiler, air conditioning, nanny...)',
    profNotFound: 'No profession found matching your search.',
    profResetSearch: 'Reset search',
    profFoundCount: 'professions available',
    profAvailableTag: 'Available',
    profCtaTitle: 'Have a trade and want to find more clients?',
    profCtaSub: 'Join 1200+ verified Wallu service providers, boost your visibility, and increase your income with high customer demand on an accessible and transparent platform.',
    profCtaBtn: 'Register as a provider',
    profCtaTag: 'Accessible platform & High demand',
    founderBadge: 'My Story',
    founderQuote: 'Wallu was born from a simple observation: finding a reliable provider in Senegal too often relied on word-of-mouth or chance. We decided to change that.',
    founderP1: 'Wallu was created with a clear ambition: to digitize the local economy of Senegal by giving every artisan, courier, and merchant the tools to become known and prosper, and every family the means to find reliable services in seconds.',
    founderP2: 'Our vision is to build an ecosystem of trust where the Senegalese, whether they are in Dakar, Touba, Ziguinchor, or Saint-Louis, can access quality services, sell their products, and simplify their daily lives through technology. Wallu is the Senegalese community serving its members.',
    founderP3: 'Today, Wallu is available on the App Store and Google Play Store. Our mission remains the same: bringing the Senegalese closer, supporting the local economy, and building an app an entire nation can be proud of.',
    founderRole: 'Founder & CEO, Wallu',
    testiBadge: 'User Reviews',
    testiHeading: 'What the Senegalese are saying about Wallu',
    testiSub: 'Thousands of users simplify their daily lives with Wallu every day.',
    testiScrollHint: 'Scroll to see more reviews',
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
    profCategories: [
      { id: 'all', label: 'Tous', icon: 'sparkles' },
      { id: 'habitat', label: 'Habitat & Bricolage', icon: 'wrench' },
      { id: 'personne', label: 'Services à Domicile', icon: 'users' },
      { id: 'mobilite', label: 'Transport & Auto', icon: 'car' },
      { id: 'sante', label: 'Santé & Bien-être', icon: 'heart' },
      { id: 'artisanat', label: 'Artisanat & Fêtes', icon: 'scissors' }
    ],
    professions: [
      // Habitat et entretien
      { name: 'Plombier', icon: 'wrench', cat: 'habitat', tag: 'Fuites & Sanitaire' },
      { name: 'Électricien', icon: 'zap', cat: 'habitat', tag: 'Urgence & Câblage' },
      { name: 'Peintre', icon: 'paint', cat: 'habitat', tag: 'Dépannage & Rénov' },
      { name: 'Carreleur', icon: 'tools', cat: 'habitat', tag: 'Pose & Finition' },
      { name: 'Menuisier', icon: 'tools', cat: 'habitat', tag: 'Bois & Mobilier' },
      { name: 'Maçon', icon: 'home', cat: 'habitat', tag: 'Gros œuvre & BTP' },
      { name: 'Climatiseur / Frigoriste', icon: 'zap', cat: 'habitat', tag: 'Clim & Froid' },
      { name: 'Serrurier', icon: 'lock', cat: 'habitat', tag: 'Ouverture 24/7' },
      { name: 'Vitrier', icon: 'tools', cat: 'habitat', tag: 'Vitres & Miroiterie' },
      { name: 'Tapissier / Rembourreur', icon: 'scissors', cat: 'habitat', tag: 'Salons & Canapés' },
      { name: 'Jardinier', icon: 'sparkles', cat: 'habitat', tag: 'Espaces verts' },
      { name: 'Loueur de matériel', icon: 'package', cat: 'habitat', tag: 'Outillage & BTP' },
      // Service à la personne
      { name: 'Femme de ménage', icon: 'sparkles', cat: 'personne', tag: 'Entretien maison' },
      { name: 'Homme de ménage', icon: 'sparkles', cat: 'personne', tag: 'Nettoyage pro' },
      { name: 'Aide-ménagère', icon: 'sparkles', cat: 'personne', tag: 'Aide quotidienne' },
      { name: 'Nounou / Baby-sitter', icon: 'heart', cat: 'personne', tag: 'Garde d\'enfants' },
      { name: 'Agent de sécurité / Gardien', icon: 'shield', cat: 'personne', tag: 'Gardiennage' },
      { name: 'Cuisinier à domicile', icon: 'utensils', cat: 'personne', tag: 'Cuisine locale' },
      // Mobilité & Transport
      { name: 'Livreur express', icon: 'bike', cat: 'mobilite', tag: 'Tiak-Tiak & Colis' },
      { name: 'Dépanneur auto', icon: 'zap', cat: 'mobilite', tag: 'Assistance route' },
      { name: 'Chauffeur de taxi', icon: 'car', cat: 'mobilite', tag: 'Trajets urbains' },
      { name: 'Chauffeur VTC', icon: 'car', cat: 'mobilite', tag: 'Confort & Sécurité' },
      { name: 'Remorqueur', icon: 'truck', cat: 'mobilite', tag: 'Remorquage 24/7' },
      { name: 'Mécanicien', icon: 'wrench', cat: 'mobilite', tag: 'Garage & Moteur' },
      { name: 'Électricien auto', icon: 'zap', cat: 'mobilite', tag: 'Batterie & Diagnostic' },
      // Bien-être & Santé
      { name: 'Coach sportif', icon: 'star', cat: 'sante', tag: 'Remise en forme' },
      { name: 'Psychologue', icon: 'heart', cat: 'sante', tag: 'Écoute & Conseil' },
      { name: 'Masseur / Masseuse', icon: 'heart', cat: 'sante', tag: 'Relaxation' },
      { name: 'Esthéticienne / Manucure', icon: 'sparkles', cat: 'sante', tag: 'Soins & Beauté' },
      // Artisanat & Création
      { name: 'Couturier / Tailleur', icon: 'scissors', cat: 'artisanat', tag: 'Tenues sur mesure' },
      { name: 'Coiffeur / Coiffeuse', icon: 'scissors', cat: 'artisanat', tag: 'Domicile & Salon' },
      { name: 'Photographe', icon: 'camera', cat: 'artisanat', tag: 'Shooting & Events' },
      { name: 'Traiteur', icon: 'utensils', cat: 'artisanat', tag: 'Cuisine & Réceptions' },
      { name: "Loueur d'équipement", icon: 'package', cat: 'artisanat', tag: 'Sonorisation & Fêtes' },
    ],
    services: [
      {
        id: 'ndouguilma',
        icon: 'shopping',
        label: 'Ndouguilma (Courses marché)',
        title: 'Vos courses au marché livrées sans bouger',
        desc: 'Confiez vos commissions aux marchés sénégalais à un coursier de confiance. Légumes frais à Kermel ou Castors, poisson thiof à Soumbédioune, viande fraîche, pharmacie de garde ou retraits Wave : tout est acheté avec soin et livré chez vous en 45 minutes chrono.',
        features: [
          'Marchés locaux en direct : Marché Kermel, Castors, Sandaga, Tilène, Soumbédioune et commerces de proximité.',
          'Confiance absolue : Le NIN (pièce d\'identité) est obligatoire et certifié pour tous nos coursiers.',
          'Livraison express en 45 min : Gagnez un temps précieux sans affronter la chaleur ni les embouteillages.',
          'Paiement et retraits flexibles : Wave, Orange Money ou Espèces à la livraison.',
        ],
        color: '#0A6EBD'
      },
      {
        id: 'prestataires',
        icon: 'users',
        label: 'Prestataires (30+ métiers)',
        title: 'Des artisans vérifiés et notés',
        desc: 'Besoin d\'un plombier, électricien, menuisier, frigoriste ou d\'une nounou ? Accédez à plus de 30 métiers différents. Des artisans vérifiés et notés par la communauté. Comparez les profils, vérifiez les avis, et contactez-les directement.',
        features: [
          'Artisans vérifiés et notés : Des professionnels qualifiés avec identités certifiées (NIN) et avis clients réels.',
          'Plateforme accessible & Forte demande : Flux constant de demandes, contact direct sans intermédiaire via Appel ou WhatsApp.',
          'Accédez à plus de 30 métiers : Plomberie, électricité, froid & climatisation, maçonnerie, menuiserie, carrelage...',
          'Hyper-Localisation : Trouvez les meilleurs artisans juste à côté de chez vous en quelques secondes.',
        ],
        color: '#083A64'
      },
      {
        id: 'yobbuulma',
        icon: 'truck',
        label: 'Yobbuul ma (Livraison)',
        title: 'Livraison express en moto ou camionnette',
        desc: 'Que ce soit un petit colis urgent ou un déménagement complet, nos livreurs partenaires sont disponibles partout au Sénégal. Choisissez la moto "Tiak-Tiak" pour les courses rapides ou la camionnette pour les charges lourdes.',
        features: [
          'Rapide & Flexible : Moto Tiak-Tiak pour la ville, camionnette pour les encombrants.',
          'Tarifs transparents : Payez directement le livreur selon la course convenue.',
          'Couverture nationale : Expédiez vos colis partout au Sénégal sans stress.',
        ],
        color: '#FFD900'
      },
      {
        id: 'vente',
        icon: 'shopping',
        label: 'Wallu Vente (Marketplace)',
        title: 'Achetez et vendez partout au Sénégal',
        desc: 'Wallu Vente est votre marketplace 100% sénégalaise. Mettez en vente vos articles et atteignez des milliers d\'acheteurs dans tout le pays. Contact direct et transparent.',
        features: [
          'Forte visibilité : Touchez des milliers de clients locaux et développez vos ventes.',
          'Vendeurs vérifiés : Un écosystème accessible, transparent et de confiance pour acheter sereinement.',
          'Catégories variées : Mode, électronique, véhicules, immobilier, alimentation locale.',
        ],
        color: '#FFD900'
      },
      {
        id: 'walluai',
        icon: 'star',
        label: 'Wallu AI',
        title: 'Votre assistant intelligent intégré',
        desc: 'Besoin d\'aide pour trouver un service ou utiliser l\'application ? Wallu AI, propulsé par les dernières technologies, est là pour vous guider instantanément.',
        features: [
          'Texte & Vocal : Écrivez naturellement à l\'assistant pour formuler vos demandes.',
          'Recherche instantanée : Trouvez immédiatement le bon artisan, coursier ou produit.',
          'Assistance 24/7 : Wallu AI ne dort jamais et vous aide à tout moment.',
        ],
        color: '#083A64'
      },
    ],
    testimonialsStats: {
      rating: '4.8',
      reviews: '1,200+',
      satisfaction: '98%',
      verifiedRate: '100%'
    },
    testimonials: [
      {
        id: '1',
        letter: 'F',
        name: 'Fatou Ndiaye',
        role: 'Mère de famille',
        city: 'Dakar (Plateau)',
        service: 'Ndouguilma • Courses marché',
        verified: true,
        rating: 5,
        date: 'Il y a 2 jours',
        text: 'Le service Ndouguilma m\'a sauvée ! Avec mon travail à la banque, je n\'ai plus le temps d\'aller au marché Kermel. Le coursier m\'a livré des légumes ultra-frais en 45 min. Dieureudieuf Wallu !'
      },
      {
        id: '2',
        letter: 'M',
        name: 'Moussa Diop',
        role: 'Client particulier',
        city: 'Pikine',
        service: 'Plomberie • Urgence 22h',
        verified: true,
        rating: 5,
        date: 'Il y a 4 jours',
        text: 'Grosse fuite d\'eau à 22h un samedi soir. En 5 minutes sur Wallu, j\'ai contacté un plombier vérifié NIN situé à 800m. Il est intervenu immédiatement à tarif normal, sans surcoût.'
      },
      {
        id: '3',
        letter: 'A',
        name: 'Aminata Sow',
        role: 'Commerçante Mode',
        city: 'Thiès',
        service: 'Wallu Vente • Forte visibilité',
        verified: true,
        rating: 5,
        date: 'Il y a 1 semaine',
        text: 'Mes ventes ont explosé depuis que j\'ai ouvert ma boutique sur Wallu Vente. Une forte demande de clients au quotidien, ils m\'appellent directement sur WhatsApp et les conditions sont claires et transparentes. Top !'
      },
      {
        id: '4',
        letter: 'I',
        name: 'Ibrahima Fall',
        role: 'Gérant e-commerce',
        city: 'Rufisque',
        service: 'Yobbuul ma • Coursier Express',
        verified: true,
        rating: 5,
        date: 'Il y a 1 semaine',
        text: 'Pour envoyer mes colis vers Guédiawaye ou Almadies, j\'utilise Yobbuul ma au quotidien. Les livreurs Tiak-Tiak sont rapides, polis et joignables à chaque instant. Service impeccable.'
      },
      {
        id: '5',
        letter: 'O',
        name: 'Ousmane Kane',
        role: 'Maître Menuisier',
        city: 'Parcelles Assainies',
        service: 'Prestataire vérifié • Bois & Déco',
        verified: true,
        rating: 5,
        date: 'Il y a 2 semaines',
        text: 'Je suis artisan inscrit sur Wallu depuis 6 mois. Mon carnet de commandes est plein grâce à une forte demande de clients réguliers. C\'est la fierté de l\'artisanat sénégalais.'
      },
      {
        id: '6',
        letter: 'A',
        name: 'Awa Sy',
        role: 'Retraitée',
        city: 'Saint-Louis (Sor)',
        service: 'Ndouguilma • Pharmacie à domicile',
        verified: true,
        rating: 5,
        date: 'Il y a 3 semaines',
        text: 'Mon fils m\'a installée Wallu sur mon téléphone. Je commande mes ordonnances à la pharmacie sans devoir marcher ou affronter la chaleur. Les jeunes coursiers sont d\'une politesse exemplaire.'
      }
    ],
    faqs: [
      { q: 'Qu\'est-ce que Wallu ?', a: 'Wallu est une super-application sénégalaise qui vous connecte directement avec des artisans vérifiés et notés, des coursiers pour vos commissions (Ndouguilma), des livreurs (Yobbuul ma) et une marketplace locale (Wallu Vente). Une plateforme accessible et transparente avec une forte demande de clients.' },
      { q: 'L\'application est-elle gratuite ?', a: 'L\'application Wallu est gratuite à télécharger sur l\'App Store et Google Play. Pour les artisans et commerçants, Wallu offre une plateforme moderne, accessible et transparente avec une forte demande de clients, garantissant un modèle équitable sans frais cachés.' },
      { q: 'Comment fonctionne Ndouguilma ?', a: 'Vous ouvrez l\'app, décrivez votre commission (marché Kermel, Castors, Sandaga, pharmacie de garde, retraits Wave, etc.), un coursier vérifié accepte la demande, effectue les achats avec soin et vous livre en 45 minutes.' },
      { q: 'Les profils sont-ils vraiment vérifiés ?', a: 'Oui. La pièce d\'identité nationale (NIN) est exigée et vérifiée avec rigueur. En plus, le système d\'avis et d\'évaluations certifiés par les clients garantit une totale confiance.' },
      { q: 'Comment fonctionne Wallu AI ?', a: 'C\'est un assistant intelligent intégré. Vous pouvez lui écrire directement dans l\'application pour lui demander de trouver un artisan, un coursier ou un produit disponible.' },
      { q: 'Wallu est disponible dans quelle ville ?', a: 'De Dakar à Saint-Louis, de Thiès à Touba et Ziguinchor, Wallu couvre tout le territoire sénégalais avec plus de 70 villes actives.' },
    ]
  },
  en: {
    profCategories: [
      { id: 'all', label: 'All', icon: 'sparkles' },
      { id: 'habitat', label: 'Home & DIY', icon: 'wrench' },
      { id: 'personne', label: 'Home Services', icon: 'users' },
      { id: 'mobilite', label: 'Transport & Auto', icon: 'car' },
      { id: 'sante', label: 'Health & Wellness', icon: 'heart' },
      { id: 'artisanat', label: 'Crafts & Events', icon: 'scissors' }
    ],
    professions: [
      // Home & Repairs
      { name: 'Plumber', icon: 'wrench', cat: 'habitat', tag: 'Leaks & Sanitary' },
      { name: 'Electrician', icon: 'zap', cat: 'habitat', tag: 'Emergency & Wiring' },
      { name: 'Painter', icon: 'paint', cat: 'habitat', tag: 'Repairs & Renovation' },
      { name: 'Tiler', icon: 'tools', cat: 'habitat', tag: 'Tiling & Finishing' },
      { name: 'Carpenter', icon: 'tools', cat: 'habitat', tag: 'Wood & Furniture' },
      { name: 'Mason', icon: 'home', cat: 'habitat', tag: 'Construction & Masonry' },
      { name: 'AC & Refrigeration Tech', icon: 'zap', cat: 'habitat', tag: 'Cooling & AC' },
      { name: 'Locksmith', icon: 'lock', cat: 'habitat', tag: '24/7 Lockout' },
      { name: 'Glazier', icon: 'tools', cat: 'habitat', tag: 'Glass & Mirrors' },
      { name: 'Upholsterer', icon: 'scissors', cat: 'habitat', tag: 'Sofas & Furniture' },
      { name: 'Gardener', icon: 'sparkles', cat: 'habitat', tag: 'Green Spaces' },
      { name: 'Tool Rental', icon: 'package', cat: 'habitat', tag: 'Tools & Construction' },
      // Personal Services
      { name: 'Housekeeper (F)', icon: 'sparkles', cat: 'personne', tag: 'Home Maintenance' },
      { name: 'Housekeeper (M)', icon: 'sparkles', cat: 'personne', tag: 'Pro Cleaning' },
      { name: 'Home Helper', icon: 'sparkles', cat: 'personne', tag: 'Daily Assistance' },
      { name: 'Nanny / Baby-sitter', icon: 'heart', cat: 'personne', tag: 'Childcare' },
      { name: 'Security Guard', icon: 'shield', cat: 'personne', tag: 'Property Security' },
      { name: 'Home Cook / Chef', icon: 'utensils', cat: 'personne', tag: 'Local Cuisine' },
      // Mobility & Transport
      { name: 'Express Courier', icon: 'bike', cat: 'mobilite', tag: 'Tiak-Tiak & Parcels' },
      { name: 'Roadside Assistance', icon: 'zap', cat: 'mobilite', tag: 'Auto Assistance' },
      { name: 'Taxi Driver', icon: 'car', cat: 'mobilite', tag: 'City Rides' },
      { name: 'VTC Driver', icon: 'car', cat: 'mobilite', tag: 'Comfort & Safety' },
      { name: 'Tow Truck', icon: 'truck', cat: 'mobilite', tag: '24/7 Towing' },
      { name: 'Mechanic', icon: 'wrench', cat: 'mobilite', tag: 'Garage & Engine' },
      { name: 'Auto Electrician', icon: 'zap', cat: 'mobilite', tag: 'Battery & Diagnostics' },
      // Health & Wellness
      { name: 'Sports Coach', icon: 'star', cat: 'sante', tag: 'Fitness & Health' },
      { name: 'Psychologist', icon: 'heart', cat: 'sante', tag: 'Counseling' },
      { name: 'Masseur / Masseuse', icon: 'heart', cat: 'sante', tag: 'Relaxation' },
      { name: 'Beautician / Esthetician', icon: 'sparkles', cat: 'sante', tag: 'Skincare & Nails' },
      // Craft & Events
      { name: 'Tailor', icon: 'scissors', cat: 'artisanat', tag: 'Custom Fashion' },
      { name: 'Hairdresser', icon: 'scissors', cat: 'artisanat', tag: 'Home & Salon' },
      { name: 'Photographer', icon: 'camera', cat: 'artisanat', tag: 'Shooting & Events' },
      { name: 'Caterer', icon: 'utensils', cat: 'artisanat', tag: 'Food & Receptions' },
      { name: 'Event Gear Rental', icon: 'package', cat: 'artisanat', tag: 'Sound & Events' },
    ],
    services: [
      {
        id: 'ndouguilma',
        icon: 'shopping',
        label: 'Ndouguilma (Market Errands)',
        title: 'Your market shopping delivered to your door',
        desc: 'Entrust your shopping in Senegalese markets to a trusted courier. Fresh produce at Kermel or Castors, fresh fish at Soumbédioune, meat, urgent pharmacy runs or Wave cash withdrawals: everything is picked carefully and delivered in 45 minutes.',
        features: [
          'Direct local markets: Kermel, Castors, Sandaga, Tilène, Soumbédioune, and neighborhood shops.',
          'Total trust: National ID (NIN) is mandatory and verified for all courier partners.',
          '45-minute express delivery: Save valuable time without facing the heat and traffic.',
          'Flexible payment: Wave, Orange Money or Cash upon delivery.',
        ],
        color: '#0A6EBD'
      },
      {
        id: 'prestataires',
        icon: 'users',
        label: 'Providers (30+ trades)',
        title: 'Verified and rated artisans',
        desc: 'Need a plumber, electrician, carpenter, AC technician or a nanny? Access over 30 different trades. Compare profiles, check reviews, and contact them directly via call or WhatsApp.',
        features: [
          'Verified and rated artisans: Qualified professionals with verified National IDs (NIN) and real client reviews.',
          'Accessible platform & High demand: Steady flow of requests, direct contact without middlemen.',
          'Over 30 trades: Plumbing, electrical, air conditioning, masonry, carpentry, tiling and more.',
          'Hyper-Localization: Find the best nearby artisans in seconds.',
        ],
        color: '#083A64'
      },
      {
        id: 'yobbuulma',
        icon: 'truck',
        label: 'Yobbuul ma (Delivery)',
        title: 'Express delivery by moto or van',
        desc: 'Whether it\'s an urgent package or a full move, our delivery partners are available throughout Senegal. Choose the "Tiak-Tiak" moto for fast runs or the van for heavy loads.',
        features: [
          'Fast & Flexible: Moto for the city, van for heavy cargo.',
          'Transparent rates: Pay the driver directly at fair agreed terms.',
          'National coverage: Ship your parcels anywhere in Senegal stress-free.',
        ],
        color: '#FFD900'
      },
      {
        id: 'vente',
        icon: 'shopping',
        label: 'Wallu Vente (Marketplace)',
        title: 'Buy and sell everywhere in Senegal',
        desc: 'Wallu Vente is your 100% Senegalese marketplace. List your items and reach thousands of buyers across the country with direct, transparent contact.',
        features: [
          'High visibility: Reach thousands of local buyers and scale your business.',
          'Verified sellers: An accessible, transparent, and trusted ecosystem to buy with peace of mind.',
          'Varied categories: Fashion, electronics, vehicles, real estate, local food.',
        ],
        color: '#FFD900'
      },
      {
        id: 'walluai',
        icon: 'star',
        label: 'Wallu AI',
        title: 'Your built-in smart assistant',
        desc: 'Need help finding a service or using the app? Wallu AI is here to guide you instantly.',
        features: [
          'Text & Voice: Write naturally to the assistant to submit your requests.',
          'Instant search: Find the right artisan, courier or product immediately.',
          '24/7 support: Wallu AI never sleeps and assists you anytime.',
        ],
        color: '#083A64'
      },
    ],
    testimonialsStats: {
      rating: '4.8',
      reviews: '1,200+',
      satisfaction: '98%',
      verifiedRate: '100%'
    },
    testimonials: [
      {
        id: '1',
        letter: 'F',
        name: 'Fatou Ndiaye',
        role: 'Mother',
        city: 'Dakar (Plateau)',
        service: 'Ndouguilma • Market Errands',
        verified: true,
        rating: 5,
        date: '2 days ago',
        text: 'The Ndouguilma service saved me! With my bank job, I no longer have time to go to Kermel market. The courier delivered ultra-fresh vegetables in 45 minutes. Dieureudieuf Wallu!'
      },
      {
        id: '2',
        letter: 'M',
        name: 'Moussa Diop',
        role: 'Homeowner',
        city: 'Pikine',
        service: 'Plumbing • 10PM Emergency',
        verified: true,
        rating: 5,
        date: '4 days ago',
        text: 'Huge water leak at 10 PM on a Saturday. In 5 minutes on Wallu, I contacted a NIN-verified plumber 800m away. He arrived immediately at standard rates with no surcharge.'
      },
      {
        id: '3',
        letter: 'A',
        name: 'Aminata Sow',
        role: 'Fashion Merchant',
        city: 'Thiès',
        service: 'Wallu Vente • High Visibility',
        verified: true,
        rating: 5,
        date: '1 week ago',
        text: 'My sales skyrocketed since opening my shop on Wallu Vente. High customer demand daily, clients reach me directly on WhatsApp and terms are transparent. Excellent!'
      },
      {
        id: '4',
        letter: 'I',
        name: 'Ibrahima Fall',
        role: 'E-commerce Manager',
        city: 'Rufisque',
        service: 'Yobbuul ma • Express Courier',
        verified: true,
        rating: 5,
        date: '1 week ago',
        text: 'For sending packages to Guédiawaye or Almadies, I use Yobbuul ma daily. The Tiak-Tiak drivers are prompt, polite, and easily reachable anytime.'
      },
      {
        id: '5',
        letter: 'O',
        name: 'Ousmane Kane',
        role: 'Master Carpenter',
        city: 'Parcelles Assainies',
        service: 'Verified Provider • Wood & Decor',
        verified: true,
        rating: 5,
        date: '2 weeks ago',
        text: 'I\'ve been an artisan on Wallu for 6 months. My schedule is full thanks to steady customer demand on the platform. It\'s the pride of Senegalese craftsmanship.'
      },
      {
        id: '6',
        letter: 'A',
        name: 'Awa Sy',
        role: 'Retiree',
        city: 'Saint-Louis (Sor)',
        service: 'Ndouguilma • Home Pharmacy',
        verified: true,
        rating: 5,
        date: '3 weeks ago',
        text: 'My son installed Wallu on my phone. I order prescriptions from the pharmacy without having to walk in the heat. The young couriers are exceptionally polite.'
      }
    ],
    faqs: [
      { q: 'What is Wallu?', a: 'Wallu is a Senegalese super-app that connects you directly with verified and rated artisans, market couriers (Ndouguilma), delivery drivers (Yobbuul ma) and a local marketplace. An accessible and transparent platform with high customer demand.' },
      { q: 'Is the app free?', a: 'Wallu is free to download on the App Store and Google Play. For artisans and merchants, Wallu provides an accessible and transparent platform with high customer demand and fair terms.' },
      { q: 'How does Ndouguilma work?', a: 'You open the app, describe your errand (Kermel, Castors, Sandaga, pharmacy, Wave, etc.), a NIN-verified courier accepts, picks up the items, and delivers to you in 45 minutes.' },
      { q: 'Are the profiles truly verified?', a: 'Yes. National ID (NIN) verification is strictly enforced. In addition, ratings and verified customer reviews ensure absolute trust.' },
      { q: 'How does Wallu AI work?', a: 'It\'s an integrated smart assistant. You can text it directly in the app to find an artisan, courier, or local item instantly.' },
      { q: 'In which cities is Wallu available?', a: 'Everywhere in Senegal! Dakar, Thiès, Saint-Louis, Touba, Ziguinchor, Kaolack, Mbour and all other towns.' },
    ]
  },
};

function TestiCard({ letter, name, role, city, service, verified, rating = 5, date, text }) {
  return (
    <div className="testi-card-modern">
      {/* Top row: Avatar + Info + Verified badge */}
      <div className="testi-card-head">
        <div className="testi-avatar-wrap">
          <div className="testi-avatar-modern">{letter}</div>
          {verified && (
            <span className="testi-avatar-badge" title="Identité NIN vérifiée">
              <Icon name="check" size={10} />
            </span>
          )}
        </div>
        <div className="testi-author-info">
          <div className="testi-author-name-row">
            <h4 className="testi-modern-name">{name}</h4>
            {verified && (
              <span className="testi-verified-pill">
                <Icon name="check" size={11} />
                <span>NIN Vérifié</span>
              </span>
            )}
          </div>
          <div className="testi-author-meta">
            <span className="testi-modern-role">{role}</span>
            {city && (
              <>
                <span className="testi-meta-dot">•</span>
                <span className="testi-modern-city">
                  <Icon name="map" size={11} />
                  {city}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Service Tag & Rating */}
      <div className="testi-middle-bar">
        {service && (
          <span className="testi-service-chip">
            {service}
          </span>
        )}
        <div className="testi-stars-row">
          <div className="testi-stars-flex">
            {Array.from({ length: rating }).map((_, idx) => (
              <Icon key={idx} name="star" size={14} className="testi-star-gold" />
            ))}
          </div>
          <span className="testi-score-num">5.0</span>
        </div>
      </div>

      {/* Quote text */}
      <blockquote className="testi-modern-quote">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Footer: Date & authenticity guarantee */}
      <div className="testi-card-foot">
        <span className="testi-foot-date">
          <Icon name="clock" size={12} />
          {date || 'Avis vérifié'}
        </span>
        <span className="testi-foot-flag">
          <Icon name="shield" size={12} style={{ color: 'var(--blue)' }} /> Expérience Wallu Sénégal
        </span>
      </div>
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

  const [activeService, setActiveService] = useState('ndouguilma');
  const [activeProfCat, setActiveProfCat] = useState('all');
  const [profSearch, setProfSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState('castors');
  const testiRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProfessions = data.professions.filter(p => {
    const matchesCat = activeProfCat === 'all' || p.cat === activeProfCat;
    const matchesSearch = !profSearch.trim() ||
      p.name.toLowerCase().includes(profSearch.trim().toLowerCase()) ||
      (p.tag && p.tag.toLowerCase().includes(profSearch.trim().toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const updateTestiScroll = () => {
    const el = testiRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scrollTestimonials = (direction) => {
    testiRef.current?.scrollBy({ left: direction * 380, behavior: 'smooth' });
  };

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

  useEffect(() => {
    updateTestiScroll();
    const el = testiRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateTestiScroll, { passive: true });
    window.addEventListener('resize', updateTestiScroll);
    return () => {
      el.removeEventListener('scroll', updateTestiScroll);
      window.removeEventListener('resize', updateTestiScroll);
    };
  }, [lang]);

  // Handle Escape key to close modal or mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowLegalModal(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when legal modal is open
  useEffect(() => {
    if (showLegalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showLegalModal]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.15)' : 'none' }}>
        <div className="nav-inner">
          <div 
            className="nav-logo" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            style={{ cursor: 'pointer' }}
            title="Wallu - Accueil"
          >
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

          <div className="nav-right-actions">
            <div className="nav-cta">
              <button className="lang-btn" onClick={toggleLanguage} aria-label="Changer de langue">
                <Icon name="globe" size={15} /> {t.langBtn}
              </button>
              <a 
                href="#download" 
                className="btn-nav"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('download');
                }}
              >
                {t.navDownload}
              </a>
            </div>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
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
                <a 
                  href="#download" 
                  className="btn-nav" 
                  style={{ textAlign: 'center' }} 
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    scrollTo('download');
                  }}
                >
                  {t.navDownloadFree}
                </a>
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
                  <span className="hero-eyebrow-flag">
                    <Icon name="flag" size={13} style={{ color: 'var(--yellow)', marginRight: '4px' }} />
                  </span>
                  {t.heroEyebrow}
                </div>

                <h1>
                  {t.heroTitle1}<em>{t.heroTitle2}</em>{t.heroTitle3}
                </h1>

                <p className="hero-sub">
                  {t.heroSub}
                </p>

                {/* Service Ndouguilma mis en avant dès la première page */}
                <div className="hero-ndouguilma-highlight">
                  <a 
                    href="#ndouguilma-spotlight" 
                    className="hero-ndouguilma-card"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('ndouguilma-spotlight');
                    }}
                  >
                    <div className="nd-card-header">
                      <div className="nd-card-left">
                        <span className="nd-pulse"></span>
                        <span className="nd-badge">
                          <Icon name="shopping" size={13} /> {lang === 'fr' ? 'Ndouguilma' : 'Ndouguilma'}
                        </span>
                        <span className="nd-tag-fast">
                          <Icon name="clock" size={11} /> {lang === 'fr' ? '45 min chrono' : '45 min'}
                        </span>
                      </div>
                      <div className="nd-card-right">
                        <span className="nd-cta-label">{lang === 'fr' ? 'Découvrir' : 'Explore'}</span>
                        <Icon name="arrowRight" size={13} className="nd-arrow" />
                      </div>
                    </div>
                    <div className="nd-card-body">
                      <p className="nd-desc">
                        {lang === 'fr' 
                          ? 'Courses aux marchés Kermel, Castors & livraisons express à domicile' 
                          : 'Market errands from Kermel, Castors & doorstep express delivery'}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-num">+1 200</div>
                    <div className="stat-label">{t.statProviders}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">30+</div>
                    <div className="stat-label">{t.statProfessions}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">100%</div>
                    <div className="stat-label">{lang === 'fr' ? 'Sénégalais' : 'Senegalese'}</div>
                  </div>
                </div>

                <div className="hero-actions">
                  <div className="store-badge-wrap">
                    <a href="https://apps.apple.com/sn/app/wallu/id6796547523?l=fr-FR" target="_blank" rel="noopener noreferrer" className="store-badge" title="Télécharger sur l'App Store (iOS)">
                      <img src={appleStoreBadge} alt="Télécharger Wallu sur App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=wallu.sn&hl=fr" target="_blank" rel="noopener noreferrer" className="store-badge" title="Télécharger sur Google Play (Android)">
                      <img src={playStoreBadge} alt="Télécharger Wallu sur Google Play" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                <div className="hero-glow" />
                <div className="hero-mockup-wrapper">
                  <img 
                    src={appInterfaceImg} 
                    alt="Application mobile Wallu Sénégal" 
                    className="hero-mockup-img" 
                    fetchPriority="high"
                    decoding="async"
                  />
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

        {/* ── SPOTLIGHT NDOUGUILMA (RESSORTI DÈS LA PREMIÈRE PAGE) ── */}
        <section id="ndouguilma-spotlight" className="ndouguilma-spotlight">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge" style={{ background: 'rgba(255, 217, 0, 0.15)', color: 'var(--yellow)', borderColor: 'rgba(255, 217, 0, 0.4)' }}>
                <Icon name="shopping" size={14} />
                <span>{lang === 'fr' ? 'Service Vedette • Ndouguilma Sénégal' : 'Featured Service • Ndouguilma Senegal'}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Ndouguilma : <span className="highlight">Vos courses au marché</span> livrées à domicile en 45 min</>
                ) : (
                  <>Ndouguilma Express: <span className="highlight">Fresh market errands</span> delivered to your doorstep</>
                )}
              </h2>
              <p>
                {lang === 'fr' 
                  ? 'Kermel, Castors, Soumbédioune ou pharmacie de garde : confiez votre liste à un coursier certifié NIN, paiement sécurisé et livraison directe chez vous en 45 minutes.'
                  : 'Kermel, Castors, Soumbédioune or on-duty pharmacy: entrust your errand list to a NIN-certified courier with guaranteed 45-minute delivery.'}
              </p>
            </div>

            <div className="nd-spotlight-grid">
              {/* Left Column: Steps & Markets */}
              <div className="fade-up">
                <div className="nd-steps-container">
                  <div className="nd-step-card">
                    <div className="nd-step-num">1</div>
                    <div className="nd-step-title">{lang === 'fr' ? 'Rédigez votre liste' : 'Write your errand list'}</div>
                    <div className="nd-step-desc">
                      {lang === 'fr' 
                        ? 'Indiquez vos besoins (légumes, poissons frais, viandes, ordonnances...) et le marché souhaité.'
                        : 'List fresh vegetables, daily fish, meats or urgent pharmacy items with your market of choice.'}
                    </div>
                  </div>

                  <div className="nd-step-card">
                    <div className="nd-step-num">2</div>
                    <div className="nd-step-title">{lang === 'fr' ? 'Coursier dédié vérifié' : 'Dedicated verified courier'}</div>
                    <div className="nd-step-desc">
                      {lang === 'fr' 
                        ? 'Un coursier certifié NIN prend en charge votre commande et sélectionne les meilleurs produits avec soin.'
                        : 'A NIN-certified courier accepts your run and carefully selects the freshest market produce.'}
                    </div>
                  </div>

                  <div className="nd-step-card">
                    <div className="nd-step-num">3</div>
                    <div className="nd-step-title">{lang === 'fr' ? 'Transparence totale' : 'Total transparency'}</div>
                    <div className="nd-step-desc">
                      {lang === 'fr' 
                        ? 'Preuve d\'achat et ticket en photo en direct sur WhatsApp. Aucun frais caché.'
                        : 'Live receipt and item photos directly via WhatsApp. Zero hidden charges.'}
                    </div>
                  </div>

                  <div className="nd-step-card">
                    <div className="nd-step-num">4</div>
                    <div className="nd-step-title">{lang === 'fr' ? 'Livraison en 45 min' : '45-minute delivery'}</div>
                    <div className="nd-step-desc">
                      {lang === 'fr' 
                        ? 'Réception directe à domicile ou au bureau. Paiement simple en espèces ou Wave.'
                        : 'Door-to-door delivery at home or office. Simple payment in cash or via Wave.'}
                    </div>
                  </div>
                </div>

                {/* Markets covered bar */}
                <div className="nd-markets-bar">
                  <div className="nd-markets-label">
                    <Icon name="map" size={14} />
                    <span>{lang === 'fr' ? 'Marchés & commerces couverts à Dakar & régions :' : 'Markets covered across Dakar & regions:'}</span>
                  </div>
                  <div className="nd-markets-chips">
                    {[
                      { id: 'soumbedioune', icon: 'fish', label: 'Soumbédioune (Poisson frais)' },
                      { id: 'castors', icon: 'leaf', label: 'Castors (Légumes & condiments)' },
                      { id: 'kermel', icon: 'shopping', label: 'Kermel (Épicerie & fruits)' },
                      { id: 'sandaga', icon: 'tag', label: 'Sandaga & Tilène (Habillement)' },
                      { id: 'pharmacie', icon: 'cross', label: 'Pharmacie de garde 24/7' },
                    ].map(m => (
                      <span 
                        key={m.id}
                        className={`nd-market-chip ${selectedMarket === m.id ? 'active' : ''}`}
                        onClick={() => setSelectedMarket(m.id)}
                        style={{ cursor: 'pointer' }}
                        role="button"
                        tabIndex={0}
                      >
                        <Icon name={m.icon} size={14} />
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Live Simulation Card */}
              <div className="fade-up">
                <div className="nd-live-card">
                  <div className="nd-live-header">
                    <div className="nd-live-title">
                      <Icon name="shopping" size={20} style={{ color: 'var(--yellow)' }} />
                      <span>{lang === 'fr' ? 'Course Ndouguilma en direct' : 'Live Ndouguilma Errand'}</span>
                    </div>
                    <div className="nd-live-status-badge">
                      <span className="nd-pulse"></span>
                      <span>{lang === 'fr' ? 'En cours • Castors' : 'In progress • Castors'}</span>
                    </div>
                  </div>

                  <div className="nd-courier-box">
                    <div className="nd-courier-avatar">OD</div>
                    <div style={{ flex: 1 }}>
                      <div className="nd-courier-name">
                        <span>Oumar Diallo</span>
                        <span className="bento-check"><Icon name="shield" size={11} /> NIN Vérifié</span>
                      </div>
                      <div className="nd-courier-sub">
                        <Icon name="star" size={12} style={{ color: 'var(--yellow)', display: 'inline', verticalAlign: 'middle' }} /> 4.9 (142 courses livrées) • Moto Tiak-Tiak
                      </div>
                    </div>
                  </div>

                  <div className="nd-checklist">
                    <div className="nd-check-item done">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="nd-check-icon"><Icon name="check" size={14} /></div>
                        <span>2 kg Thiof frais du jour (Soumbédioune)</span>
                      </div>
                      <span style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.78rem' }}>Prêt</span>
                    </div>

                    <div className="nd-check-item done">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="nd-check-icon"><Icon name="check" size={14} /></div>
                        <span>Légumes pour Thiéboudienne (Marché Castors)</span>
                      </div>
                      <span style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.78rem' }}>Prêt</span>
                    </div>

                    <div className="nd-check-item">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="nd-check-icon pending"><Icon name="clock" size={13} /></div>
                        <span>Pharmacie de garde (Ordonnance express)</span>
                      </div>
                      <span style={{ color: 'var(--yellow)', fontWeight: 700, fontSize: '0.78rem' }}>Achat en cours</span>
                    </div>
                  </div>

                  <div className="nd-live-footer">
                    <div className="nd-live-eta">
                      <div>{lang === 'fr' ? 'Livraison estimée :' : 'Estimated arrival:'} <strong>~ 25 min</strong></div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{lang === 'fr' ? 'Plateforme accessible & transparente' : 'Accessible & transparent platform'}</div>
                    </div>
                    <a 
                      href="#download" 
                      className="nd-order-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('download');
                      }}
                    >
                      <Icon name="shopping" size={16} />
                      <span>{lang === 'fr' ? 'Lancer ma course' : 'Start errand'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES (POURQUOI WALLU - BENTO STYLE) ────────────────── */}
        <section className="features-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge">
                <Icon name="sparkles" size={14} />
                <span>{t.whyBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Pourquoi choisir <span className="highlight">Wallu</span> au Sénégal ?</>
                ) : (
                  <>Why choose <span className="highlight">Wallu</span> in Senegal?</>
                )}
              </h2>
              <p>{t.whySub}</p>
            </div>

            <div className="why-bento-grid">
              {t.whyCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  className={`why-bento-card fade-up ${card.featured ? 'why-card-featured' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="why-card-header">
                    <div className={`why-card-icon-box why-icon-${card.id}`}>
                      <Icon name={card.icon} size={22} />
                    </div>
                    <div className="why-card-pill-group">
                      <span className="why-card-badge">{card.badge}</span>
                      {card.stat && <span className="why-card-stat">{card.stat}</span>}
                    </div>
                  </div>

                  <div className="why-card-body">
                    <h3 className="why-card-title">{card.title}</h3>
                    <p className="why-card-desc">{card.desc}</p>
                    
                    {card.highlights && card.highlights.length > 0 && (
                      <div className="why-card-highlights">
                        {card.highlights.map((h, idx) => (
                          <div key={idx} className="why-highlight-item">
                            <span className="why-highlight-dot"></span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="why-card-footer">
                    <a 
                      href="#professions" 
                      className="why-card-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('professions');
                      }}
                    >
                      <span>{lang === 'fr' ? 'Découvrir les prestataires' : 'Explore providers'}</span>
                      <Icon name="arrowRight" size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERS & INTERFACE SHOWCASE ─────────────────────────────── */}
        <section id="partners" className="interface-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge badge-blue">
                <Icon name="users" size={15} />
                <span>{t.partnerBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Rejoignez l'écosystème <span className="highlight">Wallu</span> & boostez votre activité</>
                ) : (
                  <>Join the <span className="highlight">Wallu</span> ecosystem & grow your business</>
                )}
              </h2>
              <p>{t.partnerSub}</p>
            </div>

            <div className="interface-container fade-up">
              {/* Left Column (Modern Bento Cards) */}
              <div className="interface-cards-col">
                
                {/* Partner 1: Artisans */}
                <div className="partner-modern-card">
                  <div className="partner-card-header">
                    <div className="partner-icon-box partner-icon-artisan">
                      <Icon name="wrench" size={22} />
                    </div>
                    <div className="partner-header-text">
                      <h3>{t.partner1Title}</h3>
                      <div className="partner-tags-row">
                        {t.partner1Tags.map((tag, idx) => (
                          <span key={idx} className="partner-mini-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="partner-card-desc">{t.partner1Desc}</p>
                  <a 
                    href="#download" 
                    className="partner-card-action"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('download');
                    }}
                  >
                    <span>{t.partner1Btn}</span>
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>

                {/* Partner 2: Livreurs */}
                <div className="partner-modern-card">
                  <div className="partner-card-header">
                    <div className="partner-icon-box partner-icon-livreur">
                      <Icon name="bike" size={22} />
                    </div>
                    <div className="partner-header-text">
                      <h3>{t.partner2Title}</h3>
                      <div className="partner-tags-row">
                        {t.partner2Tags.map((tag, idx) => (
                          <span key={idx} className="partner-mini-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="partner-card-desc">{t.partner2Desc}</p>
                  <a 
                    href="#download" 
                    className="partner-card-action"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('download');
                    }}
                  >
                    <span>{t.partner2Btn}</span>
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>

                {/* Partner 3: Commerçants */}
                <div className="partner-modern-card">
                  <div className="partner-card-header">
                    <div className="partner-icon-box partner-icon-boutique">
                      <Icon name="shopping" size={22} />
                    </div>
                    <div className="partner-header-text">
                      <h3>{t.partner3Title}</h3>
                      <div className="partner-tags-row">
                        {t.partner3Tags.map((tag, idx) => (
                          <span key={idx} className="partner-mini-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="partner-card-desc">{t.partner3Desc}</p>
                  <a 
                    href="#download" 
                    className="partner-card-action"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('download');
                    }}
                  >
                    <span>{t.partner3Btn}</span>
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>

              </div>

              {/* Right Column (Visual Display with Mockup & Floating Trust Points) */}
              <div className="interface-img-col">
                <div className="interface-visual-stage">
                  <div className="interface-ambient-glow" />
                  <img 
                    src={appInterfaceImg} 
                    alt="Interface Wallu Sénégal sur smartphone" 
                    className="interface-mockup-img" 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="interface-stat-pill pill-top">
                    <div className="stat-pill-icon"><Icon name="shield" size={14} /></div>
                    <div className="stat-pill-content">
                      <strong>100% Vérifié</strong>
                      <span>Profils NIN certifiés</span>
                    </div>
                  </div>
                  <div className="interface-stat-pill pill-bottom">
                    <div className="stat-pill-icon stat-icon-gold"><Icon name="zap" size={14} /></div>
                    <div className="stat-pill-content">
                      <strong>{lang === 'fr' ? 'Forte Demande' : 'High Demand'}</strong>
                      <span>{lang === 'fr' ? 'Clients actifs au quotidien' : 'Active daily customers'}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICES (4 pillars) ────────────────────────────── */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge badge-dark">
                <Icon name="zap" size={14} />
                <span>{t.srvBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Les 5 Piliers indispensables de <span className="highlight">Wallu</span></>
                ) : (
                  <>The 5 essential pillars of <span className="highlight">Wallu</span></>
                )}
              </h2>
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
                      <div className="sp-eyebrow" style={{ color: 'var(--yellow)', borderColor: 'rgba(255,217,0,0.4)', background: 'rgba(255,217,0,0.12)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Icon name="sparkles" size={13} />
                        {s.label}
                      </div>
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
                    
                    {/* Service Interactive Visual Card (100% Real UI Vector & App Components, No AI Images, No Emojis) */}
                    <div className="sp-interactive-visual">
                      {s.id === 'prestataires' && (
                        <div className="ui-bento-card">
                          <div className="bento-header">
                            <div className="bento-user-badge">
                              <div className="bento-avatar">
                                <Icon name="user" size={22} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <div>
                                <div className="bento-name">Mamadou Ndiaye <span className="bento-check"><Icon name="shield" size={12} /> NIN Vérifié</span></div>
                                <div className="bento-sub">Plombier & Électricien • Dakar, Almadies</div>
                              </div>
                            </div>
                            <div className="bento-rating"><Icon name="star" size={14} /> 4.9 <span className="bento-rating-count">(48 avis)</span></div>
                          </div>

                          <div className="bento-quick-tags">
                            <span className="bento-tag yellow"><Icon name="zap" size={13} /> Intervention rapide</span>
                            <span className="bento-tag green"><span className="live-dot"></span> En ligne</span>
                            <span className="bento-tag blue"><Icon name="shield" size={13} /> Modèle transparent</span>
                          </div>

                          <div className="bento-body">
                            <div className="bento-guarantee" style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                              <Icon name="shield" size={16} style={{ color: 'var(--yellow)', flexShrink: 0 }} /> Pièce d'identité nationale (NIN) certifiée par l'équipe Wallu
                            </div>
                            <div className="bento-guarantee" style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                              <Icon name="check" size={15} style={{ color: '#4ade80', flexShrink: 0 }} /> Paiement direct sans intermédiaire • Tarifs clairs et transparents
                            </div>
                          </div>

                          <div className="bento-actions">
                            <a href="tel:+221774682474" className="bento-btn bento-btn-call">
                              <Icon name="phone" size={15} /> {lang === 'fr' ? 'Appeler directement' : 'Call directly'}
                            </a>
                            <a 
                              href="https://wa.me/221774682474?text=Bonjour%20Wallu%2C%20je%20recherche%20un%20prestataire" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="bento-btn bento-btn-wa"
                            >
                              <Icon name="messageSquare" size={15} /> WhatsApp
                            </a>
                          </div>
                        </div>
                      )}

                      {s.id === 'yobbuulma' && (
                        <div className="ui-bento-card">
                          <div className="bento-header">
                            <div className="bento-badge-pill">
                              <Icon name="truck" size={15} /> Yobbuul ma Express
                            </div>
                            <div className="bento-live-badge"><span className="live-dot"></span> 12 livreurs à proximité</div>
                          </div>

                          <div className="bento-transport-types">
                            <div className="transport-type-item active">
                              <div className="transport-icon-box">
                                <Icon name="bike" size={20} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <div>
                                <div className="transport-title">Moto Tiak-Tiak</div>
                                <div className="transport-sub">Plis urgents, repas, colis légers</div>
                              </div>
                              <span style={{ marginLeft: 'auto', background: 'rgba(255, 217, 0, 0.15)', color: 'var(--yellow)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 700 }}>Express</span>
                            </div>
                            <div className="transport-type-item">
                              <div className="transport-icon-box">
                                <Icon name="truck" size={20} style={{ color: '#38bdf8' }} />
                              </div>
                              <div>
                                <div className="transport-title">Camionnette / Fourgon</div>
                                <div className="transport-sub">Déménagement, gros volumes</div>
                              </div>
                              <span style={{ marginLeft: 'auto', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 10px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 700 }}>Sur mesure</span>
                            </div>
                          </div>

                          <div className="bento-route-preview">
                            <div className="route-point">
                              <span className="dot origin"></span>
                              <span>Départ : <strong>Dakar Plateau</strong></span>
                            </div>
                            <div className="route-line"></div>
                            <div className="route-point">
                              <span className="dot dest"></span>
                              <span>Arrivée : <strong>Parcelles Assainies</strong></span>
                            </div>
                          </div>

                          <div className="bento-status-box">
                            <Icon name="truck" size={16} />
                            <span>Livraison estimée : <strong>25 min</strong> • Suivi de course en direct</span>
                          </div>
                        </div>
                      )}

                      {s.id === 'ndouguilma' && (
                        <div className="ui-bento-card">
                          <div className="bento-header">
                            <div className="bento-badge-pill" style={{ background: 'rgba(10, 110, 189, 0.15)', color: '#38bdf8' }}>
                              <Icon name="shopping" size={15} /> Ndouguilma Marché
                            </div>
                            <div className="bento-tag green"><Icon name="shield" size={12} /> NIN Obligatoire</div>
                          </div>

                          <div className="market-list-box">
                            <div className="market-list-title">Votre liste de commissions au marché :</div>
                            <div className="market-item-row">
                              <div className="market-item-icon-box">
                                <Icon name="shopping" size={15} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <span className="market-item-name">Légumes frais (Thiéboudienne) - Marché Castors</span>
                              <span className="market-item-check"><Icon name="check" size={14} /></span>
                            </div>
                            <div className="market-item-row">
                              <div className="market-item-icon-box">
                                <Icon name="shopping" size={15} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <span className="market-item-name">Poisson frais (Thiof) - Soumbédioune</span>
                              <span className="market-item-check"><Icon name="check" size={14} /></span>
                            </div>
                            <div className="market-item-row">
                              <div className="market-item-icon-box">
                                <Icon name="shield" size={15} style={{ color: '#38bdf8' }} />
                              </div>
                              <span className="market-item-name">Pharmacie de garde (Ordonnance express)</span>
                              <span className="market-item-check"><Icon name="check" size={14} /></span>
                            </div>
                          </div>

                          <div className="bento-delivery-alert">
                            <span><Icon name="home" size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Livraison directe à domicile • Paiement à réception</span>
                          </div>
                        </div>
                      )}

                      {s.id === 'vente' && (
                        <div className="ui-bento-card">
                          <div className="bento-header">
                            <div className="bento-badge-pill" style={{ background: 'rgba(255, 217, 0, 0.15)', color: '#FFD900' }}>
                              <Icon name="tag" size={15} /> Wallu Vente Marketplace
                            </div>
                            <span className="bento-tag yellow"><Icon name="shield" size={12} /> Forte visibilité</span>
                          </div>

                          <div className="marketplace-grid-preview">
                            <div className="market-product-card">
                              <div className="product-thumb">
                                <Icon name="smartphone" size={24} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <div className="product-details">
                                <div className="product-title">iPhone 14 Pro Max 256Go</div>
                                <div className="product-loc"><Icon name="map" size={12} style={{ display: 'inline' }} /> Dakar, Mermoz</div>
                                <div className="product-status-tag" style={{ color: '#4ade80', fontSize: '0.76rem', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Icon name="shield" size={11} /> Vendeur vérifié
                                </div>
                              </div>
                            </div>
                            <div className="market-product-card">
                              <div className="product-thumb">
                                <Icon name="home" size={24} style={{ color: '#38bdf8' }} />
                              </div>
                              <div className="product-details">
                                <div className="product-title">Salon d'angle velours moderne</div>
                                <div className="product-loc"><Icon name="map" size={12} style={{ display: 'inline' }} /> Thiès, Centre</div>
                                <div className="product-status-tag" style={{ color: '#4ade80', fontSize: '0.76rem', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Icon name="shield" size={11} /> Vendeur vérifié
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bento-status-box" style={{ background: 'rgba(255, 217, 0, 0.08)', borderColor: 'rgba(255, 217, 0, 0.2)' }}>
                            <span><Icon name="check" size={15} style={{ color: 'var(--yellow)' }} /> Vous gardez 100% de vos revenus sans intermédiaire</span>
                          </div>
                        </div>
                      )}

                      {s.id === 'walluai' && (
                        <div className="ui-bento-card">
                          <div className="bento-header">
                            <div className="bento-badge-pill" style={{ background: 'rgba(255, 217, 0, 0.15)', color: '#FFD900' }}>
                              <Icon name="bot" size={15} /> Wallu AI Assistant
                            </div>
                            <span className="bento-tag green"><Icon name="zap" size={12} /> Disponible 24h/7j</span>
                          </div>

                          <div className="ai-chat-simulation">
                            <div className="ai-chat-bubble user">
                              <span>Bonjour, j'ai une fuite d'eau sous l'évier à Yoff, qui peut venir vite ?</span>
                            </div>
                            <div className="ai-chat-bubble ai">
                              <div className="ai-avatar">
                                <Icon name="bot" size={18} style={{ color: 'var(--yellow)' }} />
                              </div>
                              <div className="ai-text">
                                J'ai trouvé <strong>3 artisans vérifiés NIN</strong> disponibles immédiatement à <strong>Yoff</strong>.
                                <div className="ai-rec-card">
                                  <span><Icon name="wrench" size={13} style={{ display: 'inline', marginRight: '4px' }} /> <strong>Alioune Cissé</strong> (<Icon name="star" size={12} style={{ display: 'inline', color: 'var(--yellow)', verticalAlign: '-1px' }} /> 4.9)</span>
                                  <span className="ai-dist">à 800m • Dispo</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div 
                            className="ai-input-bar"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              setProfSearch('Plombier');
                              scrollTo('professions');
                            }}
                            title={lang === 'fr' ? 'Tester une recherche dans Wallu' : 'Try searching in Wallu'}
                          >
                            <span className="ai-placeholder">
                              {lang === 'fr' ? 'Poser une question à Wallu AI (ex: Plombier, Électricien...)' : 'Ask Wallu AI (e.g. Plumber, Electrician...)'}
                            </span>
                            <div className="ai-send-btn"><Icon name="arrowRight" size={14} /></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                )
              ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── PROFESSIONS (DES EXPERTS POUR CHAQUE BESOIN) ────────────────── */}
        <section id="professions" className="professions-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge badge-blue">
                <Icon name="tools" size={15} />
                <span>{t.profBadge} • {lang === 'fr' ? '30+ Métiers' : '30+ Professions'}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Des experts vérifiés pour <span className="highlight">chaque besoin</span></>
                ) : (
                  <>Verified experts for <span className="highlight">every need</span></>
                )}
              </h2>
              <p>{t.profSub}</p>
            </div>

            {/* Filter & Search Suite */}
            <div className="prof-controls-container fade-up">
              {/* Category Pills Bar */}
              <div className="prof-categories-scroll">
                {data.profCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`prof-cat-pill ${activeProfCat === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveProfCat(cat.id)}
                  >
                    <Icon name={cat.icon} size={15} />
                    <span>{cat.label}</span>
                    {cat.id === 'all' && (
                      <span className="prof-cat-count">{data.professions.length}</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Search Bar & Stats */}
              <div className="prof-search-bar-row">
                <div className="prof-search-input-box">
                  <Icon name="search" size={18} />
                  <input
                    type="text"
                    value={profSearch}
                    onChange={(e) => setProfSearch(e.target.value)}
                    placeholder={t.profSearchPlaceholder}
                    className="prof-search-input"
                  />
                  {profSearch && (
                    <button
                      className="prof-clear-btn"
                      onClick={() => setProfSearch('')}
                      aria-label="Clear search"
                    >
                      <Icon name="x" size={13} />
                    </button>
                  )}
                </div>
                <div className="prof-count-tag">
                  <span className="prof-count-number">{filteredProfessions.length}</span>
                  <span>{t.profFoundCount}</span>
                </div>
              </div>
            </div>

            {/* Modern Professions Grid */}
            {filteredProfessions.length > 0 ? (
              <div className="professions-grid-modern">
                {filteredProfessions.map((p, i) => (
                  <motion.div
                    key={p.name}
                    className={`profession-card-modern prof-cat-${p.cat} fade-up`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                  >
                    <div className="prof-card-top-row">
                      <div className="prof-icon-modern">
                        <Icon name={p.icon} size={22} />
                      </div>
                      <div className="prof-live-status">
                        <span className="live-pulse-dot"></span>
                        <span className="live-status-text">{t.profAvailableTag}</span>
                      </div>
                    </div>

                    <div className="prof-card-middle">
                      <h3 className="prof-modern-name">{p.name}</h3>
                      {p.tag && <span className="prof-modern-speciality">{p.tag}</span>}
                    </div>

                    <div className="prof-card-bottom-row">
                      <a 
                        href="#download" 
                        className="prof-action-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo('download');
                        }}
                      >
                        <span>{lang === 'fr' ? 'Trouver un pro' : 'Find a pro'}</span>
                        <Icon name="arrowRight" size={13} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="prof-empty-state fade-up">
                <div className="prof-empty-icon-wrap">
                  <Icon name="search" size={28} />
                </div>
                <h3>{t.profNotFound}</h3>
                <button
                  className="prof-empty-reset-btn"
                  onClick={() => {
                    setProfSearch('');
                    setActiveProfCat('all');
                  }}
                >
                  {t.profResetSearch}
                </button>
              </div>
            )}

            {/* Bento Callout Banner for Artisans & Prestataires */}
            <div className="prof-artisan-banner fade-up">
              <div className="prof-banner-left">
                <div className="prof-banner-badge">
                  <Icon name="sparkles" size={14} />
                  <span>{t.profCtaTag}</span>
                </div>
                <h3 className="prof-banner-title">{t.profCtaTitle}</h3>
                <p className="prof-banner-sub">{t.profCtaSub}</p>
              </div>
              <div className="prof-banner-right">
                <a 
                  href="#download" 
                  className="btn btn-yellow prof-banner-cta-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('download');
                  }}
                >
                  <span>{t.profCtaBtn}</span>
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
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
                    alt="Assane SOW – Fondateur & Directeur Général de Wallu, application de services au Sénégal"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="founder-img-badge">
                  <div className="badge-num">
                    <Icon name="flag" size={18} style={{ color: 'var(--yellow)' }} />
                  </div>
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
                <div className="section-badge" style={{ marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icon name="sparkles" size={13} />
                  {t.founderBadge}
                </div>

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

                <div className="founder-name-block" itemScope itemType="https://schema.org/Person">
                  <div className="founder-name" itemProp="name">Assane SOW</div>
                  <div className="founder-role" itemProp="jobTitle">{t.founderRole}</div>
                  <div className="founder-tag">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Icon name="map" size={14} /> Dakar, Sénégal</span>
                    <span style={{ opacity: 0.4, margin: '0 4px' }}>•</span>
                    <a 
                      href="https://www.tiktok.com/@assane.sow_?_r=1&_t=ZN-990Ic78zyWk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}
                    >
                      <Icon name="tiktok" size={14} style={{ color: '#000' }} /> @assane.sow_
                    </a>
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
              <div className="section-badge">
                <Icon name="star" size={14} />
                <span>{t.testiBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Ce que les Sénégalais disent de <span className="highlight">Wallu</span></>
                ) : (
                  <>What the Senegalese are saying about <span className="highlight">Wallu</span></>
                )}
              </h2>
              <p>{t.testiSub}</p>

              {/* Trust Score Header Banner */}
              <div className="testi-trust-bar">
                <div className="testi-trust-stat">
                  <span className="testi-trust-val" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    4.8 <Icon name="star" size={16} style={{ color: 'var(--yellow)' }} />
                  </span>
                  <span className="testi-trust-lbl">Note moyenne Store</span>
                </div>
                <div className="testi-trust-divider" />
                <div className="testi-trust-stat">
                  <span className="testi-trust-val">1,200+</span>
                  <span className="testi-trust-lbl">Avis clients & pros</span>
                </div>
                <div className="testi-trust-divider" />
                <div className="testi-trust-stat">
                  <span className="testi-trust-val">100%</span>
                  <span className="testi-trust-lbl">Identités NIN vérifiées</span>
                </div>
                <div className="testi-trust-divider" />
                <div className="testi-trust-stat">
                  <span className="testi-trust-val">30+</span>
                  <span className="testi-trust-lbl">{lang === 'fr' ? 'Métiers vérifiés' : 'Verified professions'}</span>
                </div>
              </div>
            </div>

            <div className="testi-slider-wrap fade-up">
              <button
                type="button"
                className="testi-arrow testi-arrow-left"
                onClick={() => scrollTestimonials(-1)}
                disabled={!canScrollLeft}
                aria-label={lang === 'fr' ? 'Avis précédents' : 'Previous reviews'}
              >
                <Icon name="chevronLeft" size={22} />
              </button>

              <div className="testi-grid-modern" ref={testiRef} onScroll={updateTestiScroll}>
                {data.testimonials.map((tInfo, i) => (
                  <div key={tInfo.id || i} className="testi-item-wrapper" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <TestiCard {...tInfo} />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="testi-arrow testi-arrow-right"
                onClick={() => scrollTestimonials(1)}
                disabled={!canScrollRight}
                aria-label={lang === 'fr' ? 'Avis suivants' : 'Next reviews'}
              >
                <Icon name="chevronRight" size={22} />
              </button>

              <p className="testi-scroll-hint">
                <Icon name="chevronLeft" size={14} />
                {t.testiScrollHint}
                <Icon name="chevronRight" size={14} />
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="section-header fade-up">
              <div className="section-badge badge-blue">
                <Icon name="shield" size={14} />
                <span>{t.faqBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Tout ce que vous voulez savoir sur <span className="highlight">Wallu</span></>
                ) : (
                  <>Everything you want to know about <span className="highlight">Wallu</span></>
                )}
              </h2>
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
              <div className="section-badge badge-dark">
                <Icon name="sparkles" size={14} />
                <span>{t.ctaBadge}</span>
              </div>
              <h2>
                {lang === 'fr' ? (
                  <>Simplifiez votre quotidien dès aujourd'hui avec <span className="highlight">Wallu</span></>
                ) : (
                  <>Simplify your daily life today with <span className="highlight">Wallu</span></>
                )}
              </h2>
              <p>{t.ctaSub}</p>

              <div className="cta-stores">
                <a
                  href="https://apps.apple.com/sn/app/wallu/id6796547523?l=fr-FR"
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

              <div className="cta-numbers">
                <div className="cta-num-item">
                  <div className="num-val">1 200+</div>
                  <div className="num-lbl">{t.ctaStatsActive}</div>
                </div>
                <div className="cta-num-item">
                  <div className="num-val" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    4.8 <Icon name="star" size={20} style={{ color: 'var(--yellow)' }} />
                  </div>
                  <div className="num-lbl">{t.ctaStatsRating}</div>
                </div>
                <div className="cta-num-item">
                  <div className="num-val">70+</div>
                  <div className="num-lbl">{t.ctaStatsCities}</div>
                </div>
                <div className="cta-num-item">
                  <div className="num-val">30+</div>
                  <div className="num-lbl">{lang === 'fr' ? 'Métiers qualifiés' : 'Skilled trades'}</div>
                </div>
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
                <h3>Assane SOW – Gestion & Partenariats</h3>
                <p>Pour toute question commerciale ou demande de partenariat avec Wallu.</p>
                <div className="contact-links-stack">
                  <a href="tel:+221774682474" className="contact-link">+221 77 468 24 74</a>
                  <a href="mailto:assane-service@wallu.sn" className="contact-link">assane-service@wallu.sn</a>
                </div>
             </div>
             <div className="contact-card">
                <div className="contact-icon"><Icon name="mail" size={24} /></div>
                <h3>Momar DIOP – Support Développeur</h3>
                <p>Pour les problèmes techniques ou suggestions sur l'application Wallu.</p>
                <div className="contact-links-stack">
                  <a href="tel:+221777542053" className="contact-link">+221 77 754 20 53</a>
                  <a href="mailto:support@wallu.sn" className="contact-link">support@wallu.sn</a>
                  <a href="mailto:momardiop091@gmail.com" className="contact-link">momardiop091@gmail.com</a>
                  <a href="https://www.linkedin.com/in/momar-diop/" target="_blank" rel="noopener noreferrer me" className="contact-link">LinkedIn – Momar DIOP</a>
                  <a href="https://github.com/Momar-dev" target="_blank" rel="noopener noreferrer me" className="contact-link">GitHub – Momar-dev</a>
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
              <div 
                className="footer-logo"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
                title="Wallu - Retour en haut"
              >
                <img src={walluIcon} alt="Wallu" />
                Wallu
              </div>
              <p className="footer-desc">
                {t.footerDesc}
              </p>

              
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
                <li><a href="/privacy.html" target="_blank" rel="noopener noreferrer">{t.footerPrivacy}</a></li>
                <li><a href="https://docs.google.com/document/d/1KS3E0WOi-Uj1U6fDjcMuLgjnolnwYCkPQSTaLNID9VA/edit" target="_blank" rel="noopener noreferrer">{t.footerTerms}</a></li>
                <li><button type="button" onClick={() => setShowLegalModal(true)} className="footer-link-btn">{t.footerLegal}</button></li>
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
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-socials">
              <a href="https://www.instagram.com/wallu.sn?utm_source=qr&igsh=MXFoYjZobzByNWpmaw==" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram Wallu">
                <Icon name="instagram" size={20} />
              </a>
              <a href="https://www.tiktok.com/@assane.sow_?_r=1&_t=ZN-990Ic78zyWk" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="TikTok Assane SOW - Wallu">
                <Icon name="tiktok" size={20} />
              </a>
            </div>
            <p className="footer-bottom-text">
              {t.footerRights}
            </p>
            <p className="footer-credits-text">
              {lang === 'fr' ? 'Développé par' : 'Developed by'}{' '}
              <a href="https://www.linkedin.com/in/momar-diop/" target="_blank" rel="noopener noreferrer me" className="footer-credit-link">Momar DIOP</a>
              {' • '}
              {lang === 'fr' ? 'Fondé par' : 'Founded by'}{' '}
              <strong className="footer-credit-name">Assane SOW</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING ACTIONS (WHATSAPP + BACK TO TOP) ───────── */}
      <div className="floating-actions-container">
        <a
          href="https://wa.me/221774682474?text=Bonjour%20Wallu%2C%20j%27ai%20besoin%20d%27une%20information%20sur%20l%27application."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Assistance WhatsApp directe"
          title="Contacter le support Wallu sur WhatsApp"
        >
          <Icon name="messageSquare" size={18} />
          <span className="floating-whatsapp-label">{lang === 'fr' ? 'Besoin d\'aide ?' : 'Need help?'}</span>
        </a>

        {scrolled && (
          <button 
            type="button" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="floating-back-top-btn"
            aria-label="Retour en haut"
            title="Retour en haut de page"
          >
            <Icon name="chevronLeft" size={18} style={{ transform: 'rotate(90deg)' }} />
          </button>
        )}
      </div>

      {/* ── LEGAL MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {showLegalModal && (
          <motion.div 
            className="legal-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLegalModal(false)}
          >
            <motion.div 
              className="legal-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="legal-modal-header">
                <div className="legal-modal-title-wrap">
                  <Icon name="shield" size={20} style={{ color: 'var(--yellow)' }} />
                  <h3>Mentions Légales & Propriété Intellectuelle</h3>
                </div>
                <button 
                  type="button" 
                  onClick={() => setShowLegalModal(false)} 
                  className="legal-modal-close"
                  aria-label="Fermer"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>

              <div className="legal-modal-body">
                <section className="legal-sec">
                  <h4>1. Éditeur de l'application & du site</h4>
                  <p>
                    <strong>Nom du service :</strong> Wallu (wallu.sn)<br />
                    <strong>Activité :</strong> Plateforme et application mobile de mise en relation de services locaux, livraisons et marketplace au Sénégal.<br />
                    <strong>Fondateur & Directeur Général :</strong> Assane SOW (<a href="mailto:assane-service@wallu.sn">assane-service@wallu.sn</a> • +221 77 468 24 74)<br />
                    <strong>Conception technique & Développement :</strong> Momar DIOP (<a href="mailto:momardiop091@gmail.com">momardiop091@gmail.com</a> • +221 77 754 20 53)<br />
                    <strong>Siège / Localisation :</strong> Dakar, République du Sénégal.
                  </p>
                </section>

                <section className="legal-sec">
                  <h4>2. Hébergement & Infrastructure</h4>
                  <p>
                    Le site et les API de l'application Wallu sont hébergés sur des infrastructures cloud sécurisées aux normes internationales garantissant une disponibilité permanente et le chiffrement des échanges (HTTPS / SSL).
                  </p>
                </section>

                <section className="legal-sec">
                  <h4>3. Protection des Données Personnelles (CDP Sénégal)</h4>
                  <p>
                    Conformément aux directives de la <strong>Commission de Protection des Données Personnelles (CDP)</strong> du Sénégal, Wallu s'engage à garantir la confidentialité absolue des données de ses utilisateurs. Les informations collectées (numéro de téléphone, pièce d'identité NIN pour vérification artisan) ne sont jamais revendues à des tiers et servent exclusivement au bon fonctionnement du service de mise en relation.
                  </p>
                </section>

                <section className="legal-sec">
                  <h4>4. Propriété Intellectuelle</h4>
                  <p>
                    L'ensemble des marques, logos, visuels, textes et architectures de l'application Wallu sont la propriété exclusive de Wallu SN et de ses fondateurs. Toute reproduction partielle ou intégrale sans accord préalable est strictement interdite.
                  </p>
                </section>

                <div className="legal-modal-footer">
                  <button 
                    type="button" 
                    onClick={() => setShowLegalModal(false)}
                    className="btn btn-primary"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
