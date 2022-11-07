import {
    StyleSheet, Text, View, Image,
    ScrollView, StatusBar
} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Constant/Colors'
import Header from '../../Component/Global/Header';
import Card from '../../Component/Global/Card';
import LongCard from '../../Component/Global/LongCard';


{/**vector icon */ }
import Icon from 'react-native-vector-icons/Ionicons';





const Index = () => {

    const myIcon = <Icon name="rocket" size={30} color="#900" />;
    const [data, setDate] = useState([
        { name: 'Branches', number: '5', color: '#eceeef' },
        { name: 'Friends', number: '35', color: COLORS.boxTwoColor },
        { name: 'SHG Groups', number: '330', color: '#ffd4c3' },
        { name: 'Member', number: '9156', color: '#bdf3f5' },
        { name: 'Current month new members', number: '14', color: '#ffd4c3' },
        { name: 'Local Disbursed in Current Month', number: '0', color: '#eceeef' },
    ]);

    const [anotherData, setanotherData] = useState([
        {
            id: 1,
            logoimage: require('../../Assets/Images/dolar.png'),
            name: 'Current month savings',
            amount: '₹0.00',
        },
        {
            id: 2,
            logoimage: require('../../Assets/Images/chart.png'),
            name: 'Last month savings',
            amount: '₹0.00',
        },
        {
            id: 3,
            logoimage: require('../../Assets/Images/cart.png'),
            name: 'Total savings',
            amount: '₹0.00',
        },
        {
            id: 4,
            logoimage: require('../../Assets/Images/like.png'),
            name: 'Current Bank Balance',
            amount: '₹1,0000.0',
        },

    ])




    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            <StatusBar

                backgroundColor='#1e73be'
                barStyle='dark-content'

            />
            <Header />
            <ScrollView>
                <Text style={{
                    fontSize: 16,
                    color: "#000000",
                    marginLeft: 20, marginTop: 20
                }}> Dashboard</Text>

                <View style={styles.bigBox}>
                    <Card
                        maindata={data}
                    // style={{ marginBottom: 10 }}
                    />
                </View>


                <View style={styles.bigBox}>
                    <LongCard
                        maindata={anotherData}
                    />

                </View>

                {/**another  */}

                <View style={styles.bigBox}>
                    <LongCard
                        maindata={anotherData}
                    />

                </View>


            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    bigBox: {
        backgroundColor: "#ffffff",
        elevation: 4, marginTop: 20,
        width: '95%', alignSelf: 'center',
        //justifyContent: 'space-evenly'
        paddingVertical: 10, marginBottom: 10

    }
})