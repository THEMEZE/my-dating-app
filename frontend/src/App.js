import React from 'react';
import { StyleSheet, View } from 'react-native';
import Signup from './components/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
