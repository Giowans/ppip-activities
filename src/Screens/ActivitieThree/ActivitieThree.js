import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
 
//Components
import Card from '../ActivitieThree/components/Card';

const ActivityThreeScreen =() => {
    
    const [ response, setResponse ] = useState([])

    useEffect(() => {
        getCustomAPIResponse();
    }, [])

    const getCustomAPIResponse = async () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(xhttp.responseText));
                setResponse(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", `https://tempbackend.000webhostapp.com/api.php`, true);
        xhttp.send();
    }

    return (
        <View style = {estilos.mainContainer}>
            <Text style = {estilos.titulo}>Actividad #3</Text>
            <Text style = {estilos.subtitulo}>Consumo de API Propia</Text>
            <FlatList
                style = {{width: '100%', height: '100%'}}
                scrollEnabled
                data = {response}
                keyExtractor = {(item) => item.idpokemon }
                renderItem = {({item, index}) => {
                    return (
                        <Card pokemonName = {item.name} urlIndex = {item.url} type = {item.type}/>
                    );
                }}
            />
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
      borderBottomColor: 'purple',
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

export default ActivityThreeScreen;