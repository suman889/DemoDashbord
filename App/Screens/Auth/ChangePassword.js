
import {
    StyleSheet, Text, View, Dimensions, Image,
    TextInput, Pressable
} from 'react-native'
import React from 'react'
import { COLORS } from '../../Constant/Colors'
import { mdscale, vrscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';
const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/AntDesign';


const ChangePassword = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#62cdff" }}>


            {/**back */}
            <View style={styles.backIcon}>
                <Pressable onPress={() => Navigation.navigate('Home')}>
                    <Icon name="arrowleft" size={19} color={"#ffffff"} style={{}} />
                </Pressable>

            </View>






            <View style={styles.form}>

                <Image source={require('../../Assets/Images/MuktiLogo_Small.png')}

                    style={{ marginop: mdscale(20) }} />

                <Text
                    style={{
                        color: "#ffffff", fontSize: mdscale(20),
                        fontWeight: "bold", marginTop: mdscale(100)
                    }}>Change your Password</Text>


                <View style={styles.email_view}>
                    {/* <Icon name="mail" type="Ionicons" style={styles.input_icon} />*/}
                    <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#c1c1c1"
                        style={{
                            //fontWeight: 'bold',
                            color: "#000000",
                            width: mdscale(200),
                        }}
                    />
                </View>

                <Pressable onPress={() => Navigation.navigate('')}
                    style={styles.button}>
                    <Text style={styles.buttonText}> Submit </Text>

                </Pressable>

            </View>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({

    backIcon: {
        position: 'absolute',
        width: mdscale(30),
        height: vrscale(30),
        backgroundColor: "#1e73be",
        borderRadius: 5,
        justifyContent: 'center', alignItems: 'center',
        left: mdscale(20), top: vrscale(20)
    },

    form: {
        width: '90%',
        //height: 250,
        //backgroundColor: COLORS.thimColor,
        alignSelf: "center",
        marginTop: mdscale(100),
        alignItems: 'center',
        borderRadius: 5
    },

    email_view: {
        backgroundColor: 'white',
        width: mdscale(300),
        marginHorizontal: mdscale(25),
        marginTop: mdscale(17),
        borderRadius: 10,
        height: vrscale(50),
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: mdscale(15),
    },

    button: {
        backgroundColor: "#ffffff",
        width: width / 2 * 1.7,
        height: height / 15,
        borderRadius: 8,

        justifyContent: 'center',

        alignItems: 'center',
        fontSize: 25,

        marginTop: vrscale(20)

    },

    buttonText: {
        fontSize: mdscale(16),
        //fontWeight: '10',
        color: '#000000',
        //textAlign: 'center',
        //alignItems: 'center',
        //fontFamily: 'Poppins-Bold'
    },
})