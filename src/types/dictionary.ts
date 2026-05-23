export interface Article {
  id: number;
  title: string;
  cat: string;
  img: string;
  desc: string;
  content: string[];
  footer: string;
}

export interface NavbarDictionary {
  manifesto: string;
  services: string;
  news: string;
  cta: string;
}

export interface HeroDictionary {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  cta: string;
}

export interface StatsDictionary {
  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;
}

export interface ServicesDictionary {
  title: string;
  titleHighlight: string;
  desc: string;
  srv1Title: string;
  srv1Desc: string;
  srv2Title: string;
  srv2Desc: string;
  srv3Title: string;
  srv3Desc: string;
}

export interface ManifestoDictionary {
  title: string;
}

export interface NewsDictionary {
  all: string;
  backToJournal: string;
  catalog: string;
  newsletterTitle: string;
  newsletterHighlight: string;
  newsletterDesc: string;
  emailLabel: string;
  emailPlaceholder: string;
  subscribe: string;
  backToCatalog: string;
  journalTitle: string;
  journalHighlight: string;
  readManuscript: string;
  empty: string;
  alert: string;
  btnProcessing?: string;
  articles: Article[];
}

export interface LeadMagnetDictionary {
  badge: string;
  title: string;
  titleHighlight: string;
  desc: string;
  feature1: string;
  feature2: string;
  ctaTitle: string;
  ctaTitleSuccess: string;
  ctaDesc: string;
  ctaDescSuccess: string;
  emailLabel: string;
  emailPlaceholder: string;
  btnProcessing: string;
  btnDownload?: string;
  btnPlay?: string;
  spamDesc: string;
  successMsg: string;
}

export interface StoicAIDictionary {
  badge: string;
  title: string;
  titleHighlight: string;
  desc: string;
  inputPlaceholder: string;
  btnAsk: string;
  btnAsking: string;
  error: string;
  note: string;
}

export interface FooterDictionary {
  desc: string;
  navTitle: string;
  nav1: string;
  nav2: string;
  nav3: string;
  connTitle: string;
  conn1: string;
  conn2: string;
  conn3: string;
  copyright: string;
  privacy: string;
  terms: string;
}

export interface AetherProductDictionary {
  badge: string;
  title: string;
  titleHighlight: string;
  desc: string;
  feature1: string;
  feature2: string;
  ctaTitle: string;
  ctaDesc: string;
  btnAcquire: string;
  spamDesc: string;
}

export interface Dictionary {
  nav: NavbarDictionary;
  hero: HeroDictionary;
  stats: StatsDictionary;
  services: ServicesDictionary;
  manifesto: ManifestoDictionary;
  news: NewsDictionary;
  leadMagnet: LeadMagnetDictionary;
  audioLeadMagnet: LeadMagnetDictionary;
  aetherProduct: AetherProductDictionary;
  footer: FooterDictionary;
  stoicAI: StoicAIDictionary;
}
