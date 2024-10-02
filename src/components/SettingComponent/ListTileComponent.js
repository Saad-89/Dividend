import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg'; // Optional for remote SVG or you can import local SVG

const ListTile = ({ icon: Icon, title, description }) => {
  return (
    <View style={styles.container}>
      {/* Render the SVG Icon properly */}
      <Icon width={24} height={24} />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// Styles for ListTile
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default ListTile;
