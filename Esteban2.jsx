import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import pic from './assets/pierre/pierre.jpg';
import pic2 from './assets/pierre/pierre.comemorando.jpg';
import Foto2 from './assets/escuderia.png';
import pic4 from './assets/pierre/esteba_e_pierre.jpg';



export default function Pierre() {

  return (
    <ScrollView>
    <View style={estilo.container}>
      <Image
        source={pic}
        style={estilo.avatar}
      />
      <Text style={estilo.nome}>
      Pierre Gasly
      </Text>
      <View>         
      <Text style={estilo.bio}>
      Pierre Jean-Jacques Gasly é um automobilista francês que atua na Fórmula 1 pela equipe Alpine. Ele disputou, e foi vice-campeão, da Fórmula Renault 3.5 Series em 2014, quando foi contratado pela equipe Arden no âmbito do programa Red Bull Junior Team. Gasly também venceu a temporada de 2016 da GP2 Series pilotando para a equipe da Prema Racing. Sua primeira vitória na Fórmula 1 ocorreu no Grande Prêmio da Itália de 2020. </Text>
    </View>
      <View style={estilo.View}>
        <View style={estilo.vDentro}>
          <Image
            source={pic4}
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
            source={pic2}
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
    margin: 30,
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
}
}); 

