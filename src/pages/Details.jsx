import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Details({navigation}) {

  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: params.item.picture.large}}/>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.bold}>- Título: </Text>{params.item.name.title}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Nome: </Text>{params.item.name.first} {params.item.name.last}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- E-mail: </Text>{params.item.email}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Telefone: </Text>{params.item.cell}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Cidade/UF: </Text>{params.item.location.city}, {params.item.location.state}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Nacionalidade: </Text>{params.item.nat}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Endereço: </Text>{params.item.location.street.name}, N° {params.item.location.street.number}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Descrição: </Text>"{params.item.location.timezone.description}"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfffd',
  },

  imageView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },

  infoView: {
    flex: 0.5,
    paddingHorizontal: 10
  },

  info: {
    fontSize: 18,
    marginBottom: 5
  },

  bold: {
    fontWeight: 'bold'
  }
});
