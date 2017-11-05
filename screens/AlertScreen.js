import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SendSMS from 'react-native-sms'

export default class AlertScreen extends React.Component {
  constructor() {
    super();
    this.someFunction = this.someFunction.bind(this);
  };

  //App header for Alert
  static navigationOptions = {
    title: 'Alert',
    headerStyle: {
      backgroundColor: '#A0A0A0'
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };

  someFunction() {
  	SendSMS.send({
  		    body: 'The default body of the SMS!',
  		    recipients: ['3478566631', '6467012745'],
  		    successTypes: ['sent', 'queued']
    	}, (completed, cancelled, error) => {

  		console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  	});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I am in the Alert.js</Text>
        <Button
          onPress={this.someFunction()}
          title="Help me!"
          color= "#A0A0A0"
          accessibilityLabel="The help me button that send text to 911"
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// //setting up the navigation routes
// const myScreens = StackNavigator({
//   Home: {             //Home is the route and it will point to the screen of App which is the class file (above)
//     screen: App
//   },
//   Listener: {
//     screen: ListeningScreen
//   },
// });
//
// AppRegistry.registerComponent('Guardica', () => myScreens);
