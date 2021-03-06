import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width: '100%',
        marginTop:  getStatusBarHeight() + 26,
        flexDirection: 'row',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        marginBottom: 42
    },
    matches:{
        marginTop: 24,
        marginLeft: 24
    }
})