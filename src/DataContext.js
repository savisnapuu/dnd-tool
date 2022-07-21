import { useState, createContext } from "react";
import { generate } from "shortid";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const pushData = (values) => {
    setData(values);
  };

  return (
    <DataContext.Provider value={{ pushData, data }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
