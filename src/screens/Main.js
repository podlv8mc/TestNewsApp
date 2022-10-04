import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Search from '../components/Search';

import Item from '../components/Item';
import Modall from '../components/Modal';
import DropDownPicker from 'react-native-dropdown-picker';

const Main = () => {

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [searchData, setSearchData] = useState('top-headlines');
  const [searchDate, setSearchDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [openSort, setOpenSort] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [items, setItems] = useState([
    {label: 'relevancy', value: 'relevancy'},
    {label: 'publishedAt', value: 'publishedAt'},
    {label: 'popularity', value: 'popularity'},
  ]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=' +
        searchData +
        searchDate +
        '&sortBy=' +
        sortBy +
        '&apiKey=e4dfcac1250a41849334a39f744afddd',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, [searchData, searchDate, sortBy]);
  console.log(
    'https://newsapi.org/v2/everything?q=' +
        searchData +
        searchDate +
        '&sortBy=' +
        sortBy +
        '&apiKey=e4dfcac1250a41849334a39f744afddd',
  );
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
      <View style={styles.sortBy}>
      <DropDownPicker
        
        open={openSort}
        value={sortBy}
        items={items}
        setOpen={setOpenSort}
        setValue={setSortBy}
        setItems={setItems}
      />
      </View>
      <Search setOpen={setOpen} setSearchData={setSearchData} />

      <FlatList
        style={{zIndex: -1}}
        data={data.articles}
        keyExtractor={data.source}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  sortBy: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 120,
  },
});
