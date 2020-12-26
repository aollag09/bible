import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

import translationEN from '../../resources/locales/en/translation.json'
import translationFR from '../../resources/locales/fr/translation.json'
import translationES from '../../resources/locales/es/translation.json'

const resources = {
    en: {translation: translationEN},
    fr: {translation: translationFR},
    es: {translation: translationES}
}

i18n
    .use(initReactI18next)
    .use(detector)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n