import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import Mailer from 'react-native-mail';

function Detail(props) {
  const {data} = props.route.params;
  useEffect(() => {

  }, []);
  const handleEmail = () => {
  
  
    Mailer.mail({
      subject: (data.reference_number!=null?`Reference Number: ${data.reference_number}`:`Order Number: ${data.order_number}`),
      recipients: ['marketing@aplnz.co.nz'],
      body:`Customer Support Architectural Profile Ltd, \n Door ${(data.reference_number!=null?'Reference Number: '+data.reference_number:'Order Number: '+data.order_number)}\n
      Design: ${data.item_image_design}\n
      Height: ${data.height}\n
      Weight: ${data.width}\n
      Interior Colour: ${data.inside_color_finish}\n
      Exterior Colour: ${data.outside_color_finish}\n
      Year Manufactured: ${data.year_manufactured.substring(0,4)}\n
      Part Number: ${data.part_number}\n
      Swing (Viewed From Outside): ${data.viewed_from_outside}\n
      Open Direction: ${data.open_direction}\n
      Backset: ${data.backset}\n
      Lockset: ${data.lockset}\n
      Handle Position: ${data.handle_position}\n
      Frame: ${data.frame}\n
      Accessories: ${data.accessories}\n
      Glass Type: ${data.glass_type}\n
      Glass Size: ${data.glass_size}\n
      Order Number: ${data.order_number}\n
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
    const phoneNumber = data.manufacturer_phone;
    Linking.openURL(`tel: ${phoneNumber}`);
  };
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
          <Text style={styles.headerText}>DOOR DETAIL</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.textFactory}>Manufacturer</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 10}}>{data.manufacturer}</Text>
            </View>
          </View>
          <View style={styles.addressContainer}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={handlePhone}>
                <Image
                  style={styles.textAddress}
                  source={require('../../assets/img/icon-phone.png')}
                />
                <Text style={styles.contactOrange}>
                  Ph {data.manufacturer_phone}
                </Text>
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
                  {data.manufacturer_email}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'flex-start', flex: 4, marginTop: 10}}>
            <Text style={styles.textFactory}>Door Information</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Design</Text>
                <Text style={styles.label}>{data.item_image_design}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Height</Text>
                <Text style={styles.label}>{data.height}(mm)</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Width</Text>
                <Text style={styles.label}>{data.width}(mm)</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Interior Colour</Text>
                <Text style={styles.label}>{data.inside_color_finish}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Exterior Colour</Text>
                <Text style={styles.label}>{data.outside_color_finish}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Reference</Text>
                <Text style={styles.label}>{data.reference_number}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Year Manufactured</Text>
                <Text style={styles.label}>{data.year_manufactured}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Part Number</Text>
                <Text style={styles.label}>{data.part_number}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>
                  Swing (Viewed from Outside)
                </Text>
                <Text style={styles.label}>{data.viewed_from_outside}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Open Direction</Text>
                <Text style={styles.label}>{data.open_direction}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Basket</Text>
                <Text style={styles.label}>{data.backset}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Lockset</Text>
                <Text style={styles.label}>{data.lockset}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Handle Position</Text>
                <Text style={styles.label}>{data.handle_position}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Frame</Text>
                <Text style={styles.label}>{data.frame}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Accessories</Text>
                <Text style={styles.label}>{data.accessories}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Glass Type</Text>
                <Text style={styles.label}>{data.glass_type}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Glass Size (mm x mm)</Text>
                <Text style={styles.label}>{data.glass_size}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headerLabel}>Oerder Number</Text>
                <Text style={styles.label}>{data.order_number}</Text>
              </View>
            </ScrollView>
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
  headerLabel:{fontWeight: 'bold',color:'black'},
  label:{color:'black'},
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
    flex: 8,
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
    flex: 10,
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
  textFactory: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  addressContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  textAddress: {color: '#000', fontWeight: '400', fontSize: 12},
  contactOrange: {
    color: '#f28774',
    marginTop: 8,
    fontSize: 12,
    marginLeft: 10,
  },

  btnCloseContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClose: {
    width: '70%',
    height: 40,
    backgroundColor: '#151a42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnCloseText: {color: 'white'},
  scrollView: {
    flex: 3,
  },
  infoBox: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#ddd',
    elevation: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
  },
});
export default Detail;
