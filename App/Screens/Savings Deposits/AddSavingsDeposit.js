import {
    StyleSheet, Text, View,
    Pressable, TextInput, ScrollView
} from 'react-native'
import React from 'react';

import Header from '../../Component/Global/Header';
import SchreenHeader from '../../Component/Global/SereenHeader';
import { COLORS } from '../../Constant/Colors';
import { vrscale, mdscale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';
const AddSavingsDeposit = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            <SchreenHeader />


            <Text style={{
                color: '#000000',
                fontSize: 16,
                marginTop: 10,
                marginLeft: 10
            }}> Cash Deposit to Bank </Text>
            <View style={styles.card}>



                {/**Bank Account */}
                <Text style={{
                    color: '#000000',
                    marginTop: 10, fontSize: 14
                }}>Bank Account No.</Text>
                <View style={styles.inputBoxT}>
                    <TextInput
                        placeholder="1234567"
                        placeholderTextColor="#c1c1c1"
                        style={{
                            //fontWeight: 'bold',
                            color: "#000000",
                            width: mdscale(200),
                        }}
                    />

                </View>

                {/**Ammount */}
                <Text style={{
                    color: '#000000',
                    marginTop: 10, fontSize: 14
                }}>Ammount</Text>
                <View style={styles.inputBoxP}>
                    <TextInput
                        placeholder="31, 0000"
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
                    marginTop: 10, marginBottom: mdscale(30),
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
                        <Text style={{ color: '#ffffff', fontSize: 15 }}> Deposit</Text>
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
        </View>
    )
}

export default AddSavingsDeposit

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
    inputBoxP: {
        backgroundColor: '#ffffff',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5,
        marginBottom: mdscale(25)
    },

    inputBoxT: {
        backgroundColor: '#EDEDED',
        marginTop: 10,
        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },
})