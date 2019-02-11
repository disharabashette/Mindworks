import React, { Component } from 'react';

import { StyleSheet,Text, View,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements';
const Home = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Beyond the Pills </Text>
   
      <Text style={styles.welcome}> 360 DEGREE DIAGNOSTICS AND CARE SYSTEM </Text>
      <Text style={styles.welcome}> NUTRITION | ACTIVITY |  MEDITATION </Text>
      <Image
          style={{width: 66, height: 58}}
          source={{uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543387239/life-care-centers.jpg'}}
        />
     <Text style={styles.welcome}>    </Text>
    <Image
          style={{width: 66, height: 58,borderRadius: 70}}
          source={{uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543387363/ShardaJain.jpg'}}
        />
 <Text style={styles.subsubtitle}> Dr. Sharda Jain, Chief Coach </Text>
      
      <Button
      onPress={() => Actions.questions()}
      title = {<Text style={styles.subtitle}> Start </Text> }
     
      buttonStyle={{
        backgroundColor: "white",
        width: 100,
        height: 40,
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#92bbff',
      }}
      backgroundColor= "#aaa"
     
    />

    <Text style={styles.subtitle}> Powered by </Text>
    <Image
          style={styles.img}
          source={{uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543386664/logo.jpg'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafad2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  subsubtitle: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  

  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ffa500',
  },
  img: {
   
    
    
    width: 66, height: 58,
  },
  
});

export default Home;