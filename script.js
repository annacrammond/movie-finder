// movie database
const movies = [
    {
        title: "The Batman",
        services: ["Netflix", "Prime Video"]
    },
    {
        title: "Barbie",
        services: ["Sky", "NOW"]
    }
];

// display movies
const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search-input");
const subList = document.getElementById("sub-list");

const selectedServices = Array.from(subList.querySelectorAll("input[type='checkbox']:checked"))
  .map(checkbox => checkbox.value);

function displayMovies(movies) {
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const movieItem = document.createElement("li");
        movieItem.textContent = `${movie.title} - Available on: ${movie.services.join(", ")}`;
        movieList.appendChild(movieItem);
    });
}

// searchTerm = typed text
// selectedServices = chosen subscriptions

// initial display of all movies
displayMovies(movies);

// search for film
// find movie
// display services
searchInput.addEventListener("input", function() {
    filteredSubMovie();
});

subList.addEventListener("change", function() {
    filteredSubMovie();
});

function filteredSubMovie() {
    const selectedServices = Array.from(subList.querySelectorAll("input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
        const matchesService = selectedServices.length === 0
        ? true
        : movie.services.some(services => selectedServices.includes(services));

        return matchesSearch && matchesService;
    });
    displayMovies(filteredMovies);
}

// var titleInput = document.querySelector("#title");
//    title = titleInput.value;