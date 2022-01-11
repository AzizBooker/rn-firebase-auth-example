import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import StyledButton from '../../components/StyledButton'
import { useDispatch } from 'react-redux'
import { setIsSignedInFalse } from '../../Redux/slices/rootSlice'
const HomeScreen = () => {
   const dispatch = useDispatch()
    const handleOnPress=()=>{
            dispatch(setIsSignedInFalse())
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <StyledButton primary text='Logout' onPress={handleOnPress} />
        </View>
    )
}

export default HomeScreen;
