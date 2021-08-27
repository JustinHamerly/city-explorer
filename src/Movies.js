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
              <Accordion.Header>{movie.title}</Accordion.Header>
              <Accordion.Body>
                <p>{movie.description}</p>
                <h3>Release Date: {movie.release}</h3>
                <div class='votes'>
                  <h4>Average Vote: {movie.avgVote}</h4>
                  <h4>Total Votes: {movie.totalVote}</h4>
                  <h4>Popularity: {movie.popularity}</h4>
                </div>

              
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