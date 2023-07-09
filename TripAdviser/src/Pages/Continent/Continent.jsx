import { useContext, useEffect } from "react"
import { DataContext } from "../../Context/DataContextProvider"
import { useParams } from "react-router-dom";
import { DataCard } from "./DataCardPro";

export const Continent = () => {
    const {tripData,currentCountry,setCurrentCountry} = useContext(DataContext);
    const {ID} = useParams();
    const continent = tripData.continents.find((item)=> item.id === parseInt(ID));
    console.log(continent,"bfkiasufgbiks");
    const countries = continent.countries;
    useEffect(()=>{
        setCurrentCountry(continent);
    },[])
    return(
        <div>
            <h2>Top Countries in {continent.name} for your holiday</h2>
            <DataCard propData={countries} pageName="country"/>
        </div>
    )
}