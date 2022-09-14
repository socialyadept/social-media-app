import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import LeftContent from '../common/AvatarIcon';
import DeleteMenuPop from '../common/DeleteMenuPop';
import theme from '../constants/theme';

export default function ListPost({ item, onDeletePost }) {
  const navigation = useNavigation();

  const renderCardTitle = () => (
    <Card.Title
      title={
        <View style={styles.cardTitle}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: theme.text.primary,
            }}>{`Post Id: ${item.id}`}</Text>
          <DeleteMenuPop
            onDelete={onDeletePost}
            id={item.id}
            title="delete post"
          />
        </View>
      }
      subtitle={`User Id: ${item.userId}`}
      left={LeftContent}
    />
  );

  const renderCardContent = () => (
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.body}</Paragraph>
    </Card.Content>
  );

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Post', { postId: item.id })}>
      <Card>
        {renderCardTitle()}
        {renderCardContent()}
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: theme.third,
    borderBottomWidth: 1,
    borderColor: theme.color.light,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
