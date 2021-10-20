import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import Fallback from "./Fallback"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t("helmet.title.notfound")} />
      <Fallback text={t("page.notfound.text")} reload />
    </>
  )
}

export default NotFound
