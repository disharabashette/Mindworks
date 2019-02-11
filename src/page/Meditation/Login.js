
import React, { Component } from 'react';
import { Icon,Container, View, Left, Right,  Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
//import {} from 'react-native-vector-icons';
import {Button,} from 'react-native-elements';
//import { ScrollView} from 'react-native';
import { StyleSheet, Image  } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CountDown from 'react-native-countdown-component';
import Colors from './Colors';
import Text from './Text';
import Navbar from './Navbar';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasError: false,
            errorText: ''
        };
    }


    render() {


        return (
            <Container style={{ backgroundColor: '#fafad2' }}>

                            
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>

                            
                    <Card style={[styles.card, styles.card]}>

                        <Image
                            style={styles.img}
                            source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543386664/logo.jpg' }}
                        />
                        <Text style={{ color: 'black', fontSize: 20 }}>  </Text>
                        <Text style={{ color: 'black' }}>  </Text>
                        <Text style={{ color: '#7CEC9F', fontSize: 20 }}> Login </Text>
                        <Item>
                            <Icon Actions name='mail' type='entypo' style={{ color: "#687373" }} />
                            <Input placeholder='Email' onChangeText={(text) => this.setState({ email: text })} placeholderTextColor="#687373" />
                        </Item>


                        <Item>
                            <Icon  name='lock' type='entypo' style={{ color: "#687373" }} />
                            <Input placeholder='Password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} placeholderTextColor="#687373" />
                        </Item>


                        {this.state.hasError ? <Text style={{ color: "#c0392b", textAlign: 'center', marginTop: 10 }}>{this.state.errorText}</Text> : null}


                        <View style={{ alignItems: 'center' }}>


                            <Button onPress={() => this.login()}
                                title={<Text style={styles.subtitle}> Start </Text>}>

                            </Button>
                        </View>
                    </Card>
                </View>
            </Container>
        );
    }

    login() {
        /*
          Remove this code and replace it with your service
          Username: this.state.username
          Password: this.state.password
        */
        this.setState({ hasError: true, errorText: 'Invalid email or password !' });
    }


}
const styles = StyleSheet.create({

    card: {
        width: 300,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        justifyContent: 'center', alignItems: 'center',
    },
    textStyle: {

        fontSize: 10,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    img: {

        justifyContent: 'center', alignItems: 'center',

        width: 66, height: 58,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
});

