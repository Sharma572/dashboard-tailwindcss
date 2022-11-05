import React, { useContext } from "react";
import { openContext } from "../Context-Api/ContextApi";

const FormContainer = () => {
  const { open } = useContext(openContext);
  return (
    <>
      <div
        className={open ? "ml-72" : "ml-16"}
        style={{
          transitionDelay: "200ms",
        }}
      >
        <h1>Form container</h1>
      </div>
    </>
  );
};

export default FormContainer;
