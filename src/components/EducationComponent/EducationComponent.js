import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Sample data for the education component
const educationData = [
  { name: 'What is Dividend?', length: '4 minutes' },
  { name: 'What is Dividend?', length: '4 minutes' },
  { name: 'What is Dividend?', length: '4 minutes' },
];

// Component to render each row in the education table
const EducationRow = ({ name, length }) => (
  <View style={styles.row}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.length}>{length}</Text>
  </View>
);

const EducationComponent = () => {
  return (
    <ScrollView style={styles.container}>
      {educationData.map((item, index) => (
        <EducationRow key={index} name={item.name} length={item.length} />
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
   
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures the columns have space between them
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 3, // Takes up more space for longer names
  },
  length: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555',
    flex: 1, // Takes up less space for the shorter length
    textAlign: 'right', // Align the length text to the right
  },
});

export default EducationComponent;
