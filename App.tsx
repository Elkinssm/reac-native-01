import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterScreenM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Elkin" /> */}
        {/* <CounterScreen /> */}
        <CounterScreenM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
