import React from "react";
import { useTranslation } from "react-i18next";



function Title() {

    const { t } = useTranslation();

    return (<>
          <h2>{t("titleFileUpload")}</h2>
            {t("explicationsFileUpload")}
  </>

  );
}

export default Title;
