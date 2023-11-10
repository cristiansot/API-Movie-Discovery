const API_KEY = `96a061b7c4dfa7a6d5bcdc9f1733e583`;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; // Movie API
const btnPost = document.querySelector('#btnPost');
const inputText = document.querySelector('#inputText');
const message = document.querySelector('#message');

const loadMovies = async () => {
  let movies = '';
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    data.results.forEach(movie => {
      if (response.status === 200) {
        movies += `<div>
                        <h2>${movie.title}</h2>
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"></img>
                    </div>`;
      }
    });
    document.getElementById('movieContent').innerHTML = movies;
  } catch (error) {
    console.log(error);
  }
};

const getData = () => {
    const inputTextValue = FormData(inputText);
    // const inputTextValue = document.getElementById('inputText').value;
    return getData;
};

const postData = async () => {
    
    const newData = getData;
    try {
        const response = await fetch('http://localhost:3000/post', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        });
        if (response.ok) {
            // const jsonResponse = await response.json();
            // message = jsonResponse;
           
            document.getElementById('message').innerHTML = JSON.stringify(newData);

        }
    } catch (error) {
        console.log(error);
    }
};

btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
});

loadMovies();