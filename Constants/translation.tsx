import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18n from '../Screens/Instr. Noha Screens/Resources';

const resources = {
    en: {
        translation: {
            register: 'Register',
            fullName: 'Full Name',
            ID: 'ID',
            Email: 'E-Mail',
            Password: 'Password',
            PhoneNumber: 'Phone Number',
            Age: 'Age',
            CreateAnAccount: 'CREATE AN ACCOUNT',
            Changelang: 'Italiano',
        },
    },
    it: {
        translation: {
            register: 'Registro',
            fullName: 'Nome e Cognome',
            ID: 'ID',
            Email: 'E-Mail',
            Password: 'Password',
            PhoneNumber: 'Numero di telefono',
            Age: 'Età',
            CreateAnAccount: 'CREARE UN ACCOUNT',
            Changelang: 'English',
        },
    },
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    })

export default i18n;