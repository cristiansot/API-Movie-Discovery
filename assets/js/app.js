
const API_KEY = `96a061b7c4dfa7a6d5bcdc9f1733e583`
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` //Movie API

const loadMovies = async() => {

	try {
		const response = await fetch(API_URL);
		console.log(response);

		let movies = " ";
		const data = await response.json();
		data.results.forEach(movies => {
            movies = movies + '1111';
			return movies;

		});

		document.getElementById('content').innerHTML = movies;

	} catch(error) {

		console.log(error);
	}


}


loadMovies();


// function getWeather(){
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


