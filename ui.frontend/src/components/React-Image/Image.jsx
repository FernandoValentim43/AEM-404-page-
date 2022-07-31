import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import { ImageStyle } from './Image.styled'

const Image = ({image}) => {
  return (
    <ImageStyle src={image ? image.src : 'https://via.placeholder.com/150'}/>
  )
}

export default MapTo("reactapp/components/minha-imagem")(Image)