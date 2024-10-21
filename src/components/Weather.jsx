import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Jerusalem");
  const [feels_like, setFeels_like] = useState(0);
  const [description, setDescription] = useState(0);
  const [str, setStr] = useState("");
  const [icon, setIcon] = useState("");

  const apiKey = '7e3e642756ec1d3c8078713992eb8f34';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  const fechData = () => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        console.log(data); // Handle the data from the API
        setCity(data.name);
        setTemp(data.main.temp);
        setFeels_like(data.main.feels_like);
        setDescription(data.weather[0].description);
        setIcon(data.weather[0].icon);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  //fechData();
  useEffect(fechData, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(str);
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} action="">
        <input onChange={(e) => setStr(e.target.value)} type="text" />
        <button>search</button>
      </form>
      <div className='text-center card_weather'>

        <h2>{city}</h2>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <h2>Weather: {temp} °C</h2>
        <h4>Feel like: {feels_like} °C</h4>
        <h4>Description: {description}</h4> 
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27064.501500889284!2d34.7605667141505!3d32.01341556791479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4bb0c33bf39%3A0xfbdd79640525e72d!2sHolon!5e0!3m2!1sit!2sil!4v1727774046376!5m2!1sit!2sil" className='mapS' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Weather