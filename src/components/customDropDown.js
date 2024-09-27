import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/config/colors';

const CustomDropdown = ({
  items = [],
  placeholder = "Select an option",
  onSelect,
  value,
  dropdownWidth = 120, // Default width if not provided
  dropdownHeight = 30, // Adjusted height
  borderRadius = 8, // Default border radius
  textSize = 10, // Text size for the dropdown
}) => {
  const [selectedValue, setSelectedValue] = useState(value || items[0]?.value);

  const handleValueChange = (val) => {
    setSelectedValue(val);
    onSelect(val); // Send the selected value to the parent
  };

  return (
    <View
      style={[
        styles.dropdownContainer,
        {
          width: dropdownWidth,
          height: dropdownHeight,
          borderRadius: borderRadius,
        },
      ]}
    >
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={items}
        value={selectedValue}
        placeholder={{ label: placeholder, value: null }}
        style={{
          ...pickerSelectStyles,
          inputIOS: {
            ...pickerSelectStyles.inputIOS,
            fontSize: textSize,
            height: dropdownHeight,
            textAlign: 'center',
            paddingRight: 30, // Padding to prevent text from overlapping the icon
          },
          inputAndroid: {
            ...pickerSelectStyles.inputAndroid,
            fontSize: textSize,
            height: dropdownHeight,
            textAlign: 'center',
            paddingRight: 30, // Padding to prevent text from overlapping the icon
          },
          iconContainer: {
            top: Platform.OS === 'ios' ? 5 : 5, // Adjust for proper centering
            right: 10, // Keep the icon to the right side
            justifyContent: 'center', // Vertically center the icon
          },
        }}
        useNativeAndroidPickerStyle={false} // Prevents native dropdown styling on Android
        Icon={() => {
          return (
            <Icon name="arrow-drop-down" size={24} color="gray" /> // Dropdown arrow icon
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginHorizontal: 1,
    borderWidth: 1, // Ensure border is visible
    borderColor: colors.borderColor, // Set border color to yellow
    backgroundColor: '#fff',
    justifyContent: 'center', // Centers the picker text and icon
    borderRadius: 12, // Ensure the border radius is applied
    overflow: 'hidden',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 0, // Adjust padding for centering text
    paddingHorizontal: 10,
    borderWidth: 0, // Remove border from text input itself
    color: 'black',
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingRight: 30, // Ensure text doesn't overlap with the dropdown icon
    overflow: 'hidden', // Ensure text respects the width of the container
  },
  inputAndroid: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 0,
    color: 'black',
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingRight: 30, // Ensure text doesn't overlap with the dropdown icon
    overflow: 'hidden', // Ensure text respects the width of the container
  },
});

export default CustomDropdown;
