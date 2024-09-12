import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';
import { Colors } from "react-native/Libraries/NewAppScreen";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        backgroundColor: colors.white,
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },
    itemText: {
        fontSize: 20,
        color: colors.black,
        padding: 10,
        backgroundColor: colors.white
    }
})