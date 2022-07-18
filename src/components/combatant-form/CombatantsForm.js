import React from "react";
import EnemyForm from "./EnemyForm";
import PlayerForm from "./PlayerForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { generate } from "shortid";

function CombatantForm(props) {
  const formik = useFormik({
    initialValues: {
      formA: {
        combatant: {
          name: "",
          email: "",
        },
        combatants: [
          { id: generate(), name: "teet", hp: "", type: props.name },
          { id: generate(), name: "teet", hp: "", type: props.name },
        ],
      },
      formB: {
        phone: "",
      },
    },
    validationSchema: Yup.object({
      formA: Yup.object({
        name: Yup.string(),
        email: Yup.string(),
      }),
      formB: Yup.object({
        phone: Yup.string(),
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <EnemyForm formik={formik} />
      <PlayerForm formik={formik} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default CombatantForm;
