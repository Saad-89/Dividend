// Import necessary components and hooks
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import colors from '../utils/config/colors';
// FreeModeToggle Component
const FreeModeToggle = () => {
  const [isFreeMode, setIsFreeMode] = useState(false);

  const toggleSwitch = () => setIsFreeMode(previousState => !previousState);

  return (
    <View style={styles.toggleContainer}>
      <Text style={styles.toggleLabel}>Free Mode</Text>
      <Switch
        trackColor={{ false: '#767577', true: colors.primary }} // Customize toggle color
        thumbColor={isFreeMode ? '#fff' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isFreeMode}

      />
    </View>
  );
};
export default FreeModeToggle;


// Styles for the components
const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row', // Align text and toggle horizontally
    alignItems: 'center',
  },
  toggleLabel: {
    color: colors.primary,
    fontSize: 16,
    marginRight: 8, // Space between label and toggle
  },
});


