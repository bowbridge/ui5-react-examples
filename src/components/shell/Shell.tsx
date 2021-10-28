import React from "react"
import {
  ShellBar,
  ShellBarPropTypes,
} from "@ui5/webcomponents-react/dist/ShellBar"
import {
  Avatar,
  AvatarShape,
  Icon,
  ShellBarItem,
} from "@ui5/webcomponents-react"

import { ROUTES } from "../../routes/Routes"
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters"
import { useHistory } from "react-router-dom"
import { getIcon } from "../../util/sapicons"
import { useTeleport } from "@bowbridge/ui5-react-toolkit"
import { UserConfigActionSheet } from "../Popover/UserConfigActionSheet"
import { LayoutConfigPopover } from "../Popover/LayoutConfigPopover"
import { ProductSwitchPopover } from "../Popover/ProductSwitchPopover"

interface ShellProps extends ShellBarPropTypes {}

const Shell = ({ title, ...props }: ShellProps) => {
  const history = useHistory()

  const UserConfigActionSheetHandler = useTeleport()
  const LayoutConfigPopoverHandler = useTeleport()
  const ProductSwitchPopoverHandler = useTeleport()

  return (
    <>
      <ShellBar
        primaryTitle={title}
        style={{ position: "fixed", width: "100%", zIndex: 100 }}
        logo={
          <Icon
            name={getIcon("checklist")}
            style={{
              height: "1.75rem",
              width: "1.75rem",
              color: ThemingParameters.sapBrandColor,
            }}
          />
        }
        onLogoClick={() => history.push(ROUTES.HOME)}
        profile={
          <Avatar icon={getIcon("customer")} shape={AvatarShape.Circle} />
        }
        onProfileClick={(e) => {
          const targetRef = e.detail.targetRef as HTMLElement
          UserConfigActionSheetHandler.openPopover(targetRef)
        }}
        showProductSwitch
        onProductSwitchClick={(e) => {
          const targetRef = e.detail.targetRef as HTMLElement
          ProductSwitchPopoverHandler.openPopover(targetRef)
        }}
        {...props}
      >
        <ShellBarItem
          icon={getIcon("customize")}
          onItemClick={(e) => {
            const targetRef = e.detail.targetRef as HTMLElement
            LayoutConfigPopoverHandler.openPopover(targetRef)
          }}
        />
        <ShellBarItem
          icon={getIcon("source-code")}
          tooltip='Goto Github'
          onItemClick={() =>
            window.open(
              "https://github.com/bowbridge/ui5-react-examples",
              "_blank"
            )
          }
        />
      </ShellBar>
      <div style={{ paddingTop: "44px" }} />
      {UserConfigActionSheetHandler.isOpen && (
        <UserConfigActionSheetHandler.Teleport>
          <UserConfigActionSheet
            popoverRef={UserConfigActionSheetHandler.popoverRef}
            onClose={UserConfigActionSheetHandler.close}
          />
        </UserConfigActionSheetHandler.Teleport>
      )}
      {LayoutConfigPopoverHandler.isOpen && (
        <LayoutConfigPopoverHandler.Teleport>
          <LayoutConfigPopover
            popoverRef={LayoutConfigPopoverHandler.popoverRef}
            onClose={LayoutConfigPopoverHandler.close}
          />
        </LayoutConfigPopoverHandler.Teleport>
      )}
      {ProductSwitchPopoverHandler.isOpen && (
        <ProductSwitchPopoverHandler.Teleport>
          <ProductSwitchPopover
            popoverRef={ProductSwitchPopoverHandler.popoverRef}
            onClose={ProductSwitchPopoverHandler.close}
          />
        </ProductSwitchPopoverHandler.Teleport>
      )}
    </>
  )
}

export default Shell
