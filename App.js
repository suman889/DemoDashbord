import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  TransitionPresets,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';


import { mdscale } from './App/PixelRatio';
import Navigation from './App/Service/Navigation';

{/**vector icon */ }
import Ionicons from 'react-native-vector-icons/Ionicons';


{/** all screens */ }
import DrawerContent from './App/Component/Global/DrawerContent';
import Home from './App/Screens/Home/Index';
import ProfileMain from './App/Screens/Profile/ProfileMain';
import EditProfile from './App/Screens/Profile/EditProfile';
import ChangePassword from './App/Screens/Auth/ChangePassword';


import ViewShg from './App/Screens/SHG/ViewShg';
import AddShg from './App/Screens/SHG/AddShg';
import Member from './App/Screens/Members/Member';
import AddMember from './App/Screens/Members/AddMember';
import SavingsDeposite from './App/Screens/Savings Deposits/SavingsDeposite';
import AddSavingsDeposit from './App/Screens/Savings Deposits/AddSavingsDeposit';
import Withdrawl from './App/Screens/Withdrawl/Withdrawl';
import AddWithdrawl from './App/Screens/Withdrawl/AddWithdrawl';
import Loan from './App/Screens/Loan/Loan';
import Report from './App/Screens/Reports/Index';






const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function DrawerNav(props) {
  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#ffffff', /* font color for active screen label */
        //activeBackgroundColor: 'green', /* bg color for active screen */
      }}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { color: "#ffffff", fontSize: mdscale(12), },
        // drawerActiveBackgroundColor: "green",

      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ }) => (
            <Ionicons
              name="home"
              style={{ color: '#ffffff', fontSize: mdscale(18), }}

            />

          ),
        }}
        name="Dashbord"
        component={Home}
      />

      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ }) => (
            <Ionicons
              name="home"
              style={{ color: '#ffffff', fontSize: mdscale(18), }}

            />

          ),
        }}
        name="SHG"
        component={ViewShg}
      /> */}

    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name='Home' component={DrawerNav} />
        <Stack.Screen name='ProfileMain' component={ProfileMain} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />

        <Stack.Screen name='ViewShg' component={ViewShg} />

        <Stack.Screen name='AddShg' component={AddShg} />
        <Stack.Screen name='Member' component={Member} />
        <Stack.Screen name='AddMember' component={AddMember} />
        <Stack.Screen name='SavingsDeposite' component={SavingsDeposite} />
        <Stack.Screen name='AddSavingsDeposit' component={AddSavingsDeposit} />
        <Stack.Screen name='Withdrawl' component={Withdrawl} />
        <Stack.Screen name='AddWithdrawl' component={AddWithdrawl} />
        <Stack.Screen name='Loan' component={Loan} />

        <Stack.Screen name='Report' component={Report} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

