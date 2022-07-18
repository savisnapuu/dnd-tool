import { useState, createContext } from "react";
import { generate } from "shortid";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({
    combatants: [],
  });

  const pushData = (data) => {
    setData(data);
  };

  return (
    <DataContext.Provider value={{ data, pushData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
