import React, { useRef, useMemo } from "react"
import {
  ShellBar,
  ShellBarPropTypes,
} from "@ui5/webcomponents-react/dist/ShellBar"
import {
  Avatar,
  AvatarShape,
  CustomListItem,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Icon,
  Popover,
  PopoverPlacementType,
  Text,
} from "@ui5/webcomponents-react"
import { useHistory } from "react-router-dom"
import { ROUTES } from "../../routes/Routes"
import { Ui5PopoverDomRef } from "@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef"
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { useTranslation } from "react-i18next"
import { spacing } from "@ui5/webcomponents-react-base"
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch"

interface ShellProps extends ShellBarPropTypes {}

const Shell = ({ title, ...props }: ShellProps) => {
  const popoverConfigItemsRef = useRef<Ui5PopoverDomRef>(null)
  const { t } = useTranslation()

  const popoverItems = useMemo(
    () => [
      {
        description: t("shell.button.user.settings.item.languageSwitch"),
        icon: "user-settings",
        children: <LanguageSwitch />,
      },
      {
        description: t("shell.button.user.settings.item.themeSwitch"),
        icon: "customize",
        children: <ThemeSwitch />,
      },
    ],
    [t]
  )

  const history = useHistory()
  return (
    <>
      <ShellBar
        primaryTitle={title}
        style={{ position: "fixed", width: "100%", zIndex: 100 }}
        logo={
          <Icon
            name='checklist'
            style={{
              height: "1.75rem",
              width: "1.75rem",
              color: ThemingParameters.sapBrandColor,
            }}
          />
        }
        onLogoClick={() => history.push(ROUTES.HOME)}
        profile={<Avatar icon='customer' shape={AvatarShape.Circle} />}
        onProfileClick={(e) => {
          const element = e as CustomEvent
          popoverConfigItemsRef.current?.showAt(element.detail.targetRef)
        }}
        {...props}
      />
      <div style={{ paddingTop: "44px" }} />
      <Popover
        style={{ width: "350px" }}
        ref={popoverConfigItemsRef}
        placementType={PopoverPlacementType.Bottom}
        headerText={t("shell.button.user.settings")}
      >
        {popoverItems.map((item, index) => (
          <CustomListItem key={index}>
            <FlexBox
              justifyContent={FlexBoxJustifyContent.SpaceBetween}
              alignItems={FlexBoxAlignItems.Center}
              fitContainer
            >
              <FlexBox style={{ width: "100%" }}>
                <Icon style={spacing.sapUiTinyMarginEnd} name={item.icon} />
                <Text style={spacing.sapUiTinyMarginEnd}>
                  {item.description}
                </Text>
              </FlexBox>

              <div>{item.children}</div>
            </FlexBox>
          </CustomListItem>
        ))}
      </Popover>
    </>
  )
}

export default Shell
