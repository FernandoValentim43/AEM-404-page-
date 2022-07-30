import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {StyledTitle} from "./Title.styled.js";

export const Title = (props) => {
  return (
      <StyledTitle className="header">{props.text ? props.text : 'Insira um texto'}</StyledTitle>
  );
};

export default MapTo("reactapp/components/meu-title")(Title);