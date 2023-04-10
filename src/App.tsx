import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'src/components/atom';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title={'hello'}
        onPress={() => {
          alert('test');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
