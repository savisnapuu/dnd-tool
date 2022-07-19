import React from "react";
import { Formik, Form } from "formik";
import { generate } from "shortid";

const EnemyForm = (props) => {
  return (
    <Formik
      initialValues={{
        combatants: [{ id: generate(), name: "", hp: "", type: "" }],
      }}
      onSubmit={() => {
        props.updateData("data");
      }}
    >
      {({ values, handleChange }) => (
        <Form name="combatants">
          <input
            name="name"
            value={values.combatants.name}
            onChange={handleChange}
          />
          <input
            name="hp"
            value={values.combatants.hp}
            onChange={handleChange}
          />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default EnemyForm;
