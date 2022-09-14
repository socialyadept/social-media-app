import React, { memo } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

import LeftContent from '../common/AvatarIcon';

const PostCard = ({ post }) => {
  const { title, body, id, userId } = post;

  return (
    <Card>
      <Card.Title
        title={`Post Id: ${id}`}
        subtitle={`User Id: ${userId}`}
        left={LeftContent}
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default memo(PostCard);
