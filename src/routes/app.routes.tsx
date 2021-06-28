import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/home'
import { SignIn } from '../screens/Signin'
import { theme } from '../global/styles/theme'
import { ApointmentDetails } from '../screens/AppointmentDetails'
import { ApointmentCreate } from '../screens/AppointmentCreate'

const {Navigator, Screen}= createStackNavigator()

export function AppRoutes(){
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.secondary100
                }
            }}>
            <Screen
                name="Home"
                component={Home}/>
            <Screen
                name="ApointmentDetails"
                component={ApointmentDetails}/>
            <Screen
                name="ApointmentCreate"
                component={ApointmentCreate}/>
        </Navigator>
    )
}