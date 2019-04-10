import React, { Component } from 'react';
import { WebView, Linking } from 'react-native';

export default class WebPage extends Component {
  render() {
    const uri = 'http://web2.awakenm.com.s3-website-us-west-2.amazonaws.com/#!/login';
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}