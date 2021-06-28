import React, { useState } from 'react'
import {Image, View} from 'react-native'

import DiscordSvg from '../../assets/discord.svg'
import { styles } from './styles'

const { CDN_IMAGE } = process.env

type Props = {
    guildId: string
    iconId: string | null
}

export function GuildIcon({guildId, iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

    return(

      <View style={styles.container}>
            {  iconId?
                <Image 
                style={styles.image}
                source={ {uri} }
                resizeMode='cover'
                /> : <DiscordSvg style={{width: 40, height: 40}}/>
            }
        </View>      
    )
}

//'https://www.ultimaficha.com.br/wp-content/uploads/2021/03/baixados-20.jpg'