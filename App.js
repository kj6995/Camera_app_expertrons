/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import Post from './src/components/Post';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonRecord: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4242',
    marginVertical: 10,
  },
  buttonStop: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: 'white',
    marginVertical: 20,
  },
});

export default App;
