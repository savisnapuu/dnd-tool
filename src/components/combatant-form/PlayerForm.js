import React from "react";
import { FieldArray } from "formik";
import { TextField } from "@mui/material";

const PlayerForm = ({ formik, onChange }) => {
  return (
    <FieldArray name="players">
      <div>
        {formik.values.players.map((combatant, index) => {
          const name = `players[${index}.name]`;
          const hp = `players[${index}.hp]`;
          return (
            <div key={combatant.id}>
              <TextField
                name={name}
                value={combatant.name}
                onChange={formik.handleChange}
              />
              <TextField
                name={hp}
                value={combatant.hp}
                onChange={formik.handleChange}
              />
            </div>
          );
        })}
        <pre>{JSON.stringify(formik.values.players, null, 2)}</pre>
      </div>
    </FieldArray>
  );
};

export default PlayerForm;
