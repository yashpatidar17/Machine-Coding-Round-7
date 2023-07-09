import { useContext } from "react";
import { DataCard } from "../Continent/DataCardPro";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContextProvider";

export const Country = () => {
  const { tripData, currentCountry, setCurrentCountry } =
    useContext(DataContext);
  const { ID } = useParams();

  const country = currentCountry.countries.find(
    (item) => item.id === parseInt(ID)
  );

  const destination = country.destinations;

  return (
    <div>
      <h2>Top Countries in for your holiday</h2>
      <DataCard propData={destination} />
    </div>
  );
};
