import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//Logo
import udeg_logo from '../../assets/images/1200px-Escudo_UdeG.svg.png'

const ActivitieSeven = ({ navigation }) => {

    const [ code, setCode ] = useState('');
    const [ nip, setNip ] = useState('');
    const [ response, setResponse ] = useState([1, 2]);
    const [ inputActive, setInputActive ] = useState('');

    const getLocalData = async () => {
        let localData = await AsyncStorage.getItem('token');
        console.log(localData);
        if(localData)
        {
            const token = JSON.parse(localData);
            navigation.navigate("LoginHomeDos", { token: token, openColor: '#533415', interfaceColor: '#A66829', loginTitle: 'Actividad #7'});
        }
    }

    useEffect(() => {
        getLocalData();
    }, [])

    const getResult = async () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(xhttp.responseText === "0")
                {
                    setResponse([])
                }
                else
                {
                    let responseSplited = xhttp.responseText.split(',');
                    setResponse(responseSplited);
                    AsyncStorage.setItem('token', JSON.stringify({
                        nombre: responseSplited[2],
                        code: responseSplited[1],
                        carrera: responseSplited[4]
                    }));
                    navigation.navigate("LoginHomeDos", { token: xhttp.responseText.split(','), openColor: '#533415', interfaceColor: '#A66829', loginTitle: 'Actividad #7'});
                }
            }
        };
        xhttp.open("GET", ` http://cuceimobile.tech/Escuela/datosudeg.php?codigo=${code}&nip=${nip}`, true);
        xhttp.send();
    }
    return (
            <SafeAreaView style = {estilos.mainContainer}>
                <Text style = {estilos.titulo}>Actividad #7</Text>
                <Text style = {estilos.subtitulo}>Login con Local Storage</Text>
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
                        selectionColor = '#A66829'
                        style = {{
                            ...estilos.inputStyle, 
                            borderColor: inputActive === 'inOne' ? '#A66829' : '#D08439',
                            backgroundColor: inputActive === 'inOne' ? '#E7913C' : 'white'
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
                        selectionColor = '#A66829'
                        style = {{
                            ...estilos.inputStyle, 
                            borderColor: inputActive === 'inTwo' ? '#A66829' : '#D08439',
                            backgroundColor: inputActive === 'inTwo' ? '#E7913C' : 'white'
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
                {response.length === 0 &&
                    <Text 
                        style = {{...estilos.subtitulo, color: '#A66829', marginTop: 20}}
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
      borderBottomColor: '#A66829',
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
        backgroundColor: '#A66829',
        marginTop: 30
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#A66829",
        padding: 15,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    buttonHigh: {
        padding: 10,
        marginTop: 10,
        width: '100%',
        borderRadius: 15
    },
    avatar: {
        borderRadius: 30,
        borderColor: '#533415',
        borderWidth: 2,
    }
})

export default ActivitieSeven;