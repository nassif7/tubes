import axios from 'axios';

const KEY = 'AIzaSyB7z0cHX0pphMHSIH2g-TqI1tkFxM0RgcY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
