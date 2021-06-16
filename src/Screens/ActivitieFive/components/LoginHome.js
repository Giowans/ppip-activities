import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const LoginHome = ({route, navigation}) => {
    const { token } = route.params
    return (
        <View style = {estilos.mainContainer}>
            <Text style = {estilos.titulo}>Actividad #5</Text>
            <Text style = {estilos.subtitulo}>Pantalla de ingreso exitoso</Text>
            <Text 
                style = {{...estilos.subtitulo, color: 'black', marginTop: 20}}
            >
                Bienvenido
            </Text>
            <Text style = {{...estilos.subtitulo, color: '#FF5733'}}>{token ? `${token}` : 'Sin Definir'}</Text>
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
});

export default LoginHome;