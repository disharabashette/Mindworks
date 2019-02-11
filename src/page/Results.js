import React, { Component } from 'react';

import { StyleSheet,Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';  
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {Button} from 'react-native-elements';
var graph = [
  { label: "Stress ", value: 0 },
  { label: "BMI ", value: 1 },
  
];

export class Results extends Component {
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
    const state = this.state;
  return (
   
    <View style={styles.container1}>
       <Text style={styles.textLabel}>
       Profile
          </Text>

          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
       
        
        <Text style={styles.textLabel}>
   
   </Text>
      
    

    <View style={styles.inputContainer1}>
          <Text style={styles.textLabel}>
          Graph 
          </Text>

        </View>

        <RadioForm
          radio_props={graph}
          formVertical={true}
          onPress={(value) => { }}
        />
  <Button
          onPress={() => Actions.modules()}
          title={<Text style={styles.subtitle}> Next </Text> }
          buttonStyle={{
            backgroundColor: "white",
            width: 100,
            height: 40,
           justifyContent: "center",
            borderColor: "transparent",
            borderWidth: 2,
            borderRadius: 30,
            borderColor: '#92bbff',
          }}
          backgroundColor="#aaa"
          
        />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafad2',
    padding: 16, 
  paddingBottom: 30, 
  },
  container1: { 
  flex: 1, 
  padding: 16, 
  paddingTop: 30, 
  backgroundColor: '#fafad2' 
},
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff' 
  },
  text: { 
    margin: 6 
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
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default Results;