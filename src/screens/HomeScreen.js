import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
    goToSecondScreen = () => {
        console.log('Button pressed, go to second screen')
        navigation.navigate('SecondScreen')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Home Screen </Text>
            <View style={styles.space}></View>
            <Button title='Go to Second Screen' onPress={()=> goToSecondScreen() } color= '#8C4966' />
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
    title: {
        marginTop: 20,
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'     
    }
})

