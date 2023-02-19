import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';

export default function TabNavigation() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem}>
        <Image style={styles.images} source={require('../assets/tab/corazon.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image style={styles.images} source={require('../assets/tab/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image style={styles.images} source={require('../assets/tab/chat.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 88,
     backgroundColor: 'white', 
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuItem: {
    padding: 10,
  },
  images: {
    width: 25,
    height: 25,
  },
});
