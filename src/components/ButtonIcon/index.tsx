import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, 
         View, 
         Image, 
         } from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string
}

export function ButtonIcon({title, ...rest} : Props ){
    return(
        <RectButton
        style={styles.container}
        activeOpacity={0.7}
        {... rest}
        >

            <View style={styles.IconWrapper}>
                <Image source={DiscordImg} style={styles.Icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}