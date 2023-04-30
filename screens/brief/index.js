import React, { useState, useEffect, useMemo } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function Brief(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { nfc } = props.route.params;

  const addColonToHex = hexString => {
    return hexString.match(/.{1,2}/g).join(':');
  };


  const fetchData = async () => {
    try {
      const url = 'http://alpacnz.co.nz/apl/product_details_by_nfc2.php?nfc=' +addColonToHex(nfc);
      const response = await fetch(url);
      const json = await response.json();
      setData(json.product[0]);
    } catch (ex) {
      setError(ex);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const memoizedData = useMemo(() => {
  }, [nfc]);

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {error ? (
        <Text>{error.message}</Text>
      ) :(
        <>
      <View style={styles.header}>
        <Image
          style={{ width: '100%', height: '99%' }}
          source={require('../../assets/img/TOP.png')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>DOOR TAG DETECTED</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.textFactory}>Manufacturer</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 10 }}>{data.brand}</Text>
            </View>
            <Text style={styles.textFactory}>Door Information</Text>
            <View
              style={{
                flexDirection: 'column',
                marginHorizontal: 10,
                marginVertical: 20,
              }}
            >
              <Text style={styles.text}>Design: {data.item_image_design}</Text>
              <Text style={styles.text}>Height: {data.height}</Text>
              <Text style={styles.text}>Width: {data.width}</Text>
              <Text style={styles.text}>
                Interior Colour: {data.inside_color_finish}
              </Text>
              <Text style={styles.text}>
                Exterior Colour: {data.outside_color_finish}
              </Text>
              <Text style={styles.text}>
                Reference: {data.reference_number}
              </Text>
            </View>
          </View>
          <View style={styles.btnImageContainer}>
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() =>
                props.navigation.navigate('image', {
                  left: data.item_image_left_swing,
                  right: data.item_image_right_swing,
                  color_code: data.color_code,
                })
              }>
              <Text style={styles.btnCloseText}>View Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => props.navigation.navigate('detail', {data: data})}>
          <Text style={styles.btnCloseText}>View Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => props.navigation.navigate('main')}>
          <Text style={styles.btnCloseText}>Close</Text>
        </TouchableOpacity>
        <View></View>
      </View>
      </>
)}</View>
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
  scrollView: {
    flex: 3,
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
  btnCloseContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  btnCloseText: {color: 'white'},

  text: {marginVertical: 10},
  btnClose: {
    width: '40%',
    height: 40,
    backgroundColor: '#151a42',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  btnImageContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Brief;
