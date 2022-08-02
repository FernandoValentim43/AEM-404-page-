import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {StyledText} from "./Text.styled.js";

export const Text = (props) => {
  return (
      <StyledText className="text">{props.text ? props.text : 'Insira um texto'}</StyledText>
  );
};

export default MapTo("reactapp/components/meu-text")(Text);