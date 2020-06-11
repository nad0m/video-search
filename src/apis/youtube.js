import axios from 'axios';

export default axios.create({
    baseURL: 'http://videosearchapi-env.eba-kpw2pfye.us-east-2.elasticbeanstalk.com/search',
});
