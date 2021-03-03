import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const ActivitieOne = () => {

    const [ total, setTotal ] = useState('');
    const [ percentage, setPercentage ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ inputActive, setInputActive ] = useState('');

    return (
        <View style = {estilos.mainContainer}>
            <Text style = {estilos.titulo}>Actividad #1</Text>
            <Text style = {estilos.subtitulo}>Calculo de Propina</Text>
            <View style = {estilos.inputContainer}>
                <TextInput
                    onFocus = {() => {
                        setInputActive('inOne');
                    }}
                    onEndEditing = {() => {
                        setInputActive('');
                    }}
                    selectionColor = '#DEDA65'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inOne' ? '#DEDA65' : 'black',
                        borderWidth: inputActive === 'inOne' ? 2 : 1
                    }}
                    onChangeText = {(value) => {
                        console.log(value);
                    }}
                    placeholder = 'Ingrese Total'
                    keyboardType = 'numeric'                    
                />
                <TextInput
                    onFocus = {() => {
                        setInputActive('inTwo');
                    }}
                    onEndEditing = {() => {
                        setInputActive('');
                    }}
                    selectionColor = '#DEDA65'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inTwo' ? '#DEDA65' : 'black',
                        borderWidth: inputActive === 'inTwo' ? 2 : 1
                    }}
                    onChangeText = {(value) => {
                        console.log(value);
                    }}
                    placeholder = 'Ingrese porcentaje de propina'
                    keyboardType = 'numeric'                    
                />
            </View>
            <TouchableOpacity
                style = {estilos.buttonStyle}
                onPress = {() => {
                    console.log('Me picaste krnal');
                }} 
            > 
                <Text>Calcular</Text> 
            </TouchableOpacity>
            <Text 
                style = {{...estilos.subtitulo, color: 'black', marginTop: 20}}
            >
                Propina a dar: <Text></Text>
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    titulo: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 5,
      borderBottomColor: '#DEDA65',
      borderBottomWidth: 2,
      borderStyle: 'solid'  
    },
    subtitulo: {
        marginTop: 5,
        fontFamily: 'Arial',
        fontWeight: '100',
        fontSize: 18,
        color: '#7F8485'
    },
    inputContainer: {
        width: '100%',
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-around',
    },
    inputStyle: {
        width: '40%',
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonStyle: {
        width: 'auto',
        borderRadius: 35,
        paddingHorizontal: 35,
        paddingVertical: 8,
        backgroundColor: '#DEDA65',
        marginTop: 30
    }

})

export default ActivitieOne;