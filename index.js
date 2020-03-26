/* eslint-disable react-native/no-inline-styles */
// import libraries

import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create component
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render components
AppRegistry.registerComponent('learn', () => App);
