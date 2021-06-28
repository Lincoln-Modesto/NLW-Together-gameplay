import { theme } from './../../global/styles/theme';
import { BackHandler, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 48,
        height:48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center'
    },
})