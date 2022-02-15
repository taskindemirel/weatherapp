import "./Input.css";
import { HiOutlineSearch } from "react-icons/hi";
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useRef } from "react";




const Input = ({ city, setCity, handleFetch, error, isLoading }) => {

  const cityInput = useRef(null)

  useEffect(() => {
    cityInput.current.focus()
  }, [])
  
  const createCity = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      console.log("clicked Enter");
      setCity(e.target.value);
      handleFetch();
    }
  };

  return (
    <div className="firstScreen">
      <div className="searchBox">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={createCity}
          placeholder="Enter a city name"
          autofocus
          ref={cityInput}
        />
        <HiOutlineSearch onClick={handleFetch} />
      </div>
      <div>
        <div className="info">
        {!isLoading ? (<Spinner animation="border" variant="light" />) : 
        (
          error ? (
            <p>{error}</p>
          ) : (
            <>
              <p>
                The app uses <span>weatherapi</span> which allows you to search
                for only in English as API Service. <br />
                Please, type the city name you would like to display in this
                language.
              </p>
              <p>
                Bu uygulamada API servisi olarak kullanılan <span>weatherapi</span> sadece
                İngilizce arama yapabilmeye izin vermektedir. <br />Lütfen aramalarınızı
                 İngilizce olarak gerçekleştirin.
              </p>
            </>
          )
        )}

          {}
        </div>
      </div>
    </div>
  );
};

export default Input;
