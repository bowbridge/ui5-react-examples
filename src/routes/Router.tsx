import React, { lazy, Suspense } from "react"
import { BusyIndicator } from "@ui5/webcomponents-react"
import { Redirect, Route, Switch } from "react-router-dom"

import { ROUTES } from "./Routes"

const NotFound = lazy(() => import("../pages/fallback/NotFound"))
const LoginPage = lazy(() => import("../pages/auth/LoginPage"))
const TeleportPage = lazy(() => import("../pages/TeleportPage"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const SimpleForm = lazy(() => import("../pages/SimpleForm"))
const WizardForm = lazy(() => import("../pages/WizardFormPage"))

const Router = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Switch>
        <Redirect path={ROUTES.HOME} exact to={ROUTES.DASHBOARD} />
        <Route path={ROUTES.TELEPORT} exact component={TeleportPage} />
        <Route path={ROUTES.LOGINPAGE} exact component={LoginPage} />
        <Route path={ROUTES.WIZARDFORM} exact component={WizardForm} />
        <Route path={ROUTES.SIMPLEFORM} exact component={SimpleForm} />
        <Route path={ROUTES.NOT_FOUND} exact component={NotFound} />
        <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
        <Route path={ROUTES.ANY} component={NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Router
