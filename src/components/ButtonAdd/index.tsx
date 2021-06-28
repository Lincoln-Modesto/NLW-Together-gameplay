import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, 
         View, 
         Image, 
         } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps 

export function ButtonAdd({... rest}: Props){
    return(
     <RectButton style={styles.container}
     {...rest}>

        <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}/>

     </RectButton>
    )
}