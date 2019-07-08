import React from 'react';
import WeatherCard from '../WeatherWidget/WeatherCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test">
        HOME PAGE
        <WeatherCard />
      </div>
    );
  }
}

export default Home;
