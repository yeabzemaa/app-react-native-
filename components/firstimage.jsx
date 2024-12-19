import { View, Text,Image } from 'react-native';
import React from 'react';

export default function firstimage() {
  return (
    <View style={styles.container}>
         <Image source={require('./asset/image and icon assets/im1.png')} style={styles.image} />
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        image:{
                
        }

    },

});