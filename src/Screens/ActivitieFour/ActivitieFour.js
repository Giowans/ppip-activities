import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';


//Logo
import udeg_logo from '../../assets/images/1200px-Escudo_UdeG.svg.png'
const ActivitieFour = () => {

    const [ code, setCode ] = useState('');
    const [ nip, setNip ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ inputActive, setInputActive ] = useState('');

    const getResult = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setResponse(xhttp.responseText);
            }
        };
        xhttp.open("GET", ` http://cuceimobile.tech/Escuela/datosudeg.php?codigo=${code}&nip=${nip}`, true);
        xhttp.send();
    }
    return (
        <SafeAreaView style = {estilos.mainContainer}>
            <Text style = {estilos.titulo}>Actividad #4</Text>
            <Text style = {estilos.subtitulo}>Ejemplo de Login</Text>
            <Image
                style= {{width: 150, height: 200, marginTop: 20}}
                source = {udeg_logo}
            />
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
                        borderColor: inputActive === 'inOne' ? '#0480BE' : '69899A',
                        backgroundColor: inputActive === 'inOne' ? '#8FB6CA' : 'white'
                    }}
                    onChangeText = {(value) => {
                        setCode(value);
                        console.log(value);
                    }}
                    placeholder = 'Código'
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
                        borderColor: inputActive === 'inTwo' ? '#0480BE' : '69899A',
                        backgroundColor: inputActive === 'inTwo' ? '#8FB6CA' : 'white'
                    }}
                    onChangeText = {(value) => {
                        setNip(value);
                    }}
                    placeholder = 'NIP'
                    keyboardType = 'default'
                    secureTextEntry = {true}
                />
            </View>
            <TouchableOpacity
                style = {estilos.buttonStyle}
                onPress = {() => {
                    getResult();
                }} 
            > 
                <Text>Entrar</Text> 
            </TouchableOpacity>
            <Text 
                style = {{...estilos.subtitulo, color: 'black', marginTop: 20}}
            >
                Token de Autenticación: <Text style = {{...estilos.subtitulo, color: '#0480BE'}}>{response ? `$${response}` : 'Sin Definir'}</Text>
            </Text>
        </SafeAreaView>
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
      borderBottomColor: '#0480BE',
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
        height: 100,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputStyle: {
        width: '80%',
        borderRadius: 10,
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
        backgroundColor: '#0480BE',
        marginTop: 30
    }

})

export default ActivitieFour;