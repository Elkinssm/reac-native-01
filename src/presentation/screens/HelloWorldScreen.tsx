import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

const HelloWorldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hello {name}</Text>
    </View>
  );
};

export default HelloWorldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tittle: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
