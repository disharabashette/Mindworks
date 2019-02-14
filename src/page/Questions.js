import React, { Component } from 'react';
import {
  StyleSheet, ProgressBarAndroid,
  Text, Spinner,Alert,
  View, ScrollView,ActivityIndicator,
  Button, Image
  , TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Tile } from 'react-native-elements';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CountDown from 'react-native-countdown-component';
import { Header } from 'react-native-elements';
import moment from 'moment';
import md5 from "react-native-md5";
import base64 from "base-64";
import { Title } from 'native-base';
import * as Progress from 'react-native-progress';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DisplayQuestions from './DisplayQuestions.js';
var Option = [
  { label: "Not at all ", value: 0 },
  { label: "Rarely  ", value: 1 },
  { label: "Sometimes  ", value: 2 },
  { label: "Often  ", value: 3 },
  { label: "Most of the time  ", value: 4 },

];
// import {Text} from 'react-elements';
export default class Questions extends Component {
  constructor() {
    super();

    this.state = {
      response: {},
      // lastQuestion: 0,
      data: [],
      selectedOptionsResponse: [],

    };
    this.getData = this.getData.bind(this);
    this.buttonDisplay = this.buttonDisplay.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.showScore = this.showScore.bind(this);
    // this.displayQuestions = this.displayQuestions.bind(this);
  }
  /* componentDidMount() {
     
     this.timeoutHandle = setTimeout(() => {
       Actions.bmi()
     }, 122000);
   }
 
   componentWillUnmount() {
     clearTimeout(this.timeoutHandle); 
   }*/

  async getData() {
    let username = "kmohankumar@gmail.com";
    let pass = "test123";
    let localts = moment().format("YYYY-MM-DD HH:mm:ss");
    let id = 1;
    var stringForKey = username + localts + "keY";

    let key = base64.encode(md5.str_md5(stringForKey));

    var key3 = encodeURIComponent(key);
    console.log("key3", key3);

    let body = {
      tag: "assessmentQn",
      username: username,
      localts: localts,
      key: key3,
      id: id,
    };

    let formData = new FormData();
    formData.append("tag", "assessmentQn");
    formData.append("username", username);
    formData.append("localts", localts);
    formData.append("key", key);
    formData.append("id", id);


    console.log("body", body);
    console.log("form", formData);

    let response = await fetch("http://www.awakenm.com/mwapi/corp/api360.php", {
      method: "POST",
      body: formData
    });

    const content = response.json();
    //this.setState({response:content});
    console.log(content);
    content.then(data => {
      this.setState({ response: data });
      console.log(this.state.response);
    });
    // console.log(this.state.response);
    //return content;
  }


  // async sendData() {
  //   let username = "kmohankumar@gmail.com";
  //   let pass = "test123";
  //   let localts = moment().format("YYYY-MM-DD HH:mm:ss");
  //   let id = 1;
  //   var stringForKey = username + localts + "keY";

  //   let key = base64.encode(md5.str_md5(stringForKey));

  //   var key3 = encodeURIComponent(key);
  //   console.log("key3", key3);

  //   let body = {
  //     tag: "assessmentResp",
  //     username: username,
  //     localts: localts,
  //     key: key3,
  //     id: id,
  //     response:data,
  //   };

  //   let formData = new FormData();
  //   formData.append("tag", "assessmentResp");
  //   formData.append("username", username);
  //   formData.append("localts", localts);
  //   formData.append("key", key);
  //   formData.append("id", id);
  //   formData.append("response", data);


  //   console.log("body", body);
  //   console.log("form", formData);

  //   let response1 = await fetch("http://www.awakenm.com/mwapi/corp/api360.php", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const content = response1.json();
  //   //this.setState({response:content});
  //   console.log(content);
  //   content.then(data => {
  //     this.setState({ response1: data, lastQuestion:(data.data.length>10 ? 10 : data.data.length) });
  //     console.log(this.state.response1);
  //   });
  //   // console.log(this.state.response);
  //   //return content;
  // }


  componentDidMount() {
    this.getData();
    //this.sendData();
    //this.displayQuestions();
  }



  // displayQuestions() {
  //   if (this.state.response.data !== undefined) {
  //     let viewsArray = [];
  //     for (let i = 0; i < 10; i++) {
  //       viewsArray.push (
  //         <View>

  //           <Text style={styles.label1}> {i + 1}. {this.state.response.data[i].Qn}</Text>

  //           <RadioForm
  //             radio_props={Option}
  //             formHorizontal={true}
  //             onPress={(value) => { }}
  //             labelHorizontal={false}
  //           />

  //         </View>
  //       )
  //     }
  //     return viewsArray;
  //   };


  //   //return this.state.response.data.map(( question, index) => {


  //   //   return (

  //   //     <View>

  //   //       <Text style={styles.label1}> { index+1} {question.Qn}</Text>

  //   //       <RadioForm


  //   //         radio_props={Option}
  //   //         formHorizontal={true}
  //   //         onPress={(value) => { }}
  //   //         labelHorizontal= {false}

  //   //       />
  //   //       <Text>

  //   //       </Text>
  //   //     </View>
  //   //   );
  //   // });
  //   //}
  // }
  async showScore(){
    // data = {
    //   response: this.state.selectedOptionsResponse,
    // }
    // let data = {
    //   response: [1, 2, 2, 3, 3, 3, 2, 1, 1, 2, 2, 3, 3, 3, 2, 1, 0, 0, 1, 1, 2, 2, 4, 4, 3, 3, 1, 1, 2],
    // }
    console.log(this.state.selectedOptionsResponse);
    let username = "kmohankumar@gmail.com";
    let pass = "test123";
    let localts = moment().format("YYYY-MM-DD HH:mm:ss");
    let id = 1;
    var stringForKey = username + localts + "keY";

    let key = base64.encode(md5.str_md5(stringForKey));

    var key3 = encodeURIComponent(key);
    console.log("key3", key3);

    let body = {
      tag: "assessmentResp",
      username: username,
      localts: localts,
      key: key3,
      id: id,
      // data: data,
    };

    let formData = new FormData();
    formData.append("tag", "assessmentResp");
    formData.append("username", username);
    formData.append("localts", localts);
    formData.append("key", key);
    formData.append("id", id);
    // formData.append("data", data);


    console.log("body", body);
    console.log("form", formData);

    let response1 = await fetch("http://www.awakenm.com/mwapi/corp/api360.php", {
      method: "POST",
      body: formData,
     // response: [1, 2, 2, 3, 3, 3, 2, 1, 1, 2, 2, 3, 3, 3, 2, 1, 0, 0, 1, 1, 2, 2, 4, 4, 3, 3, 1, 1, 2],
      response : this.state.selectedOptionsResponse,
    });

    const content = response1.json();
    //this.setState({response:content});
    // console.log(content);
    return content.then(apiresponse => {
      // this.setState({ response1: data, lastQuestion: (data.data.length > 10 ? 10 : data.data.length) });
      console.log(apiresponse);
      return apiresponse;
    });
    
  };

  buttonDisplay() {
    if (this.state.response.data !== undefined) {
      //  if(this.state.lastQuestion !== this.state.response.data.length){
      //   return (<Button
      //   onPress={() => this.handleNext()} 
      //   title="  Next  "
      //   color="#2196f3"
      // />);
      // } else {
      return (<Button
        
        onPress={() => {
          this.showScore().then(result => {
            let score = result.score;
            Alert.alert(
              'Your Score: ',
              ''+score,
              [
                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'OK', onPress: () => Actions.bmi()},
              ],
              { cancelable: false }
            )
          })
         }}
        title="  Finish  "
        color="green"
      />);


      // }
    }
    return (
      <ActivityIndicator size="small" color="#00ff00" />
      //<Spinner visible={this.state.loading} />
    )
    // if(this.state.lastQuestion !== this.state.response.data.length ){
    //   return (<Button
    //   onPress={() => this.handleNext()}
    //   title="  Next  "
    //   color="green"
    // />);
    // }
    // else{
    //   <Button
    //     onPress={() => this.bmi()}
    //     title="  Finish  "
    //     color="green"
    //   />
    // }

    // {/* <Button
    //         onPress={() => Actions.bmi()}
    //         title="  Finish  "
    //         color="green"
    //       /> */}
    // )

  }
  handleOnPress(event, index) {
    // console.log(index, event);
    // this.setState()
    let a = this.state.selectedOptionsResponse.slice(); //creates the clone of the state
    a[index] = event;
    // console.log(a)
    this.setState({ selectedOptionsResponse: a });
    // console.log(this.state.selectedOptionsResponse);
  }
  render() {

    return (

      <View style={{ flex: 1 }}>
        <Header backgroundColor='#45CE30'

          centerComponent={{ text: 'Awaken Mindfulness', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
        />

        <View style={styles.container1}>

          <Title style={styles.welcome}>Mental Health Assessment</Title>
          {/* <Progress.Bar progress={.33} width={300}
          /> */}
          <Text style={styles.label1}>
            Over the last two weeks, have you noticed the following?
        </Text>
          <Text>


          </Text>

          <ScrollView>

            <Text>

            </Text>
            <DisplayQuestions questionData={this.state.response} response={this.state.selectedOptionsResponse} handleOnPress={this.handleOnPress} />

            {this.buttonDisplay()}
            {/* <Button
                onPress={() => this.handleNext()}
                title="  Finished  "
                color="green"
              /> */}

          </ScrollView>




        </View>

      </View>
    );
  }
}

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



//{()=>{this.state.response.then(result => result.data.map(question =>{<Text style={styles.label}>{question.qn}</Text>} ))}}
// {this.displayQuestions()}
// questionData ={this.state.response} lastQuestion = {this.state.lastQuestion} handleNext = {this.handleNext}
// return (<Button
//   onPress={() => this.showScore()}
//   title="  Finish  "
//   color="green"
// />);