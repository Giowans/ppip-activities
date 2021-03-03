import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const ActivitieOne = () => {

    const [ total, setTotal ] = useState('');
    const [ percentage, setPercentage ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ inputActive, setInputActive ] = useState('');

    const getResult = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setResponse(xhttp.responseText);
            }
        };
        xhttp.open("GET", `https://tempbackend.000webhostapp.com/?total=${total}&percentage=${percentage}`, true);
        xhttp.send();
    }
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
                    selectionColor = '#A38435'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inOne' ? '#A38435' : 'black',
                        borderWidth: inputActive === 'inOne' ? 2 : 1
                    }}
                    onChangeText = {(value) => {
                        setTotal(value);
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
                    selectionColor = '#A38435'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inTwo' ? '#A38435' : 'black',
                        borderWidth: inputActive === 'inTwo' ? 2 : 1
                    }}
                    onChangeText = {(value) => {
                        setPercentage(value);
                        console.log(value);
                    }}
                    placeholder = 'Ingrese porcentaje de propina'
                    keyboardType = 'numeric'                    
                />
            </View>
            <TouchableOpacity
                style = {estilos.buttonStyle}
                onPress = {() => {
                    getResult();
                }} 
            > 
                <Text>Calcular</Text> 
            </TouchableOpacity>
            <Text 
                style = {{...estilos.subtitulo, color: 'black', marginTop: 20}}
            >
                Propina a dar: <Text style = {{...estilos.subtitulo, color: '#A38435'}}>{response ? `$${response}` : 'Sin Definir'}</Text>
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
      borderBottomColor: '#A38435',
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
        paddingVertical: 5,
        color: 'black'
    },
    buttonStyle: {
        width: 'auto',
        borderRadius: 35,
        paddingHorizontal: 35,
        paddingVertical: 8,
        backgroundColor: '#A38435',
        marginTop: 30
    }

})

export default ActivitieOne;