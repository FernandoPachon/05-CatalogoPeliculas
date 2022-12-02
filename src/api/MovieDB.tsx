import Axios  from "axios";


const MovieDB=Axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'d6708b87ff9f73dd617e1db41484ba99',
        language:'es-ES',
    }
});


export default MovieDB;

