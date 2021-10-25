import React from "react"
import WizardForm from "../components/forms/wizard/WizardForm"
import { spacing } from "@ui5/webcomponents-react-base"

const WizardFormPage = () => {
  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <WizardForm />
    </div>
  )
}

export default WizardFormPage
