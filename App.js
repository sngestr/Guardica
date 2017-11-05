import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListeningScreen from './screens/ListeningScreen';
import AlertScreen from './screens/AlertScreen';
export default class App extends React.Component {
  //The navigation options must be defined in every screen that is in your app
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#A0A0A0',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };
  constructor() {
    super();
  }
  render() {
    //This is uses for navigation
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {navigate('Listener')}}
          title="Listener"
          color="blue"
        />
        <Button
          onPress={() => {navigate('Alert')}}
          title="Alert"
          color="blue"
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
//setting up the navigation routes
const myScreens = StackNavigator({
  Home: {             //Home is the route and it will point to the screen of App which is the class file (above)
    screen: App
  },
  Listener: {
    screen: ListeningScreen //<-- this has to match the name in the import
  },
  Alert: {
    screen: AlertScreen
  },
});
AppRegistry.registerComponent('Guardica', () => myScreens);
