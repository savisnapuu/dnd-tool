import { TextField } from "@mui/material";
import { FieldArray, Form } from "formik";
import React from "react";
import { Button } from "@mui/material";

const FormA = ({ formik, onChange }) => {
  return (
    <FieldArray name="enemies">
      {({ push, removem }) => (
        <div>
          {formik.values.enemies.map((combatant, index) => {
            return (
              <div key={combatant.id}>
                <TextField
                  name={combatant.name}
                  value={combatant.name}
                  onChange={formik.handleChange}
                />
                <TextField
                  name={combatant.hp}
                  value={combatant.hp}
                  onChange={formik.handleChange}
                />
              </div>
            );
          })}
          <pre>{JSON.stringify(formik.values.enemies, null, 2)}</pre>
        </div>
      )}
    </FieldArray>
    /* <div className={"form"}>
        <h3>Form A</h3>
        <div>
          <label>Name </label>
          <input
            name="formA.name"
            value={formik.values.formA.name}
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
      </div> */
  );
};

export default FormA;
