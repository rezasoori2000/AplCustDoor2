import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
   
} from 'react-native';
import FastImage from 'react-native-fast-image'; 
NfcManager.start();

function Scan(props) {
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
    readNfc();
  });


  async function readNfc() {
    try {
      if (val === 0) {
        setVal(1);
        
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await NfcManager.getTag();
        //console.warn("TAGID: "+tag.id);
        // console.warn('TAG: ' + JSON.stringify(tag));
        setText(tag.id);
        //"04:60:e6:92:b4:57:80"

        props.navigation.navigate('brief', {nfc: tag.id});
      }
    } catch (ex) {
       
      //console.warn('Oops!', ex);
    //  setText(ex.message);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }
  const [text, setText] = useState('no');
  const [val, setVal] = useState(0);


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Image
        style={styles.main}
        source={require('../../assets/img/Scan-blank.png')}
      />
      <FastImage
        source={require('../../assets/img/sonar.gif')} // Update with your actual path
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{zIndex: 2, flex: 1, marginTop: -150, flexDirection: 'row'}}>
        {/* todo: remove it 
      <Text >Error: {text}</Text>*/}
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            Linking.openURL('https://aplnz.co.nz');
          }}
          title="call"></TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMiddle}
          onPress={() => readNfc}
          title="call">
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate('call')}
          title="call"></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position:'absolute',
  },
  gif: {
    width: 180, 
    height: 180,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },

  buttons: {
    flex: 1,
    height: 130,
  },
  buttonMiddle: {
    flex: 1.5,
    height: 160,
    marginTop: -30,
  },
});
export default Scan;
