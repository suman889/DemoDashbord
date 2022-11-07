import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Constant/Colors'
import ScreenHeader from '../../Component/Global/SereenHeader';
import LongCard from '../../Component/Global/LongCard';
import Card from '../../Component/Global/Card';

const SavingsDeposite = () => {

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
            <ScreenHeader
                name='Add New Savings Deposite'
            />

            <ScrollView>


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

export default SavingsDeposite

const styles = StyleSheet.create({
    bigBox: {
        backgroundColor: "#ffffff",
        elevation: 4, marginTop: 20,
        width: '95%', alignSelf: 'center',
        //justifyContent: 'space-evenly'
        paddingVertical: 10, marginBottom: 10

    }
})