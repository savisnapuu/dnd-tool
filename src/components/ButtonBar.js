import React, { useContext } from "react";
import DataContext from "../DataContext";

function ButtonBar({}) {
  const { data } = useContext(DataContext);
  return (
    <div>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default ButtonBar;
