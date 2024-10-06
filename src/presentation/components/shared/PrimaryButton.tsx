import React from 'react';
import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5855d6' : '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Platform.OS === 'android' ? '#fff' : '#4746AB',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : '#fff',
  },
});
