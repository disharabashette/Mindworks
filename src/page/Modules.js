
import React, { Component } from 'react';

import { StyleSheet, Text, Linking,View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
export default class Modules extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
          <Button
            onPress={() => Linking.openURL('http://web2.awakenm.com.s3-website-us-west-2.amazonaws.com/#!/login')}
            title="Meditation"
            backgroundColor="#aaa"
            buttonStyle={{
              backgroundColor: "#25D366",
              width: 150,
              height: 170,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000000",
              shadowOpacity: 1.0,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 0
              }
            }}
          />
          <Button
            buttonStyle={{
              backgroundColor: "#25D366",
              width: 150,
              height: 170,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000000",
              shadowOpacity: 1.0,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 0
              }
            }}
            onPress={() => 'https://www.mindoula.com/mental-health-assessment/'}
            title="Activity "
            backgroundColor="#aaa"
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>

          <Button
            buttonStyle={{
              backgroundColor: "#25D366",
              width: 150,
              height: 170,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000000",
              shadowOpacity: 1.0,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 0
              }
            }}
            onPress={() => 'https://www.mindoula.com/mental-health-assessment/'}
            title="Sleep"
          />
          <Button
            buttonStyle={{
              backgroundColor: "#25D366",
              width: 150,
              height: 170,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000000",
              shadowOpacity: 1.0,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 0
              }
            }}
            onPress={() => 'https://www.mindoula.com/mental-health-assessment/'}
            title="Nutrition"
            backgroundColor="#aaa"
          />
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafad2',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'

  },
  // containe :{
  // flex:1,
  // justifyContent:'space-evenly',
  // }


});