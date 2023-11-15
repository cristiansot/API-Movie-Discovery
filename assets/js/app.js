const API_KEY = `96a061b7c4dfa7a6d5bcdc9f1733e583`;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; // API movies

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
      } else if (response.status === 401) {
        document.getElementById('message').innerHTML = 'Wrong key';
      } else if (response.status === 404) {
        document.getElementById('message').innerHTML = 'Page not found';
      } else { 
        document.getElementById('message').innerHTML = 'Error';
      }
    });
    document.getElementById('movieContent').innerHTML = movies;
  } catch (error) {
    document.getElementById('message').innerHTML = 'Error';
  }
};

// https://www.youtube.com/shorts/mKQITczHIkc
//Post button save the data when the user write a comment
btnPost.addEventListener('click', async e => {
  e.preventDefault();
  const post = document.querySelector('#inputText').value;
  const newData = {post};
  await postData(newData);
});

//Put button save the data when the user write a comment
btnPut.addEventListener('click', async e => {
  e.preventDefault();
  const post = document.querySelector('#inputText').value;
  const newData = {post};
  await refreshData(newData);
});

//Put button delete the data when the user push a delete button
btnDelete.addEventListener('click', async e => {
  e.preventDefault();
  const post = document.querySelector('#inputText').value;
  const newData = {post};
  await deleteData(newData);
});

const postData = async (newData) => { //I used this video for to understand how to develop this part of code ---> https://www.youtube.com/watch?v=Dvv2TvPD8C0&ab_channel=Emprinnos
  try {
    const response = await fetch('https://654e9880cbc325355742ffed.mockapi.io/app/post', { //https://mockapi.io/projects/654e9880cbc325355742ffee
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newData)
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const {post} = jsonResponse;
      document.getElementById('message').innerHTML = `${post}`;
    }
  } catch (error) {
    document.getElementById('message').innerHTML = error;
  }
};

const refreshData = async (newData) => {
  try {
    const response = await fetch('https://654e9880cbc325355742ffed.mockapi.io/app/post/1', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newData)
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const {post} = jsonResponse;
      document.getElementById('message').innerHTML = `${post}`;
    }
  } catch (error) {
    document.getElementById('message').innerHTML = error;
  }
};

const deleteData = async (newData) => {
  try {
    const response = await fetch('https://654e9880cbc325355742ffed.mockapi.io/app/post/1', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newData)
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const {post} = jsonResponse;
      document.getElementById('message').innerHTML = 'Information deleted';
    }
  } catch (error) {
    document.getElementById('message').innerHTML = error;
  }
};

loadMovies();
