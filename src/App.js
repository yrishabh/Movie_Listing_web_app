import React, { Component } from 'react';
import './App.css';
import Movielist from './Movielist.js';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.performSearch("Wonder")
  }
  performSearch(searchKey){
    console.log("Search using Movie DB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=<<Use your API key link:https://developers.themoviedb.org/3/lists>>&language=en-US&page=1&include_adult=false&query=" + searchKey
    $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Data is Fetched")
          //console.log(searchResults)
          const results = searchResults.results
          var movieRows = []
          results.forEach((movie)=> {
            movie.poster_src = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ movie.poster_path
            const movieRow = <Movielist key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })
          this.setState({rows: movieRows})
        },
        error: (xhr,status,err) => {
          console.error("Faild to fetch data")
        }
    })
  }
  searchChange(event) {
    console.log(event.target.value)
    const bind = this
    const searchKey = event.target.value
    bind.performSearch(searchKey)
  }
  render() {
    return (
      <div id="site-content">
      <header className="site-header">
				<div className="container">
					<a href="#" id="branding">
						<img src='img/MNlogo.png' alt="" className="logo" />>
						<div className="logo-copy">
							<h1 className="site-title">Movie Listing APP</h1>
							<small className="site-description">Search your Favorite Movie</small>
						</div>
					</a> 
          <div className="main-navigation">
            <form action="#" className="search-form">
							  <input type="text" onChange={this.searchChange.bind(this)}  placeholder="Search..." />
							  <button><i className="fa fa-search"></i></button>
						</form>
          </div>
					<div className="mobile-navigation"></div>
				</div>
			</header>
      <main className="main-content">
        <div className="container"> 
          <div className="page">
            <div className="movie-list">
                 {this.state.rows}
            </div>
          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default App;
