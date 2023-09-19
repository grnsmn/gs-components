// Touchable.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Touchable = ({ onPress, title, textColor }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Touchable;
