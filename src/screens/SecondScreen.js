import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function SecondScreen( {navigation} ) {
    
    goToThirdScreen = () => {
        console.log('Button pressed, go to third screen')
        navigation.navigate('ThirdScreen')    
    }

    goToFourthScreen = () => {
        console.log('Button pressed, go to fourth screen')
        navigation.navigate('FourthScreen')    
    }

    goToHomeScreen = () => {
        console.log('Button pressed, go to home screen')
        navigation.navigate('HomeScreen')    
    }
    
    Back = () => {
        console.log('Button pressed, back')
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}> Second Screen </Text>
            <View style={styles.space}></View>
            <Button title='Go to Third Screen' onPress={ () => goToThirdScreen() } color= '#8C4966' />
            <View style={styles.space}></View>
            <Button title='Go to Fourth Screen' onPress={ () => goToFourthScreen() } color= '#8C4966' />
            <View style={styles.space2}></View>
            <Button title='Back to Home Screen' onPress={ () => goToHomeScreen() } color= '#ECEC' />
            <View style={styles.space}></View>
            <Button title='Back to Previous Screen' onPress={ ()=> Back() } color= '#ECE' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 90, 
        backgroundColor: '#BBA9BB',
        alignItems: 'center'
    },
    space: {
        height: 20
    },
    space2: {
        height: 80
    },
    title: {
        marginTop: 20,
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'     
    }
})



