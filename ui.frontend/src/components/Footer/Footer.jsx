import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {StyledFooter} from "./Footer.styled.js";

export const Footer = (props) => {
  return (
      <StyledFooter className="footer">{props.text ? props.text : 'Insira um texto'}</StyledFooter>
  );
};

export default MapTo("reactapp/components/meu-footer")(Footer);