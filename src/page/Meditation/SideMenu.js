/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, StyleSheet,Text,LayoutAnimation, UIManager, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Item, Input, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Icon ,Button,} from 'react-native-elements';
// Our custom files and classes import
// import SideMenuSecondLevel from './SideMenuSecondLevel';
// import Text from './Text';

export default class SideMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        search: "",
        searchError: false,
        subMenu: false,
        subMenuItems: [],
        clickedItem: ''
      };

      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return(
          <ScrollView style={styles.container}>
              {this.renderMenu()}
          </ScrollView>
    );
  }

  renderMenu() {
    if(!this.state.subMenu) {
      return(
        <View>
          <Text> login</Text>
          <Button></Button>
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
        </View>
       
      );
    }
  
  }

  


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  },
  textStyle: {

    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});