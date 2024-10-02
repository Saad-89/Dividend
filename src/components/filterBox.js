import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons
import colors from '../utils/config/colors';
import FilterIcon from '../assets/svg/filter.svg';
const FilterBox = () => {
  return (
    <View style={styles.container}>
      {/* Wrapping icon inside a View */}
      <FilterIcon />
      {/* <Icon name="filter-list" size={24} color="gray" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30, // Width of the box
    height: 30, // Height of the box
    borderColor: colors.borderColor, // Grey border color
    borderWidth: 1, // Border width
    borderRadius: 8, // Rounded corners
    marginLeft: 1,

    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: 'white', // Optional background color
  },
});

export default FilterBox;
