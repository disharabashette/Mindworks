import React, { Component } from 'react';
import {
  StyleSheet, ProgressBarAndroid,
  Text, FlatList,
  View, ScrollView,
  Button, Image
  , TouchableOpacity
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { RefCountDisposable } from 'rx';

var Option = [
  { label: "Not at all ", value: 0 },
  { label: "Rarely  ", value: 1 },
  { label: "Sometimes  ", value: 2 },
  { label: "Often  ", value: 3 },
  { label: "Most of the time  ", value: 4 },

];
class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.response,
    };
    console.log(this.props.response);
    //this.getData = this.getData.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);
  }
  _keyExtractor = (item, index) => index;

  displayQuestions(questionData) {
    if (questionData.data !== undefined) {
      console.log(questionData.data);
      console.log('this is display questions');
      // questionsData.map(question =>console.log(question.Qn));
      return (
        <FlatList
          data={questionData.data}
          keyExtractor={this._keyExtractor}
          renderItem={({ item, index }) => 
          <View>
          <Text>{(index + 1) + '. ' + item.Qn}</Text>
            <RadioForm
              radio_props={Option}
              formHorizontal={true}
              onPress={(event) => this.props.handleOnPress(event, index)}
              labelHorizontal={false}
            />
            </View>}
        />
      )


    } else {
      return null;
    }

  }

  render() {
    return (this.displayQuestions(this.props.questionData) || null);
  }
}

export default DisplayQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafad2',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafad2',


  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafad2',
  },
  label1: {

    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'System',
    color: 'black',
    backgroundColor: 'transparent',
  },
  label: {

    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'System',
    color: '#A6A4A4',
    backgroundColor: 'transparent',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent'
  }
});


//this.props.questionData === {}) ? null: this.displayQuestions(this.props.questionData, this.props.lastQuestion)
//(i,value) => this.onPress(i,value)