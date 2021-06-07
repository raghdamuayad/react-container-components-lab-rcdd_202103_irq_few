import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;



  export default class SearchableMovieReviewsContainer extends Component {

  state = {
  reviews: [],
  searchTerm: " "
  }
 handleChange = (event) => {
 this.setState({
searchTerm: event.target.value
})
}
handleSubmit = (e) => {
e.preventDefault();
fetch(BASE_URL + this.state.searchTerm)
.then(response => response.json())
.then(res => this.setState( {reviews: res.results}));
}
render(){
return(
<div className="searchable-movie-reviews">
<form onSubmit={ this.handleSubmit }>
Search:<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
  <button type="submit">Submit</button>
  </form>
  <MovieReviews movies={ this.state.reviews } />
  </div>
    )
    }
    }
