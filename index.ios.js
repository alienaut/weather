'use strict';

var React = require('react-native');

var { AppRegistry, StyleSheet, MapView, View } = React;

var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  },
  render: function() {
    return (
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}
      >
      </MapView>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('weather', () => Weather);
