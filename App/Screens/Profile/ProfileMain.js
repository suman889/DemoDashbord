import {
    StyleSheet, Text, View, Image, Dimensions,
    ImageBackground, Pressable
} from 'react-native'
import React from 'react';
import { COLORS } from '../../Constant/Colors'
import Header from '../../Component/Global/Header';
import { mdscale, vrscale } from '../../PixelRatio';


{/**Icon */ }
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Badge from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Navigation from '../../Service/Navigation';

import ScreenHeader from '../../Component/Global/SereenHeader';

const ProfileMain = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>




            {/**Header */}

            <ScreenHeader
                name=' Profile' />


            {/*** Main Body  */}

            <Pressable onPress={() => Navigation.navigate('EditProfile')}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 30, paddingLeft: 20,
                    width: '100%',
                    borderBottomWidth: 1, borderColor: "lightgray"
                }}>
                    <Image source={require('../../Assets/Images/Indianman.jpg')}
                        style={{
                            width: 60,
                            height: 60, borderRadius: 100,
                            marginBottom: 26

                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text style={{
                            color: "#000000", fontSize: 23,
                            fontWeight: "600", marginLeft: 20
                        }}>Suman Biswas</Text>

                        <Text style={{
                            color: "#000000", fontSize: 13,
                            fontWeight: "400", marginLeft: 20
                        }}>Edit Profile</Text>


                    </View>

                    <Icon name="right" size={19} color={"#000000"}
                        style={{ marginRight: 20, marginTop: 20 }} />

                </View>
            </Pressable>


            {/**** List Of Detail */}

            {/**number 1 */}

            <View style={styles.detailsContainer}>

                {/**icon Box */}
                <View style={styles.iconBox}>

                    <View style={styles.iconView}>
                        <Icon name="wallet" size={19} color={"#797979"} style={{}} />
                    </View>

                </View>


                {/** data view */}

                <View style={{ flex: 1 }}>


                    <Text style={{
                        color: "#000000", fontSize: 13,
                        fontWeight: "700", marginLeft: 20
                    }}>₹ 31,0000</Text>
                    <Text style={{
                        color: "#8c8c8c", fontSize: 16,
                        fontWeight: "400", marginLeft: 20
                    }}>Cash Book Balance</Text>

                </View>

            </View>


            {/**number 2 */}

            <View style={styles.detailsContainer}>

                {/**icon Box */}
                <View style={styles.iconBox}>

                    <View style={styles.iconView}>
                        <Ionicons name="money" size={19} color={"#797979"} style={{}} />
                    </View>

                </View>


                {/** data view */}

                <View style={{ flex: 1 }}>


                    <Text style={{
                        color: "#000000", fontSize: 13,
                        fontWeight: "700", marginLeft: 20
                    }}>₹ 40,0000</Text>
                    <Text style={{
                        color: "#8c8c8c", fontSize: 16,
                        fontWeight: "400", marginLeft: 20
                    }}>Bank Passbook Balance</Text>

                </View>

            </View>

            {/**number 3 */}

            <View style={styles.detailsContainer}>

                {/**icon Box */}
                <View style={styles.iconBox}>

                    <View style={styles.iconView}>
                        <Badge name="email-outline" size={19} color={"#797979"} style={{}} />
                    </View>

                </View>


                {/** data view */}

                <View style={{ flex: 1 }}>


                    <Text style={{
                        color: "#000000", fontSize: 13,
                        fontWeight: "700", marginLeft: 20
                    }}> abcvd123@yahoo.in</Text>
                    <Text style={{
                        color: "#8c8c8c", fontSize: 16,
                        fontWeight: "400", marginLeft: 20
                    }}> Email</Text>

                </View>

            </View>


            {/**number 4 */}

            <View style={styles.detailsContainer}>

                {/**icon Box */}
                <View style={styles.iconBox}>

                    <View style={styles.iconView}>
                        <Icon name="setting" size={19} color={"#797979"} style={{}} />
                    </View>

                </View>


                {/** data view */}

                <View style={{ flex: 1 }}>


                    <Text style={{
                        color: "#000000", fontSize: 13,
                        fontWeight: "700", marginLeft: 20,

                    }}> Setings</Text>
                    <Text style={{
                        color: "#8c8c8c", fontSize: 16,
                        fontWeight: "400", marginLeft: 20
                    }}>Your App Settings</Text>

                </View>

            </View>





            {/* 
            <View style={styles.accountCard}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingLeft: 20, marginBottom: 20
                }}>
                    <Ionicons name="money" size={16} />
                    <Text style={{
                        color: "#000000",
                        paddingLeft: 10
                    }}> Cash Book Balance    ₹31300.0</Text>
                </View>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingLeft: 20, marginBottom: 20
                }}>
                    <Ionicons name="money" size={16} />
                    <Text style={{
                        color: "#000000",
                        paddingLeft: 10
                    }}> Bank Passbook Balance    ₹4000.0</Text>
                </View>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingLeft: 20, marginBottom: 20
                }}>
                    <Badge name="form-textbox-password" size={16} />
                    <Text style={{
                        color: "#000000",
                        paddingLeft: 10
                    }}> Change Password</Text>
                </View>

                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingLeft: 20, marginBottom: 20
                }}>
                    <Icon name="setting" size={16} />
                    <Text style={{
                        color: "#000000",
                        paddingLeft: 10
                    }}> Settings</Text>
                </View>
            </View> */}

        </View>
    )
}

export default ProfileMain

const styles = StyleSheet.create({
    header: {

    },
    backIcon: {
        position: 'absolute',
        width: mdscale(30),
        height: vrscale(30),
        // backgroundColor: "#1e73be",
        borderRadius: 5,
        justifyContent: 'center', alignItems: 'center',
        left: mdscale(14), top: vrscale(10),
        flex: 1
    },

    detailsContainer: {
        flexDirection: 'row',

        width: '100%', height: 60,
        marginTop: mdscale(12),
        borderBottomWidth: 1, borderColor: "lightgray"
    },

    iconBox: {
        //marginLeft: 20,
        height: 60, width: 110,
        //backgroundColor: "red"
        backgroundColor: COLORS.thimColor
    },

    iconView: {

        width: mdscale(50),
        height: mdscale(50),
        backgroundColor: "#dfe0e4",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20

    },

    accountCard: {

        // backgroundColor: "#ffffff",
        elevation: 4, marginTop: 100,
        width: '95%', alignSelf: 'center',
        //justifyContent: 'space-evenly'
        paddingVertical: 10, marginBottom: 10



    }
})