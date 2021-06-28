import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Background } from '../components/Background'
import { AppRoutes } from './app.routes'
import { SignIn } from '../screens/Signin'
import { useAuth } from '../hooks/auth'

export function Routes(){
    const {user} = useAuth()

    return(
        <Background>
            <NavigationContainer>
               {user.id ? <AppRoutes/> : <SignIn/> }
            </NavigationContainer>
        </Background>
    )}