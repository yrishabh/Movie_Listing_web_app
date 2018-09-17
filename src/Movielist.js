import React from 'react'
class Movielist extends React.Component{
    viewM(){
        //console.log("View Movie ")
        //console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href= url
    }
    render(){
        return(
             <div className="movie"  key={this.props.movie.id} >
                <div className="movie-title">
                    <a href="#">{this.props.movie.title}</a>
                </div>
				<figure className="movie-poster">
                    <img src={this.props.movie.poster_src} alt="#" />
                </figure>
				<p>Release Date:{this.props.movie.release_date}</p>
                <ul className="movie-schedule">
                     <li>
					    <div className="date">{this.props.movie.vote_average}/10</div>
						<h2 className="entry-title">
                            <a href="#">Rating</a>
                        </h2>
					</li>
                    <li>
						<div className="date">{this.props.movie.popularity}</div>
						    <h2 className="entry-title">
                                <a href="#">Popularity</a>
                            </h2>
					</li>
                 </ul>
                <form action="#" className="search-form"> 
                    <input  className="button" type="button" onClick={this.viewM.bind(this)} value="View" />
                </form>
			</div>
            
        )
    }
}

export default Movielist;