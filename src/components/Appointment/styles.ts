import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    category:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    content:{
        flex: 1
    },
    player:{
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24,
    },
    playersInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer:{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    dateInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    date:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 13,
        marginLeft: 7
    },
    guildIconContainer:{
        height: 68,
        width: 64,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
})