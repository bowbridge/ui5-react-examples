import React from "react"
import {
  Popover,
  PopoverPlacementType,
  ProductSwitch,
  ProductSwitchItem,
} from "@ui5/webcomponents-react"
import { useHistory } from "react-router-dom"
import { ROUTEKEYS, ROUTES } from "../../routes/Routes"
import { PopoverPropsInterface } from "./interface"
import { getIcon } from "../../util/sapicons"

export const ProductSwitchPopover = ({
  popoverRef,
  onClose,
}: PopoverPropsInterface) => {
  const history = useHistory()

  const productSwitchLinkHanlder = (key: ROUTEKEYS) => {
    onClose()
    history.push(ROUTES[key])
  }

  return (
    <Popover
      style={{ width: "auto", height: "auto" }}
      ref={popoverRef}
      onAfterClose={onClose}
      placementType={PopoverPlacementType.Bottom}
    >
      <ProductSwitch>
        <ProductSwitchItem
          icon={getIcon("bbyd-dashboard")}
          subtitleText='Generated from Object'
          titleText='All Elements'
          onClick={() => productSwitchLinkHanlder("HOME")}
        />

        <ProductSwitchItem
          icon={getIcon("visits")}
          onClick={() => {
            productSwitchLinkHanlder("LOGINPAGE")
          }}
          subtitleText='Generated from Object'
          titleText='Login Form'
        />

        <ProductSwitchItem
          icon={getIcon("form")}
          subtitleText='Generated from Object'
          titleText='Simple Form'
          onClick={() => productSwitchLinkHanlder("SIMPLEFORM")}
        />
        <ProductSwitchItem
          icon={getIcon("step")}
          subtitleText=''
          titleText='Wizard Form'
          onClick={() => productSwitchLinkHanlder("WIZARDFORM")}
        />
        <ProductSwitchItem
          icon={getIcon("attachment")}
          subtitleText='Modals & Popovers'
          titleText='Teleport'
          onClick={() => productSwitchLinkHanlder("TELEPORT")}
        />
        <ProductSwitchItem
          icon={getIcon("ui-notifications")}
          subtitleText='dispatchToast'
          titleText='Toast'
          onClick={() => productSwitchLinkHanlder("TOAST")}
        />
      </ProductSwitch>
    </Popover>
  )
}
