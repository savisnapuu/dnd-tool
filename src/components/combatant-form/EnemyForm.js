import React from "react";
import { FieldArray } from "formik";
import { TextField } from "@mui/material";

const EnemyForm = ({ formik }) => {
  return (
    <FieldArray name="enemies">
      <div>
        {formik.values.enemies.map((combatant, index) => {
          const name = `enemies[${index}.name]`;
          const hp = `enemies[${index}.hp]`;
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
        <pre>{JSON.stringify(formik.values.enemies, null, 2)}</pre>
      </div>
    </FieldArray>
  );
};

export default EnemyForm;
