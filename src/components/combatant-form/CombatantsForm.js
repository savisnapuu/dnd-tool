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
      enableReinitialize
      initialValues={{
        players: [
          {
            id: generate(),
            name: "",
            hp: "",
            init: "",
            bonus: "",
            type: "player",
          },
        ],
        enemies: [
          {
            id: generate(),
            name: "",
            hp: "",
            init: Math.floor(Math.random() * 20) + 1,
            bonus: "",
            type: "enemy",
          },
        ],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik, handleChange) => {
        return (
          <Form onSubmit={formik.handleSubmit}>
            <PlayerForm formik={formik} handleChange={handleChange} />
            <EnemyForm formik={formik} handleChange={handleChange} />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
