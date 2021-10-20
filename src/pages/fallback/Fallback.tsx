import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  Title,
  TitleLevel,
} from "@ui5/webcomponents-react"
import React from "react"
import { useTranslation } from "react-i18next"
import { ROUTES } from "../../routes/Routes"

interface FallbackProps {
  text: string
  reload: boolean
}

const Fallback = ({ text, reload }: FallbackProps) => {
  const { t } = useTranslation()

  return (
    <FlexBox
      fitContainer
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Title level={TitleLevel.H3}>{Text}</Title>
      {reload && (
        <Link style={{ cursor: "pointer" }} href={ROUTES.HOME} target='_self'>
          {t("page.fallback.reload.text")}
        </Link>
      )}
    </FlexBox>
  )
}

export default Fallback
