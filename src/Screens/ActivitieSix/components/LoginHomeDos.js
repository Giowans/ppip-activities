import React,{ useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MenuDrawer from 'react-native-side-drawer';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProfileDef from '../../../assets/images/profile_default.png';
import RankingCard from '../../ActivitieNine/components/RankingCard';
import ProgressBar from 'react-native-progress/Bar';

const LoginHomeDos = ({route, navigation}) => {
    const { token, interfaceColor, loginTitle, openColor } = route.params
    const activitieNumber = loginTitle.split('#')[1];
    const [ showingDrawer, setShowingDrawer ] = useState(false);
    const [resourcePath, setResourcePath ] = useState('');
    const [ students, setStudents ] = useState([]);
    const [ topThree, setTopThree ] = useState([]);
    const [myInfo, setMyInfo ] = useState({
      fecha: '7-06-2021',
      Distancia: 1,
      position: 0
    });

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
          borderBottomColor: interfaceColor,
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
            backgroundColor: interfaceColor,
            marginTop: 30
        },
        animatedBox: {
            flex: 1,
            backgroundColor: interfaceColor,
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
            borderRadius: 80,
            borderColor: openColor,
            borderWidth: 2,
        }
    })

    const getProfileImage = async () => {
        const code = token[1] || token.code;
        let pathImage = await AsyncStorage.getItem(`${code}`);
        console.log('profile uri: ', pathImage);
        if(pathImage)
        {
            setResourcePath(pathImage)
        }
    }

    const updateImageOnBD = (code, uriImage) => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log('Imagen actualizada correctamente  -- ', xhttp.responseText);
          }
      };
      xhttp.open("GET", ` https://tempbackend.000webhostapp.com/CambiaImagen.php?codigo=${code}&rutai=${uriImage}`, true);
      xhttp.send();
  }

  const getStudentsByRank = async () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var students = JSON.parse(xhttp.responseText);
            setStudents(JSON.parse(xhttp.responseText));
            var top = students.slice(0, 3);
            var myPosition = students.findIndex(student => student.Codigo == token.code || student.Codigo == token[1]);
            var myInfo = students.find(student => student.Codigo == token.code || student.Codigo == token[1]);
            console.log(myPosition+1, myInfo, top);
            myInfo.position = myPosition;
            setMyInfo(myInfo);
            if(myPosition > 2)
            {
              top.push(myInfo);
            }
            setTopThree(top);
        }
    };
    xhttp.open("GET", `https://tempbackend.000webhostapp.com/getRanking.php`, true);
    xhttp.send();
}

    useEffect(() => {
        getProfileImage();
        if(Number(activitieNumber) > 8)
        {
          getStudentsByRank();

        }
    }, [showingDrawer])

    const toggleOpen = () => {
        setShowingDrawer(!showingDrawer);
    };

    const getValidDate = (date) => {
      var subDate = date.split('-');
      console.log('valid date: ', `${subDate[2]}-${subDate[1]}-${subDate[0].length > 1 ? subDate[0] : '0'+subDate[0]}`)
      return `${subDate[2]}-${subDate[1]}-${subDate[0].length > 1 ? subDate[0] : '0'+subDate[0]}`
    }

    const daysBetween = (date1, date2) => {
      //Get 1 day in milliseconds
      var one_day=1000*60*60*24;

      // Convert both dates to milliseconds
      var date1_ms = date1.getTime();
      var date2_ms = date2.getTime();

      // Calculate the difference in milliseconds
      var difference_ms = date2_ms - date1_ms;
      
      console.log('diferencia: ', date2, '-', date1);
      console.log('dias: ', difference_ms/one_day);
      // Convert back to days and return
      return Math.trunc(difference_ms/one_day); 
    }

    const closeSession = async () => {
      await AsyncStorage.removeItem('token');
      navigation.navigate("A"+activitieNumber);
    }

    const selectFile = async () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { 
              name: 'customOptionKey', 
              title: 'Choose file from Custom Option' 
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        launchImageLibrary(options, async(res) => {
          console.log('Response = ', res);
    
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            let source = res;
            setResourcePath(source.uri);
            const code = token[1] || token.code;
            await AsyncStorage.setItem(`${code}`, source.uri);
            const response = await fetch(source.uri);
            const blob = await response.blob();
            var reader = new FileReader();
            reader.onload = () => {
                var InsertAPI = 'http://tempbackend.000webhostapp.com/upload.php';
                var Data={img:reader.result};
                var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
              }
              fetch(InsertAPI,{
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data),
              }).then((response)=>response.json()).then((response)=>{
                console.log("server "+response)
                updateImageOnBD(code, `http://tempbackend.000webhostapp.com/${response}`);
              })
              .catch(err=>{
                console.log('Holi error: ', err);
              })
            }
            reader.readAsDataURL(blob);
          }
        });
      };

    const drawerContent = () => {
        return (
          <View style={estilos.animatedBox}>
            <View style = {estilos.mainContainer}>
                <TouchableOpacity
                    onPress = {selectFile}
                    style= {{width: 150, height: 150, marginTop: 10, ...estilos.avatar, borderWidth: 0}}
                >
                    <Image
                        style= {{width: 150, height: 150, ...estilos.avatar}}
                        source = {resourcePath ? { uri: resourcePath } : ProfileDef}
                    />
                </TouchableOpacity>
                <Text style = {{...estilos.titulo, fontSize: 15, color: 'white', marginTop: 8, textAlign: 'center'}}>
                    {token[2] || token.nombre || ''}
                </Text>
                <Text style = {{...estilos.subtitulo, fontSize: 13, color: 'white', fontStyle: 'italic', marginTop: 5}}>
                    {token[1] || token.code || ''} --- {token[4] || token.carrera || ''}
                </Text>
                {Number(activitieNumber > 8) &&
                  <View>
                    <Text style = {{...estilos.titulo, fontSize: 15, color: 'white', marginTop: 8, textAlign: 'center'}}>
                        Dia {daysBetween(new Date(getValidDate(myInfo.fecha)), new Date())} / 10
                    </Text>
                    <ProgressBar width = {150} style = {{marginTop: 5,}} progress = {daysBetween(new Date(getValidDate(myInfo.fecha)), new Date())/10} color = {openColor} />

                    <Text style = {{...estilos.titulo, fontSize: 15, color: 'white', marginTop: 8, textAlign: 'center'}}>
                        Kilometros recorridos
                    </Text>
                    <Text style = {{...estilos.titulo, fontSize: 12, color: 'white', textAlign: 'center'}}>
                        {myInfo.Distancia} KM / 10,000 KM
                    </Text>
                    <ProgressBar width = {150} style = {{marginTop: 5,}} progress = {myInfo.Distancia/10000} color = {openColor} />

                    <Text style = {{...estilos.titulo, fontSize: 15, color: 'white', marginTop: 8, textAlign: 'center'}}>
                        Posicion {myInfo.position+1} / {students.length}
                    </Text>
                  </View>
                }
            </View>
            <View style = {{width: '80%'}}>
              <TouchableOpacity onPress={toggleOpen} style={{...estilos.buttonHigh, backgroundColor: openColor}}>
                  <Text style = {{textAlign: 'center', color: 'white'}}>Close</Text>
              </TouchableOpacity>
              { Number(activitieNumber) > 6 &&
                <TouchableOpacity onPress={closeSession} style={{...estilos.buttonHigh, backgroundColor: openColor}}>
                    <Text style = {{textAlign: 'center', color: 'white'}}>Cerrar Sesión</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
        );
      };

    return (
        <MenuDrawer 
          open={showingDrawer} 
          drawerContent={drawerContent()}
          drawerPercentage={70}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
            <View style = {estilos.mainContainer}>
                <Text style = {estilos.titulo}>{loginTitle}</Text>
                <Text style = {estilos.subtitulo}>{Number(activitieNumber) > 8 ? 'Rankings': 'Pantalla de ingreso exitoso'}</Text>
                {Number(activitieNumber) < 9
                ?  <Text 
                    style = {{...estilos.subtitulo, color: 'black', marginTop: 20}}
                  >
                      Bienvenido
                  </Text>
                : <FlatList
                      style = {{width: '100%', height: '80%'}}
                      scrollEnabled
                      data = {topThree}
                      keyExtractor = {(item) => `${item.Codigo}-${item.id}` }
                      renderItem = {({item, index}) => {
                          return (
                              <RankingCard alumno = {item} place = {item.position ? item.position+1 : index+1} />
                          );
                      }}
                  />
                }
                <TouchableOpacity onPress={toggleOpen} style={{...estilos.buttonHigh, backgroundColor: openColor}}>
                    <Text style = {{textAlign: 'center', color: 'white'}}>Open</Text>
                </TouchableOpacity>
            </View>
        </MenuDrawer>
    );
}



export default LoginHomeDos;