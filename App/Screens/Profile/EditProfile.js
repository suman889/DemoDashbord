import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constant/Colors'
import Icon from 'react-native-vector-icons/AntDesign';
import ScreenHeader from '../../Component/Global/SereenHeader';
import { mdscale, vrscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';

const EditProfile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            {/* <ScreenHeader
                name='Edit Profile'
            /> */}

            {/**back */}
            <View style={styles.backIcon}>
                <Pressable onPress={() => Navigation.navigate('ProfileMain')}>
                    <Icon name="arrowleft" size={19} color={"#000000"} style={{}} />
                </Pressable>

                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    marginLeft: 20
                }}>Edid Profile</Text>

            </View>

            {/**1 */}
            <View style={{
                width: '90%', alignSelf: 'center',
                paddingLeft: 10, marginTop: 50,
            }}>
                <View style={{

                    borderBottomWidth: 1, borderColor: "lightgray"
                }}>

                    <Text style={{ color: "#000000", fontSize: 14 }}> Name</Text>

                    <Text style={{
                        color: "#000000",
                        fontSize: 14, marginTop: 16,
                        marginBottom: 10
                    }}> Suman Biswas</Text>

                </View>

                {/**2 */}
                <View style={{

                    marginTop: 20,
                    borderBottomWidth: 1, borderColor: "lightgray"
                }}>

                    <Text style={{ color: "#000000", fontSize: 14 }}> Mobile Number</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            color: "#000000",
                            fontSize: 14, marginTop: 16,
                            marginBottom: 10, flex: 1
                        }}> 1234567890  </Text>


                        <Text style={{
                            color: "#1e73be",
                            fontSize: 14, marginTop: 16,
                            marginBottom: 10, marginRight: 10
                        }}> Edit  </Text>
                    </View>


                </View>


                {/**3 */}

                <View style={{

                    marginTop: 20,
                    borderBottomWidth: 1, borderColor: "lightgray"
                }}>

                    <Text style={{ color: "#000000", fontSize: 14 }}> Email</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            color: "#000000",
                            fontSize: 14, marginTop: 16,
                            marginBottom: 10, flex: 1
                        }}> abcd123@yahoo.in  </Text>


                        <Text style={{
                            color: "#1e73be",
                            fontSize: 14, marginTop: 16,
                            marginBottom: 10, marginRight: 10
                        }}> Edit  </Text>
                    </View>


                </View>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    backIcon: {
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