import { useState } from "react";
import "./App.css";
import Input from "./Input/Input";
import Result from "./Result/Result";
import Bottom from "./Bottom/Bottom";


function App() {
  const [city, setCity] = useState("");
  const [cityInfo, setCityInfo] = useState({});
  const [isSearched, setIsSearched] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  const handleFetch = () => {
    setIsLoading(false)
    if (city?.length) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => {
          if (!response.ok) {
            throw Error('Böyle bir şehir bulunamadı!')
          }
          return response.json()})
        .then((data) => {
          setCityInfo({
            name: data.location.name,
            country: data.location.country,
            localTime: data.location.localtime,
            tempC: data.current.temp_c,
            humidity: data.current.humidity,
            uv: data.current.uv,
            condition: data.current.condition.text,
            feelslike: data.current.feelslike_c,
            conditionIcon: data.current.condition.icon,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset
          })
          setIsSearched(true)
          setError(null)
          setIsLoading(true)
        })
        .catch(err => {
          setError(err.message);
          setCity("")
          setIsLoading(true)
        })
    } else {
      alert("Bir şehir ismi girmediniz!")
      setIsLoading(true)
    }
  };


  return (
    <div className="App">
            <div className="heading">
        <h1 className="weather">HAVA<span>DURUMU</span></h1>
      </div>

      <div className="main">
        { 
          !isSearched ? (
            <Input city={city} setCity={setCity} handleFetch={handleFetch} error={error} isLoading={isLoading} />
          ) : (
            <Result cityInfo={cityInfo} setIsSearched={setIsSearched} setCity={setCity}/>
          
         )
        }

        {/* {<Spinner animation="border" />} */}
      </div>

      <div className="footer">
        <Bottom />
      </div>
      

      
    </div>
  );
}

export default App;
