import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
// import Login from './screens/Login'
// import Register from './screens/Register'

// import useUser from './data/hooks/useUser'

const Tab = createBottomTabNavigator()
// const SwitchStack = createStackNavigator()
// const AuthStack = createStackNavigator()

const routeIcon = {
    Feed: 'home',
    AddPhoto: 'camera',
    Profile: 'person'
}

export default props => {
    const { email } = 'rafael@fmail.com'

    const Auth = () => (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Feed} />
            <AuthStack.Screen name="Register" component={Feed} />
        </AuthStack.Navigator>
    )

    const AuthOrProfile = () => (
        <SwitchStack.Navigator screenOptions={{headerShown: false}}>
            {email ? 
                <SwitchStack.Screen name="Home" component={Feed} />
            : 
                <SwitchStack.Screen name="Auth" component={Feed} /> 
            }
        </SwitchStack.Navigator>
    )

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Feed"
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => 
                            <Ionicons name={routeIcon[route.name]} size={size} color={color} />
                    })}>
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="AddPhoto" component={AddPhoto} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}