import { FieldArray } from "formik";
import React from "react";

const PlayerForm = ({ formik, onChange }) => {
  return (
    <div className={"form"}>
      <h3>Form B</h3>
      <div>
        <label>Phone number </label>
        <input
          name="formB.phone"
          value={formik.values.formB.phone}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.formB && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.formB.phone}</small>
          </div>
        )}
      </div>

      <pre>{JSON.stringify(formik.values.formB, null, 2)}</pre>
    </div>
  );
};

export default PlayerForm;
