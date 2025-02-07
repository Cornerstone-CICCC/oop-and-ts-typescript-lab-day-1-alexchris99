// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

// 1. Create an enum called MovieGenre with at least 5 movie genres.
enum MovieGenre {
  Action,
  Thriller,
  Comedy,
  Adventure,
  Romance,
  // add 4 more
}
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
type Seat = [string, number]

// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
type Movie = {
  movieId: number,
  title: string,
  genre: MovieGenre,
  avaliableSeats: Seat[]
}

let movies: Movie[] = [];

// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
function addMovie(movieId: number, title: string, genre: MovieGenre, avaliableSeats: Seat[]):Movie[] {
  movies.push({
    movieId: movieId,
    title: title,
    genre: genre,
    avaliableSeats: avaliableSeats
  })
  return movies
}

// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
function bookSeat(movieId: number, rowLetter: string, seatNumber: number): string{
  let message: string = " "
  let seatsLeft: Seat[] = []
  movies.forEach(movie =>{
    if(movie.movieId == movieId){
      movie.avaliableSeats.forEach(seat=>{
        if(seat[0] == rowLetter && seat[1] == seatNumber){
          message = `Seat ${rowLetter}${seatNumber} Booked Succesfully`
        }else{
          seatsLeft.push(seat)
        }
      })
      movie.avaliableSeats = seatsLeft
    }
  })
  return message
}
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
function checkSeatAvailability(movieId: number, rowLetter: string, seatNumber: number): boolean {
  let message: boolean = false
  movies.forEach(movie =>{
    movie.movieId == movieId ? movie.avaliableSeats.forEach(seat =>{
      seat[0] == rowLetter && seat[1] == seatNumber ? message =true : message = false
    }): ""
  })
  return message
}

// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false