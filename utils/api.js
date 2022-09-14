export const fetchAllPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`);
};

export const fetchPost = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const fetchComments =  id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
};
