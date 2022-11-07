import { Icon } from 'native-base';
import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { mdscale, } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';
import Feather from 'react-native-vector-icons/Feather';

const Header = props => {
  return (
    <View style={styles.root_view}>

      <Feather onPress={() => Navigation.openDrawer()}
        name="menu" size={26} color={'#000000'} />

      <View style={styles.txt_view}>
        <Text style={styles.text}>{props.pageName}</Text>
      </View>


      <View style={{ marginRight: mdscale(1), }}>
        <Image source={require('../../Assets/Images/MuktiLogo.png')}
          style={{
            height: mdscale(40),
            width: mdscale(40),


          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root_view: {
    height: mdscale(58),
    //backgroundColor: "#ffffff",
    backgroundColor: "#62cdff",
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10
  },
  txt_view: {
    width: '75%',
    //backgroundColor: "green"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: mdscale(14),
    fontWeight: 'bold',
    color: "#000000",
    paddingStart: mdscale(15),
    // marginHorizontal: 50,
  },

});
