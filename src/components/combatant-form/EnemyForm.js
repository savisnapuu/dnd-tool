import React from "react";
import { FieldArray } from "formik";
import { TextField } from "@mui/material";
import { generate } from "shortid";

const EnemyForm = ({ formik }) => {
  return (
    <FieldArray
      name="enemies"
      render={(arrayHelpers) => (
        <div>
          <div>
            <h1>Enemies</h1>
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({
                  id: generate(),
                  name: "",
                  hp: "",
                  init: Math.floor(Math.random() * 20) + 1,
                  bonus: "",
                  type: "enemy",
                })
              }
            >
              +
            </button>
          </div>

          <div>
            {formik.values.enemies.map((combatant, index) => {
              const name = `enemies[${index}.name]`;
              const hp = `enemies[${index}.hp]`;
              const init = `enemies[${index}.init]`;
              const bonus = `enemies[${index}.bonus]`;
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
                    onClick={() => {
                      formik.setFieldValue(
                        `enemies[${index}.init]`,
                        `${Math.floor(Math.random() * 20) + 1}`
                      );
                    }}
                  >
                    Roll
                  </button>
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

export default EnemyForm;
