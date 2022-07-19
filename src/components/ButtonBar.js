import React, { useContext } from "react";
import DataContext from "../DataContext";

function ButtonBar({ submitForm }) {
  const { players, enemies } = useContext(DataContext);
  return (
    <div>
      <button
        onClick={() => {
          console.log(players, enemies);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default ButtonBar;
