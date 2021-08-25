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
    let weatherArray = this.state.weatherData;
    return(
      <>
        {weatherArray.map((day, idx) => {
          return(
            <Accordion defaultActiveKey={idx}>
            <Accordion.Item eventKey={day.date}>
              <Accordion.Header><h2>Weather: {day.date}</h2></Accordion.Header>
              <Accordion.Body>
                <h3>{day.description}</h3>
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