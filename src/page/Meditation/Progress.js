import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button, Icon, Header } from 'react-native-elements';
//import {} from 'react-native-vector-icons';


import { Container, Content, View, Left, Right, Card, CardItem, cardBody } from 'native-base';


const rightButtonConfig = {
   
    icon: 'home', color: '#fff',
    onPress: () => Actions.start()
  };
  const leftButtonConfig = {
    icon: 'arrow-back', color: '#fff',
    onPress: () => Actions.art()
  };

export class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [' Age ', ' Sex ', ' Height ', ' Weight '],
            tableData: [
              [' ', ' ', ' ', ' '],
             
            ]
          }

    }

    render() {



        return (

            <View style={styles.container1}>
                <Header backgroundColor='#45CE30' 
          leftComponent={leftButtonConfig}
          rightComponent={rightButtonConfig}
          centerComponent={{ text: 'Awaken Mindfulness', style: { color: '#fff' ,fontSize :18 ,fontWeight: 'bold'} }}
        

        />
                <View style={styles.container}>



                    <Image
                        style={{ width: 66, height: 58, borderRadius: 90, borderColor: '#FE9001' }}
                        source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1545988891/done.png' }}
                    />
                    <View>
                        <Text>


                        </Text>
                    </View>
                    <Text style={styles.text}>
                        I am the best!
        </Text>
                    <Text>

                    </Text>
                    <Text style={styles.text1}>
                        I have Meditated for
        </Text>
                    <View style={{flex:1, backgroundColor:'#45CE30'}}>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>

                        <Button
                            title={<Text style={styles.textStyle}> My Score:  </Text>}
                            onPress={() => Actions.express()}
                            buttonStyle={{
                                backgroundColor: "#FE9001",
                                width: 1000,
                                height: 40,

                            }}
                            backgroundColor="#aaa"
                        />
                        <Text>

                        </Text>
                        <Button
                            title={<Text style={styles.textStyle1}> View points split  </Text>}
                            onPress={() => Actions.express()}
                            buttonStyle={{
                                backgroundColor: "#B3B5B0",
                                width: 1000,
                                height: 40,

                            }}
                            backgroundColor="#aaa"
                        />


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

        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    textStyle1: {

        fontSize: 12,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    img:
    {
        //marginTop:100,


        width: 66, height: 58,
    },
    text: {

        fontSize: 20,
        textAlign: 'center',
        color: '#FE9001',
        width: 500, height: 25,
    },
    text1: {

        fontSize: 15,
        textAlign: 'center',
        color: '#FE9001',
        width: 500, height: 30,
    },
    img: {
        //marginTop:100,


        width: 66, height: 58,
        backgroundColor: '#FEB12C',
        borderColor: '#FEB12C',
        //borderSize : 5,
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
      },
    
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'green',
      },
      title: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#ffa500',
      },
      textLabel: {
        fontSize: 20,
      },
});

export default Progress;