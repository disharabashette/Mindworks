import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Drawer, Actions } from 'react-native-router-flux';

//  kill -9 $(lsof -t -i:8081)

import Home from './page/Home';
import Questions from './page/Questions';
import Test from './page/Test';
import Flatlist from './page/flatlist';
import BMI from './page/BMI';
import Results from './page/Results';
import Modules from './page/Modules';
import Start from './page/Meditation/Start';
import Effect from './page/Meditation/Effect';
//import Login from './page/Meditation/Login';
import Art from './page/Meditation/Art';
import Express from './page/Meditation/Express';
import Progress from './page/Meditation/Progress';
import Art_Begin from './page/Meditation/Art_Begin';
import DisplayQuestions from './page/DisplayQuestions';
//import SideMenuDrawer from './page/Meditation/SideMenuDrawer';


export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return (
      <Root>
        <Router sceneStyle={{ backgroundColor: '#fafad2' }} >
          <Scene key="root" >
            <Scene   key="home" component={Home} hideNavBar />
            <Scene    key="bmi" component={BMI} hideNavBar />
            <Scene    key="Test" component={Test} hideNavBar />
            <Scene    key="Flatlist" component={Flatlist} hideNavBar />
            <Scene   initial key="questions" component={Questions} hideNavBar />
           <Scene  key="displayquestions" component={DisplayQuestions} hideNavBar/>
            <Scene key="results" component={Results} hideNavBar />
            <Scene key="modules" component={Modules} hideNavBar />
            <Scene key="start" component={Start} hideNavBar />
            <Scene key="art" component={Art} hideNavBar />
            <Scene key="begin" component={Art_Begin} hideNavBar />
            <Scene key="express" component={Express} hideNavBar />
            <Scene key="progress" component={Progress} hideNavBar />



            <Scene key="effect" component={Effect} hideNavBar />

          </Scene>
        </Router>
      </Root>
    );
  }

}