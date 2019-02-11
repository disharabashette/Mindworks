/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, LayoutAnimation, UIManager, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Item, Input, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
// Our custom files and classes import
//import SideMenuSecondLevel from './SideMenuSecondLevel';
//import Text from './Text';

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
        return (
            <ScrollView style={styles.container}>
                {this.renderMenu()}
            </ScrollView>
        );
    }

    renderMenu() {
        if (!this.state.subMenu) {
            return (
                <View>
                    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <Item error={this.state.searchError}>
                            <Input
                                placeholder='Search...'
                                onChangeText={(text) => this.setState({ search: text, searchError: false })}
                                onSubmitEditing={() => this.search()}
                            />
                            <Icon active name='search' type='feather' onPress={() => this.search()} />
                        </Item>
                    </View>
                    <View style={{ paddingRight: 15 }}>
                        <List>
                            <ListItem
                                icon
                                key={0}
                                button={true}
                                onPress={() => Actions.home()}
                            >
                                <Body>
                                    <Text>Home</Text>
                                </Body>
                                <Right>
                                    <Icon name='keyboard-arrow-right' type='materialIcons' />
                                </Right>
                            </ListItem>
                            {this.renderMenuItems()}
                        </List>
                    </View>
                    <View style={styles.line} />
                    
                    
                </View>
            );
        }
        
    }

    
   

  

}


const styles = {
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
    }
};


