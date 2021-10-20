import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react"
import React from "react"
import { LoginForm } from "../../components/forms/login/LoginForm"
import { AppLogo } from "../../components/logo/AppLogo"
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters"

const LoginPage = () => {
  return (
    <FlexBox
      style={{ height: "90vh" }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <AppLogo size={6} color={ThemingParameters.sapBrandColor} />
      <LoginForm />
    </FlexBox>
  )
}

export default LoginPage
