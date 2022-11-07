import {
    StyleSheet, Text, View, ScrollView,
    Pressable, TextInput
} from 'react-native';
//import { ScrollView } from 'react-native-virtualized-view';
import React from 'react';
import { COLORS } from '../../Constant/Colors'
import Header from '../../Component/Global/Header';
import SchreenHeader from '../../Component/Global/SereenHeader';

import Picker from '../../Component/Global/DropwownMenu';
import SPicker from '../../Component/Global/Picker/SmallSizePicker';
import { vrscale, mdscale } from '../../PixelRatio';
import DataTable from '../../Component/Global/DataTable/DataTable';
import Navigation from '../../Service/Navigation';


//import ScreenHeader from '../../Component/Global/SereenHeader'

const ViewShg = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <SchreenHeader />

            <ScrollView nestedScrollEnabled={true}>


                <View style={{
                    //backgroundColor: 'green',
                    flexDirection: 'row',
                    width: '95%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: mdscale(20)
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 16,
                    }}> SHG </Text>

                    <Pressable onPress={() => Navigation.navigate('AddShg')}

                        style={{
                            flex: 1,
                            backgroundColor: COLORS.buttonViewColor,
                            marginLeft: '62%',

                            width: 80,
                            height: 40, borderRadius: 10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ color: '#ffffff', fontSize: 15 }}> Add SHG</Text>
                    </Pressable>

                </View>




                <View style={styles.card}>


                    {/**FilterBox */}

                    <View style={{
                        width: '100%',
                        height: 50,
                        //backgroundColor: 'green',
                        paddingHorizontal: 10
                    }}>


                        <Text style={{
                            color: '#000000', fontSize: 16,
                            marginVertical: 7, marginTop: vrscale(10)
                        }}> Filter By Branch</Text>

                        <View style={styles.picker}>
                            <Picker />
                        </View>
                    </View>





                    {/**** */}
                    <View style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        alignItems: 'center',
                        marginTop: mdscale(30),
                        flex: 1
                    }}>
                        <Pressable style={styles.buttonView}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Copy</Text>
                        </Pressable>

                        <Pressable style={styles.buttonView}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>CSV</Text>
                        </Pressable>

                        <Pressable style={styles.buttonView}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Print</Text>
                        </Pressable>
                    </View>

                    {/*** Small picker*/}

                    <View style={{
                        flexDirection: 'row',
                        //backgroundColor: 'green',
                        alignItems: 'center',
                        marginTop: vrscale(10)
                    }}>
                        <Text style={{ color: '#000000', fontSize: 15, marginRight: 5 }}> Show</Text>

                        <View style={styles.smallPicker}>
                            <SPicker />
                        </View>

                        <Text style={{ color: '#000000', fontSize: 15, marginLeft: 5 }}> entries</Text>

                    </View>

                    {/**search Box */}
                    <View style={{
                        flexDirection: 'row',
                        //backgroundColor: 'green',
                        alignItems: 'center',
                        marginTop: vrscale(10)
                    }}>
                        <Text style={{ color: '#000000', fontSize: 15, marginRight: 5 }}> Search</Text>

                        <View style={styles.search}>
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor="#c1c1c1"
                                style={{
                                    //fontWeight: 'bold',
                                    color: "#000000",
                                    width: mdscale(200),
                                }}
                            />

                        </View>
                    </View>

                    <View style={{
                        width: '100%', borderBottomColor: "#000000", borderBottomWidth: 1,
                        marginTop: 20
                    }}></View>
                    {/***Data table */}


                    <View style={{
                        //backgroundColor: 'green',
                        marginTop: 20,

                        marginBottom: 20
                    }}>
                        <DataTable />
                    </View>


                </View>


            </ScrollView>
        </View>
    )
}

export default ViewShg

const styles = StyleSheet.create({
    card: {
        width: '95%',
        backgroundColor: COLORS.thimColor,
        borderRadius: 8, marginTop: vrscale(20),
        elevation: 5,
        alignSelf: 'center',
        paddingHorizontal: mdscale(10),
        marginBottom: 10
    },

    picker: {
        height: vrscale(30), width: mdscale(280), backgroundColor: '#FFFFFF',
        justifyContent: 'center', borderRadius: 3, borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },

    buttonView: {
        backgroundColor: COLORS.buttonViewColor,
        borderRadius: 15, height: mdscale(30), width: mdscale(70),
        justifyContent: 'center', alignItems: 'center',
        marginLeft: mdscale(10)
    },

    smallPicker: {
        height: vrscale(30), width: mdscale(100), backgroundColor: '#FFFFFF',
        justifyContent: 'center', borderRadius: 3, borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },
    search: {
        backgroundColor: 'white',
        width: mdscale(230),

        borderRadius: 4,
        height: vrscale(35),

        alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },
    tableBox: {
        width: '100%',
        backgroundColor: 'green'
    }
})