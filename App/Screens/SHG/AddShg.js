import {
    StyleSheet, Text, View,
    ScrollView, TextInput, Pressable
} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Constant/Colors'

import { Picker } from '@react-native-picker/picker';
import Header from '../../Component/Global/Header';
import SchreenHeader from '../../Component/Global/SereenHeader';
import { mdscale, vrscale } from '../../PixelRatio'
const AddShg = () => {

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
            <SchreenHeader />

            <ScrollView>
                <Text style={{
                    color: '#000000',
                    fontSize: 16,
                    marginTop: 10,
                    marginLeft: 10
                }}> Add SHG </Text>
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

                    {/**Old Group Code */}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Old Group Code</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Old Group Code"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Date Opening and close */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Date of Opening</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="15-06-2022"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Date of Closing</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Closing Date"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**President Name */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}> President Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Secretary  Name */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}> Secretary Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Treasurer Name Name */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}> Treasurer Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Friend Name Name */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Friend Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Monthly Tagget */}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Monthly Target Savings Amount</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="0"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**Total Savings Balance */}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Total Savings Balance</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Total Savings Balance"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**Total Loan Balance */}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Total Loan Balance</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Total Loan Balance"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**Group Members*/}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Group Members</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            //placeholder="Closing Date"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

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

export default AddShg

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
        backgroundColor: 'white',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    }
})