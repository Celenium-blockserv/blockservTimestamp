import { useTranslation } from "react-i18next";

function Title() {
  const { t } = useTranslation();

  return <h2>{t("titleTransactionReader")}</h2>;
}

export default Title;
