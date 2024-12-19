import { View, Text,StyleSheet, SafeAreaView, Button,TouchableOpacity,Image } from 'react-native';
import React from 'react';

export default function lanpage() {
  return (
    <View style={styles.contentContainer}> {/* Added a container for the content */}
          <View style={styles.navwarp}>
        <Text style={styles.allText}>
            <Text style={styles.highlight}>Getting</Text> Quality 
            Education Is Now 
            More{' '}<Text style={styles.highlight}>Easy</Text>
        </Text>
        <Text style={styles.description}>
        Provides you with the best online learning courses and material that keep you knowledge growing.

        </Text>
        <View style={styles.allButton}>
        <TouchableOpacity style={styles.button1} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText1}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
         </View>  
         </View> 
            <View style={styles.image}>
            <Image style={styles.image1} source={require('../asset/im1.png')} />
            </View>
          </View>

  )
}
const styles=StyleSheet.create({
  contentContainer: {
    flexDirection: 'row', // Place elements in a row
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Space between text and image
    padding: 16,
    fontFamily:'./asset/fonts/DroidSerif.ttf'

  },
  navwarp:{
    // flexDirection:'row'
  },
  allText:{
    fontSize: 35,
    flexWrap:'wrap',
    fontWeight: 'bold',
    width: 280,
    flexGrow: 1,
    flex: 1,
  },
  description:{
    width: 420,
    flexGrow: 1,
    flex: 1,
    marginTop:20,
    marginBottom:20,
    fontFamily:'./asset/fonts/DroidSerif.ttf'

  },
  highlight: {
    fontWeight: 'bold',
    color: '#3D3BF3',
  },
  button: {
    backgroundColor: '#EBEAFF',
    padding: 5,
    borderRadius: 5,

  },
  buttonText: {
    color: '#3D3BF3', // Custom text color
    fontSize: 16,
    fontWeight: 'bold'
  },
  button1: {
    backgroundColor: '#3D3BF3',
    padding: 5,
    borderRadius: 5,

  },
  buttonText1: {
    color: '#fff', // Custom text color
    fontSize: 16,
    fontWeight: 'bold'
  },
  allButton:{
    flexDirection: 'row',
    borderRadius: 2,
    marginRight:210,
    // marginLeft:5,
    justifyContent:'space-around'


  },
  image:{
    // backgroundColor:'#3D3BF3',
    // borderRadius: 90,
    // width:'30%',

    


  },
  image1:{
    width: 180,
    height: 180,
    borderRadius: 90,
    resizeMode: 'cover',
    backgroundColor:'#9694FF'
  }

});