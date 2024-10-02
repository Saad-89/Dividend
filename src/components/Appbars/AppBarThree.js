// src/components/AppBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/config/colors';

const AppBarThree = ({ toggleDrawer }) => {
  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
        <Icon name="menu" size={28} color="black" />
      </TouchableOpacity>

      {/* Centered Text */}
      <View style={styles.centerContainer}>
        <Text style={styles.name}>Hey Dividend</Text>
      </View>

      {/* Right Side (nothing will be here) */}
      <View style={styles.rightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1, // Takes the available space in the center
    alignItems: 'center', // Center the text vertically
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  rightContainer: {
    width: 28, // Optional: maintain space for the hamburger icon
  },
});

export default AppBarThree;
