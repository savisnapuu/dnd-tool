import React, { useRef, useContext } from "react";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import DataContext from "../../DataContext";
import { generate } from "shortid";

const PlayerForm = ({ refId }) => {
  const { pushData } = useContext(DataContext);
  const ref = useRef(null);
  React.useImperativeHandle(refId, () => ({
    Submit: async () => {
      await pushData(ref.current.values);
    },
  }));
  return (
    <div>
      <Formik
        initialValues={{
          combatants: [{ id: generate(), name: "", hp: "", type: "" }],
        }}
        onSubmit={() => {}}
        innerRef={ref}
      >
        {({ values, handleChange }) => (
          <Form name="combatants" ref={refId}>
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
            <button type="submit">sub</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// const FormB = ({ onChange, refId }) => {
//   const formik = useFormik({
//     initialValues: {
//       phone: "",
//     },
//     validationSchema: Yup.object({
//       phone: Yup.string()
//         .required("This field is required")
//         .min(6, "At least 06 characters"),
//     }),
//     onSubmit: () => {
//       watchForm();
//     },
//   });

//   React.useImperativeHandle(refId, () => ({
//     Submit: async () => {
//       await formik.submitForm();
//     },
//   }));

//   function watchForm() {
//     if (onChange) {
//       onChange({
//         values: formik.values,
//         validated: formik.isSubmitting
//           ? Object.keys(formik.errors).length === 0
//           : false,
//       });
//     }
//   }

//   return (
//     <form ref={refId}>
//       <div className={"form"}>
//         <h3>Form B</h3>
//         <div>
//           <label>Phone number </label>
//           <input
//             name="phone"
//             value={formik.values.phone}
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.phone && (
//             <div style={{ color: "red" }}>
//               <small>{formik.errors.phone}</small>
//             </div>
//           )}
//         </div>

//         <pre>{JSON.stringify(formik.values, null, 2)}</pre>
//       </div>
//     </form>
//   );
// };

export default PlayerForm;
