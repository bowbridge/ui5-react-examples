import React from "react"
import { SimpleForm } from "../components/forms/simpleform/SimpleForm"
import { spacing } from "@ui5/webcomponents-react-base"
import {
  FlexBox,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  Text,
} from "@ui5/webcomponents-react"

const SimpleFormPage = () => {
  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <FlexBox fitContainer justifyContent={FlexBoxJustifyContent.End}>
        <Link
          href='https://sap.github.io/ui5-webcomponents-react/?path=/docs/layouts-floorplans-form--default-story'
          target='_blank'
          design={LinkDesign.Subtle}
        >
          <Text>Source Docs</Text>
        </Link>
      </FlexBox>
      <SimpleForm />
    </div>
  )
}

export default SimpleFormPage
