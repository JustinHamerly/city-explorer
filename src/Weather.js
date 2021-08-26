import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: this.props.weatherData,
    }
  }
  render() {
    let weatherArray = this.props.weatherData;
    return(
      <>
        {weatherArray.map((day, idx) => {
          return(
            <Accordion defaultActiveKey={idx}>
            <Accordion.Item eventKey={day.date}>
              <Accordion.Header><h2>Weather: Day {idx+1}</h2></Accordion.Header>
              <Accordion.Body>
                <h3>Date: {day.date}</h3>
                <h3>Description: {day.description}</h3>
                <h3>Minimum Temp: {day.minTemp}</h3>
                <h3>Maximum Temp: {day.maxTemp}</h3>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          ) 
        })};
      </>
    );
  }
}

export default Weather;