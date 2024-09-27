import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 6))); // 6 days later
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onStartChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setStartDate(selectedDate || startDate);
    }
    setShowStartPicker(false);
  };

  const onEndChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setEndDate(selectedDate || endDate);
    }
    setShowEndPicker(false);
  };

  const showStartDatePicker = () => {
    setShowStartPicker(true);
  };

  const showEndDatePicker = () => {
    setShowEndPicker(true);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Format the date as needed
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dateBox} onPress={showStartDatePicker}>
        <Icon name="date-range" size={24} color="black" />
        <Text style={styles.dateText}>
          {formatDate(startDate)} - {formatDate(endDate)}
        </Text>
      </TouchableOpacity>

      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={onStartChange}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={onEndChange}
        />
      )}

      {/* Button to show the end date picker */}
      <TouchableOpacity style={styles.button} onPress={showEndDatePicker}>
        <Text style={styles.buttonText}>Select End Date</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'yellow', // Set your desired border color
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10, // Space between icon and text
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default DatePickerComponent;
