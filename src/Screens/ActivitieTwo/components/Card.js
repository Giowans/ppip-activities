import React from 'react';
import { View, Image, Text } from 'react-native';

const Card = ({pokemonName, urlIndex}) => {
    return (
        <View style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            width: 300,
            height: 300,
            borderRadius: 10,
            borderWidth: 2,
            borderStyle: 'solid',
            boxShadow: '10px 5px 15px'
        }}>
            <Image
                style = {{width: 250, height: 250}}
                source = {{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlIndex}.png`}}
            />
            <Text style = {{
                fontSize: 18,
                textAlign: 'center'
            }}>
                {pokemonName}
            </Text>
        </View>
    )
}

export default Card;