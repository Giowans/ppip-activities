import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';


//Logo
import udeg_logo from '../../assets/images/1200px-Escudo_UdeG.svg.png'
const ActivitieFive = ({ navigation }) => {

    const [ code, setCode ] = useState('');
    const [ nip, setNip ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ inputActive, setInputActive ] = useState('');

    const getResult = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(xhttp.responseText === "0")
                {
                    setResponse(0)
                }
                else
                {
                    setResponse(xhttp.responseText);
                    navigation.navigate("LoginHome", { token: xhttp.responseText.split(',')[2]});
                }
            }
        };
        xhttp.open("GET", ` http://cuceimobile.tech/Escuela/datosudeg.php?codigo=${code}&nip=${nip}`, true);
        xhttp.send();
    }
    return (
        <SafeAreaView style = {estilos.mainContainer}>
            <Text style = {estilos.titulo}>Actividad #5</Text>
            <Text style = {estilos.subtitulo}>Login con Ingreso</Text>
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
                    selectionColor = '#FF5733'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inOne' ? '#FF5733' : '69899A',
                        backgroundColor: inputActive === 'inOne' ? '#FF9680' : 'white'
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
                    selectionColor = '#FF5733'
                    style = {{
                        ...estilos.inputStyle, 
                        borderColor: inputActive === 'inTwo' ? '#FF5733' : '69899A',
                        backgroundColor: inputActive === 'inTwo' ? '#FF9680' : 'white'
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
            {response === 0 &&
                <Text 
                    style = {{...estilos.subtitulo, color: '#FF5733', marginTop: 20}}
                >
                    {"Credenciales Inválidas"}
                </Text>
            }
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
      borderBottomColor: '#FF5733',
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
        backgroundColor: '#FF5733',
        marginTop: 30
    }

})

export default ActivitieFive;