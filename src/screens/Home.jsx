import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { User } from '../components/User';
import axios from 'axios';

const baseURL = 'https://randomuser.me/api/?results=20&password=number,8-8&nat=br';

export function Home({navigation}) {

  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
