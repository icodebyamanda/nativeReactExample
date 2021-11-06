import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getHello} from '../redux/actions';


const Welcome = () => {

  const { greeting } = useSelector(state => state.helloReducer);
  const dispatch = useDispatch();
  const fetchGreeting = () => dispatch(getHello());

  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>{greeting}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Welcome;