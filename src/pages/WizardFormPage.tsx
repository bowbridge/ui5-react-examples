import React from "react"
import WizardForm from "../components/forms/wizard/WizardForm"
import { spacing } from "@ui5/webcomponents-react-base"
import { MessageStrip, MessageStripDesign } from "@ui5/webcomponents-react"

const WizardFormPage = () => {
  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <div style={{ ...spacing.sapUiLargeMarginTopBottom }}>
        <MessageStrip design={MessageStripDesign.Warning}>
          In Progress...
        </MessageStrip>
      </div>

      <WizardForm />
    </div>
  )
}

export default WizardFormPage
