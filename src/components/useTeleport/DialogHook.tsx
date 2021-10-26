import React from "react"
import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import { Dialog, Button } from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"

export const DialogHook = () => {
  const { isOpen, openDialog, dialogRef, Teleport, close } = useTeleport()
  return (
    <div>
      <Button
        style={{ ...spacing.sapUiLargeMarginTopBottom }}
        onClick={openDialog}
      >
        Open Dialog
      </Button>

      {isOpen && (
        <Teleport>
          <Dialog ref={dialogRef} onAfterClose={close}>
            Press "Escape to close the Dialog"
          </Dialog>
        </Teleport>
      )}
    </div>
  )
}
