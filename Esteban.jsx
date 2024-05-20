import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import Foto from './assets/esteban.jpg';
import Foto2 from './assets/escuderia.png';
import Foto3 from './assets/esteban_comemorando.jpg';
import Foto4 from './assets/esteba_e_pierre.jpg';
import escuderia from './assets/escuderia.png';


export default function Esteban() {

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Image
          source={Foto}
          style={estilo.avatar}
        />
        <Text style={estilo.nome}>
        Esteban Ocon
        </Text>
        <View>         
        <Text style={estilo.bio}>
        Esteban Ocon inicia o seu quinto ano com a equipa na temporada de 2024 do Campeonato do Mundo FIA de Fórmula 1. O francês estás prestes a disputar a sua sétima campanha completa na elite. Ocon conhece bem a família de Enstone e de Viry-Châtillon, pois foi o piloto de reserva da escuderia em 2016. Anteriormente, tinha pertencido à Lotus Junior Team, com a qual se sagrou Campeão da Europa FIA da Fórmula 3 em 2014, antes de ser titular na GP3 Series no ano seguinte. Com vinte e seis anos, conta com 133 partidas e 422 pontos na sua carteira desde o seu início no Grande Prémio da Bélgica em 2016. 
        </Text>
      </View>
        <View style={estilo.View}>
          <View style={estilo.vDentro}>
            <Image
              source={Foto4}
              style={estilo.pg}
            />
          </View>
          <View style={estilo.vDentro}>
            <Image
              source={Foto2}
              style={estilo.pg}
            />
          </View>
          <View style={estilo.vDentro}>
            <Image
              source={Foto3}
              style={estilo.pg}
            />
          </View>
        </View>
        <Text style={estilo.nomee}>
        Escuderia Alpine
        </Text> 
        <View>
        <Text style={estilo.bio}>
        A marca de carros Alpine foi criada em 1954. Jean Rédélé, o fundador da Alpine, era originalmente um proprietário de garagem em Dieppe que começou a ter sucesso no automobilismo com um dos poucos carros franceses produzidos logo após a Segunda Guerra Mundial, o Renault 4CV.
        </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1,
    marginTop: 0,
    justifyContent:'flex-start', 
    alignItems:'center',
    backgroundColor: '#FF8EF5'
  },
  bio:{
    fontSize: 18,
    margin: 30
  },
  avatar:{
    width:200,
    height:200,
    borderWidth: 1,
    borderTopColor: "#000",
    marginTop:50
    /// borderBottomColor:"#ff0",   
  },
  nome:{
    fontSize: 20,
  },
  pg:{
    width:120,
    height:120,
    borderWidth: 1,
    borderTopColor: "#000",
    /// borderBottomColor:"#ff0",
  },
  View:{
    flexDirection:'row'
  },
vDentro:{
  alignItems:'center',
  margin:5
},
nomee:{
  marginTop:25,
  fontSize: 20
},
}); 

