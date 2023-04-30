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
    <View style={{flex: 1}}>
      <Image
        style={styles.main}
        source={require('../../assets/img/Scan.png')}
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
    height: '99%',
    zIndex: 1,
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
