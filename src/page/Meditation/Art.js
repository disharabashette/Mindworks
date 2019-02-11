import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button, Icon, Header, Card,} from 'react-native-elements';
//import {} from 'react-native-vector-icons';
//import NavigationBar from 'react-native-navbar';

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

            <View style={styles.container1}>
             <Header backgroundColor='#45CE30' 
          leftComponent={leftButtonConfig}
          rightComponent={rightButtonConfig}
          centerComponent={{ text: 'Awaken Mindfulness', style: { color: '#fff',fontSize :18 ,fontWeight: 'bold'} }}
        

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
    <Text>
        </Text>
    <Button
          onPress={() => Actions.begin()}
          title="  Begin  "
          color="Black"
        />
        <Text>
        </Text>
    <Button
          onPress={() => Actions.bmi()}
          title="  Enter Coach Code  "
          color="Black"
        />
    
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