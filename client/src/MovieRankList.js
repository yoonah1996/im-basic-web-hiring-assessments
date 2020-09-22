import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';
export default function MovieRankList(props) {
  return (
    <div className="right-movie-list">
      {
        props.movies.map(el => (
          <MovieRankListEntry 
          key = {el.id.toString()}
          movie = {el}
          handleCardClick = {props.handleCardClick}
          />
          
        ))
      }
    </div>
  );
}
