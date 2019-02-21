import React, { Component } from 'react';
import { ScrollView ,Image,StyleSheet} from 'react-native';
import { Container, View, Left, Right, Button, Item, Input ,Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Icon} from 'react-native-elements';


export default class Register extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        name: '',
        username: '',
        password: '',
        rePassword: '',
        hasError: false,
        errorText: ''
      };
  }


  render() {
 
    return(
      <Container style={{backgroundColor: '#fafad2'}}>
        
        <ScrollView >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop: 20}}>
        <Image style={{justifyContent: 'center',alignItems: 'center',width: 70, height: 70,borderRadius: 70, }} 
          
          source={{uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1543386664/logo.jpg'}} /> 
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingLeft: 50, paddingRight: 50}}>
            <View style={{marginBottom: 35, width: '100%',justifyContent: 'center',}}>
           
              <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%'}}>Create your account, </Text>
              <Text style={{fontSize: 18, textAlign: 'left', width: '100%', color: '#687373'}}>Signup to continue </Text>
            </View>
            <Item>
                <Icon active name='email' type= 'material communityIcons' style={{color: '#687373'}} />
                <Input placeholder='Email' onChangeText={(text) => this.setState({email: text})} keyboardType="email-address" placeholderTextColor="#687373" />
            </Item>
            <Item>
                <Icon active name='person' type='materialIcons'  style={{color: '#687373'}} />
                <Input placeholder='Name' onChangeText={(text) => this.setState({name: text})} placeholderTextColor="#687373" />
            </Item>
            <Item>
                <Icon active name='person-pin-circle' type='materialIcons'  style={{color: '#687373'}} />
                <Input placeholder='Username' onChangeText={(text) => this.setState({username: text})} placeholderTextColor="#687373" />
            </Item>
            <Item>
                <Icon active name='lock' type='evilIcons' style={{color: '#687373'}} />
                <Input placeholder='Password' onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} placeholderTextColor="#687373" />
            </Item>
            <Item>
                <Icon active name='lock' type='evilIcons' style={{color: '#687373'}} />
                <Input placeholder='Repeat your password' onChangeText={(text) => this.setState({rePassword: text})} secureTextEntry={true} placeholderTextColor="#687373" />
            </Item>
            {this.state.hasError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null}
            <View style={{alignItems: 'center'}}>
              <Button onPress={() => this.signup()} style={{ marginTop: 20 ,backgroundColor: '#F2860A'}}>
                <Text style={{color: 'black'}}>Signup</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }

  signup() {
    if(this.state.email===""||this.state.name===""||this.state.username===""||this.state.password===""||this.state.rePassword==="") {
      this.setState({hasError: true, errorText: 'Please fill all fields !'});
      return;
    }
    if(!this.verifyEmail(this.state.email)) {
      this.setState({hasError: true, errorText: 'Please enter a valid email address !'});
      return;
    }
    if(this.state.username.length < 3) {
      this.setState({hasError: true, errorText: 'Passwords must contains at least 3 characters !'});
      return;
    }
    if(this.state.password.length < 6) {
      this.setState({hasError: true, errorText: 'Passwords must contains at least 6 characters !'});
      return;
    }
    if(this.state.password !== this.state.rePassword) {
      this.setState({hasError: true, errorText: 'Passwords does not match !'});
      return;
    }
    this.setState({hasError: false});
    Actions.home();
  }

  verifyEmail(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafad2',
  },

});
