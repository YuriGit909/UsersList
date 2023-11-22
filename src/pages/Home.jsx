import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { User } from '../components/User';
import { api } from '../services/api';
import { AntDesign } from '@expo/vector-icons'; 

export function Home({navigation}) {

  const [users, setUsers] = useState([]);
  
  async function getUsers(){
    const response = await api.get('?results=20&nat=BR')
    setUsers(response.data.results)
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <View style={styles.containerMaster}>
      <FlatList showsVerticalScrollIndicator={false}
      data={users}
      keyExtractor={item => String(item.login.uuid)}
      renderItem={({item}) => (
        <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{uri: item.picture.medium}} style={styles.image}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.data}>Nome: {item.name.first} {item.name.last}</Text>
        <Text style={styles.data}>E-mail: {item.email}</Text>
        <Text style={styles.data}>Telefone: {item.cell}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detalhes', {item})}>
      <AntDesign name="rightcircleo" size={36} color="black" />
      </TouchableOpacity>
    </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height:130,
    marginVertical: 5,
    elevation: 5
  },

  imageView: {
    borderWidth: 1,
    borderColor: 'black',
    width: 94,
    height: 94,
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },

  info: {
    marginLeft: 20,
    width: '70%'
  },

  data: {
    marginVertical: 3,
    fontSize: 15
  },

  button: {
  }

});
