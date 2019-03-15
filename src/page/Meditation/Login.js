
import React, { Component } from 'react';
import { Container, View, Left, Right,  Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
//import {} from 'react-native-vector-icons';
import {Button,Icon} from 'react-native-elements';
//import { ScrollView} from 'react-native';
import { StyleSheet, Image  } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import Text from './Text';
import moment from 'moment';
import md5 from "react-native-md5";
import base64 from "base-64";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            hasError: false,
            errorText: '',
            user:'',
            pw:'',
        };
    }

    // componentDidMount()
    // {
    //   this.getData();
    // }
  
    async getData() {
      //let user = "kmohankumar@gmail.com";
     // let pw = "test123";
      let user=this.user;
      let pw=this.pw;
      var stringForKey = user + pw + "keY";
      let key = base64.encode(md5.str_md5(stringForKey));
      
  
      var key3 = encodeURIComponent(key);
      console.log("key3", key3);
  
      let body = {
        //tag: "login",
        user: user,
        pw:pw,
        key: key3,
       
      };
  
      let formData = new FormData();
      //formData.append("tag", "login");
      formData.append("user", user);
      formData.append("pw", pw);
      formData.append("key", key);
     
  
      console.log("body", body);
      console.log("form", formData);
  
      let response = await fetch("http://www.awakenm.com/mwapi/corp/login.php", {
        method: "POST",
        body: formData
      });
  
      const content =  response.json();
      console.log("response", content);
      return content;
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
                            <Icon active name='email' type= 'material communityIcons' style={{color: '#687373'}} />
                            <Input placeholder='Email' onChangeText={(text) => this.setState({ user: text })} placeholderTextColor="#687373" />
                        </Item>


                        <Item>
                            <Icon  name='lock' type='entypo' style={{ color: "#687373" }} />
                            <Input placeholder='Password' onChangeText={(text) => this.setState({ pw: text })} secureTextEntry={true} placeholderTextColor="#687373" />
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
       let response = this.getData();
       console.log(response);
       //Actions.meditation();
     

       // this.setState({ hasError: true, errorText: 'Invalid email or password !' });
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

// sapna@awakenm.com
// sapna54321