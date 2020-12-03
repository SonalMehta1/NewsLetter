import * as React from 'react';
import { View,TouchableOpacity,Text,StyleSheet,u} from 'react-native';

import AppHeader from '../components/AppHeader'

export default class JokeScreen extends React.Component {
  render() {
    return (
      <View>
       <AppHeader/>
       <View style={{margin:30}}>
       <Text style={{marginBottom:5}}><u>JOKES</u></Text>
       <Text style={{marginBottom:7}}>
       A boy was crying on the road.
       A  policeman asked him, "What's the matter?".
       The boy answered, "It is something that has mass & occupies space."
       </Text>
       <Text style={{marginBottom:5}}>
       Why did the kid throw his clock out of the window?
       Because he wanted to see time fly.
       </Text>
       </View>
      </View>
    );
  }
}

