import { CustomListItem, FlexBox, List } from "@ui5/webcomponents-react"
import React, { ReactNode } from "react"
import PopoverInfo, { PopoverInfoProps } from "../info/PopoverInfo"

interface PopoverListItemsProps
  extends Pick<PopoverInfoProps, "title" | "popoverRef"> {
  items: ReactNode[]
}

const PopoverListItems = ({
  popoverRef,
  items,
  title,
}: PopoverListItemsProps) => {
  return (
    <PopoverInfo popoverRef={popoverRef} title={title}>
      <List>
        {items.map((item, index) => {
          return <CustomListItem key={index}></CustomListItem>
        })}
      </List>
    </PopoverInfo>
  )
}

export default PopoverListItems
