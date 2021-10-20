import React from "react"
import {
  FlexBox,
  FlexBoxDirection,
  Popover,
  PopoverPlacementType,
  Title,
} from "@ui5/webcomponents-react"
import { spacing } from "@ui5/webcomponents-react-base"
//import { Ui5PopoverDomRef } from "@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef"

export interface PopoverInfoProps {
  title: string
  popoverRef: any
  placementType?: PopoverPlacementType
}
const PopoverInfo: React.FC<PopoverInfoProps> = ({
  title,
  children,
  popoverRef,
  placementType = PopoverPlacementType.Bottom,
}) => {
  return (
    <Popover ref={popoverRef} placementType={placementType}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <div>
          {title && <Title style={spacing.sapUiContentPadding}>{title}</Title>}
        </div>
        <div>{children}</div>
      </FlexBox>
    </Popover>
  )
}

export default PopoverInfo
