// src/components/Fonts.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Define a function to apply custom fonts
const CustomText = ({ style, ...props }) => {
  return <Text style={[styles.default, style]} {...props} />;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto-Regular', // Default font, change if needed
  },
  // Add other text styles here if needed
});

export default CustomText;
