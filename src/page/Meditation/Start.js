import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button, Icon, Header } from 'react-native-elements';
//import {} from 'react-native-vector-icons';


import { Container, Content, View, Left, Right, Card, CardItem, cardBody } from 'native-base';

const rightButtonConfig = {
  title: '>',
  icon: 'arrow-back', color: '#fff',
  handler: () => Actions.start()
};
const leftButtonConfig = {
  icon: 'menu', color: '#fff',
  onPress: () => Actions.sideMenu()
};


export class Start extends Component {
  constructor(props) {
    super(props);

  }

  render() {



    return (

      <View style={styles.container1}>

        <Header backgroundColor='#45CE30'
          leftComponent={leftButtonConfig}


        />

        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543386664/logo.jpg' }}
          />
          <View>
            <Text>


            </Text>
          </View>
          <Text style={styles.text}>
            Awaken the Art of Mindfulness
        </Text>
          <Text style={styles.text1}>
            Your personal journey towards a clean and happy mind
        </Text>
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }} >
            <Button title={<Text style={styles.textStyle}> Login </Text>}
              onPress={() => Actions.login()}
              buttonStyle={{
                backgroundColor: '#F27522',
                width: 300,
                height: 30,
                borderColor: "transparent",
                borderWidth: 2,
              }}
            />
            <Text>

            </Text>
            <Button title={<Text style={styles.textStyle}> Register </Text>}
            onPress ={() => Actions.register()}
              buttonStyle={{
                backgroundColor: '#F27522',
                width: 300,
                height: 30,
                borderColor: "transparent",
                borderWidth: 2,
              }} />
          </View>
          <View style={styles.bottomView} >
            <Button
              title={<Text style={styles.textStyle}> The Art </Text>}
              onPress={() => Actions.art()}

              buttonStyle={{
                backgroundColor: "white",
                width: 100,
                height: 40,
                borderColor: "transparent",
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#92bbff',
              }}
              backgroundColor="#aaa"
            ><Image
                style={styles.img}
                source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543386664/logo.jpg' }}
              />

            </Button>
            <Button
              title={<Text style={styles.textStyle}> Express </Text>}
              onPress={() => Actions.express()}
              buttonStyle={{
                backgroundColor: "white",
                width: 100,
                height: 40,
                borderColor: "transparent",
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#92bbff',
              }}
              backgroundColor="#aaa"
            />
            <Button
              title={<Text style={styles.textStyle}> Progress </Text>}
              onPress={() => Actions.progress()}
              buttonStyle={{
                backgroundColor: "white",
                width: 100,
                height: 40,
                borderColor: "transparent",
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#92bbff',
              }}
              backgroundColor="#aaa"
            />
            <View>
              <Text>


              </Text>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafad2',
    padding: 16,
    paddingBottom: 30,
  },
  container1: {
    flex: 1,
    backgroundColor: '#fafad2',
  },
  bottomView: {

    flex: 3,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#fafad2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },

  textStyle: {

    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  img: {
    //marginTop:100,


    width: 66, height: 58,
  },
  text: {
    backgroundColor: '#45CE30',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    width: 500, height: 25,
  },
  text1: {
    backgroundColor: '#45CE30',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    width: 500, height: 30,
  }

});

export default Start;