import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

/*
<View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
*/

const Item = ({item, author, setModalVisible, setModalData}) => (
  <TouchableOpacity
    onPress={() => {
      setModalVisible(true);
      setModalData(item);
    }}>
    <View style={styles.info}>
      <View style={styles.infoBlok}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Item;





const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 255, 0.85)',
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    
  },
  infoBlok: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    flex: 1.6,
    fontFamily: 'Times New Roman',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    color: 'black',
  },
  description: {
    fontFamily: 'Times New Roman',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20,
    color: 'black',
  },
});

/*
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
*/