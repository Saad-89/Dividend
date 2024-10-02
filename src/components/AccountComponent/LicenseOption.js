import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LicenseOption = ({ title, description, price, isSelected, onSelect }) => (
  <TouchableOpacity style={[styles.licenseOption, isSelected && styles.licenseOptionSelected]} onPress={onSelect}>
    {/* Icon, Title, and Price Row */}
    <View style={styles.titleRow}>
      <Icon 
        name={isSelected ? "ellipse-outline" : "ellipse-outline"} 
        size={24} 
        color={isSelected ? "#007AFF" : "#8E8E93"} 
        style={styles.radioIcon} 
      />
      <View style={styles.licenseTextContainer}>
        <Text style={styles.licenseTitle}>{title}</Text>
        <Text style={styles.licensePrice}>{price}</Text>
      </View>
    </View>

    {/* Divider */}
    <View style={styles.divider} />

    {/* Price and Description */}
    <Text style={styles.monthlyPrice}>{`From ${price} per unit billed every month`}</Text>
     {/* Divider */}
     <View style={styles.divider} />
    <Text style={styles.licenseDescription}>{description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  licenseOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  licenseOptionSelected: {
    borderColor: '#007AFF',  // Highlight border when selected
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioIcon: {
    marginRight: 10,  // Space between the radio icon and the text
  },
  licenseTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  licenseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  licensePrice: {
    fontSize: 14,
    color: '#007AFF',  // Price color
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  monthlyPrice: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 5,
  },
  licenseDescription: {
    fontSize: 14,
    color: '#8E8E93',
  },
});

export default LicenseOption;
