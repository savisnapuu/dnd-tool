import React from "react";
import { FieldArray, FastField } from "formik";
import { TextField, Container, Box } from "@mui/material";
import { generate } from "shortid";

const PlayerForm = ({ formik }) => {
  return (
    <FieldArray
      name="players"
      render={(arrayHelpers) => (
        <Container>
          <div>
            <h1>Players</h1>
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({
                  id: generate(),
                  name: "",
                  hp: "",
                  init: "",
                  bonus: "",
                  type: "player",
                })
              }
            >
              +
            </button>
          </div>

          <div>
            {formik.values.players.map((combatant, index) => {
              const name = `players[${index}.name]`;
              const hp = `players[${index}.hp]`;
              const init = `players[${index}.init]`;
              const bonus = `players[${index}.bonus]`;
              return (
                <Box
                  key={combatant.id}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FastField name={name}>
                    {() => {
                      return (
                        <TextField
                          name={name}
                          value={combatant.name}
                          onChange={formik.handleChange}
                          label="Name"
                          id="standard-basic"
                          variant="standard"
                          sx={{
                            width: 100,
                            input: { color: "rgb(160, 161, 178)" },
                          }}
                          InputLabelProps={{
                            style: { color: "rgb(160, 161, 178)" },
                          }}
                        />
                      );
                    }}
                  </FastField>
                  <FastField name={hp}>
                    {() => {
                      return (
                        <TextField
                          name={hp}
                          value={combatant.hp}
                          onChange={formik.handleChange}
                          label="HP"
                          id="standard-basic"
                          variant="standard"
                          sx={{ width: 50 }}
                        />
                      );
                    }}
                  </FastField>
                  <FastField name={init}>
                    {() => {
                      return (
                        <TextField
                          name={init}
                          value={combatant.init}
                          onChange={formik.handleChange}
                          label="Init"
                          id="standard-basic"
                          variant="standard"
                          sx={{ width: 50 }}
                        />
                      );
                    }}
                  </FastField>
                  <FastField name={bonus}>
                    {() => {
                      return (
                        <TextField
                          name={bonus}
                          value={combatant.bonus}
                          onChange={formik.handleChange}
                          label="Bonus"
                          id="standard-basic"
                          variant="standard"
                          sx={{ width: 50 }}
                        />
                      );
                    }}
                  </FastField>
                  <Box>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </Box>
                </Box>
              );
            })}
          </div>
        </Container>
      )}
    />
  );
};

export default PlayerForm;
