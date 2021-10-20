import React from "react"
import { Icon } from "@ui5/webcomponents-react"

interface ApplogoProps {
  size: number
  color?: string
}

export const AppLogo: React.FC<ApplogoProps> = ({ size, color }) => {
  return (
    <Icon
      style={{ width: `${size}rem`, height: `${size}rem`, color }}
      name='checklist'
    />
  )
}
