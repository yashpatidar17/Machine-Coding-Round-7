import { useContext } from "react"
import { DataCard } from "../Continent/DataCardPro"
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContextProvider";

export const Country = ()=>{

    const {tripData,currentCountry,setCurrentCountry} = useContext(DataContext);
    const {ID} = useParams();
    console.log(currentCountry,"fnaslnd")

    return(
        <div>
            <h2>Top Countries in  for your holiday</h2>
            
        </div>
    )
}