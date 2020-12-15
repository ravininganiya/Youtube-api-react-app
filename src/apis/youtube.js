import axios from 'axios';

const KEY = 'AIzaSyCWvwBgCImiTb0qUeplNGbI6EjO9tGh9GU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})

