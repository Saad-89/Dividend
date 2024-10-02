import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Dropdown = ({ label, selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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
 
  },
  label: {
    color: '#333',
 
  },
  pickerContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 0, // Remove any top padding
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: -8, // Reduce top margin if needed
  },
});

export default Dropdown;
