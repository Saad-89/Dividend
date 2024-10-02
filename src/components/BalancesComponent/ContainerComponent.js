import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionic Icons
import colors from '../../utils/config/colors';

const ContainerComponent = ({ title, description, onSelect, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: isSelected ? colors.primary : '#ccc' }]} // Change border color based on selection
      onPress={onSelect}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: isSelected ? colors.primary : '#fff', // Change background color based on selection
            borderColor: isSelected ? colors.primary : colors.lightGrey, // Change border color based on selection
            borderWidth: isSelected ? 2 : 0, // Show border only when selected
          },
        ]}
      >
        <Ionicons
          name="ellipse-outline" // Change the icon name to any Ionic icon you prefer
          size={24}
          color={isSelected ? '#fff' : colors.primary} // Change icon color based on selection
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default ContainerComponent;
