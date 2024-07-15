import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({UpdateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let API_URL= "https://api.openweathermap.org/data/2.5/weather";
    let Api_key ="ab2d47263464340c3b7b7e6266522c64";

    let getWeatherInfo = async() => {
      try{
      let response=  await fetch(`${API_URL}?q=${city}&appid=${Api_key}&units=metric`);
      let jsonRes=await  response.json();
      console.log(jsonRes);

      let result={
        city:city,
        temp: jsonRes.main.temp,
        minTemp:jsonRes.main.temp_min,
        maxTemp:jsonRes.main.temp_max,
        Humidity:jsonRes.main.humidity,
        feelsLike:jsonRes.main.feels_like,
        Weather: jsonRes.weather[0].description,
        windSpeed:jsonRes.wind.speed,
      };
      console.log(result);
      return result;
    }
    catch(err){
      throw err;
    }
}


    let handleChange = (event) => {
          setCity(event.target.value);
          setError(false);
    }

    let handleSubmit = async(event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let Info= await getWeatherInfo();
       UpdateInfo(Info);
       setCity("");
       }
       catch(err){
        setError(true);
      }
      
    }


  return (
    <div className='SearchBox'>
      <form className='Form'>
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
      <br />
      <br />
      <Button className="btn"variant="contained" type="submit" onClick={handleSubmit}  sx={{
            backgroundColor: '#0072ff',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0072ff',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.19)',
            },
          }}>Search</Button>
      <br />
      <br />
      {error && <Alert severity="error"><b>No such city exist in this API !</b></Alert>}
      </form>
     </div>
  );
}
