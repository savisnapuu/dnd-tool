import { FieldArray } from "formik";
import React from "react";
import { TextField } from "@mui/material";
import { generate } from "shortid";
import { Button } from "@mui/material";

const EnemyForm = ({ formik }) => {
  const values = formik.values.formA.combatant;
  console.log(formik.values.formA.combatants);
  return (
    <div className={"form"}>
      <div>
        <FieldArray name="formik.values.formA.combatants">
          {({ push, remove }) => (
            <div>
              <Button
                type="button"
                onClick={() => {
                  formik.values.formA.combatants.push({
                    id: generate(),
                    name: "teet",
                    hp: "",
                  });
                }}
              >
                Add New Field
              </Button>
              {formik.values.formA.combatants.map((i, index) => {
                return (
                  <div key={i.id}>
                    <TextField name={i.name} value={i.name}></TextField>
                  </div>
                );
              })}
              {formik.values.formA.combatants.map((combatant, index) => {
                return (
                  <div key={combatant.id}>
                    <TextField name={combatant.name} value={combatant.name} />
                    <TextField
                      name={`combatants[${index}.hp]`}
                      value={combatant.hp}
                    />
                    <Button onClick={() => remove(index)}>x</Button>
                  </div>
                );
              })}
            </div>
          )}
        </FieldArray>
      </div>
      <h3>Form A</h3>
      <div>
        <label>Name </label>
        <input
          name="formA.combatant.name"
          value={values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.formA && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.formA.name}</small>
          </div>
        )}
      </div>
      <br />
      <div>
        <label>Email </label>
        <input
          name="formA.email"
          value={formik.values.formA.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.formA && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.formA.email}</small>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(formik.values.formA, null, 2)}</pre>
    </div>
  );
};

export default EnemyForm;
