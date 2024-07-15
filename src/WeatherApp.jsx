import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){

const [weatherInfo,setWeatherInfo]=useState({
    city:"Delhi",
    feelsLike:37.73,
    temp:31.05,
    minTemp:31.05,
    maxTemp:31.05,
    humidity:70,
    weather:"Haze",
    windSpeed:2.06,
});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    return(
        <div>
            <h2 style={{color:"Black",textDecoration:"underline",textShadow:"#FFFF00 5px 0px 5px"}}><b>Your Instant Weather Forecast</b></h2>
            <br />
            <br />
             <SearchBox UpdateInfo={updateInfo}/>
             <br />
             
             <InfoBox info={weatherInfo}/>
        </div>
        
    )
}