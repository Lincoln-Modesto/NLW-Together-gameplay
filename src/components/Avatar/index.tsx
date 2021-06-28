import React from 'react'
import { Image } from 'react-native'
import { theme } from '../../global/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'

type Props = {
    urlImage: string
}

export function Avatar( { urlImage }: Props){
    return(
        <LinearGradient 
            style={styles.container}
            colors={[theme.colors.secondary50, theme.colors.secondary70]}>

        <Image
            source={{ uri: urlImage }}
            style={styles.avatar}
        />

        </LinearGradient>
    )
}