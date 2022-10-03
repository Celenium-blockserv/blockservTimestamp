import { useTranslation } from "react-i18next";



function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {

    const { t } = useTranslation();


    return (
    <footer>
      <h2>{t("contactUsFooter")}</h2>
      <Link uri={"https://celenium.fr"} text={"Celenium"} />

    </footer >
  );
}

export default Footer;
