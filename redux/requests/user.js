import axios from 'axios';

const requestGetUser = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/1');
};

export { requestGetUser };
