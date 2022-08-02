import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const MultiExemplo = ({ multi }) => {
  return (
    <>
      {multi.map(({ title, text, buttontext = {} }, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <p>{text}</p>
          <button>{buttontext}</button>
        </div>
      ))}
    </>
  );
};

MultiExemplo.defaultProps = {
  model: [
    {
      title: "default",
      text: "default",
      buttontext: "default",
    },
  ],
};

export default MapTo("reactapp/components/meu-multi")(MultiExemplo)