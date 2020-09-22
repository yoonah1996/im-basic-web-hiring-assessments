import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';
import { movies } from '../fakeData.json';
console.log(movies)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: movies[0],
      movies: movies
    };
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick(data){
    this.setState({currentMovie : data})
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie movie = {this.state.currentMovie}/>
          <MovieRankList 
          movies = {this.state.movies}
          handleCardClick = {this.handleCardClick}
          />
        </div>
      </>
    );
  }
}

export default App;
