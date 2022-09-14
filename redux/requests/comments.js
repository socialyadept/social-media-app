import axios from 'axios';

const requestGetPostComments = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

export { requestGetPostComments };
