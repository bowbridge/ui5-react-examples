import React from "react"
import { spacing } from "@ui5/webcomponents-react-base"
import { ActionSheetHook } from "../components/useTeleport/ActionSheetHook"
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from "@ui5/webcomponents-react"
import { DialogHook } from "../components/useTeleport/DialogHook"
import { MessageBoxHook } from "../components/useTeleport/MessageBoxHook"
import { PopoverHook } from "../components/useTeleport/Popover"

const TeleportPage = () => {
  return (
    <FlexBox
      style={{ ...spacing.sapUiContentPadding }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Start}
      wrap={FlexBoxWrap.Wrap}
    >
      <div style={{ ...spacing.sapUiTinyMargin }}>
        <ActionSheetHook />
      </div>

      <div style={{ ...spacing.sapUiTinyMargin }}>
        <DialogHook />
      </div>
      <div style={{ ...spacing.sapUiTinyMargin }}>
        <MessageBoxHook />
      </div>
      <div style={{ ...spacing.sapUiTinyMargin }}>
        <PopoverHook />
      </div>
    </FlexBox>
  )
}

export default TeleportPage
