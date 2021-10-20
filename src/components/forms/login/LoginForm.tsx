import React, { useRef } from "react"
import {
  createFormMetaData,
  RenderForm,
  RenderFormRef,
} from "@bowbridge/ui5-react-toolkit"
import { object, SchemaOf, string } from "yup"
import { SubmitHandler } from "react-hook-form"
import { Button } from "@ui5/webcomponents-react"

type LoginCredentials = {
  email: string
  password: string
}

const formMetaData = createFormMetaData<LoginCredentials>({
  formProps: {},
  sections: [
    {
      fields: [
        {
          fieldtype: "input",
          labelProps: {
            fieldLabel: "Email",
            required: true,
          },
          fieldProps: {
            fieldName: "email",
            placeholder: "Enter Email Address",
            type: "Email",
            style: {
              marginBottom: "1rem",
            },
          },
        },
        {
          fieldtype: "input",
          labelProps: {
            fieldLabel: "Password",
            required: true,
          },
          fieldProps: {
            fieldName: "password",
            placeholder: "Password",
            type: "Password",
          },
        },
      ],
    },
  ],
})

const validationSchema: SchemaOf<LoginCredentials> = object({
  email: string().email().required("Email Required"),
  password: string().required("Please Enter the Password"),
})

export const LoginForm = () => {
  const renderFormRef = useRef<RenderFormRef>(null)

  const onSubmitHandler: SubmitHandler<LoginCredentials> = (data) => {
    console.log(data)
    setTimeout(() => {
      formResetHandler()
    }, 1500)
  }

  const formResetHandler = () => {
    renderFormRef.current?.resetForm()
  }

  return (
    <>
      <RenderForm
        ref={renderFormRef}
        metaData={formMetaData}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
        hideToolbar={true}
      />
      <Button
        onClick={() => renderFormRef.current?.submit()}
        style={{ width: "210px" }}
      >
        Submit
      </Button>
    </>
  )
}
