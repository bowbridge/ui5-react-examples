import React from "react"
import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import { MessageBox, Button } from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"

type MessageBoxCloseEvent = CustomEvent<{
  action: string
}>

export const MessageBoxHook = () => {
  const { isOpen, openDialog, dialogRef, Teleport, close } = useTeleport()

  const closeHandler = (e: MessageBoxCloseEvent) => {
    console.log(e.detail.action)
    close()
  }

  return (
    <div>
      <Button
        style={{ ...spacing.sapUiLargeMarginTopBottom }}
        onClick={openDialog}
      >
        Open MessageBox
      </Button>

      {isOpen && (
        <Teleport>
          <MessageBox
            ref={dialogRef}
            open={isOpen}
            onClose={(e) => closeHandler(e)}
          >
            Press "Escape" to close the MessageBox.
          </MessageBox>
        </Teleport>
      )}
    </div>
  )
}
