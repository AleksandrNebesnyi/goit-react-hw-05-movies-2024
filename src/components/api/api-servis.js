import axios from 'axios';

const TMBD_MOVIE_API_KEY= 'b26777ed2845fb43ae16e291e5ea43c5';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
});

const  getMovies=async (url='')=> {    
    const response = await axiosInstance.get(url);
    return response;
      
}
const getTrendingsMovies= async ()=>{
    const response =await getMovies(`trending/movie/day?api_key=${TMBD_MOVIE_API_KEY}`);
    return response.data
};
const fetchMoviesByQuery = async (searchQuery, page)=>{
  
    const response =await getMovies(`search/movie?api_key=${TMBD_MOVIE_API_KEY}&query=${searchQuery}&page=${ page}&language=en-US`);
    return response.data
};
const fetchMovieById = async (id)=>{
      const response =await getMovies(`movie/${id}?api_key=${TMBD_MOVIE_API_KEY}&language=en-US`);
    return response.data
};
//  Фетч актёров для фильма
const  fetchCast= async (id)=> {
  const response =await getMovies(`movie/${id}/credits?api_key=${TMBD_MOVIE_API_KEY}&language=en-US`);
  // console.log('Cast-data', response.data);
  return response.data

}
// Фетч отзывов на фильм
const  fetchReviews=async(id)=> {
  const response = await getMovies(`movie/${id}/reviews?api_key=${TMBD_MOVIE_API_KEY}&language=en-US&page=1`);
  // console.log('reviews', response.data);
  return response.data
}


export{ getMovies,getTrendingsMovies,fetchMoviesByQuery,fetchMovieById,fetchCast,fetchReviews};

