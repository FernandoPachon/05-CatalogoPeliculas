import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/CreditsInterface';
import {MovieFull} from '../interfaces/MovieInterfaces';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text> {movieFull.vote_average} </Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>Historia</Text>
        <Text style={{fontSize: 16, textAlign: 'justify'}}>
          {movieFull.overview}
        </Text>
        {/* Presupuesto */}
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>Presupuesto</Text>
        <Text>
          {' '}
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
          }).format(movieFull.budget)}
        </Text>
      </View>
      {/* Casting */}
      <View style={{marginTop:10,marginBottom:100}}>
      <Text style={{fontSize: 23, fontWeight: 'bold', marginHorizontal:20}}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({item})=><CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop:10,height:70}}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MovieDetails;
