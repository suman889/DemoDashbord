import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constant/Colors'

const ButtonView = (props) => {
    return (
        <View style={{
            backgroundColor: COLORS.buttonViewColor,
            alignItems: 'Center',
            width: 70,
            height: 60,
            borderRadius: 10
        }}>

            <Text style={{ color: '#ffffff', fontSize: 14 }}>{props.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({})

export default ButtonView;