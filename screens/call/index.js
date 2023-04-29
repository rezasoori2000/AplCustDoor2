import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Mailer from 'react-native-mail';
const handleEmail = () => {
  
  
  Mailer.mail({
    subject: '',
    recipients: ['manufacturing@aplnz.co.nz'],
    body:`
    ` ,
    isHTML: false,
  }, (error, event) => {
    if(error) {
      console.error('Error:', error);
    } else {
      
    }
  });
};
const handlePhone = () => {
  ;
  Linking.openURL(`tel: +6478492751`);
};

function Call(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          style={{width: '100%', height: '99%'}}
          source={require('../../assets/img/TOP.png')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Contact us</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textFactory}>APL MANUFACTURING</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.textAddress}>13 Pukete Rd, Te Rapa</Text>
            <Text style={styles.textAddress}>Hamilton 3241</Text>
            <Text style={styles.textAddress}>New Zealand</Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>

              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={handlePhone}>
              <Image
                style={styles.textAddress}
                source={require('../../assets/img/icon-phone.png')}
              />
              <Text style={styles.contactOrange}>Ph +64 7 849 2751</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={handleEmail}>
              <Image
                style={styles.textAddress}
                source={require('../../assets/img/icon-email.png')}
              />
              <Text style={styles.contactOrange}>
                manufacturing@aplnz.co.nz
              </Text>
              </TouchableOpacity>


            </View>
          </View>
          <View style={styles.socialContainer}>
            <View style={styles.socialBtnContainer}>
              <TouchableOpacity
                style={{width: '100%', height: '100%'}}
                onPress={() => {
                  Linking.openURL('https://facebook.com/aplnz');
                }}>
                <Image
                  style={styles.social}
                  source={require('../../assets/img/SOCIAL-FACEBOOK2.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.socialBtnContainer}>
              <TouchableOpacity
                style={{width: '100%', height: '100%'}}
                onPress={() => {
                  Linking.openURL('https://www.instagram.com/aplnz_/?hl=en');
                }}>
                <Image
                  style={styles.social}
                  source={require('../../assets/img/SOCIAL-INSTAGRAM.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.socialBtnContainer}>
              <TouchableOpacity
                style={{width: '100%', height: '100%'}}
                onPress={() => {
                  Linking.openURL('https://nz.linkedin.com/company/architectural-profiles-ltd.');
                }}>
                <Image
                  style={styles.social}
                  source={require('../../assets/img/SOCIAL-LINKEDIN.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnCloseContainer}>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => props.navigation.navigate('main')}>
          <Text style={styles.btnCloseText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#151a42',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderWidth: 5,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 6,
    borderColor: '#ddd',
    margin: 20,
    marginTop: 5,
    alignItems: 'center',
    padding: 0,
    borderRadius: 10,
    borderWidth: 5,
    flexDirection: 'column',
  },
  textContainer: {
    flex: 15,
    justifyContent: 'flex-start',
    backgroundColor: '#151a42',
    height: 30,
  },
  headerText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  textFactory: {color: '#000', fontWeight: '600', fontSize: 20, marginTop: 30},
  addressContainer: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  textAddress: {color: '#000', fontWeight: '400', fontSize: 14, marginTop: 10},
  contactOrange: {
    color: '#f28774',
    marginTop: 18,
    fontSize: 16,
    marginLeft: 10,
  },
  social: {
    height: '100%',

    width: '100%',
  },
  socialBtnContainer: {
    width: '30%',
    height: 60,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  btnCloseContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btnClose: {
    width: '70%',
    height: 40,
    backgroundColor: '#151a42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnCloseText: {color: 'white'},
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Call;
