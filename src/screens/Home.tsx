import React, { useContext } from 'react';
import {View,Text,ActivityIndicator, Dimensions, ScrollView,} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../conponents/GradientBackground';
import HorizontalSlider from '../conponents/HorizontalSlider';
import { Poster } from '../conponents/Poster';
import { GradientContext } from '../context/GradientContext';
import { getImageColors } from '../helpers/getColores';
import { useMovies } from '../hooks/UseMovies';
import { useEffect } from 'react';



const {width: windowWidth} = Dimensions.get('window');

export const Home = () => {
  const {nowPlaying, Conectado, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors}=useContext (GradientContext)
  
  const getPosterColors = async( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

     const [primary='green',secondary='orange']=await getImageColors(uri)

     setMainColors({primary,secondary})
}
  
  useEffect(()=>{
    if(nowPlaying.length>0){
      getPosterColors(0)
    }
  },[nowPlaying])
  //console.log(nowPlaying);
  

  if (false) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground >
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* <Poster
      movie={Estrenos[1]}
    /> */}
        {/* carrucel */}
        <View
  
          style={{
            height: 440,
            //backgroundColor:'red',
          }}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <Poster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={index=>getPosterColors(index)}
          />
        </View >
        <View style={{
            height: 440,
            //backgroundColor:'red',
          }}>
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Top" movies={topRated} />
        <HorizontalSlider title="Próximas" movies={upcoming} />
        </View>
       
      </View>
    </ScrollView>
    </GradientBackground>
  );
};
