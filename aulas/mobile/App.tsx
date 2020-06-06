import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //style  é a propriedade para atribuir estilos
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

//objeto que contem as propriedades  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  text: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
