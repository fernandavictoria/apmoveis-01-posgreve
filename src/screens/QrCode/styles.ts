import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    qrcode: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width,
    },
});
