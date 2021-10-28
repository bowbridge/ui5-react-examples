import React from "react"
import {
  ActionSheet,
  Button,
  PopoverPlacementType,
} from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"
import { getIcon } from "../../util/sapicons"
import { PopoverPropsInterface } from "./interface"

export const UserConfigActionSheet = ({
  popoverRef,
  onClose,
}: PopoverPropsInterface) => {
  return (
    <ActionSheet
      style={{ width: "150px" }}
      ref={popoverRef}
      onAfterClose={onClose}
      headerText='User Settings'
      placementType={PopoverPlacementType.Bottom}
    >
      <div style={{ ...spacing.sapUiContentPadding }}>
        <Button icon={getIcon("user-settings")}>Profile</Button>
        <Button
          style={{ ...spacing.sapUiTinyMarginTop }}
          icon={getIcon("visits")}
        >
          Logout
        </Button>
      </div>
    </ActionSheet>
  )
}
