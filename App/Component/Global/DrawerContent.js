import {
    StyleSheet, Text, View,
    Dimensions, Image, Pressable
} from 'react-native'
import React, { useState } from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import {
    TransitionPresets,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';



import Navigation from '../../Service/Navigation';
{/**all Vector icon */ }
//import { Icon } from 'native-base';

import Feather from 'react-native-vector-icons/Feather';
import Profi from 'react-native-vector-icons/EvilIcons';
import Nav from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Calender from 'react-native-vector-icons/FontAwesome';



import { mdscale } from '../../PixelRatio';
const WIDTH = Dimensions.get('window').width;


const Stack = createNativeStackNavigator();

const DrawerContent = ({ ...props }) => {


    const [shg, setShg] = useState(false);
    const [member, setMember] = useState(false);
    const [savings, setSavings] = useState(false);
    const [withdrawl, setWithdrawl] = useState(false);

    const [loan, setLoan] = useState(false);
    const [report, setReport] = useState(false);

    const [profile, setProfile] = useState(false);

    const setDetailProfile = () => {
        setProfile(!profile);
    }

    const setDetailShg = () => {
        setShg(!shg);
    }


    const setDetailMember = () => {
        setMember(!member);
    }

    const setDetailSavings = () => {
        setSavings(!savings);
    }

    const setDetailWithdrawl = () => {
        setWithdrawl(!withdrawl);
    }


    const setDetailReport = () => {
        setReport(!report);
    }

    const setProductLoan = () => {
        setLoan(!loan);
    };




    return (


        <View style={{ flex: 1, backgroundColor: "#2b2e33", }}>
            <DrawerContentScrollView {...props}>

                <View style={{
                    backgroundColor: "#3eacff",
                    marginTop: -5, flexDirection: 'row', height: 80,
                    alignItems: 'center'
                }}>
                    <Image style={{
                        height: 54, width: 54,
                        borderRadius: 5, marginLeft: mdscale(20),
                    }}

                        source={require('../../Assets/Images/Indianman.jpg')} />
                    <Text style={{
                        color: "#ffffff", fontSize: mdscale(16), paddingLeft: mdscale(20),

                    }}>Suman Biswas</Text>



                    {/* <View style={{ with: WIDTH, backgroundColor: '#171918', marginVertical: 8, height: 1 }}></View>*/}

                </View>




                <DrawerItemList{...props} />

                <DrawerItem
                    labelStyle={{ color: '#FFFFFF', fontSize: mdscale(12) }}
                    icon={() => (
                        <Profi
                            name="user"

                            style={{ color: "#EDEDED", fontSize: mdscale(20) }}
                        />
                    )}
                    label="My Profile"
                    onPress={() => Navigation.navigate('ProfileMain')}
                />







                {/**** Logic Drawer */}

                {/**profile */}



                {/**For SHG */}
                <Pressable
                    style={[styles.drawer_btn,
                    {
                        justifyContent: 'space-between',
                        paddingHorizontal: mdscale(8),
                    },
                    ]}
                    onPress={() => setDetailShg()}>

                    <View style={styles.productMasterLeftView}>
                        <Nav
                            name="select-group"

                            style={[styles.icon, { fontSize: mdscale(20) }]}
                        />
                        <Text style={styles.drawer_txt}>SHG</Text>
                    </View>

                    <Icon
                        name={shg ? 'minus' : 'plus'}

                        type="Entypo"
                        style={styles.plusIcon} />

                </Pressable>

                {
                    shg ? (
                        <>
                            <Pressable

                                style={[styles.drawer_btn, { marginStart: mdscale(20) }]}
                                onPress={() => Navigation.navigate('ViewShg')}>

                                <Text style={styles.drawer_txt}>View SHG</Text>
                            </Pressable>
                        </>
                    ) : null
                }



                {/**Members */}


                <Pressable
                    style={[styles.drawer_btn,
                    {
                        justifyContent: 'space-between',
                        paddingHorizontal: mdscale(8),
                    },
                    ]}
                    onPress={() => setDetailMember()}>

                    <View style={styles.productMasterLeftView}>
                        <Nav
                            name="select-group"

                            style={[styles.icon, { fontSize: mdscale(20) }]}
                        />
                        <Text style={styles.drawer_txt}>Members</Text>
                    </View>

                    <Icon
                        name={member ? 'minus' : 'plus'}

                        type="Entypo"
                        style={styles.plusIcon} />

                </Pressable>

                {
                    member ? (
                        <>
                            <Pressable

                                style={[styles.drawer_btn, { marginStart: mdscale(20) }]}
                                onPress={() => Navigation.navigate('AddMember')}>

                                <Text style={styles.drawer_txt}>Add member</Text>
                            </Pressable>
                        </>
                    ) : null
                }


                {/** Savings Deposite */}

                <Pressable
                    style={[styles.drawer_btn,
                    {
                        justifyContent: 'space-between',
                        paddingHorizontal: mdscale(8),
                    },
                    ]}
                    onPress={() => setDetailSavings()}>

                    <View style={styles.productMasterLeftView}>
                        <Nav
                            name="select-group"

                            style={[styles.icon, { fontSize: mdscale(20) }]}
                        />
                        <Text style={styles.drawer_txt}>Savings Deposite</Text>
                    </View>

                    <Icon
                        name={savings ? 'minus' : 'plus'}

                        type="Entypo"
                        style={styles.plusIcon} />

                </Pressable>

                {
                    savings ? (
                        <>
                            <Pressable

                                style={[styles.drawer_btn, { marginStart: mdscale(20) }]}
                                onPress={() => Navigation.navigate('AddSavingsDeposit')}>

                                <Text style={styles.drawer_txt}>Add New Savings Deposits</Text>
                            </Pressable>
                        </>
                    ) : null
                }


                {/**Withdrawl */}


                <Pressable
                    style={[styles.drawer_btn,
                    {
                        justifyContent: 'space-between',
                        paddingHorizontal: mdscale(8),
                    },
                    ]}
                    onPress={() => setDetailWithdrawl()}>

                    <View style={styles.productMasterLeftView}>
                        <Nav
                            name="select-group"

                            style={[styles.icon, { fontSize: mdscale(20) }]}
                        />
                        <Text style={styles.drawer_txt}>Withdrawl</Text>
                    </View>

                    <Icon
                        name={withdrawl ? 'minus' : 'plus'}

                        type="Entypo"
                        style={styles.plusIcon} />

                </Pressable>

                {
                    withdrawl ? (
                        <>
                            <Pressable

                                style={[styles.drawer_btn, { marginStart: mdscale(20) }]}
                                onPress={() => Navigation.navigate('AddWithdrawl')}>

                                <Text style={styles.drawer_txt}>Add New Withdrawl</Text>
                            </Pressable>
                        </>
                    ) : null
                }




                {/****Loan */}
                <Pressable
                    style={[
                        styles.drawer_btn,
                        {
                            justifyContent: 'space-between',
                            paddingHorizontal: mdscale(8),
                        },
                    ]}
                    onPress={() => setProductLoan()}>
                    <View style={styles.productMasterLeftView}>
                        <Nav
                            name="select-group"

                            style={[styles.icon, { fontSize: mdscale(20) }]}
                        />
                        <Text style={styles.drawer_txt}>Loan Repayment</Text>
                    </View>

                    <Icon
                        name={loan ? 'minus' : 'plus'}
                        type="Entypo"
                        style={styles.plusIcon}
                    />
                </Pressable>

                {loan ? (
                    <>
                        <Pressable
                            style={[styles.drawer_btn, { marginStart: mdscale(20) }]}
                            onPress={() => Navigation.navigate('Loan')}>
                            {/* <Icon
                                name="package-down"
                                type="MaterialCommunityIcons"
                                style={[styles.icon, { fontSize: mdscale(20) }]}
                            /> */}
                            <Text style={styles.drawer_txt}>Add New Loan Repayment</Text>
                        </Pressable>


                    </>
                ) : null}


                {/**Report */}


                <DrawerItem
                    labelStyle={{ color: '#ffffff', fontSize: mdscale(12) }}
                    icon={() => (
                        <Nav
                            name="select-group"

                            style={{ color: "#ffffff", fontSize: mdscale(18) }}
                        />
                    )}
                    label="Reports"
                    onPress={() => Navigation.navigate('Report')}
                />


                {/* 
                <DrawerItem
                    labelStyle={{ color: '#ffffff', fontSize: mdscale(12) }}
                    icon={() => (
                        <Nav
                            name="select-group"

                            style={{ color: "#ffffff", fontSize: mdscale(18) }}
                        />
                    )}
                    label="Group Finance"
                // onPress={() => Navigation.navigate('Joininglater')}
                />

                <DrawerItem
                    labelStyle={{ color: '#ffffff', fontSize: mdscale(12) }}
                    icon={() => (
                        <Nav
                            name="select-group"

                            style={{ color: "#ffffff", fontSize: mdscale(18) }}
                        />
                    )}
                    label="Group Management"
                //onPress={() => Navigation.navigate('Joininglater')}
                /> */}


                <DrawerItem
                    labelStyle={{ color: '#FFFFFF', fontSize: mdscale(12) }}
                    icon={() => (
                        <Nav
                            name="form-textbox-password"

                            style={{ color: "#EDEDED", fontSize: mdscale(20) }}
                        />
                    )}
                    label="Change Password"
                    onPress={() => Navigation.navigate('ChangePassword')}
                />
                <DrawerItem
                    labelStyle={{ color: '#FFFFFF', fontSize: mdscale(12) }}
                    icon={() => (
                        <Feather
                            name="log-out"

                            style={{ color: "#EDEDED", fontSize: 20 }}
                        />
                    )}
                    label="Logout"
                // onPress={() => Navigation.navigate('FranchisePortal')}
                />

            </DrawerContentScrollView>
        </View>

    )
}

export default DrawerContent;

const styles = StyleSheet.create({

    drawer_btn: {
        flexDirection: 'row',
        paddingStart: mdscale(20),
        paddingTop: mdscale(20),
        alignItems: 'center',
    },
    productMasterLeftView: {
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
    drawer_txt: {
        color: "#ffffff",
        paddingStart: mdscale(28),
        fontSize: mdscale(13)
    },
    plusIcon: {
        color: "#ffffff",
        marginRight: 10
    },
    icon: {
        color: "#ffffff",
        marginLeft: -4
    },
})