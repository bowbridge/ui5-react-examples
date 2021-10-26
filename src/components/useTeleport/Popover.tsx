import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import {
  Popover,
  Button,
  PopoverPlacementType,
  Label,
  ResponsivePopover,
  List,
  StandardListItem,
  Icon,
  Title,
  Bar,
} from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"
import React from "react"

export const PopoverHook = () => {
  const { isOpen, openPopover, popoverRef, Teleport, close } = useTeleport()
  const HandleResponsivePopover = useTeleport()
  return (
    <>
      <div>
        <Button
          style={{ ...spacing.sapUiLargeMarginTopBottom }}
          onClick={(e) => openPopover(e.target)}
        >
          Open Popover
        </Button>

        {isOpen && (
          <Teleport>
            <Popover
              headerText='Popover Header'
              ref={popoverRef}
              onAfterClose={close}
              placementType={PopoverPlacementType.Left}
            >
              <Label>
                Press "Escape" or click outside to close the Popover
              </Label>
            </Popover>
          </Teleport>
        )}
      </div>
      <div style={{}}>
        <Button
          style={{ ...spacing.sapUiLargeMarginTopBottom }}
          onClick={(e) => HandleResponsivePopover.openPopover(e.target)}
        >
          Open ResponsivePopover
        </Button>
        {HandleResponsivePopover.isOpen && (
          <HandleResponsivePopover.Teleport>
            <ResponsivePopover
              footer={
                <Bar
                  endContent={
                    <Button onClick={HandleResponsivePopover.close}>
                      Close
                    </Button>
                  }
                />
              }
              header={
                <Bar endContent={<Icon name='settings' />}>
                  <Title>Popover</Title>
                </Bar>
              }
              headerText='ResponsivePopover Header'
              ref={HandleResponsivePopover.popoverRef}
              onAfterClose={HandleResponsivePopover.close}
            >
              <List
                style={{
                  width: "200px",
                }}
              >
                <StandardListItem additionalText='3'>
                  List Item 1
                </StandardListItem>
                <StandardListItem additionalText='2'>
                  List Item 2
                </StandardListItem>
                <StandardListItem additionalText='1'>
                  List Item 3
                </StandardListItem>
              </List>
            </ResponsivePopover>
          </HandleResponsivePopover.Teleport>
        )}
      </div>
    </>
  )
}
