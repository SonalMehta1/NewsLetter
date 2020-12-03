import * as React from 'react';
import { View,TouchableOpacity,Text,StyleSheet,a } from 'react-native';


import AppHeader from '../components/AppHeader'

export default class WeatherScreen extends React.Component {
  constructor(){
    super();
    this.state={
      weather:''
    };
  }

  getWeather=async()=>{
    var url='https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    
  }
  

  render() {
    return (
      <View>
       <AppHeader/>
       <View style={{margin:15}}>
       <Text> WEATHER </Text>
       
       </View>
      </View>
    );
  }
}

