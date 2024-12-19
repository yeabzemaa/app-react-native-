import { View, Text,Image, StyleSheet } from 'react-native';
import React from 'react';

export default function setSection() {
  return (
    <View style={styles.statsSection}>
            <View style={styles.statBox}>
                  <Image style={styles.image1} source={require('../asset/for_section/people_test.png') } />
              <View>
              <Text style={styles.statNumber}>10k+</Text>
              <Text style={styles.statLabel}>Students</Text>
              </View>
            </View>
            <View style={styles.statBox}>
            <Image style={styles.image1} source={require('../asset/for_section/course.png') } />
            <View>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Courses</Text>
              </View>
            </View>
            <View style={styles.statBox}>
              
            <Image style={styles.image1} source={require('../asset/for_section/clock.png') } />
             <View>
              <Text style={styles.statNumber}>300k+</Text>
              <Text style={styles.statLabel}>Hours</Text>
              </View>
            </View>
          </View>
     
  )
}
const styles=StyleSheet.create({
    statsSection:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        marginBottom:90,
        padding: 15,
        backgroundColor: '#EBEAFF',
        borderRadius:2
    },
    statBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 80,
        flexDirection:'row',
    },
    statNumber:{
      fontWeight:'bold',
      marginLeft:10,
    },
    statLabel:{
      fontWeight:'bold',
      marginLeft:10,


    },
    image1:{
      width:40,
      height:40,
      backgroundColor:'#fff',
      borderRadius:4

    }
});