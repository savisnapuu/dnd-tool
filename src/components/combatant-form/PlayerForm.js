import React from "react";
import { FieldArray } from "formik";
import { TextField } from "@mui/material";
import { generate } from "shortid";

const PlayerForm = ({ formik }) => {
  return (
    <FieldArray
      name="players"
      render={(arrayHelpers) => (
        <div>
          <div>
            <h1>Players</h1>
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({
                  id: generate(),
                  name: "",
                  hp: "",
                  init: "",
                  bonus: "",
                  type: "player",
                })
              }
            >
              +
            </button>
          </div>

          <div>
            {formik.values.players.map((combatant, index) => {
              const name = `players[${index}.name]`;
              const hp = `players[${index}.hp]`;
              const init = `players[${index}.init]`;
              const bonus = `players[${index}.bonus]`;
              return (
                <div key={combatant.id}>
                  <TextField
                    name={name}
                    value={combatant.name}
                    onChange={formik.handleChange}
                    id="standard-required"
                    label="Name"
                    variant="standard"
                  />
                  <TextField
                    name={hp}
                    value={combatant.hp}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    name={init}
                    value={combatant.init}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    name={bonus}
                    value={combatant.bonus}
                    onChange={formik.handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};

export default PlayerForm;
