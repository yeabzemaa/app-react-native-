// nav.js
import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
export default function nav() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Q-<Text style={styles.highlight}>B</Text>ee</Text>
      </View>

      <View style={styles.navContainer}>
    
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Membership</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>

      {/* Action Section */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText1}>Register</Text>
            </TouchableOpacity>
          
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10, 
  },
  logoText:{
    color:'#3D3BF3',
    fontWeight:'bold',
    fontSize:20

  },
  logoContainer:{
    flex:1,
    flexDirection:'row',
    marginLeft:50,
    paddingleft:30,    
  },
  highlight:{
    color:'#000'
  },
  navContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  button1: {
    backgroundColor: '#3D3BF3',
    padding: 5,
    borderRadius: 5,

  },
  buttonText1: {
    color: '#fff', // Custom text color
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    // backgroundColor: '#3D3BF3',
    padding: 5,
    borderRadius: 5,

  },
  buttonText: {
    color: '#000', // Custom text color
    fontSize: 20,
    fontWeight: 'bold'
  },
  actionContainer:{
    flex:1,
    flexDirection:'row',
    paddingleft: 50,
    justifyContent:'space-around'

    
  }
  
});
    
  


