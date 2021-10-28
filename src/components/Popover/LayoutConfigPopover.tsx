import React, { useMemo } from "react"
import {
  CustomListItem,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Icon,
  Popover,
  PopoverPlacementType,
  Text,
} from "@ui5/webcomponents-react"

import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch"
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch"
import { useTranslation } from "react-i18next"
import { spacing } from "@ui5/webcomponents-react-base"
import { PopoverPropsInterface } from "./interface"

export const LayoutConfigPopover = ({
  popoverRef,
  onClose,
}: PopoverPropsInterface) => {
  const { t } = useTranslation()

  const popoverItems = useMemo(
    () => [
      {
        description: t("shell.button.app.settings.item.languageSwitch"),
        icon: "user-settings",
        children: <LanguageSwitch />,
      },
      {
        description: t("shell.button.app.settings.item.themeSwitch"),
        icon: "customize",
        children: <ThemeSwitch />,
      },
    ],
    [t]
  )
  return (
    <Popover
      ref={popoverRef}
      style={{ width: "350px" }}
      onAfterClose={onClose}
      placementType={PopoverPlacementType.Bottom}
      headerText={t("shell.button.app.settings")}
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
              <Text style={spacing.sapUiTinyMarginEnd}>{item.description}</Text>
            </FlexBox>

            <div>{item.children}</div>
          </FlexBox>
        </CustomListItem>
      ))}
    </Popover>
  )
}
