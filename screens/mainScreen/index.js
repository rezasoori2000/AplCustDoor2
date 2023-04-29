import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Colors from '../../constant/Colors';

const MainScreen = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.main}
        source={require('../../assets/img/MainPage.png')}
      />
      <View style={{zIndex: 2, flex: 1, marginTop: -150, flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            Linking.openURL('https://aplnz.co.nz');
          }}
          title="call"></TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMiddle}
          onPress={() => props.navigation.navigate('scan')}
          title="call"></TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate('call')}
          title="call"></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '99%',
    zIndex: 1,
  },

  buttons: {
    flex: 1,
    height: 130,
  },
  buttonMiddle: {
    flex: 1.3,
    height: 130,
  },
});

export default MainScreen;
