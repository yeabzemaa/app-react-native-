// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView } from 'react-native';
import Nav from './components/nav'; // Import the Nav component
import Landingpage from './components/lanpage';
import SetSection from './components/setSection';
import Explore from './components/explore';
import Popular from './components/popular';
export default function App() {
  return (
    <ScrollView style={styles.scrollContainer}>
    <SafeAreaView style={styles.container}>
      <Nav /> 
      <Landingpage />
      <SetSection />
      <Explore />
      <Popular/>
      <StatusBar style="auto" />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Important for SafeAreaView to work correctly
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top
    fontFamily:'./asset/fonts/DroidSerif.ttf'
  },
  contentContainer: {
    padding: 20, // Add some padding to the content
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
  },
});