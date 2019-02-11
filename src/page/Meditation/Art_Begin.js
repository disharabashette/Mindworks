import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button,Header, Card,} from 'react-native-elements';
import { Icon, } from 'react-native-vector-icons';
import NavigationBar from 'react-native-navbar';

import { Container, Content, View, Left, Right,  CardItem, cardBody } from 'native-base';

const rightButtonConfig = {
   
    icon: 'home', color: '#fff',
    onPress: () => Actions.start()
  };
  const leftButtonConfig = {
    icon: 'arrow-back', color: '#fff',
    onPress: () => Actions.pop()
  };

  
export class Art extends Component {
    constructor(props) {
        super(props);

    }
    

    render() {

        

        return (

            <View >
                <Header backgroundColor='#45CE30' 
          leftComponent={leftButtonConfig}
          rightComponent={rightButtonConfig}
          centerComponent={{ text: 'Awaken Mindfulness', style: { color: '#fff' ,fontSize :18 ,fontWeight: 'bold'} }}
        

        />
          <View backgroundColor= '#D2D2D2'>  
    <Card backgroundColor= '#D2D2D2'>
        <Text textDecorationStyle='dotted' >
    You are on Level 1.Your reamining listening goals are:  
        </Text>
        <Text>

        </Text>
        <Text>
            1. Module 1:
                
                
        </Text>
        <Text>
       * Coach's guidance:0 time(s) more
        </Text>
        <Text>
        * Practice Mindfulness: 0 time(s) more 
        </Text>
        <Text>

                </Text>
        <Text>
        2. Module 2:
        </Text>
            <Text>
            * Coach's guidance:0 time(s) more
            </Text>

            <Text>
            * Practice Mindfulness: 2 time(s) more 
            </Text>



    </Card >
    </View>   
    <Text>
        </Text>
    <Button
          onPress={() => Actions.begin()}
          title="  MODULE 1  "
          color="Black"
          backgroundColor= "#F39933"
        />
        <Text>
        </Text>
    <Button
          onPress={() => Actions.bmi()}
          title="  MODULE 2  "
          color="Black"
          backgroundColor= "#F39933"
        />
    
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
    

    textStyle: {

        fontSize: 10,
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
    },


});

export default Art;