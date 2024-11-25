const movie = {
    title : "Baby's Day Out" ,
    year : 1998 ,
    genre : "comedy , family" ,
    rating : {
        imbd : 8 ,
        rottentomatoes : 80,
        metacritic : 60 ,
    },
    director : "Patrick Read Johnson" ,
};

const {title, year, genre, rating : { imbd, rottentomatoes, metacritic}, director} = movie
const movieoverview = ({title, year, genre, rating : { imbd, rottentomatoes, metacritic}, director}) => {
    avg = ((imbd *10) + rottentomatoes + metacritic ) /3 ;
    message = `${title} ${(year)} , a ${genre} film directed by ${director} has an average rating of ${avg}`;
    return message;
};
console.log(movieoverview(movie));