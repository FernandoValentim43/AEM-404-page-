import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import { ImageStyle } from './Image.styled'

const Image = ({image}) => {
  return (
    <ImageStyle src={image ? image.src : 'https://i.imgur.com/svxYaha.png'}/>
  )
}

export default MapTo("reactapp/components/minha-imagem")(Image)