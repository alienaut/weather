'use strict';

var React = require('react-native');

var api = require('./src/api');

var { AppRegistry, StyleSheet, MapView, View } = React;

var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
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

    api(region.latitude, region.longitude).then((data) => {
      this.setState(data);
    });
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('weather', () => Weather);
