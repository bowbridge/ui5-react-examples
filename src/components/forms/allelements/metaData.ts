import { createFormMetaData } from "@bowbridge/ui5-react-toolkit"
import { FieldPropsMap } from "@bowbridge/ui5-react-toolkit/dist/forms/types/form/fieldmap"
import { spacing } from "@ui5/webcomponents-react-base"
import {
  InputOptionsType,
  OptionsType,
} from "@bowbridge/ui5-react-toolkit/dist/forms/types/form/options"

const commonStyle = {
  width: "250px",
  ...spacing.sapUiTinyMarginBottom,
}
const inputOptions: InputOptionsType[] = [
  {
    text: "France",
  },
  {
    text: "Germany",
  },
  {
    text: "Italy",
  },
]

const options: OptionsType[] = [
  {
    label: "",
    value: "",
  },
  {
    label: "Germany",
    value: "germany",
  },
  {
    label: "France",
    value: "france",
  },
  {
    label: "Italy",
    value: "italy",
  },
]

export const formMetaData = createFormMetaData<FieldPropsMap>({
  formProps: {
    titleText: "Available Input Elements",
    columnsXL: 1,
  },
  sections: [
    {
      groupName: "Date and Time",
      fields: [
        {
          fieldtype: "datepicker",
          labelProps: {
            fieldLabel: "Date Picker",
          },
          fieldProps: {
            fieldName: "datepicker",
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "daterangepicker",
          labelProps: {
            fieldLabel: "Date Range Picker",
          },
          fieldProps: {
            fieldName: "daterangepicker",
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "datetimepicker",
          labelProps: {
            fieldLabel: "Date Time Picker",
          },
          fieldProps: {
            fieldName: "datetimepicker",
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "timepicker",
          labelProps: {
            fieldLabel: "Time Picker",
          },
          fieldProps: {
            fieldName: "timepicker",
            style: {
              ...commonStyle,
            },
          },
        },
      ],
    },
    {
      groupName: "Text Input",
      fields: [
        {
          fieldtype: "input",
          labelProps: {
            fieldLabel: "Input",
          },
          fieldProps: {
            fieldName: "input",
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "textarea",
          labelProps: {
            fieldLabel: "Text Area",
          },
          fieldProps: {
            fieldName: "textarea",
            rows: 5,
            style: {
              ...commonStyle,
            },
          },
        },
      ],
    },
    {
      groupName: "Selection",
      fields: [
        {
          fieldtype: "select",
          labelProps: {
            fieldLabel: "Select",
          },
          fieldProps: {
            fieldName: "select",
            style: {
              ...commonStyle,
            },
            options,
          },
        },
        {
          fieldtype: "combobox",
          labelProps: {
            fieldLabel: "Combo Box",
          },
          fieldProps: {
            fieldName: "combobox",
            style: {
              ...commonStyle,
            },
            options: inputOptions,
          },
        },
        {
          fieldtype: "multicombobox",
          labelProps: {
            fieldLabel: "Multi Combo Box",
          },
          fieldProps: {
            fieldName: "multicombobox",
            style: {
              ...commonStyle,
            },
            options: inputOptions,
          },
        },
      ],
    },
    {
      groupName: "Slider",
      fields: [
        {
          fieldtype: "slider",
          labelProps: {
            fieldLabel: "Slider",
          },
          fieldProps: {
            fieldName: "slider",
            style: {
              ...commonStyle,

              paddingLeft: "1rem",
            },
            showTickmarks: true,
            value: 40,
            showTooltip: true,
            step: 25,
          },
        },
        {
          fieldtype: "rangeslider",
          labelProps: {
            fieldLabel: "Range Slider",
          },
          fieldProps: {
            fieldName: "rangeslider",
            style: {
              ...commonStyle,

              paddingLeft: "1rem",
            },
            showTickmarks: true,
            showTooltip: true,
            step: 10,
          },
        },
      ],
    },
    {
      groupName: "Boolean",
      fields: [
        {
          fieldtype: "switch",
          labelProps: {
            fieldLabel: "Switch",
          },
          fieldProps: {
            fieldName: "switch",
            checked: true,
          },
        },
        {
          fieldtype: "checkbox",
          labelProps: {
            fieldLabel: "Check Box",
          },
          fieldProps: {
            fieldName: "checkbox",
          },
        },
        {
          fieldtype: "radiobutton",
          labelProps: {
            fieldLabel: "Radio Button",
          },
          fieldProps: {
            fieldName: "radiobutton",
            options: inputOptions,
          },
        },
      ],
    },
    {
      groupName: "Miscellaneous",
      fields: [
        {
          fieldtype: "ratingindicator",
          labelProps: {
            fieldLabel: "Rating Indicator",
          },
          fieldProps: {
            fieldName: "ratingindicator",
            value: 2.6,
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "stepinput",
          labelProps: {
            fieldLabel: "Step Input",
          },
          fieldProps: {
            fieldName: "stepinput",
            style: {
              ...commonStyle,
            },
          },
        },
        {
          fieldtype: "colorpicker",
          labelProps: {
            fieldLabel: "Color Picker",
          },
          fieldProps: {
            fieldName: "colorpicker",
            style: {
              ...commonStyle,
            },
          },
        },
      ],
    },
  ],
})
