const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  // Añade tu código de bucle aquí

let countBefore2000 = 0;
let countAfter2000 = 0;

  for (let movie of movies) {
    if (movie.releaseYear < 2000) {
     countBefore2000++;
    } else {
      countAfter2000++;
    }
}

console.log(`Películas antes del año 2000: ${countBefore2000}`);
console.log(`Películas del año 2000 o después: ${countAfter2000}`);