import axios from 'axios';

const requestGetPosts = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');

export { requestGetPosts };
