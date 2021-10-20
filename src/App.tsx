import React from "react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import { BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import Shell from "./components/shell/Shell"
import Router from "./routes/Router"

function App() {
  const { t } = useTranslation()

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Helmet title={t("helmet.title.app")} />
        <Shell title={t("shell.title")} />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
