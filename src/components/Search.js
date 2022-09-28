import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Search = ({setOpen, setSearchData}) => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor="#000000"
        placeholder="Enter a search term"
        autoCapitalize="none"
        onChangeText={text =>
          text ? setSearchData(text) : setSearchData('top-headlines')
        }
      />
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setOpen(true)}>
        <Text style={{textAlign: 'center', color: '#000000'}}>
          Select a date
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    flex: 6,
    paddingLeft: 20,
    height: 40,
    backgroundColor: 'rgba(245, 245, 255, 0.85)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  datePickerButton: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(245, 245, 255, 0.85)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: 40,
    marginLeft: 20,
  },
});
