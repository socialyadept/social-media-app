import axios from 'axios';

const requestGetPost = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export { requestGetPost };
