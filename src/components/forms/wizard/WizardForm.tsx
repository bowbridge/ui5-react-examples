import {
  Button,
  CheckBox,
  Input,
  Label,
  MessageStrip,
  Title,
  Wizard,
  WizardStep,
} from "@ui5/webcomponents-react"
import React from "react"

const WizardForm = () => {
  return (
    <Wizard
      onStepChange={function noRefCheck() {}}
      style={{
        height: "400px",
      }}
    >
      <WizardStep icon='product' selected titleText='Product Type'>
        <Title>1. Product Type</Title>
        <MessageStrip>
          The Wizard control is supposed to break down large tasks, into smaller
          steps, easier for the user to work with.
        </MessageStrip>
        <Label wrappingType='None'>
          Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus
          sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet,
          feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie
          neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris
          vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor,
          nec dignissim quam convallis ut. Praesent vitae commodo felis, ut
          iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh.
          Suspendisse est velit, scelerisque ut commodo eget, dignissim quis
          metus. Cras faucibus consequat gravida. Curabitur vitae quam felis.
          Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam
          erat volutpat
        </Label>
        <Button design='Emphasized' onClick={function noRefCheck() {}}>
          Step 2
        </Button>
      </WizardStep>
      <WizardStep
        ref={{
          current: "[Circular]",
        }}
        disabled
        icon='hint'
        titleText='Product Information'
      >
        <Title>2. Product Information</Title>
        <Label wrappingType='None'>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est
          pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis
          a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
          vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
          Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui.
          Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer
          pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar.
          Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
          molestie aliquet dui. Donec pulvinar, sapien
        </Label>
        <CheckBox onChange={function noRefCheck() {}} text='Step Completed' />

        <Button
          design='Emphasized'
          hidden
          id='goToStep3'
          onClick={function noRefCheck() {}}
        >
          Step 3
        </Button>
      </WizardStep>
      <WizardStep
        ref={{
          current: "[Circular]",
        }}
        disabled
        icon='lead'
        titleText='Pricing'
      >
        <Title>4. Pricing</Title>
        <Label wrappingType='None'>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est
          pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis
          a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
          vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
          Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui.
          Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer
          pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar.
          Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
          molestie aliquet dui. Donec pulvinar, sapien
        </Label>
        <Input onInput={function noRefCheck() {}} placeholder='Item Price' />

        <Button
          design='Emphasized'
          hidden
          id='finalizeBtn'
          onClick={function noRefCheck() {}}
        >
          Finalize
        </Button>
      </WizardStep>
    </Wizard>
  )
}

export default WizardForm
