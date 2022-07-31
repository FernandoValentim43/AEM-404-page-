import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import {StyledButton} from "./Button.styled"

const Button = (props) => {
  return (
     <StyledButton>{props.text ? props.text : "Insira um texto"}</StyledButton>
  )
}

export default MapTo("reactapp/components/button-component")(Button)