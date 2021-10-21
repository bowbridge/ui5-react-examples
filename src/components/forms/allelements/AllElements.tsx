import React, { useRef } from "react"
import {
  dispatchToast,
  RenderForm,
  RenderFormRef,
} from "@bowbridge/ui5-react-toolkit"
import { formMetaData } from "./metaData"
import { SubmitHandler } from "react-hook-form"
import { Button, Toolbar, ToolbarStyle } from "@ui5/webcomponents-react"

export const AllElements = () => {
  const allElementsFormRef = useRef<RenderFormRef>(null)

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
    setTimeout(() => {
      allElementsFormRef.current?.resetForm()
      dispatchToast("Please Check in Console")
    }, 1500)
  }

  return (
    <>
      <RenderForm
        ref={allElementsFormRef}
        metaData={formMetaData}
        onSubmit={onSubmit}
        hideToolbar
      />
      <Toolbar toolbarStyle={ToolbarStyle.Clear}>
        <Button onClick={() => allElementsFormRef.current?.submit()}>
          Submit
        </Button>
      </Toolbar>
    </>
  )
}
