import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

let cityKey = process.env.REACT_APP_CITY_KEY;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: '',
    }
  }
  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${cityKey}&q=${this.state.searchQuery}&format=json`;
    try{
      const response = await axios.get(API);
      this.setState({location: response.data[0]});
      this.setState({image: `https://maps.locationiq.com/v3/staticmap?key=${cityKey}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`});
    } catch (err) {
      this.setState({error: `${err}`});
    }
  }
  render(){
    return (
      <>
        <h1>City Explorer!</h1>
        <input onChange={(e) => this.setState({searchQuery: e.target.value})} value={this.state.searchQuery} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.error ?
          <Alert>
            {this.state.error}: Not a valid location
          </Alert>
        
        : this.state.image &&
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><h2>Location: {this.state.location.display_name}</h2></Accordion.Header>
              <Accordion.Body>
                <h3>Latitude: {this.state.location.lat}</h3>
                <h3>Longitude: {this.state.location.lon}</h3>
                <img src={this.state.image} alt={this.state.location.display_name} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      </>
    )
  }
}

export default App;
