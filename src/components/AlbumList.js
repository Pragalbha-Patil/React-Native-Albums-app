import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Album List container</Text>
      </View>
    );
  }
}

export default AlbumList;