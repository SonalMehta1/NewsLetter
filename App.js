import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HoroscopeScreen from './Screens/Horoscope';
import JokeScreen from './Screens/Jokes';
import WeatherScreen from './Screens/Weather';
import TopNewsScreen from './Screens/TopNews';
import HomeScreen from './Screens/Home';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    ); 
  }
}
 
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen,
  WeatherScreen: WeatherScreen,
  TopNewsScreen: TopNewsScreen
});

const AppContainer = createAppContainer(AppNavigator);

