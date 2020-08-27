import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://funparty-firebase-a59dd.firebaseio.com/'
});

export default instance;