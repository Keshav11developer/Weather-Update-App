import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    let hot_url= "https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.jpg";
    let cold_url="https://parade.com/.image/t_share/MTkwNTc2MDAyMTcyMzMxMTMz/winter-instagram-captions-1-jpg.jpg";
    let rainy_url ="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg"
    
     return(
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={info.Humidity>75 ? rainy_url : info.temp>25 ? hot_url:cold_url}
                  title="Weather"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temprature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.Humidity}</p>
                    <p>Minimum Temprature = {info.minTemp}&deg;C</p>
                    <p>Maximum Temprature = {info.maxTemp}&deg;C</p>
                    <p>Wind Speed = {info.windSpeed}</p>
                    <p>Weather can be described as <i>{info.Weather} and feels like {info.feelsLike}&deg;C</i></p>
                  </Typography>
                </CardContent>
            </Card>
            
        </div>
              
     );
    
    }
