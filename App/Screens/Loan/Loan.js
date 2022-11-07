import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Radio, Right, ListItem } from 'native-base';
import { RadioButton } from 'react-native-paper';
import { COLORS } from '../../Constant/Colors'
import Header from '../../Component/Global/Header'
import { Picker } from '@react-native-picker/picker';
import { vrscale, mdscale } from '../../PixelRatio';
import ScreenHeader from '../../Component/Global/SereenHeader';

const Loan = () => {

    const [checked, setChecked] = React.useState('first');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [dropDown, setDropDown] = useState([
        { label: "All", value: "All" },
        { label: "Kolkata", value: "kol" },
        { label: "Mumbai", value: "Mum" },
        { label: "Malda", value: "Mal" },
        { label: "Kalyani", value: "Kal" },
        { label: "All", value: "All" }
    ])



    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            <ScreenHeader />
            {/* <Radio selected={true} /> */}
            <ScrollView>
                <Text style={{
                    color: '#000000',
                    fontSize: 16,
                    marginTop: 10,
                    marginLeft: 10
                }}> Loan Repayment  </Text>

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
                            {/* <DropwownMenu /> */}

                            <Picker
                                style={{
                                    width: '100%',
                                    color: "#000000",
                                }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                {dropDown.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.value}
                                            style={{ fontFamily: 'Poppins-Regular', }} />
                                    )
                                })}


                            </Picker>

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
                            <Picker
                                style={{
                                    width: '100%',
                                    color: "#000000",
                                }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                {dropDown.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.value}
                                            style={{ fontFamily: 'Poppins-Regular', }} />
                                    )
                                })}


                            </Picker>
                        </View>
                    </View>

                    {/**radio Button  */}
                    <View>

                        <View style={{
                            marginLeft: 10, marginTop: 10,
                            flexDirection: 'row', marginRight: mdscale(40),
                            alignItems: 'center',
                        }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            {/* <Radio selected={true} /> */}
                            <Text style={{
                                color: "#3C3C3C",
                                fontSize: mdscale(14), paddingLeft: 4, fontFamily: "Poppins-Medium"
                            }}>Loan repayment amount</Text>

                        </View>

                        <View style={{
                            marginLeft: 10, marginTop: 10,
                            flexDirection: 'row', marginRight: mdscale(40),
                            alignItems: 'center'
                        }}>

                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />

                            {/* <Radio selected={false} color="#9C9C9C" /> */}
                            <Text style={{
                                color: "#3C3C3C",
                                fontSize: mdscale(14), paddingLeft: 4, fontFamily: "Poppins-Medium"
                            }}>Due repayment amount</Text>

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
                            <Picker
                                style={{
                                    width: '100%',
                                    color: "#000000",
                                }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                {dropDown.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.value}
                                            style={{ fontFamily: 'Poppins-Regular', }} />
                                    )
                                })}


                            </Picker>
                        </View>
                    </View>



                    {/**Lone account */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}> Current Loan Account</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Current Loan Account"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Lone account */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}> Reamaning Loan Account</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Reamining Loan Account"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**EMI */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}> Expected monthly EMI</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Expected monthly EMI"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Old Group Code */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14
                    }}>Enter Amount</Text>
                    <View style={styles.inputBoxT}>
                        <TextInput
                            placeholder="Enter Amount"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**Adjustment with group saving */}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,

                    }}> Adjustment with group saving</Text>
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

export default Loan

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
        backgroundColor: '#EDEDED',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },

    inputBoxT: {
        backgroundColor: 'white',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    }

})