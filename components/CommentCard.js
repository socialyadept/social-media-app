import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

import theme from '../constants/theme';
import AvatarIcon from '../common/AvatarIcon';
import DeleteMenuPop from '../common/DeleteMenuPop';

const iconProps = {
  icon: 'face-man-profile',
  size: 30,
  color: theme.text.primary,
  backgroundColor: theme.color.deepSkyBlue,
};

export default function CommentCard({ comment, onDeleteComment }) {
  const { name, body } = comment;

  return (
    <Card style={styles.container}>
      <Card.Content style={styles.contentContainer}>
        <AvatarIcon style={styles.profilePicture} {...iconProps} />
        <View style={styles.content}>
          <View style={styles.subContainer}>
            <Text style={styles.name}>{name}</Text>
            <DeleteMenuPop onDelete={onDeleteComment} id={comment.id} />
          </View>
          <Paragraph>{body}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: theme.secondary,
    borderRadius: 20,
    borderColor: theme.color.transparent,
    padding: 15,
    paddingTop: 10,
  },
  name: {
    flex: 2,
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.text.primary,
  },
  profilePicture: {
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
