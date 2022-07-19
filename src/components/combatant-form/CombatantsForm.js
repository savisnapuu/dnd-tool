import React from "react";
import PlayerForm from "././PlayerForm";
import EnemyForm from "./EnemyForm";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { generate } from "shortid";

const validationSchema = Yup.object({
  players: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name required"),
      hp: Yup.string().required("HP required"),
    })
  ),
});

export default function CombatantForm() {
  return (
    <Formik
      initialValues={{
        players: [
          { id: generate(), name: "teet", hp: "5" },
          { id: generate(), name: "", hp: "" },
        ],
        enemies: [
          { id: generate(), name: "teet", hp: "5" },
          { id: generate(), name: "tiit", hp: "5" },
        ],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {(formik, handleChange) => {
        return (
          <Form onSubmit={formik.handleSubmit}>
            <PlayerForm formik={formik} handleChange={handleChange} key={1} />
            <EnemyForm formik={formik} handleChange={handleChange} key={2} />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
