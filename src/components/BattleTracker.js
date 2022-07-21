import { Card } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import DataContext from "../DataContext";

function BattleTracker() {
  const { data } = useContext(DataContext);

  return (
    <Container>
      {data.map((item) => (
        <Card key={item.id}>
          <h1>{item.init}</h1>
          <h1>{item.name}</h1>
          <h1>{item.hp}</h1>
        </Card>
      ))}
    </Container>
  );
}

export default BattleTracker;
