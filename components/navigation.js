import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Q-Bee</Text>
      </View>

      {/* Navigation Section */}
      <View style={styles.navContainer}>
        <Text style={styles.navText}>Home</Text>
        <Text style={styles.navText}>Contact</Text>
        <Text style={styles.navText}>Membership</Text>
        <Text style={styles.navText}>About</Text>
      </View>

      {/* Action Section */}
      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>Sign In</Text>
        <Button title="Register" color="#3D3BF3" onPress={() => alert('Register pressed')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:100,
    // backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  logoContainer: {
    // backgroundColor: 'yellow',
    width: '20%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D3BF3',
  },
  navContainer: {
    // backgroundColor: 'red',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 16,
    color: '#black',
    fontWeight: '600',
  },
  actionContainer: {
    // backgroundColor: 'green',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    borderRadius: 8,
    paddingHorizontal: 25,
  },
  actionText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});

export default Navigation;