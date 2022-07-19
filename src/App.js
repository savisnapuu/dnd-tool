import "./App.css";
import React from "react";
import { DataProvider } from "./DataContext";
import ButtonBar from "./components/ButtonBar";
import BattleTracker from "./components/BattleTracker";
import CombatantForm from "./components/combatant-form/CombatantsForm";
import PlayerFormm from "./components/PlayerForm";
function App() {
  return (
    <div className="app">
      <DataProvider>
        <CombatantForm></CombatantForm>
      </DataProvider>
    </div>
  );
}

export default App;
