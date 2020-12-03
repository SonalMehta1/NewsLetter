import * as React from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'

export default class TopNewsScreen extends React.Component {
  render() {
    return (
      <View>
       <AppHeader/>
       <View style={{margin:15}}>
       <Text> NEWS </Text>
       <Text>
       India's Daily Covid Cases Below 30,000 For First Time In Over 4 Months.
       India Covid-19 Cases: 29,163 fresh COVID-19 cases in India, lowest daily rise in over four months; 88.74 lakh total cases so far,       1,30,519 deaths.
       </Text>
       </View>
      </View>
    );
  }
}

