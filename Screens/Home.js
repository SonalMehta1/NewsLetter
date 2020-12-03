import * as React from 'react';
import { View,TouchableOpacity,Text,StyleSheet,Image } from 'react-native';
import HoroscopeScreen from './Horoscope';
import JokeScreen from './Jokes';
import WeatherScreen from './Weather';
import TopNewsScreen from './TopNews';
import db from '../Config.js';

import AppHeader from '../components/AppHeader' 

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  }
  likePressed(){
    var like=db.ref('Rating'+'/')
    like.update({
      'likePressed':1
    })
  }
  dislikePressed(){
    var dislike=db.ref('Rating'+'/')
    dislike.update({
      'dislikePressed':1
    })
  }

  incrementLike=()=>{
    this.setState({like:this.state.like+1});
  }
  incrementDislike=()=>{
    this.setState({dislike:this.state.dislike+1});
  }

  render() {
    return (
      <View>
       <AppHeader/>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('JokeScreen')}>
      <Text>Jokes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HoroscopeScreen')}>
      <Text>Horoscope</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('WeatherScreen')}>
      <Text>Weather</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('TopNewsScreen')}>
      <Text>Top News</Text>
      </TouchableOpacity>

      <Text style={{alignSelf:'center',marginTop:65}}>Rate Us</Text>
      <View style={{display:"flex",flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
      <TouchableOpacity
       onPress={()=>{
         this.likePressed(),this.incrementLike()
        }}>
        <Text style={{marginLeft:35,marginTop:25}}>{this.state.like}</Text>
      <Image source={require("../thumbsup.png")} style={{width:100,height:100}}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{
          this.dislikePressed(),this.incrementDislike()
        }}>
        <Text>{this.state.dislike}</Text>
      <Image source={require("../thumbsdown.png")} style={{width:50,height:50,marginTop:20}}/>  
      </TouchableOpacity>

      </View> 

      </View>
    );
  }
}

const styles=StyleSheet.create({
  button:{
    backgroundColor:'violet',
    margin:20,
    padding:10,
    borderColor:'black',
    borderRadius:25,
    width:150,
    alignSelf:'center',
    alignItems:'center'
  }
})