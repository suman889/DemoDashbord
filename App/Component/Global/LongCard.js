import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { mdscale } from '../../PixelRatio';
const LongCard = ({ maindata }) => {

    const CardRender = ({ item, index }) => {
        // console.log(item);
        return (

            <View style={[styles.card]}>
                <View style={{ paddingLeft: 20, flex: 1, marginBottom: 10 }}>

                    <Text
                        style={{
                            fontSize: 14, color: '#000000',
                            marginTop: 10, fontFamily: "Poppins-SemiBold"
                        }}
                    >{item.name}</Text>

                    <Text
                        style={{
                            fontSize: 14, color: '#000000',
                            marginTop: 10,
                            fontFamily: "Poppins-SemiBold",
                            fontWeight: "bold"
                        }}
                    >{item.amount}</Text>
                </View>


                <Image source={item.logoimage}
                    style={{
                        width: mdscale(30), height: mdscale(50),
                        marginRight: 20
                    }}
                />

            </View>

        )
    }








    return (
        <FlatList
            //columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 7 }}
            showsVerticalScrollIndicator={false}
            //numColumns={2}
            data={maindata}
            renderItem={CardRender}
            //console.log(CardRender)
            keyExtractor={item => item.id}
        />
    )
}



const styles = StyleSheet.create({

    card: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default LongCard