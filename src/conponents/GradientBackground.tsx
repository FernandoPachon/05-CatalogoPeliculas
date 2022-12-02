import React, { useContext } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/UseFade';
import { useEffect } from 'react';

interface Props{
    children: JSX.Element|JSX.Element[]
}

export const GradientBackground = ({children}:Props) => {

  const {colors,prevColors,setPrevMainColors}=useContext(GradientContext);
  const {opacity,fadeIn,fadeOut}=useFade();

  useEffect(()=>{
    fadeIn(()=>{
      setPrevMainColors(colors);
      fadeOut();
    });
  })
  
  return (
<View style={{ flex: 1,}}>
 <LinearGradient
    colors={[colors.primary,colors.secondary,'white']}
    style={{...StyleSheet.absoluteFillObject}}
    start={{x:0.1,y:0.1}}
    end={{x:0.5,y:0.9}}
 />
 {children}
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#21618C'
    },
});
export default GradientBackground;
