import React from 'react'
import { View,Text,StyleSheet, FlatList } from 'react-native'
import { Movie } from '../interfaces/MovieInterfaces';
import { Poster } from './Poster';

interface Props{
    title:string;
    movies:Movie[]
}

export const HorizontalSlider = ({title,movies}:Props) => {
  
    return (
    <View style={{ 
      height: ( title ) ? 260 : 220
  }}>

      {
          title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{ title }</Text>
      }

      <FlatList
          data={ movies }
          renderItem={ ({ item }: any) => (
              <Poster movie={ item } width={ 140 } height={ 200 } />
          )}
          keyExtractor={ (item) => item.id.toString() }
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
      />

  </View>
  )
  
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default HorizontalSlider;
