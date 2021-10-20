import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import Fallback from "./Fallback"

const Error = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t("helmet.title.error")} />
      <Fallback text={t("page.error.text")} reload />
    </>
  )
}

export default Error
