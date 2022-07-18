import React from "react";

const PlayerForm = (props) => {
  return (
    <div>
      <input
        type="text"
        name="password"
        onChange={(e) => props.updateData("password", e.target.value)}
      ></input>
    </div>
  );
};

export default PlayerForm;
