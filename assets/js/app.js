const API_KEY = `96a061b7c4dfa7a6d5bcdc9f1733e583`;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; // Movie API

const loadMovies = async () => { //https://www.youtube.com/watch?v=GtIdmfBSoHw&list=PLpYu7Wkyi5ruXL-HBsw61NmqZy2yLEqXc&index=62&ab_channel=CodingInColour
  
    try {
    const response = await fetch(API_URL);

    let movies = '';
    // let moviesPoster = '';
    // let moviesVote = '';
    const data = await response.json();
    data.results.forEach(movie => { //goes through the array looking for the titles and posters

        // movies += `<h2>${movie.title}</h2><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"></img>`;
        // movies += `<h2>${movie.title}<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"></img></h2>`;
        
        movies += `<div>
                        <h2>${movie.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"></img>
                    </div>`;

        // moviesVote += `<p>${movie.vote_average}</p>`;
    });

    document.getElementById('movieContent').innerHTML = movies; // Display the movie titles on the webpage
    // document.getElementById('poster').innerHTML = moviesPoster; // Display posters on the webpage
    // document.getElementById('vote').innerHTML = moviesVote; // Display votes average
  
    } catch (error) {
        console.log(error);
    }
};

loadMovies();

// function xxxxxxx(){
// 	fetch(API_URL)
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// }


// Object.keys(data.validity_checks).map(key => {
	// 	const value = data.validity_checks[key]
	// 	console.log({key}, value);
	// });


