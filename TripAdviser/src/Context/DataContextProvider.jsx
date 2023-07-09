import { createContext, useState } from "react";
import { data } from "../DB/TripData";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [tripData, setTripData] = useState(data);
    const [currentCountry,setCurrentCountry] = useState(null)
  return (
    <div>
      <DataContext.Provider value={{ item: 4, tripData,currentCountry,setCurrentCountry }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
