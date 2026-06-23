function getMovies() {
    return [
        {
            "title": "The Texas Chainsaw Vasectomy",
            "genre": "Horror",
            "rating": 7,
            "runtime": 88,
            "watched": true
        },
        {
            "title": "Fast & Furious 69: Mobility Scooters",
            "genre": "Action",
            "rating": 4,
            "runtime": 142,
            "watched": false
        },
        {
            "title": "The Shawshag Redemption",
            "genre": "Romance",
            "rating": 9,
            "runtime": 118,
            "watched": true
        },
        {
            "title": "Jurassic Parking Ticket",
            "genre": "Comedy",
            "rating": 6,
            "runtime": 95,
            "watched": true
        },
        {
            "title": "Saving Ryan's Privates",
            "genre": "Drama",
            "rating": 8,
            "runtime": 164,
            "watched": false
        },
        {
            "title": "The Lord of the Onion Rings: Fellowship of the Deep Fryer",
            "genre": "Fantasy",
            "rating": 10,
            "runtime": 201,
            "watched": true
        },
        {
            "title": "Debbie Does Taxes",
            "genre": "Documentary",
            "rating": 2,
            "runtime": 74,
            "watched": true
        },
        {
            "title": "The Silence of the Clams",
            "genre": "Thriller",
            "rating": 5,
            "runtime": 103,
            "watched": false
        },
        {
            "title": "Schindler's Craigslist",
            "genre": "Drama",
            "rating": 7,
            "runtime": 135,
            "watched": true
        },
        {
            "title": "Star Wars: Episode IV - A New Pope",
            "genre": "Sci-Fi",
            "rating": 9,
            "runtime": 121,
            "watched": true
        },
        {
            "title": "The Godfather Part 3 (The Bad One)",
            "genre": "Crime",
            "rating": 3,
            "runtime": 162,
            "watched": true
        },
        {
            "title": "Cocaine Bear 2: Rehab",
            "genre": "Comedy",
            "rating": 6,
            "runtime": 91,
            "watched": false
        },
        {
            "title": "The Matrix Reloaded (But the Wi-Fi is Down)",
            "genre": "Sci-Fi",
            "rating": 5,
            "runtime": 138,
            "watched": true
        },
        {
            "title": "Good Will Hunting for a Parking Spot",
            "genre": "Drama",
            "rating": 8,
            "runtime": 126,
            "watched": true
        },
        {
            "title": "Forrest Dump",
            "genre": "Comedy",
            "rating": 10,
            "runtime": 142,
            "watched": true
        }
    ];
}

/**
 *                  Create a function that returns total number of movies
 * @param movies    The array of movies to go through
 * @returns {*}     The length of the movies array
 */
function countMovies(movies) {
    return movies.length;
}

/**
 *                      Create a function that returns number of watched movies
 * @param movies        The array of movies to go through
 * @returns {number}    If the movie in the array is marked as watched it will return as a +1 to the count
 */
function watchedMovies(movies) {
    let count = 0;

    movies.forEach(function (movie) {
        if (movie.watched === true) {
            count++;
        }
    })

    return count;
}

/**
 *                       Create a function that returns average rating
 * @param movies         The array of movies to go through
 * @returns {string}     The added total of all movies rating divided by the amount of movies
 */
function averageRating(movies) {
    let total = 0;

    movies.forEach(function (movie) {
        total += movie.rating;
    })

    return ((total / countMovies(movies)).toFixed(2));
}

/**
 *                       Create a function that returns longest movie
 * @param movies         The array of movies to go through
 * @returns {*[]}        Returns the list of movies that are the longest
 */
function longestMovie(movies) {
    let longest = 0;
    let moviesList = [];

    movies.forEach(function (movie) {
        if (movie.runtime > longest) {
            longest = movie.runtime;
            moviesList = [movie];
        } else if (movie.runtime === longest) {
            moviesList.push(movie);
        }
    })

    return moviesList;
}

/**
 *                       Create a function that returns shortest movie
 * @param movies         The array of movies to go through
 * @returns {*[]}       Returns the list of movies that are the shortest
 */
function shortestMovie(movies) {

    let shortest = movies[0].runtime;
    let moviesList = [];

    movies.forEach(function (movie) {
        if (movie.runtime < shortest) {
            shortest = movie.runtime;
            moviesList = [movie];
        } else if (movie.runtime === shortest && !moviesList.includes(movie)) {
            moviesList.push(movie);
        }
    })

    return moviesList;
}

/**
 *                      Create a function that returns all movies belonging to a specific genre
 * @param movies         The array of movies to go through
 * @param genre
 * @returns {{}}        Returns a list of genres and the movie titles in each of those genres
 */
function getMoviesByGenre(movies, genre) {
    let movieList = [];

    movies.forEach(function (movie){
        if (movie.genre === genre){
            movieList.push(movie.title);
        }
    })

    return movieList;
}

/**
 *                      Create a function that returns all movies with ratings above a chosen value
 * @param movies         The array of movies to go through
 * @param minRating     The minimum rating be searched
 * @returns {*[]}       Returns the list of movies that are above the minRating
 */
function filterMoviesByMinRating(movies, minRating) {
    let movieList = [];

    movies.forEach(function (movie) {
        if (movie.rating > minRating) {
            movieList.push(`${movie.title} (Rating: ${movie.rating})`);
        }
    })

    return movieList;
}

/**
 *                      Create a function that returns percentage of movies watched
 * @param movies         The array of movies to go through
 * @returns {number}     returns the percentage of movies watched
 */
function percentMoviesWatched(movies) {
    return ((watchedMovies(movies) / countMovies(movies)) * 100);
}

function summaryReport() {
    const movies = getMovies();

    console.log(`There are ${countMovies(movies)} movies in this collection\n`);

    console.log(`You have watched ${watchedMovies(movies)} out of ${countMovies(movies)} movies in your collection\n`);

    console.log(`The average rating of your movie collection is: ${averageRating(movies)}\n`)

    console.log("The longest movie(s) in your collection is/are: ");
    longestMovie(movies).forEach(function (movie) {
        console.log(`\t "${movie.title}" with a runtime of ${movie.runtime} minutes`);
    })

    console.log("\nThe shortest movie(s) in your collection is/are: ");
    shortestMovie(movies).forEach(function (movie) {
        console.log(`\t "${movie.title}" with a runtime of ${movie.runtime} minutes`);
    })

    console.log("\nPercentage of movies watched: " + percentMoviesWatched(movies).toFixed(2) + "%");

    let ratingThreshold = Math.floor(Math.random() * 10) + 1;

    console.log(`\nAll movies above rating: ${ratingThreshold}:`);
    filterMoviesByMinRating(movies, ratingThreshold).forEach(function (movie) {
        console.log("\t" + movie);
    })

    console.log("Action movies: ");
    getMoviesByGenre(movies, "Action").forEach(function (movie){
        console.log("\t" + movie);
    })

    console.log("Comedy movies: ");
    getMoviesByGenre(movies, "Comedy").forEach(function (movie){
        console.log("\t" + movie);
    })
}

function main() {
    summaryReport();
}

main();

