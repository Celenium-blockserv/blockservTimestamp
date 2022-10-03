import { useTranslation } from "react-i18next";


function Title() {
  const { t } = useTranslation();

  return <h2>{t("titleTransactionRecorder")}</h2>;
}

export default Title;
