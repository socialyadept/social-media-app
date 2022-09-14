import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators } from '../redux/actions';
import CommentCardsContainer from '../components/CommentCardsContainer';
import { selectPostData, selectPostIsFetched } from '../redux/reducers/post';
import {
  selectCommentsData,
  selectCommentsIsFetched,
} from '../redux/reducers/comments';
import PostCard from '../components/PostCard';

export default function PostScreenDetails({ route }) {
  const { postId } = route.params;
  const dispatch = useDispatch();

  const postIsFetched = useSelector(selectPostIsFetched);
  const commentsIsFetched = useSelector(selectCommentsIsFetched);
  const post = useSelector(selectPostData);
  const comments = useSelector(selectCommentsData);
  const [isLoading, setIsLoading] = useState(true);

  const onDeleteComment = useCallback(
    id => setComments(prevItems => prevItems.filter(x => x.id !== id)),
    [],
  );

  const onAddComment = useCallback(text => {
    if (text)
      setComments(prevItems => [
        {
          id: prevItems.length + 100,
          name: 'Leanne Graham',
          body: text,
          email: 'hello@gmail.com',
          postId,
        },
        ...prevItems,
      ]);
    else Alert.alert('Error', 'Comment Box is empty');
  }, []);

  useEffect(() => {
    if (post?.id !== postId) {
      dispatch(Creators.getPost(postId));
      dispatch(Creators.getComments(postId));
    }
    if (postIsFetched && commentsIsFetched) setIsLoading(false);

    // return dispatch(resetPost());
  }, [dispatch, postId, post, postIsFetched, commentsIsFetched]);

  const renderPost = () =>
    isLoading ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.listItem}>
        <PostCard post={post} />
        <CommentCardsContainer
          comments={comments}
          onDeleteComment={onDeleteComment}
          onAddComment={onAddComment}
        />
      </View>
    );

  return <View style={styles.container}>{renderPost()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 20,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flex: 1,
  },
});
