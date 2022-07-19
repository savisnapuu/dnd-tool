import React from "react";
import FormA from "././PlayerForm";
import FormB from "./EnemyForm";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { generate } from "shortid";

const validationSchema = Yup.object({
  formA: Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
  formB: Yup.object({
    phone: Yup.string()
      .required("This field is required")
      .min(6, "At least 06 characters"),
  }),
});

export default function CombatantForm() {
  return (
    <Formik
      initialValues={{
        formA: {
          name: "",
          email: "",
        },
        formB: {
          phone: "",
        },
        enemies: [{ id: generate(), name: "teet", hp: "5" }],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <Form onSubmit={formik.handleSubmit}>
            <FormA formik={formik} />
            <FormB formik={formik} />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
