import {en} from './en'
import {zhCn} from './zhCn'
import {ja} from './ja'
import {config} from "../consts";

export const languages = {
  en: 'English',
  'zh-cn': '中文',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

const ui: Record<Lang, Record<string, string>> = {
  en,
  'zh-cn': zhCn,
  ja,
}

export const defaultLang = 'en' satisfies Lang;
export const supportedLangs = Object.keys(languages) as Lang[];

export function isLang(value: string | undefined): value is Lang {
  return !!value && supportedLangs.includes(value as Lang);
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return isLang(lang) ? lang : defaultLang;
}

export function stripLangFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (isLang(parts[0])) {
    parts.shift();
  }
  const path = `/${parts.join('/')}`;
  return path === '/' ? '/' : path.replace(/\/$/, '');
}

export function localizePath(pathname: string, lang: Lang) {
  const path = stripLangFromPath(pathname || '/');
  if (path === '/') {
    return `/${lang}/`;
  }
  return `/${lang}${path}`;
}

export function switchLangPath(url: URL, lang: Lang) {
  return localizePath(url.pathname, lang) + url.search + url.hash;
}

export function getPostLang(data: { lang?: string | null }) {
  return isLang(data.lang || undefined) ? data.lang as Lang : defaultLang;
}

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: string) {
    return ui[lang]?.[key] || ui[defaultLang][key] || key;
  }
}

export function t(key: string, lang: Lang = (isLang(config.lang) ? config.lang : defaultLang)) {
  return useTranslations(lang)(key);
}

