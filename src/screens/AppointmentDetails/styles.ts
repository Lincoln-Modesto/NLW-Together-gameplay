import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    banner:{
        width: '100%',
        height: 234,
    },
    title:{
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.title700
    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.text400, 
        lineHeight: 21
    },
    bannerContent:{
        paddingHorizontal: 24,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    members:{
        marginLeft: 24,
        marginTop: 27
    },
    footer:{
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }

})