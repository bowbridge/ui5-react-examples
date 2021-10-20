import React from "react"
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Title,
} from "@ui5/webcomponents-react"

const Dashboard = () => {
  return (
    <FlexBox
      fitContainer
      style={{ height: "95vh" }}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Title>Dashboard</Title>
    </FlexBox>
  )
}

export default Dashboard
