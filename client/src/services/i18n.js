import i18next from "i18next";

import {initReactI18next} from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

    en: {
        translation: {
            app_name: "CONSIGNATION BLOCKCHAIN",
            encodingMain:"1) Encoding",
            consignationMain:"2) Consignation",
            consultationMain:"3) Consultation",

            pricingButtonFooter:"Pricing",
            contactButtonFooter:"Contact",

            dragNDropEncoder: "Drag 'n' drop the file here",
            warningEncoder: "Warning: your file is not stored on this site",
            hashEncoder: "Computed signature",
            copyEncoder: "Copy to clipboard",

            hashConsignation:"Numerical signature of file:",
            ownerConsignation:"Owner of the file:",
            inputTextConsignation:"Polygon Blockchain public address",
            recordConsignation:"Record",
            alreadyConsignation: "This numerical signature is already recorded by ",
            googleDriveUrlConsignation: "Google drive address: ",
            generateGoogleDriveQRCodeConsignation:"Generate QR Code with Google drive URL",

            ownerConsultation:"Owner account address:",
            inputTextConsultation:"Address on the Polygon Mainnet",
            listConsultation:"Get numerical signatures recorded for this owner address",
            dateTransactionConsultation:"Date ( dd/mm/yy )",
            hashTransactionConsultation:"Hash",
            blockNumberTransactionConsultation:"Block",
            qrcodeConsultation:"QR Code (clic here)",
            qrcodeHideConsultation:"QR Code",
            hashConsultation: "Numerical signature: ",
            hashInputMsgConsultation: "Numerical signature on 64 digits lowercase",
            getOwnerConsultation: "Check the owner for this numerical signature",
            recordedByConsultation: "This numerical signature was recorded by: ",


            contactUsFooter:"Contact us",

        },
    },
    fr: {
        translation: {
            app_name: "Tiers Déposant sur la Blockchain",
            encodingMain:"1) Encodage",
            consignationMain:"2) Consignation",
            consultationMain:"3) Consultation",

            pricingButtonFooter:"C.G.U",
            contactButtonFooter:"Assistance",

            dragNDropEncoder: "Déposer le fichier ici",
            warningEncoder: "Attention: ce site n’a pas accès à votre fichier, conservez-le sans limite de temps",
            hashEncoder: "Empreinte numérique de votre fichier: ",
            copyEncoder: "Copier dans le presse papier",

            hashConsignation:"Empreinte numérique du fichier:",
            ownerConsignation:"Adresse du tiers déposant :",
            inputTextConsignation:"Adresse publique sur la blockchain Polygon.",
            recordConsignation:"Enregistrer la consignation",
            alreadyConsignation: "L'empreinte numérique a déjà été déposée par ",
            googleDriveUrlConsignation: "Adresse Google drive: ",
            generateGoogleDriveQRCodeConsignation:"Generer le QR Code avec l'url Google drive du certificat",

            ownerConsultation:"Adresse du tiers déposant :",
            inputTextConsultation:"Adresse publique sur la blockchain Polygon.",
            listConsultation:"Liste des empreintes numeriques du tiers déposant",
            dateTransactionConsultation:"Date ( dd/mm/yy )",
            hashTransactionConsultation:"Empreinte numérique enregistrée sur la blockchain",
            blockNumberTransactionConsultation:"Block",
            qrcodeConsultation:"QR Code (cliquer ici)",
            qrcodeHideConsultation:"QR Code",
            hashConsultation: "Empreinte numérique: ",
            hashInputMsgConsultation: "Empreinte numérique sur 64 digits en minuscules",
            getOwnerConsultation: "Vérifier la consignation de l'empreinte numérique",
            recordedByConsultation: "Cette empreinte numérique a été déposée par: ",

            contactUsFooter:"Nous contacter",

        },

    },

};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;

