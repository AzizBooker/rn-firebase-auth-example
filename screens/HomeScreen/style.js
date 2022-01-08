import { StyleSheet } from "react-native"
import Colors from "../../utils/Colors";
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background
    },
    text:{
        color:Colors.text,
        fontSize:40
    }
})

export default styles;
