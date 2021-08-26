import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

class Movies extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieData: this.props.movieData,
    }
  }
  render() {
    let movieArray = this.props.movieData;
    return(
      <>
        {movieArray.map((movie, idx) => {
          return(
            <Accordion key={idx}>
            <Accordion.Item eventKey={movie.title}>
              <Accordion.Header><h2>Movie: {idx+1}</h2></Accordion.Header>
              <Accordion.Body>
                <h3>Title: {movie.title}</h3>
                <h4>Description: {movie.description}</h4>
                <h4>Average Vote: {movie.avgVote}</h4>
                <h4>Total Votes: {movie.totalVote}</h4>
                <h4>Popularity: {movie.popularity}</h4>
                <h4>Release Date: {movie.release_date}</h4>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          ) 
        })};
      </>
    );
  }
}

export default Movies;