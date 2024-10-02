import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

// CircularChart Component (64% filled)
const CircularChart = () => {
  const size = 60; // Diameter of the circle
  const strokeWidth = 6; // Thickness of the stroke
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = 64; // Progress percentage
  const halfCircle = size / 2;

  const circleColor = {
    green: '#fff', // Green color for progress
    grey: '#3274A8', // Grey color for remaining progress
  };

  return (
    <View>
      <Svg width={size} height={size}>
        <G rotation="-90" originX={halfCircle} originY={halfCircle}>
          {/* Background Circle - Grey */}
          <Circle
            stroke={circleColor.grey}
            cx={halfCircle}
            cy={halfCircle}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle - Green */}
          <Circle
            stroke={circleColor.green}
            cx={halfCircle}
            cy={halfCircle}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={(1 - progress / 100) * circumference}
            fill="none"
          />
        </G>
      </Svg>
      {/* Center Text (Percentage Value) */}
      <View style={styles.centerTextContainer}>
        <Text style={styles.centerText}>{`${progress}%`}</Text>
      </View>
    </View>
  );
};

// Main ContainerComponent
const SettingContainerComponent = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* First Row with Circular Chart and Text */}
        <View style={styles.row}>
          <CircularChart />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Complete Profile</Text>
            <Text style={styles.subText}>Complete your profile to unlock all features</Text>
          </View>
        </View>

        {/* Button Row */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify Identity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
 
  container: {
    backgroundColor: '#005294', // Background color of the container
    padding: 20,
    height: 200,
   
   
    alignItems: 'center',
    borderRadius: 12, // Make the container rounded at the borders
    width: '100%',
    shadowColor: '#000', // Add shadow for better aesthetics
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow support
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  textContainer: {
    marginLeft: 10,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#f0f0f0',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#005294',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centerTextContainer: {
    position: 'absolute', // Position the percentage text inside the circle
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    color: '#fff', // Make the percentage text white
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingContainerComponent;
