import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyles from '../utils/styles/fontStyle';

// Feature Component
const Feature = ({ iconName, title, description }) => {
    return (
      <View style={styles.featureContainer}>
        {/* Icon on its own row */}
        <Icon name={iconName} size={32} color="#FFD700" style={styles.featureIcon} />

        {/* Title and Description below the icon */}
        <Text style={FontStyles.header}>{title}</Text>
        <Text style={FontStyles.body}>{description}</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({


    featureContainer: {
      alignItems: 'start', // Center everything
      marginBottom: 30,
    },
    featureIcon: {
      marginBottom: 10, // Space between icon and text
    },


  });

  export default Feature;
