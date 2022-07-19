import { useState, createContext } from "react";
import { generate } from "shortid";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [players, setPlayers] = useState({});
  const [enemies, setEnemies] = useState({});

  const pushPlayers = (values) => {
    setPlayers(values);
  };

  const pushEnemies = (values) => {
    setEnemies(values);
  };

  return (
    <DataContext.Provider
      value={{ players, pushPlayers, enemies, pushEnemies }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
