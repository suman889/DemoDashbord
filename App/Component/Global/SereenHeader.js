import React from 'react';

import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { mdscale, } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';


import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


const ScreenHeader = (props) => {
    return (
        <View style={styles.root_view}>

            <Pressable onPress={() => Navigation.navigate('Home')}>
                <Icon name="arrowleft" size={19} color={"#000000"} style={{}} />
            </Pressable>

            <Text style={{
                color: '#000000',
                fontSize: 15,
                marginLeft: 20,
                flex: 1
            }}>{props.name}</Text>

            <View style={{ marginRight: 20, }}>
                <Image source={require('../../Assets/Images/MuktiLogo.png')}
                    style={{
                        height: mdscale(45),
                        width: mdscale(45),


                    }}
                />
            </View>
        </View>
    )
}
export default ScreenHeader;

const styles = StyleSheet.create({

    root_view: {
        flexDirection: 'row',
        backgroundColor: "#62cdff",
        width: '100%',
        height: 60,
        paddingLeft: 20,
        //marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
})