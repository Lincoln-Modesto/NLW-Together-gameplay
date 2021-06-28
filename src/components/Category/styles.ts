import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 108,
        height:  120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content:{
        width: 100,
        height: 116,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 20
    },
    checked:{
        position: 'absolute',
        top: 7,
        right: 7,
        width:12,
        height: 12,
        alignSelf: 'flex-end',
        backgroundColor: theme.colors.primary,
        marginRight: 7,
        borderRadius: 3
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width:10,
        height: 10,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 15,
        color: theme.colors.heading,
        marginTop: 15
    } 
})