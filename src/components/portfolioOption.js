
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PortfolioOption = ({ title, description, icon, active, onPress }) => {
    return (
      <TouchableOpacity
        style={[styles.optionContainer, active ? styles.activeOption : null]}
        onPress={onPress}
      >
        <Image
          source={icon}
          style={[styles.icon, active ? { tintColor: '#007bff' } : { tintColor: '#888' }]}  // Use tintColor to change PNG color
        />
        <View style={styles.optionTextContainer}>
          <Text style={[styles.optionTitle, active ? styles.activeText : null]}>
            {title}
          </Text>
          <Text style={styles.optionDescription}>
            {description}
          </Text>
        </View>

        {/* "->" icon for active option */}
        {active && (
          <Text style={styles.arrowIcon}>→</Text>
        )}
      </TouchableOpacity>
    );
  };



  // Styles
const styles = StyleSheet.create({

    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      marginBottom: 15,
    },
    activeOption: {
      borderColor: '#007bff',
    },
    icon: {
      width: 30,
      height: 30,
    },
    optionTextContainer: {
      flex: 1,
      marginLeft: 10,
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    activeText: {
      color: '#007bff',
    },
    optionDescription: {
      fontSize: 12,
      color: '#666',
    },
    arrowIcon: {
      fontSize: 20,
      color: '#007bff',
    },
  });

  export default PortfolioOption;