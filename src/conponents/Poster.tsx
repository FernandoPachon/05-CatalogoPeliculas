import {useNavigation, useNavigationState} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/MovieInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const Poster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //console.log({uri});

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
        //backgroundColor:'red',
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.imageStyle} />
        <Text>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginHorizontal: 3,
    paddingBottom: 5,
    paddingHorizontal: 7,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 18,

    //elevation: 8,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
  },
});
