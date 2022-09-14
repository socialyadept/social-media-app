import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import theme from '../constants/theme';

const dotIconProps = {
  name: 'dots-horizontal',
  size: 22,
  color: theme.text.primary,
  backgroundColor: theme.color.transparent,
};

export default function DeleteMenuPop({
  id,
  title = 'delete comment',
  onDelete,
}) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Icon {...dotIconProps} style={styles.iconStyle} onPress={openMenu} />
      }>
      <Menu.Item onPress={() => onDelete(id)} title={title} />
    </Menu>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: 15,
  },
});
