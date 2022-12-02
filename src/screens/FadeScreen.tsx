import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import {useFade} from '../hooks/UseFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>FadeScreen </Text>
      <Animated.View
        style={{
          backgroundColor: '#21618C',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />

      <Button title="FadeIn" onPress={() => fadeIn()} />

      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
    },
    View2: {
      backgroundColor: '#21618C',
      width: 150,
      height: 150,
      borderColor: 'white',
      borderWidth: 10,
      opacity: 1,
    },
  });
};
export default FadeScreen;
