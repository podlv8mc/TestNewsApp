import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import moment from 'moment';

/*
const publishedAt = moment(modalData.publishedAt).format(
  'MMMM Do YYYY, h:mm:ss a',
);
*/
const Modall = ({modalData, modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.title}>{modalData.title}</Text>
            <Image source={{uri: modalData.urlToImage}} style={styles.img} />
            <Text style={styles.defaultTxt}>{modalData.description}</Text>
          </View>
          <View style={styles.infoBlok}>
            <Text style={styles.defaultTxt}>{modalData.author}</Text>
            <Text style={styles.defaultTxt}>
              {moment(modalData.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Back to News</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modall;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',

    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  img: {
    margin: 20,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  infoBlok: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonClose: {
    alignSelf: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  defaultTxt: {
    color: 'black',
  },
});
