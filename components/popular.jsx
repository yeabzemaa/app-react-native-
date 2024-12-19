import { View, Text,StyleSheet,TouchableOpacity,Image,Dimensions } from 'react-native';
import React from 'react';
// import { Button } from 'react-native-web';
const { width } = Dimensions.get('window');
export default function popular() {
  return (
    <View style={styles.popularContainer}>
      <View style={styles.popularTitleRow}>
        <View>
      <Text style={styles.popularTitle}>Popular Courses for You</Text>
      <Text>Get the best courses with the best price with world-class tutors</Text>
      </View>
       <TouchableOpacity style={styles.popularButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText}>Enroll Now</Text>
        </TouchableOpacity>
        
        </View>
    <View style={styles.row}>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/learn.jpg') } />
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>        
                  <Text style={styles.courseTitle}>Learn App Development in 30 Days</Text>
        <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>6K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>567</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$25</Text>
        </View>
      </View>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/motion graphics.jpg') } />
     
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>       
         <Text style={styles.courseTitle}>Advance Motion Graphics</Text>
         <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>15K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>999</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$69.99</Text>
        </View>
        
      </View>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/cms dev.jpg') } />
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>
                <Text style={styles.courseTitle}>Learn CMS Development</Text>
                <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>50K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>897</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$199.99</Text>
        </View>
      </View>
      </View>

      <View style={styles.row}>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/web_dev.jpg') } />
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>        
             <Text style={styles.courseTitle}>The Complete Web Design Course</Text>
             <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>50K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>1K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$99</Text>
        </View>
      </View>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/drawing.jpg') } />
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>    
            <Text style={styles.courseTitle}>Advance Drawing</Text>

            <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>100K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>676</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$50</Text>
        </View>
      </View>
      <View style={styles.popularCard}>
      <Image style={styles.image1} source={require('../asset/for_popular/video.jpg') } />
        <TouchableOpacity style={styles.popularButton1} onPress={() => alert('Button Pressed')}>
              <Text style={styles.popularbuttonText1}>Enroll Now</Text>
        </TouchableOpacity>
                <Text style={styles.courseTitle}>Advance Videography Course</Text>
                <View style={styles.image22}>
        <Image style={styles.image2} source={require('../asset/for_popular/human.png') }></Image>
        <Text>58K</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/star.png') } ></Image>
        <Text>450</Text>
        <Image style={styles.image2} source={require('../asset/for_popular/sale.png') } ></Image>
        <Text>$28</Text>
        </View>
      </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    popularContainer:{
        backgroundColor:'#F2F9FF',
        width:'100%',
        alignContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',  // Space between boxes
        marginBottom: 15,  // Space between rows
      },
    popularTitle:{
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    image22:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:15
    },
    image2:{
      width:20,
      height:20
    },
    popularTitleRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      
    },
     courseTitle:{
      paddingLeft:5,
     },
    popularCard:{
        backgroundColor:'#fff',
        width:200,
        height:280,
        margin:25,
        // alignItems:'center',
        // justifyContent:'center',
        // paddingLeft:10,
        flexWrap:'wrap',


    },
    popularButton: {
        backgroundColor: '#fff',
        width:100,
        height:30,
        padding: 5,
        borderRadius: 5,
        borderWidth:0.6,
        borderColor:'#3D3BF3',
    
      },
    popularbuttonText: {
        color: '#3D3BF3', // Custom text color
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
      },
      popularButton1: {
        backgroundColor: '#EBEAFF',
        padding: 5,
        borderRadius: 5,
        borderWidth:0.6,
        borderColor:'#3D3BF3',
        width:90,
        height:30,
        margin:10
      },
    popularbuttonText1: {
        color: '#3D3BF3', // Custom text color
        fontSize: 16,
        // fontWeight: 'bold',
        // textAlign:'center'
      },
      image1:{
        width:200,
        height:150,
        borderRadius: 5,
        // marginBottom:40
      }
});