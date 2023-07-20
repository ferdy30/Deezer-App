import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ImageCarousel from './components/carrusel.js';
import ScrollList from './components/Scroolldown';
import TabNavigation from './components/tabla';

import { Card,  } from 'react-native-paper';

export default function App() {
  return ( <>
   <View style={styles.container}>
      
      <ScrollView>

      <Text style={styles.paragraph}>
        Deezer
      </Text>
      
      <Text style={styles.texto}>
        Para ti:
      </Text>
      
      <Card>
      <ImageCarousel />
      </Card>
      <ScrollList />   
      </ScrollView>

   
      <TabNavigation/>
    
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'dark',
    padding: 8,
  },
  paragraph: {
    margin: 42,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
