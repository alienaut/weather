'use strict';

var React = require('react-native');

var { AppRegistry, StyleSheet, Text, View } = React;

var Weather = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weather', () => Weather);
