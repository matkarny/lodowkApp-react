import React from 'react';

class WeatherAPI extends React.Component {
  render() {
    return (<div></div>);
  };
}
/*
const Api_Key = 'ad97a4e3af2e25aacd5bca8e5cedcfdd';

function WeatherAPI = async () => {

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
  
  const response = await api_call.json();
  
  console.log(response);
  
}
*/
export default WeatherAPI;