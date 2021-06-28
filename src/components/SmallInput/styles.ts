import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
    },
})