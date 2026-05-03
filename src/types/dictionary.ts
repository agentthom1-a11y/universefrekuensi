export type Dictionary = Record<string, unknown>;

export interface Article {
  id: number;
  title: string;
  cat: string;
  img: string;
  desc: string;
  content: string[];
  footer: string;
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
