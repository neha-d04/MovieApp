let movieList = document.getElementById("movielist");

const apikey = "api_key=de8a2067ee40c32c348f2e57d0ebe418";
const baseurl = "https://api.themoviedb.org/3";
const apiurl = `${baseurl}/discover/movie?sort_by=popularity.desc&${apikey}`;
fetch(`${apiurl}`)
  .then((response) => response.json())
  .then((data) => {
    displayMovie(data.results);
    console.log(data);
  });

function displayMovie(data) {
  let html = "";
  data.forEach((element) => {
    html += `<div
            class="card col-lg-4 col-md-6 col-sm-12 movie"
            style="width: 18rem"
          >
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="card-img-top" alt="Image" />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">
                Release Date: ${element.release_date}
              </p>
              <span class="badge bg-success">${element.vote_average} </span>
            </div>
          </div>`;
  });

  movieList.innerHTML = html;
}
