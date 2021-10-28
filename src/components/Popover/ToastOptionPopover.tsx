import React, { useRef } from "react"
import {
  RenderForm,
  createFormMetaData,
  RenderFormRef,
  dispatchToast,
} from "@bowbridge/ui5-react-toolkit"
import {
  Button,
  Popover,
  PopoverPlacementType,
  ToastPlacement,
} from "@ui5/webcomponents-react"
import { SubmitHandler } from "react-hook-form"
import { PopoverPropsInterface } from "./interface"
import { object, SchemaOf, string } from "yup"

type ToastDisplayType = "INFO" | "SUCCESS" | "WARNING" | "ERROR"

type ToastOptionType = {
  message: string
  type?: ToastDisplayType
  placement?: ToastPlacement
  duration?: number
}

const validationSchema: SchemaOf<Pick<ToastOptionType, "message">> = object({
  message: string().required("Message Required"),
})

const formMetaData = createFormMetaData<ToastOptionType>({
  formProps: {},
  sections: [
    {
      fields: [
        {
          fieldtype: "input",
          labelProps: {
            fieldLabel: "Message",
            required: true,
          },
          fieldProps: {
            fieldName: "message",
            style: {
              marginBottom: "1rem",
            },
          },
        },
        {
          fieldtype: "input",
          labelProps: {
            fieldLabel: "Duration",
          },
          fieldProps: {
            fieldName: "duration",
            value: 3000,
            style: {
              marginBottom: "1rem",
            },
          },
        },
        {
          fieldtype: "select",
          labelProps: {
            fieldLabel: "Type",
          },
          fieldProps: {
            fieldName: "type",
            options: [
              {
                label: "",
                value: "",
              },
              {
                label: "INFO",
                value: "INFO",
              },
              {
                label: "SUCCESS",
                value: "SUCCESS",
              },
              {
                label: "WARNING",
                value: "WARNING",
              },
              {
                label: "ERROR",
                value: "ERROR",
              },
            ],
          },
        },
        {
          fieldtype: "select",
          labelProps: {
            fieldLabel: "Placement",
          },
          fieldProps: {
            fieldName: "placement",
            options: [
              { label: "", value: "" },
              { label: "BottomCenter", value: "BottomCenter" },
              { label: "BottomEnd", value: "BottomEnd" },
              { label: "BottomStart", value: "BottomStart" },
              { label: "MiddleCenter", value: "MiddleCenter" },
              { label: "MiddleEnd", value: "MiddleEnd" },
              { label: "MiddleStart", value: "MiddleStart" },
              { label: "TopCenter", value: "TopCenter" },
              { label: "TopEnd", value: "TopEnd" },
              { label: "TopStart", value: "TopStart" },
            ],
          },
        },
      ],
    },
  ],
})

export const ToastOptionPopover = ({
  popoverRef,
  onClose,
}: PopoverPropsInterface) => {
  const renderFormRef = useRef<RenderFormRef>(null)

  const onSubmit: SubmitHandler<ToastOptionType> = (data) => {
    console.log(data)
    const { message, type, duration, placement } = data
    onClose()
    dispatchToast(message, type, duration, placement)
    setTimeout(() => {
      renderFormRef.current?.resetForm()
    })
  }

  return (
    <Popover
      placementType={PopoverPlacementType.Bottom}
      style={{
        width: "230px",
      }}
      ref={popoverRef}
      onAfterClose={onClose}
    >
      <RenderForm
        ref={renderFormRef}
        validationSchema={validationSchema}
        metaData={formMetaData}
        onSubmit={onSubmit}
        hideToolbar={true}
        onCancel={onClose}
      />
      <Button
        onClick={() => {
          renderFormRef.current?.submit()
        }}
      >
        Show Toast
      </Button>
    </Popover>
  )
}
