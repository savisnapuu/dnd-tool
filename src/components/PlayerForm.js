import React, { useContext } from "react";
import * as yup from "yup";
import { FieldArray, Form, Formik, getIn } from "formik";
import { TextField, Button } from "@mui/material";
import { generate } from "shortid";
import DataContext from "../DataContext";

const validationSchema = yup.object().shape({
  combatants: yup.array().of(
    yup.object().shape({
      name: yup.string().max(10),
      hp: yup.string().min(2),
    })
  ),
});

const PlayerForm = (props) => {
  const { pushData } = useContext(DataContext);
  return (
    <div>
      <Formik
        initialValues={{
          combatants: [{ id: generate(), name: "", hp: "", type: props.name }],
        }}
        onSubmit={(values) => {
          pushData(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors }) => (
          <Form>
            <FieldArray name="combatants">
              {({ push, remove }) => (
                <div>
                  <div>
                    <h2>{props.name}</h2>
                    <Button
                      type="button"
                      onClick={() =>
                        push({
                          id: generate(),
                          name: "",
                          hp: "",
                          type: props.name,
                        })
                      }
                    >
                      Add New Field
                    </Button>
                  </div>
                  {values.combatants.map((combatant, index) => {
                    const name = `combatants[${index}.name]`;
                    const errorMessage = getIn(errors, name);
                    return (
                      <div key={combatant.id}>
                        <TextField
                          name={name}
                          value={combatant.name}
                          onChange={handleChange}
                        />
                        <TextField
                          name={`combatants[${index}.hp]`}
                          value={combatant.hp}
                          onChange={handleChange}
                        />
                        <Button onClick={() => remove(index)}>x</Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PlayerForm;
