import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ScreenerDropdown = ({ selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))} 
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  pickerContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 0, 
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: -8,
    paddingLeft: 30, // Add padding to the picker to move items right
  },
});

export default ScreenerDropdown;
