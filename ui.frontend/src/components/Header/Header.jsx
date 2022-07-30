import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {HeaderContainer, HeaderText} from "./Header.styled.js";

export const MyHeader = (props) => {
  return (
    <HeaderContainer>
      <HeaderText className="header">{props.text ? props.text : '404 NOT FOUND'}</HeaderText>
    </HeaderContainer>
  );
};

export default MapTo("reactapp/components/meu-header")(MyHeader);