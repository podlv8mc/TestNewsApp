import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';

import moment from 'moment';

const Modall = ({modalData, modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView>
        <View style={styles.modalView}>
          <View style={styles.imgAndBackButton}>
            <Image source={{uri: modalData.urlToImage}} style={styles.img} />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{position: 'absolute'}}>
              <View style={styles.backButton}>
                <Image source={require('../images/Vector.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <View style={styles.infoBlok}>
              <Text style={styles.date}>
                {moment(modalData.publishedAt).format(
                  'MMMM Do YYYY, h:mm:ss a',
                )}
              </Text>
              <Text style={styles.title}>{modalData.title}</Text>
              <Text style={styles.author}>{modalData.author}</Text>
            </View>
          </View>
          <View style={styles.dataBlok}>
            <Text style={styles.description}>{modalData.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Modall;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    alignContent: 'center',
    height: 800,
    borderRadius: 20,
  },
  imgAndBackButton: {
    flex: 1.7,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  backButton: {
    width: 30.5,
    height: 31,

    backgroundColor: 'rgba(245, 245, 245, 0.5)',

    margin: 20,
    borderRadius: 10,
    paddingBottom: 8,
    paddingLeft: 11,
    paddingTop: 8,
    paddingRight: 11,

    gap: 10,
  },
  info: {
    flex: 0.65,
    backgroundColor: 'rgba(245, 245, 255, 0.85)',
    zIndex: 1,
    marginTop: -150,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  infoBlok: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },
  dataBlok: {
    flex: 2.3,
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -75,
  },
  date: {
    flex: 0.5,
    fontFamily: 'Times New Roman',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20.8,
    color: 'black',
  },
  title: {
    flex: 1.6,
    fontFamily: 'Times New Roman',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    color: 'black',
  },
  author: {
    fontFamily: 'Times New Roman',
    fontWeight: '800',
    fontSize: 10,
    lineHeight: 13.6,
    color: 'black',
  },
  description: {
    fontFamily: 'Times New Roman',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    color: 'black',
  },
});
