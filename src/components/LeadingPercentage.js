import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeadingIcon from '../assets/svg/lead-icon.svg';


const ArrowContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>160%</Text>
      <View style={styles.arrowContainer}>
        {/* <LeadingIcon /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 20,
    backgroundColor: '#E1F4EF', // Light green background
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Optional: add some rounding to the corners
    position: 'relative', // Allow absolute positioning of the arrow
  },
  text: {
    color: '#29896E', // Dark green text color
    fontSize: 12, // Adjust font size as needed
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 0, // Align the arrow at the bottom of the container
    transform: [{ rotate: '145deg' }], // Rotate the arrow to 145 degrees
  },
});

export default ArrowContainer;
