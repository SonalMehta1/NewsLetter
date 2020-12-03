import * as React from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'

export default class HoroscopeScreen extends React.Component {
  render() {
    return (
      <View>
       <AppHeader/>
       <View style={{margin:20}}>
       <Text style={{marginBottom:10}}>HOROSCOPE</Text>
       <Text  style={{marginBottom:10}}>
       A horoscope is an astrological chart or diagram representing the positions of the Sun, Moon, planets, astrological aspects and   
       sensitive angles at the time of an event, such as the moment of a person's birth. The word horoscope is derived from the Greek 
       words ōra and scopos meaning "time" and "observer". 
       </Text>
       <Text>
       The order of the astrological signs is Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, 
       Aquarius and Pisces. Each sector was named for a constellation within it in the time of naming.
       </Text>
       </View>
      </View>
    );
  }
}

 