// Import necessary components and hooks
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/config/colors';

// FreeModeToggle Component
const FreeModeToggle = () => {
  const [isFreeMode, setIsFreeMode] = useState(false);

  const toggleSwitch = () => setIsFreeMode(previousState => !previousState);

  return (
    <View style={styles.toggleContainer}>
      <Text style={styles.toggleLabel}>Free Mode</Text>
      <TouchableOpacity
        style={[styles.toggleBox, isFreeMode && styles.toggleBoxActive]} // Toggle box styling based on state
        onPress={toggleSwitch}
      >
        <View style={[styles.toggleKnob, isFreeMode && styles.toggleKnobActive]} />
      </TouchableOpacity>
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
    fontSize: 14,
    marginRight: 12, // Space between label and toggle
  },
  toggleBox: {
    width: 50, // Width of the toggle box
    height: 30, // Height of the toggle box
    borderRadius: 15, // Rounded corners for the toggle box
    backgroundColor: '#d1d1d1', // Background color when toggled off
    justifyContent: 'center', // Center the toggle knob vertically
    padding: 5, // Padding for the toggle knob
    position: 'relative', // Positioning context for the knob
  },
  toggleBoxActive: {
    backgroundColor: colors.primary, // Background color when toggled on
  },
  toggleKnob: {
    width: 20, // Width of the toggle knob
    height: 20, // Height of the toggle knob
    borderRadius: 10, // Rounded knob
    backgroundColor: '#fff', // White knob color
    position: 'absolute', // Absolute positioning for smooth movement
    left: 5, // Initial position of the knob when off
    transition: 'left 0.3s', // Smooth transition (for web; may need alternative for React Native)
  },
  toggleKnobActive: {
    left: 25, // Move the knob to the right when toggled on
  },
});


// // Import necessary components and hooks
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Switch } from 'react-native';

// import colors from '../utils/config/colors';
// // FreeModeToggle Component
// const FreeModeToggle = () => {
//   const [isFreeMode, setIsFreeMode] = useState(false);

//   const toggleSwitch = () => setIsFreeMode(previousState => !previousState);

//   return (
//     <View style={styles.toggleContainer}>
//       <Text style={styles.toggleLabel}>Free Mode</Text>
//       <Switch
//         trackColor={{ false: '#767577', true: colors.primary }} // Customize toggle color
//         thumbColor={isFreeMode ? '#fff' : '#f4f3f4'}
//         onValueChange={toggleSwitch}
//         value={isFreeMode}

//       />
//     </View>
//   );
// };
// export default FreeModeToggle;


// // Styles for the components
// const styles = StyleSheet.create({
//   toggleContainer: {
//     flexDirection: 'row', // Align text and toggle horizontally
//     alignItems: 'center',
//   },
//   toggleLabel: {
//     color: colors.primary,
//     fontSize: 16,
//     marginRight: 8, // Space between label and toggle
//   },
// });


