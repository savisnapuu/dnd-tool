import React, { useContext } from "react";
import { Form, Formik, FieldArray } from "formik";
import DataContext from "../../DataContext";
import { generate } from "shortid";
import { Button, TextField } from "@mui/material";

const PlayerForm = ({ bindSubmitForm }, props) => {
  const { pushPlayers } = useContext(DataContext);
  return (
    <Formik
      initialValues={{
        players: [{ id: generate(), name: "", hp: "", type: props.name }],
      }}
      onSubmit={(values, { setSubmitting }) => {
        pushPlayers(values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const { values, handleChange } = formikProps;
        bindSubmitForm(formikProps.submitForm);
        return (
          <Form>
            <FieldArray name="players">
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
                  {values.players.map((combatant, index) => {
                    const name = `players[${index}.name]`;
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PlayerForm;
