import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        fallbackLng: false,
        debug: !!IS_DEV,

        interpolation: {
            escapeValue: false // not needed for react!!
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
        // react i18next special options (optional)
        // override if needed - omit if ok with defaults
        /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
    });

export default i18n;
