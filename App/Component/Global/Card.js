import {
    StyleSheet, Text, View, Dimensions,
    Image, FlatList
} from 'react-native'
import React from 'react'
import { mdscale } from '../../PixelRatio'
import { COLORS } from '../../Constant/Colors'

const Card = ({ maindata }) => {


    const CardRender = ({ item, index }) => {
        //console.log(item);
        return (

            <View style={[styles.card, { backgroundColor: item.color }]}>
                <Text
                    style={{
                        fontSize: 14, color: '#000000',
                        marginTop: 10, fontFamily: "Poppins-SemiBold"
                    }}
                >{item.number}</Text>

                <Text
                    style={{
                        fontSize: 14, color: '#000000',
                        marginTop: 10, fontFamily: "Poppins-SemiBold"
                    }}
                >{item.name}</Text>

            </View>

        )
    }
    return (
        <FlatList
            //columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 7 }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={maindata}
            renderItem={CardRender}
            //console.log(CardRender)
            keyExtractor={item => item.id}
        />
    )
}



const styles = StyleSheet.create({
    card: {
        width: '45%',
        borderRadius: 10,
        // backgroundColor: {color},
        alignItems: 'center',
        marginHorizontal: '2.5%',
        marginVertical: 3,
        paddingBottom: 10
    }
})

export default Card