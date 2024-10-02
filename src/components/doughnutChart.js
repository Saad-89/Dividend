// HalfDoughnutChartComponent.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import colors from '../utils/config/colors';

const screenWidth = Dimensions.get('window').width;

const HalfDoughnutChartComponent = ({ income, investment, earnings }) => {
  const total = investment + earnings;
  const investmentPercentage = (investment / total) * 180; // Calculate in degrees for half-circle
  const earningsPercentage = (earnings / total) * 180;

  const radius = 80; // Adjust as needed
  const strokeWidth = 16; // Width of the stroke

  const arcPath = (percentage, color, offset = 0) => {
    const startAngle = Math.PI + offset; // Start from left side (180 degrees + offset)
    const endAngle = startAngle + (percentage / 180) * Math.PI;

    const startX = radius + radius * Math.cos(startAngle);
    const startY = radius + radius * Math.sin(startAngle);
    const endX = radius + radius * Math.cos(endAngle);
    const endY = radius + radius * Math.sin(endAngle);

    const largeArcFlag = percentage > 180 ? 1 : 0;

    return (
      <Path
        d={`M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Net Earnings</Text>
      <View style={styles.chartWrapper}>
        <Svg
          height={radius + strokeWidth * 2}
          width={radius * 2 + strokeWidth * 2}
          viewBox={`-${strokeWidth} 0 ${radius * 2 + strokeWidth * 2} ${radius + strokeWidth}`}
        >
          {arcPath(investmentPercentage, colors.primary)}
          {arcPath(earningsPercentage, "#C4C4C4", (investmentPercentage / 180) * Math.PI)}
        </Svg>
        {/* Display the income inside the chart */}
        <View style={styles.incomeContainer}>
          <Text style={styles.incomeText}>Income</Text>
          <Text style={styles.incomeValue}>${income}</Text>
        </View>
      </View>
      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
            <View style={styles.dotAndText}>
            <View style={[styles.legendColor, { backgroundColor: '#745CE6' }]} />
            <Text style={styles.legendLabel}>Investment</Text>
            </View>

          <Text style={styles.legendValue}>${investment.toLocaleString()}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={styles.dotAndText}>
          <View style={[styles.legendColor, { backgroundColor: '#FE6A57' }]} />
          <Text style={styles.legendLabel}>Earnings</Text>
          </View>
          <Text style={styles.legendValue}>${earnings.toLocaleString()}</Text>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.black
  },
  chartWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120, // Increased height to display the half-circle correctly
    marginBottom: 10,
  },
  incomeContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%', // Adjust this value to position the income text correctly
  },
  incomeText: {
    fontSize: 14,
    color: '#6B6B6B',
  },
  incomeValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 30,
  },
  legendItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotAndText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendLabel: {
    fontSize: 14,
    color: '#6B6B6B',
    marginRight: 4,
  },
  legendValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HalfDoughnutChartComponent;
