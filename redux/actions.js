import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getUser: null,
  setUser: ['data'],

  getPosts: null,
  setPosts: ['data'],

  getPost: ['id'],
  setPost: ['data'],

  getComments: ['id'],
  setComments: ['data'],
});
