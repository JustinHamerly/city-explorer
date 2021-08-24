import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

let cityKey = process.env.REACT_APP_CITY_KEY;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      lat: '',
      lon: '',
      name: '',
    }
  }
  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${cityKey}&q=${this.state.searchQuery}&format=json`;
    try{
      const response = await axios.get(API);
      console.log(response.data);
      this.setState({location: response.data[0]});
      this.setState({lat: response.data[0].lat});
      this.setState({lon: response.data[0].lon});
      this.setState({name: response.data[0].display_name});
    } catch(err) {
      console.log(err.message);
    }
  }
  render(){
    return (
      <>
        <h1>City Explorer!</h1>
        <input onChange={(e) => this.setState({searchQuery: e.target.value})} value={this.state.searchQuery} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Location: {this.state.location.display_name}</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Latitude: {this.state.lat}</h3>
              <h3>Longitude: {this.state.lon}</h3>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    )
  }
}

export default App;
