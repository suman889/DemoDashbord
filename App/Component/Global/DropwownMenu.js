import { Picker } from '@react-native-picker/picker';
//import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { vrscale, mdscale } from '../../PixelRatio';

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

export default DropwownMenu

const styles = StyleSheet.create({})