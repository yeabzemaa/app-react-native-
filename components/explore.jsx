import { View, Text,Image,StyleSheet } from 'react-native';
import React from 'react';

export default function explore() {
  return (
    <View style={styles.exploreContainer}>
      <Text style={styles.explorTitle}>Explore Course By Catagory</Text>
      <Text>explore best course from made by us with quality</Text>
      <View style={styles.row}>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image11]} source={require('../asset/for_explore/web-design.png') } />
          <View>
         <Text style={styles.explorBoxTitle}>Design & Development</Text>
         <Text style={styles.explorBoxDescription}>200+ courses available</Text>
         </View>
      </View>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image12]} source={require('../asset/for_explore/volume.png') } />
         <View>
         <Text style={styles.explorBoxTitle}>Marketing & Communication</Text>
         <Text style={styles.explorBoxDescription}>300+ courses available</Text>
         </View>
      </View>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image13]} source={require('../asset/for_explore/bullhorn.png') } />
      <View>
         <Text style={styles.explorBoxTitle}>Digital Marketing</Text>
         <Text style={styles.explorBoxDescription}>180+ courses available</Text>
         </View>
      </View>
      </View>
      
      <View style={styles.row}>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image14]} source={require('../asset/for_explore/growth.png') } />
      <View>
         <Text style={styles.explorBoxTitle}>Business & Consulting</Text>
         <Text style={styles.explorBoxDescription}>150+ courses available</Text>
         </View>
      </View>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image15]} source={require('../asset/for_explore/accounting.png') } />
      <View>
         <Text style={styles.explorBoxTitle}>Finance Management</Text>
         <Text style={styles.explorBoxDescription}>220+ courses available</Text>
         </View>
      </View>
      <View style={[styles.explorBox, styles.ShadowColor]}>
      <Image style={[styles.image1,styles.image16]} source={require('../asset/for_explore/self-confidence.png') } />
      <View>
         <Text style={styles.explorBoxTitle}>Marketing & Communication</Text>
         <Text style={styles.explorBoxDescription}>190+ courses available</Text>
         </View>
      </View>
      </View>
    </View>
    
  )
}
const styles=StyleSheet.create({
    exploreContainer: {
        flex: 1,
        // padding: 20,
      },
      explorTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        // textAlign: 'center',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',  // Space between boxes
        marginBottom: 15,  // Space between rows
      },
      explorBox: {
        width: '35%', 
        backgroundColor: '#F8FAFC',  // Light blue background
        padding: 10,
        marginRight:25,
        borderRadius: 4,
        alignItems: 'center',  // Center the text inside the box
        justifyContent: 'center',  // Center the content vertically
        flexDirection:'row'
         },
        ShadowColor:{
            elevation:5,
         },
      explorBoxTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft:10,
        width:100

      },
      
      explorBoxDescription: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
        marginLeft:10,
        
      },
      image1:{
        width:40,
        height:40,
        borderRadius:10,
      },
      image11:{
        backgroundColor:'#E1FFBB',
        // borderRadius:5,
        
      },
      image12:{
        backgroundColor:'#6439FF',
        borderRadius:5,
      },
      image13:{
        backgroundColor:'#FC8F54'
      },
      image14:{
        backgroundColor:'#FF4C4C'
      },
      image15:{
        backgroundColor:'#FF0080',
      },
      image16:{
        backgroundColor:'#00FF9C',
      }
})