import axios from 'axios';

export default axios.create({
    baseURL: 'http://video-search-api.herokuapp.com/search/',
});
