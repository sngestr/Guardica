import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class AlertScreen extends React.Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Text>I am in the Alert.js</Text>
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
