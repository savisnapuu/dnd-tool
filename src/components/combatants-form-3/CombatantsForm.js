import React from "react";
import EnemyForm from "./EnemyForm";
import PlayerForm from "./PlayerForm";

const CombatantForm = () => {
  const [formData, setFormData] = React.useState({
    formA: { values: null, validated: false },
  });
  function handleSubmit() {
    console.log(formData);
  }
  const updateData = (data) => {
    setFormData({ ...formData, formA: data });
  };
  return (
    <div>
      <EnemyForm updateData={updateData} />
      <PlayerForm updateData={updateData} />
      <button onClick={handleSubmit}>Click me</button>
      <button
        onClick={() => {
          console.log(formData);
        }}
      >
        Show Data
      </button>
    </div>
  );
};

export default CombatantForm;
