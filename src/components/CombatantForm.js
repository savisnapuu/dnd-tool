import React from "react";
import ReactDOM from "react-dom";
import PlayerForm from "./PlayerForm";

function CombatantForm() {
  const [formData, setFormData] = React.useState({
    formA: { values: null, validated: false },
    formB: { values: null, validated: false },
  });

  const formAref = React.useRef();
  const formBref = React.useRef();

  React.useEffect(() => {
    if (formData.formB.validated && formData.formA.validated) {
      alert("Ready to save");
    }
  }, [formData]);

  async function handleSubmit() {
    await formAref.current.Submit();
    await formBref.current.Submit();
  }

  function handleChangeFormA(data) {
    setFormData({ ...formData, formA: data });
  }

  function handleChangeFormB(data) {
    setFormData({ ...formData, formB: data });
  }

  return (
    <div className="App">
      <PlayerForm
        onChange={handleChangeFormA}
        refId={formAref}
        name="Players"
      />
      {/* <FormB onChange={handleFormBChange} /> */}
      <button
        onClick={() => {
          console.log(formData);
        }}
        type="button"
      >
        set
      </button>

      <button onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  );
}

export default CombatantForm;
