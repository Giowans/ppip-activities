import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//Logo
import udeg_logo from '../../assets/images/1200px-Escudo_UdeG.svg.png'

const ActivitieEight = ({ navigation }) => {

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
            navigation.navigate("LoginHomeDos", { token: token, openColor: '#491439', interfaceColor: '#75205B', loginTitle: 'Actividad #8'});
        }
    }

    useEffect(() => {
        getLocalData();
    }, [])

    const insertUserOnDB = (code, name) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('Registro insertado correctamente -- ', xhttp.responseText);
            }
        };
        xhttp.open("GET", ` https://tempbackend.000webhostapp.com/Alta.php?codigo=${code}&nombre=${name}`, true);
        xhttp.send();
    }

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
                    insertUserOnDB(responseSplited[1], responseSplited[2]);
                    navigation.navigate("LoginHomeDos", { token: xhttp.responseText.split(','), openColor: '#491439', interfaceColor: '#75205B', loginTitle: 'Actividad #8'});
                }
            }
        };
        xhttp.open("GET", ` http://cuceimobile.tech/Escuela/datosudeg.php?codigo=${code}&nip=${nip}`, true);
        xhttp.send();
    }
    return (
            <SafeAreaView style = {estilos.mainContainer}>
                <Text style = {estilos.titulo}>Actividad #8</Text>
                <Text style = {estilos.subtitulo}>Trabajando con la BD</Text>
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
                        selectionColor = '#75205B'
                        style = {{
                            ...estilos.inputStyle, 
                            borderColor: inputActive === 'inOne' ? '#75205B' : '#9E2C7B',
                            backgroundColor: inputActive === 'inOne' ? '#B5619B' : 'white'
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
                        selectionColor = '#75205B'
                        style = {{
                            ...estilos.inputStyle, 
                            borderColor: inputActive === 'inTwo' ? '#75205B' : '#9E2C7B',
                            backgroundColor: inputActive === 'inTwo' ? '#B5619B' : 'white'
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
                        style = {{...estilos.subtitulo, color: '#75205B', marginTop: 20}}
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
      borderBottomColor: '#75205B',
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
        backgroundColor: '#75205B',
        marginTop: 30
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#75205B",
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

export default ActivitieEight;