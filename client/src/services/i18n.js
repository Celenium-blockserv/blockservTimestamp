import i18next from "i18next";

import {initReactI18next} from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

    en: {
        translation: {
            app_name: "Blockserv Timestamper",
            titleMain: "Celenium Timestamper on Polygon Mainnet"
        },
    },
    fr: {
        translation: {
            app_name: "Timestamper par Celenium",
            titleMain: "Timestamper par Celenium sur le Mainnet Polygon"
        },

    },

};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;

// const { t, i18n } = useTranslation()
// i18n.language // => "fr" when active language is French
// i18n.changeLanguage("fr")
