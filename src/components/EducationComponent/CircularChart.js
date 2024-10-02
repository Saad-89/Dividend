import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const CircularChart = () => {
  const size = 100; // Diameter of the circle
  const strokeWidth = 5; // Thickness of the stroke
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = 50; // Progress percentage

  const halfCircle = size / 2;

  const circleColor = {
    green: '#32BCA3', // Green color for progress
    grey: '#d3d3d3', // Grey color for remaining progress
  };

  return (
    <View style={styles.container}>
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

      {/* Text inside the circle */}
      <View style={styles.textContainer}>
        <Text style={styles.percentageText}>50%</Text>
        <Text style={styles.subText}>13/26</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute', // This places the text on top of the SVG
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
});

export default CircularChart;
