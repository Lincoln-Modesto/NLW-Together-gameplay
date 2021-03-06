import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title:{
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    }
})