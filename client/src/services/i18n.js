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
            app_name: "Tiers D??posant sur la Blockchain",
            encodingMain:"1) Encodage",
            consignationMain:"2) Consignation",
            consultationMain:"3) Consultation",

            pricingButtonFooter:"C.G.U",
            contactButtonFooter:"Assistance",

            dragNDropEncoder: "D??poser le fichier ici",
            warningEncoder: "Attention: ce site n???a pas acc??s ?? votre fichier, conservez-le sans limite de temps",
            hashEncoder: "Empreinte num??rique de votre fichier: ",
            copyEncoder: "Copier dans le presse papier",

            hashConsignation:"Empreinte num??rique du fichier:",
            ownerConsignation:"Adresse du tiers d??posant :",
            inputTextConsignation:"Adresse publique sur la blockchain Polygon.",
            recordConsignation:"Enregistrer la consignation",
            alreadyConsignation: "L'empreinte num??rique a d??j?? ??t?? d??pos??e par ",
            googleDriveUrlConsignation: "Adresse Google drive: ",
            generateGoogleDriveQRCodeConsignation:"Generer le QR Code avec l'url Google drive du certificat",

            ownerConsultation:"Adresse du tiers d??posant :",
            inputTextConsultation:"Adresse publique sur la blockchain Polygon.",
            listConsultation:"Liste des empreintes numeriques du tiers d??posant",
            dateTransactionConsultation:"Date ( dd/mm/yy )",
            hashTransactionConsultation:"Empreinte num??rique enregistr??e sur la blockchain",
            blockNumberTransactionConsultation:"Block",
            qrcodeConsultation:"QR Code (cliquer ici)",
            qrcodeHideConsultation:"QR Code",
            hashConsultation: "Empreinte num??rique: ",
            hashInputMsgConsultation: "Empreinte num??rique sur 64 digits en minuscules",
            getOwnerConsultation: "V??rifier la consignation de l'empreinte num??rique",
            recordedByConsultation: "Cette empreinte num??rique a ??t?? d??pos??e par: ",

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

