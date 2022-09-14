import React, { memo, useState } from 'react';
import { View, StyleSheet, FlatList, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

import theme from '../constants/theme';
import CommentCard from './CommentCard';

const renderCommentsList = ({ comments, onDeleteComment }) => {
  return (
    <FlatList
      data={comments}
      extraData={comments}
      renderItem={({ item }) => (
        <CommentCard
          key={item.id}
          comment={item}
          onDeleteComment={onDeleteComment}
        />
      )}
    />
  );
};
const MemoizedComponent = memo(renderCommentsList);

function CommentsCardContainer({ comments, onDeleteComment, onAddComment }) {
  const [comment, setComment] = useState('');

  const onChangeText = input => setComment(input);

  return (
    <View style={styles.container}>
      <MemoizedComponent
        comments={comments}
        onDeleteComment={onDeleteComment}
      />
      <View style={styles.addComment}>
        <TextInput
          label="Comment"
          value={comment}
          onChangeText={onChangeText}
          style={styles.input}
          right={
            <TextInput.Icon
              name="chevron-right"
              onPress={() => {
                Keyboard.dismiss();
                onAddComment(comment);
                setComment('');
              }}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addComment: {
    paddingTop: 5,
  },
  input: {
    backgroundColor: theme.primary,
    borderRadius: 20,
  },
});

export default memo(CommentsCardContainer);
