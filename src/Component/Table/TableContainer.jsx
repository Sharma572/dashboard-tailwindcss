import React, { useContext } from "react";
import { openContext } from "../../Context-Api/ContextApi";
import Table from "./Table";

const TableContainer = () => {
  const { open } = useContext(openContext);
  return (
    <>
      <div
        className={open ? "ml-72" : "ml-16"}
        style={{
          transitionDelay: "200ms",
        }}
      >
        <Table />
      </div>
    </>
  );
};

export default TableContainer;
