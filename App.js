import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';

import api from './api.js';

export default class App extends Component {
  state = {
    text: "",
    cidade: [],
    weather: [],
    main: [],
    clouds: [],
    wind: [],
    sys: [],
  }


  Buscar = async () => {
    const response = await api.get(`?q=${this.state.text},br&appid=ac2ef0fc491b2c7b39bc1b6b9908261b`);

    //console.log(response.data);
    this.setState({ cidade: response.data, weather: response.data.weather,
       main: response.data.main, clouds: response.data.clouds,
       wind: response.data.wind, sys: response.data.sys});
  }

  render() {

    return (
      <ImageBackground source={require("./fundo.jpg")} style={styles.container}>
        <View style={{backgroundColor:'white', width:400, height:50, marginTop:-5}} >
          <Text style={{color: '#054f77', fontSize:20, paddingLeft:30, paddingTop:10}}>informações do tempo</Text>
        </View>
        <View style={{marginTop:70}} >
          <Text style={styles.welcome}>Descubra informações do clima!</Text>
          <View>
            <TextInput
            style={{ 
              height: 45, backgroundColor: '#FFF',  alignSelf: 'stretch', borderColor: '#EEE', paddingHorizontal: 20, borderRadius:20, marginBottom: 10, width:350 }}
              placeholder="Procure por sua Cidade"
            onChangeText={(text) => this.setState({text})}
          />
            <Button
          onPress={this.Buscar}
          title="Pesquisar"
          color="#841584"
          />
          </View>
          <View style={{marginLeft: 20, marginTop:20}}>
            <Text style={{marginLeft:110, color: "black",fontWeight: 'bold', fontSize:25, color: "white"}}>{this.state.text}</Text>
          
            <Text  style={{marginLeft:50, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.weather.main}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.cidade.timezone!=null?"Fuso Horario: "+this.state.cidade.timezone:""}</Text>


            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.main.temp!=null?"Pressão: "+this.state.main.temp:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.main.pressure!=null?"Pressão: "+this.state.main.pressure:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.main.humidity!=null?"Umidade: "+this.state.main.humidity:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.main.sea_level!=null?"Nivel do Mar: "+this.state.main.sea_level:""}</Text>
            
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.clouds.all!=null?"Nuvens: "+this.state.clouds.all:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.wind.speed!=null?"Velocidade do vento: "+this.state.wind.speed:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.wind.deg!=null?"Graus do vento: "+this.state.wind.deg:""}</Text>
            <Text style={{marginLeft:40, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.sys.sunrise!=null?"Nascer do sol: "+this.state.sys.sunrise:""}</Text>
            <Text  style={{marginLeft:50, color: "black",fontWeight: 'bold', fontSize:20, color: "white"}}>{this.state.weather.description}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold'
  
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  resu:{
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize:18
   
  }
});