import React from "react"
import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import {
  Button,
  FlexBox,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"
import { ToastOptionPopover } from "../components/Popover/ToastOptionPopover"

const ToastSample = () => {
  const { openPopover, popoverRef, Teleport, close, isOpen } = useTeleport()

  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        style={{
          width: "100vw",

          ...spacing.sapUiContentPadding,
        }}
      >
        <Button onClick={(e) => openPopover(e.target)}>Toast</Button>
      </FlexBox>
      {isOpen && (
        <Teleport>
          <ToastOptionPopover popoverRef={popoverRef} onClose={close} />
        </Teleport>
      )}
    </>
  )
}

export default ToastSample
