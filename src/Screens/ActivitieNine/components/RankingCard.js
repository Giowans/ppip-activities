import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import ParticlesBg from 'react-native-particles-bg'

const RankingCard = ({alumno, place}) => {


    const {Codigo, Nombre, imagen, Tiempo, Distancia} = alumno;

    const getColorsByPlace = (rankingPlace) => {
        switch(rankingPlace){
            case 1: 
                return ['#D4AF37', '#C5A028', '#B69119', '#E3BE46'];
            case 2: 
                return ['#C0C0C0', '#B1B1B1', '#A2A2A2', '#CFCFCF' ];
            case 3: 
                return ['#CD7F32', '#BE7023', '#AF6114', '#DC8E41'];
            default:
                return ['black', 'black'];
        }
    }

    //Particles configuration
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: { x:1, y:1, width:100, height:100},
        color: getColorsByPlace(place)[0],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
      };

    const styles = StyleSheet.create({
        mainContainer: {
            width: '100%',
            height: 300,
            marginVertical: 15,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            borderColor: getColorsByPlace(place)[0],
        },
        avatar: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderColor: getColorsByPlace(place)[0],
        },
        rankingCard: {
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderColor: getColorsByPlace(place)[0],
        }
    });

    return (
        <TouchableOpacity style = {styles.mainContainer}>
            {/*Number(place) < 4 &&
                <ParticlesBg type = 'custom' config = {config} bg = {true}/>
            */}
            <View style= {{width: '100%', height: 200, ...styles.avatar}}>
                <Image
                    style= {{width: '100%', height: 200, ...styles.avatar}}
                    source = {{ uri: imagen }}
                />
            </View>
            <View style = {styles.rankingCard}>
                <Text style = {{color: getColorsByPlace(place)[1], fontSize: 40}}>
                    {`${place}-.`}
                </Text>
                <View style = {{padding: 5, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', color: getColorsByPlace(place)[1]}}>{Nombre}</Text>
                    <Text style = {{fontSize: 14, fontWeight: '500', color: getColorsByPlace(place)[1]}}>{Codigo}</Text>
                    <Text style = {{fontSize: 14, fontWeight: '400', color: getColorsByPlace(place)[1]}}>Distancia: {Distancia} KM</Text>
                    <Text style = {{fontSize: 14, fontWeight: '400', color: getColorsByPlace(place)[1]}}>Tiempo: {Tiempo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RankingCard;