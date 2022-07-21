import React, { useContext } from "react";
import PlayerForm from "././PlayerForm";
import EnemyForm from "./EnemyForm";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { generate } from "shortid";
import { Container } from "@mui/system";
import DataContext from "../../DataContext";
import { Box, Button } from "@mui/material";

const validationSchema = Yup.object({
  players: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name required"),
      hp: Yup.string().required("HP required"),
    })
  ),
});

export default function CombatantForm() {
  const { pushData } = useContext(DataContext);
  return (
    <Formik
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
      onSubmit={(values, e) => {
        const trr = [...values.enemies, ...values.players];
        const sortedcombatantData = trr.sort((a, b) => {
          return b.init - a.init;
        });
        pushData(sortedcombatantData);
        console.log(sortedcombatantData);
      }}
    >
      {(formik, handleChange) => {
        return (
          <Container
            maxWidth={false}
            sx={{ maxWidth: 800, backgroundColor: "#252731" }}
          >
            <Form onSubmit={formik.handleSubmit}>
              <Container
                sx={{
                  display: "flex",
                  width: 1,
                  maxWidth: 500,
                  flexDirection: "row",
                }}
              >
                <PlayerForm formik={formik} handleChange={handleChange} />
                <EnemyForm formik={formik} handleChange={handleChange} />
              </Container>
              <Button sx={{ backgroundColor: "#252d38" }} type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}
