import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import StyledButton from '../../components/StyledButton'
import styles from './style'

const AuthHomeScreen = ({navigation}) => {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
            <StyledButton text="Login" onPress={()=>{console.log('Login')}}/>
            <StyledButton primary text="Sign Up" onPress={()=>{navigation.navigate('Signup')}} />
        </View>
    )
}

export default AuthHomeScreen
