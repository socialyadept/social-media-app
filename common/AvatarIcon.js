import React from 'react';
import { Avatar } from 'react-native-paper';

export default AvatarIcon = ({ icon = 'post', ...props }) => (
  <Avatar.Icon {...props} icon={icon} />
);
