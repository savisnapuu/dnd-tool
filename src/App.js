import "./App.css";
import React from "react";
import { DataProvider } from "./DataContext";
import ButtonBar from "./components/ButtonBar";
import BattleTracker from "./components/BattleTracker";
import CombatantForm from "./components/combatant-form/CombatantsForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4ee4c3",
    },
    error: {
      main: "#D64045",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <DataProvider>
          <CombatantForm></CombatantForm>
          <BattleTracker />
        </DataProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
