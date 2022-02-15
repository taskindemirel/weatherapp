import "./Result.css";
import { RiArrowGoBackFill } from 'react-icons/ri'
import ConditionTranslate from "../ConditionTranslate";

const Result = ({ cityInfo, setIsSearched, setCity }) => {
  const {
    name,
    localTime,
    tempC,
    country,
    humidity,
    uv,
    condition,
    feelslike,
    conditionIcon,
    sunrise,
    sunset
  } = cityInfo;
  const date = new Date(`${localTime}`).toLocaleDateString("tr-TR");
  const time = new Date(`${localTime}`).toLocaleTimeString("tr-TR");
  const formatedDate = date.split("/").join("-");
  const formattedTimeHH = time.split(":")[0];
  const formattedTimeSS = time.split(":")[1];

  const resetCity = () => {
    setIsSearched(false)
    setCity("")
    console.log("resetcity");
  }

  


  return (
    <div className="result">
      <div className="top">
        <div className="location">
          <h3>{name},</h3>
          <h3>{country?.length > 14 ?  `${country.slice(0,14)}...` : country}</h3>
        </div>
        <div className="date">
          <h3>{formatedDate}</h3>
        </div>
      </div>

      <div className="center">
        <div className="left">
          <div className="real">
            <h1>
              {tempC}
              <span>°C</span>
            </h1>
            <img src={conditionIcon} alt="" />
            <p>
              {condition === "Clear" ? ConditionTranslate[0].condition : null}
              {condition === "Sunny" ? ConditionTranslate[1].condition : null}
              {condition === "Partly sunny" ? ConditionTranslate[2].condition : null}
              {condition === "Mostly sunny" ? ConditionTranslate[3].condition : null}
              {condition === "Scattered thunderstorms" ? ConditionTranslate[4].condition : null}
              {condition === "Showers" ? ConditionTranslate[5].condition : null}
              {condition === "Scattered showers" ? ConditionTranslate[6].condition : null}
              {condition === "Rain and snow" ? ConditionTranslate[7].condition : null}
              {condition === "Overcast" ? ConditionTranslate[8].condition : null}
              {condition === "Light snow" ? ConditionTranslate[9].condition : null}
              {condition === "Freezing drizzle" ? ConditionTranslate[10].condition : null}
              {condition === "Chance of rain" ? ConditionTranslate[11].condition : null}
              {condition === "Partly cloudy" ? ConditionTranslate[12].condition : null}
              {condition === "Mostly cloudy" ? ConditionTranslate[13].condition : null}
              {condition === "Chance of Storm" ? ConditionTranslate[14].condition : null}
              {condition === "Rain" ? ConditionTranslate[15].condition : null}
              {condition === "Chance of snow" ? ConditionTranslate[16].condition : null}
              {condition === "Cloudy" ? ConditionTranslate[17].condition : null}
              {condition === "Mist" ? ConditionTranslate[18].condition : null}
              {condition === "Storm" ? ConditionTranslate[19].condition : null}
              {condition === "Thunderstorm" ? ConditionTranslate[20].condition : null}
              {condition === "Chance of tstorm" ? ConditionTranslate[21].condition : null}
              {condition === "Sleet" ? ConditionTranslate[22].condition : null}
              {condition === "Snow" ? ConditionTranslate[23].condition : null}
              {condition === "Icy" ? ConditionTranslate[24].condition : null}
              {condition === "Dust" ? ConditionTranslate[25].condition : null}
              {condition === "Fog" ? ConditionTranslate[26].condition : null}
              {condition === "Smoke" ? ConditionTranslate[27].condition : null}
              {condition === "Haze" ? ConditionTranslate[28].condition : null}
              {condition === "Flurries" ? ConditionTranslate[29].condition : null}
              {condition === "Light rain" ? ConditionTranslate[30].condition : null}
              {condition === "Snow showers" ? ConditionTranslate[31].condition : null}
              {condition === "Hail" ? ConditionTranslate[32].condition : null}
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="right">
          <table>

            <tr>
              <td className="col1">
                Gün Doğumu
              </td>
              <td>
                  {sunrise}
              </td>
            </tr>

            <tr>
              <td className="col1">
                Gün Batımı
              </td>
              <td>
                  {sunset}
              </td>
            </tr>

            <tr>
              <td className="col1">
                Hissedilen
              </td>
              <td>
                {feelslike}<span>°C</span>
              </td>
            </tr>
            <tr>
              <td className="col1">
                Nem
              </td>
              <td>
                % {humidity}
              </td>
            </tr>
            <tr>
              <td className="col1">
                UV
              </td>
              <td>
                {uv}
              </td>
            </tr>
          </table>
          <div className="arrowBack">
            <div onClick={resetCity}><RiArrowGoBackFill /></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
