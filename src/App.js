import "./App.css";
import React from "react";
import { DataProvider } from "./DataContext";
import ButtonBar from "./components/ButtonBar";
import BattleTracker from "./components/BattleTracker";
import CombatantForm from "./components/combatants-form-3/CombatantsForm";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <CombatantForm></CombatantForm>
        <BattleTracker />
      </DataProvider>
    </div>
  );
}

export default App;
