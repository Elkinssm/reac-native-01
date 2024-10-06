import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterScreenM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name="accessibility-outline" size={35} /> */}
      <FAB
        label="1"
        icon={'add-outline'}
        style={globalStyles.fab}
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
      />
    </View>
  );
};
