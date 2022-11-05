import React, { useContext } from "react";
import { openContext } from "../Context-Api/ContextApi";

const HomeContainer = () => {
  const {open} = useContext(openContext);
  return (
    <>
      <div
        className={open ? "ml-72" : "ml-16"}
        style={{
          transitionDelay: "200ms",
        }}
      >
        <h1>Home container</h1>
      </div>
    </>
  );
};

export default HomeContainer;
