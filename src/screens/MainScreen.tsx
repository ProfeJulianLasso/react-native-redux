import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMessage} from '../redux/slices/MessageSlice';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const {message} = useSelector((state: any) => state.message);

  const handlePress = () => {
    dispatch(setMessage('Mensaje desde el componente'));
  };

  return (
    <View>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};
