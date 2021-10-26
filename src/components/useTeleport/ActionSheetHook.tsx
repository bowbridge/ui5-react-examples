import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import {
  ActionSheet,
  Button,
  PopoverPlacementType,
} from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"
import React from "react"

export const ActionSheetHook = () => {
  const { isOpen, openPopover, popoverRef, Teleport, close } = useTeleport()
  return (
    <div>
      <Button
        style={{ ...spacing.sapUiLargeMarginTopBottom }}
        onClick={(e) => openPopover(e.target)}
      >
        Open ActionSheet
      </Button>

      {isOpen && (
        <Teleport>
          <ActionSheet
            ref={popoverRef}
            onAfterClose={close}
            placementType={PopoverPlacementType.Right}
          >
            <Button icon='add'>Accept</Button>
            <Button>Reject</Button>
            <Button>This is my super long text!</Button>
          </ActionSheet>
        </Teleport>
      )}
    </div>
  )
}
