import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Constant/Colors'
import Header from '../../Component/Global/Header';
import ScreenHeader from '../../Component/Global/SereenHeader';
import { Picker } from '@react-native-picker/picker';
import { vrscale, mdscale } from '../../PixelRatio';

const AddWithdrawl = () => {

    const DropwownMenu = () => {
        const [selectedLanguage, setSelectedLanguage] = useState();
        return (

            <Picker
                style={{
                    width: '100%',
                    color: "#000000",
                }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>

                <Picker.Item label="All" value="All"
                    style={{ fontFamily: 'Poppins-Regular', }} />
                <Picker.Item label="Kolkata" value="jan" />
                <Picker.Item label="Mumbai" value="feb" />
                <Picker.Item label="Malda" value="js" />
                <Picker.Item label="Kalyani" value="js" />

            </Picker>

        );

    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            <ScreenHeader />


            <ScrollView>
                <Text style={{
                    color: '#000000',
                    fontSize: 16,
                    marginTop: 10,
                    marginLeft: 10
                }}> Add Group Withdrawl  </Text>

                <View style={styles.card}>

                    {/**Picker */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Branch Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>


                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Group Code</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Group Member</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>


                    {/**  Transuction Ammount */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}> Transuction Amount</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Transuction Amount"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/** Date of Transuction */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}>Date Transuction </Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder=" 16-02-2023"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**  Transuction Remurk*/}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}>Group Transuction Remark</Text>
                    <View style={styles.inputBoxP}>
                        <TextInput
                            placeholder=" Group Transuction Reaurk"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**button */}

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginTop: 10, marginBottom: 20,
                        marginLeft: '44%',
                        flex: 1

                    }}>

                        <Pressable

                            style={{

                                backgroundColor: COLORS.buttonViewColor,

                                width: 80,
                                height: 40, borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}> Submit</Text>
                        </Pressable>

                        <Pressable

                            style={{

                                backgroundColor: "#c82333",

                                marginLeft: 10,
                                width: 80,
                                height: 40, borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Cancel</Text>
                        </Pressable>
                    </View>

                </View>


            </ScrollView>
        </View>
    )
}

export default AddWithdrawl

const styles = StyleSheet.create({
    card: {
        width: '95%',
        backgroundColor: COLORS.thimColor,
        borderRadius: 8, marginTop: vrscale(20),
        elevation: 5,
        alignSelf: 'center',
        paddingHorizontal: mdscale(15),
        marginBottom: 10
    },

    picker: {
        height: vrscale(30), width: mdscale(305), backgroundColor: '#FFFFFF',
        justifyContent: 'center', borderRadius: 3, borderColor: COLORS.grayColor,
        borderWidth: 0.5,
        marginTop: 10,
    },
    inputBox: {
        backgroundColor: '#ffffff',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },

    inputBoxP: {
        backgroundColor: '#ffffff',

        height: vrscale(55), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },
})