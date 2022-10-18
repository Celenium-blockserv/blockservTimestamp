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

            hashConsignation:"Numerical signature of file:",
            ownerConsignation:"Owner of the file:",
            inputTextConsignation:"Polygon Blockchain public address",
            recordConsignation:"Record",



            titleMain: "Celenium Timestamper on Polygon Mainnet",
            dragNDropFileUpload: "Drag 'n' drop the file here",
            titleFileUpload:"Hash computation",
            explicationsFileUpload:"Select a file to compute its sha256 hash.",
            selectedFileUpload:"Selected file:",
            hashFileUpload:"Computed hash:",
            warningFileUpload:"This hash is already recorded for current metamask account!",
            primaryFileUpload:"Select a file to compute its' hash",
            successFileUpload:"Hash could be computed. If you want, you can select another file to replace this one.",
            titleTransactionRecorder:"Transaction Recorder",
            hashTransactionRecorder:"File's hash",
            ownershipTransactionRecorder:"Owner of the file",
            submitTransactionRecorder:"Record transaction",

            titleTransactionReader:"Transaction Reader",
            ownershipTransactionReader:"Owners' Polygon address of the hashes to retrieve : ",
            primaryTransactionReader:"Copy paste another address for the owner if needed.",
            dateTransactionReader:"Date ( dd/mm/yy )",
            hashTransactionReader:"Hash recorded on blockchain",
            blockNumberTransactionReader:"Block",
            contactUsFooter:"Contact us",

        },
    },
    fr: {
        translation: {
            app_name: "BLOCKCHAIN DE CONSIGNATION",
            encodingMain:"1) Encodage",
            consignationMain:"2) Consignation",
            consultationMain:"3) Consultation",

            pricingButtonFooter:"Tarification",
            contactButtonFooter:"Assistance",
            dragNDropEncoder: "Déposer le fichier ici",
            warningEncoder: "Attention: votre fichier n’est pas conservé sur ce site",

            hashConsignation:"Empreinte numérique du fichier:",
            ownerConsignation:"Compte dépositaire de l’encodage cryptographique:",
            inputTextConsignation:"Adresse publique sur la blockchain Polygon.",
            recordConsignation:"Enregistrer la consignation",


            titleMain: "Timestamper par Celenium sur le Mainnet Polygon",
            dragNDropFileUpload: "Déposer le fichier ici",
            titleFileUpload:"Calcul du hash",
            explicationsFileUpload:"Selectionner le fichier pour calculer son HASH sha256.",
            selectedFileUpload:"Fichier selectionné:",
            hashFileUpload:"Forme Hash du fichier:",
            warningFileUpload:"Ce hash est déjà enregistré sur la blockchain pour le compte metamask actuellement connecté",
            primaryFileUpload:"Selectioner un fichier pour lancer le calcul du hash",
            successFileUpload:"Le hash du fichier a bien été calculé. Selectionner un nouveau fichier en remplacement si nécessaire.",
            titleTransactionRecorder:"Enregistrement de la transaction",
            hashTransactionRecorder:"Forme hashée du fichier",
            ownershipTransactionRecorder:"Propriétaire auquel sera rattaché le hash",
            submitTransactionRecorder:"Enregistrer la transaction",
            titleTransactionReader:"Récupération des hashs déjà enregistrés",
            ownershipTransactionReader:"Adresse metamask du propriétaire dont la liste des hashs enregistrés doit être affichée : ",
            primaryTransactionReader:"Coller une autre adresse est possible.",
            dateTransactionReader:"Date ( dd/mm/yy )",
            hashTransactionReader:"Hash enregistré sur la blockchain",
            blockNumberTransactionReader:"Block",
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

