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
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A3')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: 'purple'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 3 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A4')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#0480BE'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 4 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A5')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#FF5733'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 5 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A6')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#A62929'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 6 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A7')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#A66829'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 7 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A8')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#75205B'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 8 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity = {0.6}
                    onPress = {() => navigation.navigate('A9')}
                    style = {{...homeStyles.buttonHigh, backgroundColor: '#3CC2B1'}}
                >
                    <Text style = {{...homeStyles.subtitle, fontWeight: '600', color: 'white'}}> Actividad 9 </Text>
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