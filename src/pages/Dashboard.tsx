import React from "react"
import { spacing } from "@ui5/webcomponents-react-base"
import { AllElements } from "../components/forms/allelements/AllElements"

const Dashboard = () => {
  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <AllElements />
    </div>
  )
}

export default Dashboard
