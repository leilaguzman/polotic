import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ThirdScreen({navigation}) {

    goToHomeScreen = () => {
        console.log('Button pressed, go to home screen')
        navigation.navigate('HomeScreen')    
    }
    
    goToSecondScreen = () => {
        console.log('Button pressed, go to second screen')
        navigation.navigate('SecondScreen')    
    }
    
    goToThirdScreen = () => {
        console.log('Button pressed, go to third screen')
        navigation.navigate('ThirdScreen')    
    }

    Back = () => {
        console.log('Button pressed, back')
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Fourth Screen </Text>
            <View style={styles.space}></View>
            <Button title='Back to Home Screen' onPress={ () => goToHomeScreen() }  color= '#ECEC' />
            <View style={styles.space}></View>
            <Button title='Back to Second Screen' onPress={ () => goToSecondScreen() }  color= '#ECEC' />
            <View style={styles.space}></View>
            <Button title='Back to Third Screen' onPress={ () => goToThirdScreen() }  color= '#ECEC' />
            <View style={styles.space3}></View>
            <Button title='Back to Previous Screen' onPress={ ()=> Back() }  color= '#ECE' />
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
    space3: {
        height: 80
    },
    title: {
        marginTop: 20,
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'     
    }
})
