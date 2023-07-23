



// import React from "react"
// import axios from "axios"
// import Movie from "./Movie";
// class App extends React.Component {
//   state = {
//     isLoading : true,
//     movies : []
//   }

// getMovies = async  () => {
//   const { data : { data : { movies }}} =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//   console.log(movies);
//   this.setState({movies: movies, isLoading: false})
// }
// componentDidMount() {
//   this.getMovies();
//    // setTimeout(() => {
//   //   this.setState({isLoading: false});
//   // }, 6000);
// }

// render() {
//   const {isLoading, movies } = this.state ;
// //   return <div>{movies.map(movie => {
// //     // console.log(movie.title);
// //       <Movie
// //         key = {movie.id}
// //         id = {movie.id}
// //         year = {movie.year}
// //         title = {movie.title}
// //         summary= {movie.summary}
// //         poster = {movie.medium_cover_image}
// //         />
    
// //   })}
// // </div>;

// // return <div>{isLoading ? "Loading..." : movies.map(movie => {
// //   // console.log(movie.title);
// //     <Movie
// //       key = {movie.id}
// //       id = {movie.id}
// //       year = {movie.year}
// //       title = {movie.title}
// //       summary= {movie.summary}
// //       poster = {movie.medium_cover_image}
// //       />
  
// // })}
// // </div>;

//     return <div>{isLoading ? "Loading..." : movies.map(movie => {
//     console.log(movie.title);  
//       <Movie
//         key =   {movie.id}
//         id = {movie.id}
//         year = {movie.year}
//         title = {movie.title}
//         summary= {movie.summary}  
//         poster = {movie.medium_cover_image} />
    
//   })}   </div>;



// }
// };

// export default App;


///////////////////////////////////////////
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }

      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres ={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  
  //     return (<div className="movies">{movies.map(movie => 
  
  //       // console.log(movie.title);  
  //     <Movie
  //       key =   {movie.id}
  //       id = {movie.id}
  //       year = {movie.year}
  //       title = {movie.title}
  //       summary= {movie.summary}  
  //       poster = {movie.medium_cover_image} />
    
  // )}   </div>);
  
  
  }


}

export default App;