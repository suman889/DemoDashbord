import {
    StyleSheet, Text, View, Image, Dimensions, FlatList
} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Constant/Colors'
import { mdscale } from '../../PixelRatio'
import Navigation from '../../Service/Navigation'

import ScreenHeader from '../../Component/Global/SereenHeader';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const Index = () => {

    const [data, setData] = useState([
        {
            id: 1,
            image: require('../../Assets/Images/groupw.png'),
            name: 'Groups'
        },
        {
            id: 2,
            image: require('../../Assets/Images/savingsw.jpg'),
            name: ' Monthly Savings \n        Collected'
        },
        {
            id: 3,
            image: require('../../Assets/Images/emi.jpg'),
            name: 'Monthly EMI \n   Collected'
        },
        {
            id: 4,
            image: require('../../Assets/Images/Cashroom.png'),
            name: 'Cashbook'
        },

        {
            id: 5,
            image: require('../../Assets/Images/handhover.png'),
            name: 'Branch Handover'
        },
        {
            id: 6,
            image: require('../../Assets/Images/commision.jpg'),
            name: 'Friends Commision'
        },
    ]);


    const RenderXdata = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image source={item.image}
                    style={{ height: 80, width: 100, }}
                />

                <Text style={{
                    color: "#000000",
                    fontSize: 16,
                    marginTop: 20,
                    fontWeight: "400"
                }}>{item.name}</Text>
            </View>
        )
    }



    return (


        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>

            <ScreenHeader
                name='Reports'
            />

            <FlatList
                //columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 7 }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={data}
                renderItem={RenderXdata}
                //console.log(CardRender)
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    card: {

        backgroundColor: "#ffffff",
        alignItems: "center",
        borderRadius: 10,
        width: '45%',
        borderWidth: 1,
        borderColor: "#EDEDED",
        elevation: 5,
        marginHorizontal: '2.5%',
        marginVertical: 3,
        paddingBottom: 10,
        marginTop: 20
    }
})