import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';

import api from './../../../api.js';

export default class Home extends Component {
  state = {
    text: "",
    cidade: [],
    weather: [],
  }


  Buscar = async () => {
    const response = await api.get(`?q=${this.state.text},br&appid=ac2ef0fc491b2c7b39bc1b6b9908261b`);

    //console.log(response.data);
    this.setState({ cidade: response.data, weather: response.data.weather });
  }

  render() {

    return (
      <ImageBackground source={require("./app/img/china.png")} style={styles.container}>
      <View >
      <Text style={styles.welcome}>Descubra como está o tempo!</Text>
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
      <View style={styles.mostra}>
        <Text style={styles.resu}>{this.state.text}</Text>
        <Text style={styles.resu}>{this.state.cidade.base}</Text>
        <Text style={styles.resu}>Fuso Horario:{this.state.cidade.timezone}</Text>

        <Text>{this.state.cidade.cod}</Text>
        <Text>{this.state.weather.main}</Text>
        <Text>{this.state.weather.description}</Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mostra: {
   borderColor: 'white',
  },
  resu:{
    justifyContent: 'center',
    alignItems: 'center',
   
  }
});