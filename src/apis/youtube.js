import axios from 'axios';

export default axios.create({
    baseURL: 'https://video-search-api.herokuapp.com/search/',
});
