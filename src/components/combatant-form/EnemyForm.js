import React from "react";
import { FastField, FieldArray } from "formik";
import { TextField, Container, Box } from "@mui/material";
import { generate } from "shortid";
import CasinoIcon from "@mui/icons-material/Casino";
import { Casino } from "@mui/icons-material";

const EnemyForm = ({ formik }) => {
  return (
    <FieldArray
      name="enemies"
      render={(arrayHelpers) => (
        <Container>
          <div>
            <h1>Enemies</h1>
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({
                  id: generate(),
                  name: "",
                  hp: "",
                  init: Math.floor(Math.random() * 20) + 1,
                  bonus: "",
                  type: "enemy",
                })
              }
            >
              +
            </button>
          </div>

          <div>
            {formik.values.enemies.map((combatant, index) => {
              const name = `enemies[${index}.name]`;
              const hp = `enemies[${index}.hp]`;
              const init = `enemies[${index}.init]`;
              const bonus = `enemies[${index}.bonus]`;
              return (
                <Box key={combatant.id} sx={{ display: "flex", gap: "5px" }}>
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
                          sx={{ width: 100 }}
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          formik.setFieldValue(
                            `enemies[${index}.init]`,
                            `${Math.floor(Math.random() * 20) + 1}`
                          );
                        }}
                      >
                        <CasinoIcon sx={{}} />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                    </div>
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

export default EnemyForm;
