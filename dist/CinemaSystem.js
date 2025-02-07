"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    MovieGenre[MovieGenre["Thriller"] = 1] = "Thriller";
    MovieGenre[MovieGenre["Comedy"] = 2] = "Comedy";
    MovieGenre[MovieGenre["Adventure"] = 3] = "Adventure";
    MovieGenre[MovieGenre["Romance"] = 4] = "Romance";
    // add 4 more
})(MovieGenre || (MovieGenre = {}));
var movies = [];
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
function addMovie(movieId, title, genre, avaliableSeats) {
    movies.push({
        movieId: movieId,
        title: title,
        genre: genre,
        avaliableSeats: avaliableSeats
    });
    return movies;
}
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
function bookSeat(movieId, rowLetter, seatNumber) {
    var message = " ";
    var seatsLeft = [];
    movies.forEach(function (movie) {
        if (movie.movieId == movieId) {
            movie.avaliableSeats.forEach(function (seat) {
                if (seat[0] == rowLetter && seat[1] == seatNumber) {
                    message = "Seat ".concat(rowLetter).concat(seatNumber, " Booked Succesfully");
                }
                else {
                    seatsLeft.push(seat);
                }
            });
            movie.avaliableSeats = seatsLeft;
        }
    });
    return message;
}
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var message = false;
    movies.forEach(function (movie) {
        movie.movieId == movieId ? movie.avaliableSeats.forEach(function (seat) {
            seat[0] == rowLetter && seat[1] == seatNumber ? message = true : message = false;
        }) : "";
    });
    return message;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
