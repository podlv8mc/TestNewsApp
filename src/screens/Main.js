import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Search from '../components/Search';

import Item from '../components/Item';
import Modall from '../components/Modal';

const Main = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [searchData, setSearchData] = useState('top-headlines');
  const [searchDate, setSearchDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=' +
        searchData +
        searchDate +
        '&apiKey=ba5698a1300042adb9bb988568e440d1',
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
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setSearchDate('&from=' + moment(date).format('YYYY-MM-DD'));
          console.log(searchDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Modall
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalData={modalData}
        setModalData={setModalData}
      />

      <Search setOpen={setOpen} setSearchData={setSearchData} />

      <FlatList
        data={data.articles}
        keyExtractor={data.source}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
