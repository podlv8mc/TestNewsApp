import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';





const Item = ({item, author, setModalVisible, setModalData}) => (
  <TouchableOpacity onPress={() => {setModalVisible(true);setModalData(item)} } >
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: 'red',
    fontSize: 32,
  },
  description: {
    fontSize: 18,
    
  },
});
