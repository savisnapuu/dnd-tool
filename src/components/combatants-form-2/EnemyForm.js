import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormA = ({ onChange, refId }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string(),
    }),
    onSubmit: () => {
      watchForm();
    },
  });

  // React.useEffect(() => {
  //   watchForm();
  // }, [formik.values, formik.errors]);

  React.useImperativeHandle(refId, () => ({
    Submit: async () => {
      await formik.submitForm();
    },
  }));

  function watchForm() {
    if (onChange) {
      onChange({
        values: formik.values,
        validated: formik.isSubmitting
          ? Object.keys(formik.errors).length === 0
          : false,
      });
    }
  }

  return (
    <form ref={refId}>
      <div className={"form"}>
        <h3>Form A</h3>
        <div>
          <label>Name </label>
          <input
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.name}</small>
            </div>
          )}
        </div>
        <br />
        <div>
          <label>Email </label>
          <input
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.email}</small>
            </div>
          )}
        </div>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </form>
  );
};

export default FormA;
