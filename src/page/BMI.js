import React, { Component } from 'react';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Button } from 'react-native-elements';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import md5 from "react-native-md5";
import base64 from "base-64";
//import md5 from 'md5';

var Sex = [
  { label: "male  ", value: 0 },
  { label: "female  ", value: 1 },
  { label: "other  ", value: 2 },
];
class BMI extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      weight: 0,
    };
  }

  containerTouched(e) {
    this.refs.height.blur();
    this.refs.weight.blur();
    return false;
  }

  calcBmi(e) {
    var { height, weight } = this.state;
    var h = height.trim() / 100;

    var bmi = (weight / (h * h)).toFixed(2);
    var result = `Your BMI = ${bmi}`;


    this.setState({ result });
    
    //this.result(()=>Actions.results());


  }
 
  componentDidMount()
  {
    this.getData();
  }

  async getData() {
    let username = "kmohankumar@gmail.com";
    let pass = "test123";
    let localts = moment().format("YYYY-MM-DD HH:mm:ss");
    var stringForKey = username + localts + "keY";
    let key = base64.encode(md5.str_md5(stringForKey));
    

    var key3 = encodeURIComponent(key);
    console.log("key3", key3);

    let body = {
      tag: "calcBMI",
      username: username,
      localts: localts,
      key: key3,
      height: "175",
      weight: "70",
      sex: "M",
      age: "25"
    };

    let formData = new FormData();
    formData.append("tag", "calcBMI");
    formData.append("username", username);
    formData.append("localts", localts);
    formData.append("key", key);
    formData.append("height", "175");
    formData.append("weight", "70");
    formData.append("sex", "M");
    formData.append("age", "25");

    console.log("body", body);
    console.log("form", formData);

    let response = await fetch("http://www.awakenm.com/mwapi/corp/api360.php", {
      method: "POST",
      body: formData
    });

    const content =  response.json();
    console.log("response", content);
  }

  render() {
    return (

      <View
        style={styles.rootContainer}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
        
      >
      
      
        <Text style={styles.title}>
          BmiCalculator
        </Text>
        <Image
                            style={styles.img}
                            source={{ uri: 'https://res.cloudinary.com/devurubyh/image/upload/v1550226778/bmi.png' }}
                        />
        <Card style={[styles.card, styles.card]}>
         
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Age:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Year"

          />
       
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Sex:
          </Text>

        </View>

        <RadioForm
          radio_props={Sex}
          formHorizontal={true}
          onPress={(value) => { }}
          
          
        />


        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Height:
          </Text>
          <TextInput
            style={styles.textInput}
            //keyboardType="string"
            onChangeText={(height) => this.setState({ height })}
            value={this.state.height}
            ref="height"
            placeholder="cm"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Weight:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(weight) => this.setState({ weight })}
            value={this.state.weight}
            ref="weight"
            placeholder="kg"
          />

        </View>
        <Text>  </Text>
        <Button

          title={<Text style={styles.subtitle}> Submit </Text>}
          buttonStyle={{
            backgroundColor: "green",
            width: 100,
            height: 40,
            borderColor: "transparent",
            borderWidth: 2,
            borderRadius: 30,
            borderColor: '#92bbff',
          }}

          backgroundColor="#aaa"
          onPress={this.calcBmi.bind(this)}
        >
          Press me to calculate your BMI
        </Button>
        <Text style={styles.textResult}>
          {this.state.result}
        </Text>
        
         </Card>
       

      <Button
          onPress={() => Actions.modules()}
          title={<Text style={styles.subtitle}> Next </Text>}
          buttonStyle={{
            backgroundColor: "green",
            width: 200,
            height: 40,
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

var styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fafad2',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textLabel: {
    fontSize: 20,
  },
  textResult: {
    paddingTop: 20,
    fontSize: 20,
  },
  calcButton: {
    marginTop: 20,
  },
  textInput: {
    marginLeft: 10,
    padding: 5,
    height: 30,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#F3F2F2',
  },
  img: {

    justifyContent: 'center', alignItems: 'center',
    borderRadius: 30,
    width: 66, height: 66,
},
  card: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.5,
    justifyContent: 'center', alignItems: 'center',
},
});


export default BMI;


/*
fetch('https://myntra-clone.myshopify.com/admin/products.json', {
      method: 'GET',
      headers: new Headers({
        'X-Shopify-Access-Token': '98b5c4001fd4c42b4f7afa01b596bbb5',
      }),
      //json: true,
    }).then(response => response.json())
    .then(response => {
      console.log(response);
      if(response.products.length === 0) {
      } else {
        response.products.forEach(product => {
          let result = this.createProducts(product);
          displayProducts.push(result);
        })
        this.setState({items: displayProducts});
      }
    })
      .catch((error) => {
        console.error(error);
      }) 
*/