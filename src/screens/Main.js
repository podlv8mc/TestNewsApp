import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TextInput, StyleSheet} from 'react-native';

import Item from '../components/Item';
import Modall from '../components/Modal';

const Main = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [searchData, setSearchData] = useState('top-headlines');
  const [searchDate, setSearchDate] = useState('');
  console.log(data);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q='+searchData+searchDate+'&apiKey=ba5698a1300042adb9bb988568e440d1',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, [searchData, searchDate]);

  const renderItem = ({item}) => (
    <Item
      item={item}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      setModalData={setModalData}
    />
  );

  return (
    <View>
      <Modall
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalData={modalData}
        setModalData={setModalData}
      />
      
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Enter a search term"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => text ? setSearchData(text) : setSearchData('top-headlines')}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Enter date"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => text ? setSearchDate('&from='+text) : setSearchDate('')}
      />
      
      <FlatList
        data={data.articles}
        keyExtractor={data.source}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
});
