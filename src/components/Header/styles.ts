import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    title:{
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    }
})