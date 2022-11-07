import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const SmallSizePicker = () => {
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

            <Picker.Item label="50" value="All"
                style={{ fontFamily: 'Poppins-Regular', }} />
            <Picker.Item label="50" value="jan" />
            <Picker.Item label="10" value="feb" />
            <Picker.Item label="40" value="js" />
            <Picker.Item label="All" value="js" />

        </Picker>
    )
}

export default SmallSizePicker