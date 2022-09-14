import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Creators } from '../redux/actions';
import { selectUserData, selectUserIsFetched } from '../redux/reducers/user';
import theme from '../constants/theme';

export default function NewScreen({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);
  const userIsFetched = useSelector(selectUserIsFetched);

  useEffect(() => {
    if (!userIsFetched) dispatch(Creators.getUser());
  }, [dispatch, userIsFetched]);

  console.log(user);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.gotoButton}>Go to Posts Screen</Text>
      </TouchableOpacity>
      <Text>
        Fetched payload is as follows: {`\n\n${JSON.stringify(user)}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
  },
  gotoButton: {
    padding: 10,
    color: theme.color.darkSlateBlue,
    backgroundColor: theme.primary,
    marginBottom: 10,
  },
  text: {
    color: theme.color.darkSlateBlue,
    fontSize: 30,
  },
});
