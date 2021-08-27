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
            <Accordion key={idx}>
            <Accordion.Item eventKey={day.date}>
              <Accordion.Header>{day.date}</Accordion.Header>
              <Accordion.Body>
                <h3>{day.description}</h3>
                <h4>Min Temp: {day.minTemp}</h4>
                <h4>Max Temp: {day.maxTemp}</h4>
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