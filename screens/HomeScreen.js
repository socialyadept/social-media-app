import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators } from '../redux/actions';
import { selectPostsData, selectPostsIsFetched } from '../redux/reducers/posts';
import theme from '../constants/theme';
import Snackbar from '../common/Snackbar';
import ListPost from '../components/ListPost';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const posts = useSelector(selectPostsData);
  const postsAreFetched = useSelector(selectPostsIsFetched);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const setValues = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!postsAreFetched) dispatch(Creators.getPosts());
    else {
      setValues();
    }
  }, [dispatch, postsAreFetched]);

  const onDeletePost = useCallback(id => {
    setItems(prevItems => prevItems.filter(x => x.id !== id));
    onToggleSnackBar();
  }, []);

  const renderPosts = () =>
    isLoading ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={posts}
        extraData={posts}
        renderItem={({ item }) => (
          <ListPost item={item} onDeletePost={onDeletePost} />
        )}
      />
    );

  return (
    <View style={styles.container}>
      {renderPosts()}
      <Snackbar
        visible={visible}
        onToggleSnackBar={onToggleSnackBar}
        onDismissSnackBar={onDismissSnackBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: theme.color.darkSlateBlue,
    fontSize: 30,
  },
});
