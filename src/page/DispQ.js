import React, { Component } from 'react';
import {
  StyleSheet, ProgressBarAndroid,
  Text,FlatList,
  View, ScrollView,
  Button, Image
  , TouchableOpacity
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { RefCountDisposable } from 'rx';
class DisplayQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: [],
        };
    }


}