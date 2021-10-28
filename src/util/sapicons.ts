import SapIcons from "@ui5/webcomponents-icons/dist/generated/assets/SAP-icons.json"

type IconKeys = keyof typeof SapIcons.data

export const getIcon = (key: IconKeys): string => {
  return key
}
