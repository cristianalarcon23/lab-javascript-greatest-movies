// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return directorsArr = movies.map(({director}) => (director));
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function uniquifyDirectors(movies) {
  return getAllDirectors(movies).filter((elem, index) => {
    return getAllDirectors(movies).indexOf(elem) == index;
  });
}

console.log(uniquifyDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const spielbergMovies = movies.filter((elem) => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama'));
  
console.log(spielbergMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let average = 0;
  for (let i = 0; i < movies.length; i++) {
    average += movies[i].score / movies.length;
  }
  return average.toFixed(2);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMovies = movies.filter((elem) => elem.genre.includes('Drama'));

//console.log(dramaMovies)

function dramaMoviesScore(dramaMovies) {
  return scoresAverage(dramaMovies);
}

console.log(dramaMoviesScore(dramaMovies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = [...movies].sort((a, b) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  if (a.year === b.year) {
    if (a.title < b.title) {
      return -1;
    }
    else {
      return 1};
    }
  });

console.log(orderByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = [...movies].slice(0, 20).sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  if (a.title === b.title) {
    return 0;
  }
});

console.log(orderAlphabetically);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const newMovies = structuredClone(movies)
function turnHoursToMinutes() {
  for (let i = 0; i < newMovies.length; i++) {
    newMovies[i].duration = newMovies[i].duration.replace(/(h|min)/g,'').split(' ');
    newMovies[i].duration = `${(newMovies[i].duration[0] * 60) + Number(newMovies[i].duration[1])} min`}
  return newMovies; 
}
console.log(turnHoursToMinutes(newMovies))
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
