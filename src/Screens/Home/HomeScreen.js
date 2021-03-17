import React from 'react';
import { Text, StyleSheet, TouchableHighlight, ScrollView, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style = {{...homeStyles.mainContainer, marginTop: 15}}>
            <Text style = { homeStyles.title }>Programación para Internet</Text>
            <Text style = {{...homeStyles.subtitle, marginTop: 15}}>Muñoz López Giovanni Emmanuel</Text>
            <Text style = {homeStyles.subtitle}>218746654</Text>
            <View style = {{...homeStyles.mainContainer, flexDirection: 'row', height: 'auto', justifyContent: 'space-around'}}>
                <Text style = {homeStyles.subtitle}>2021-A</Text>
                <Text style = {homeStyles.subtitle}>Sección: D14</Text>
            </View>
            <ScrollView>
                <TouchableHighlight
                    activeOpacity = {0.6} 
                    onPress = {() => navigation.navigate('A1')} 
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#E9DB66'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 1 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A2')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#7CA7AD'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 2 </Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    );
}

const homeStyles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '500'
    },
    buttonHigh: {
        padding: 10,
        marginTop: 10,
        width: '100%',
        borderRadius: 15
    }
})

export default HomeScreen;