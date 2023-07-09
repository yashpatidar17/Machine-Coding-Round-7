import { useContext } from "react"
import { DataContext } from "../../Context/DataContextProvider"
import { DataCard } from "../Continent/DataCardPro";



export const Home = ()=>{
    const {tripData} = useContext(DataContext);
    const continentData = tripData.continents;
    return(
        <div>
            <h1>Welcome To Trip Advisor</h1>
            <h2>Top Continent for your next Holiday </h2>
            <div>
            <DataCard propData={continentData} pageName="continent"/>
            </div>
        </div>
    )
}