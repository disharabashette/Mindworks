import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ScrollView, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button, Icon, Header } from 'react-native-elements';
//import {} from 'react-native-vector-icons';


import { Container, Content, View, Left, Right, Card, CardItem, cardBody } from 'native-base';




export class Express extends Component {
    constructor(props) {
        super(props);

    }

    render() {



        return (

            <View style={styles.container1}>


                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1545988890/write.png' }}
                    />
                    <View>
                        <Text>


                        </Text>
                    </View>
                    <Text style={styles.text} >
                        Right now, I am feeling...
        </Text>
                    <TextInput
                        style={styles.textInput}


                        placeholder="( Please type e.g., Happy ,Sad ,Excited,Bored,Irrited ,Depressed etc. )"
                    />

                    <Text style={styles.text} >
                        I feel that way because...
        </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="( Please express what is the 'closest cause )"
                    />    
                     <Button
                    title={<Text style={styles.textStyle}> Submit </Text>}
                    
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
        paddingBottom: 50,
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

        fontSize: 10,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    img: {
        marginTop: 50,


        width: 66, height: 60,
    },
    text: {

        fontSize: 20,
        textAlign: 'center',
        color: 'black',

    },
    text1: {
        backgroundColor: '#45CE30',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        width: 500, height: 30,
    },
    textInput: {

    },

});

export default Express;