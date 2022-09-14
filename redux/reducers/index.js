// import { resettableReducer } from 'reduxsauce';

// import { Types } from '../actions';
import userReducer from './user';
import postsReducer from './posts';
import postReducer from './post';
import commentsReducer from './comments';

// const resettable = resettableReducer(Types.RESET_STATE);

module.exports = {
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
};
