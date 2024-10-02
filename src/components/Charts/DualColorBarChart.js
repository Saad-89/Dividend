

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import colors from '../../utils/config/colors';

const DualColorBarChart = () => {
  const [tooltipData, setTooltipData] = useState({ visible: false, income: '', spending: '', index: -1 });

  const data = [
    { label: 'Jan', income: 60, spending: 30 },
    { label: 'Feb', income: 50, spending: 40 },
    { label: 'Mar', income: 90, spending: 70 },
    { label: 'Apr', income: 70, spending: 50 },
    { label: 'May', income: 80, spending: 60 },
  ];

  const handleBarPress = (index, income, spending) => {
    const total = income + spending;
    const incomePercentage = (income / total) * 100;
    const spendingPercentage = (spending / total) * 100;
    setTooltipData({
      visible: true,
      income: `Income: ${incomePercentage.toFixed(1)}%`,
      spending: `Spending: ${spendingPercentage.toFixed(1)}%`,
      index,
    });
  };

  return (
    <ScrollView horizontal={true} style={styles.scrollContainer}>
      <View style={styles.container}>
        <BarChart
          data={data.map((item, index) => ({
            label: item.label,
            value: item.income + item.spending, // Combined height of income + spending
            frontColor: index === tooltipData.index ? '#F17B2C' : '#F17B2C', // Color for the group bar
            topLabelComponent: () => (
              <View style={{ alignItems: 'center' }}>
                {tooltipData.index === index && tooltipData.visible && (
                  <View style={styles.tooltipContainer}>
                    <Text style={styles.tooltipText}>{tooltipData.income}</Text>
                    <Text style={styles.tooltipText}>{tooltipData.spending}</Text>
                  </View>
                )}
              </View>
            ),
            onPress: () => handleBarPress(index, item.income, item.spending),
          }))}
          renderGradient={({ index }) => (
            <View style={{ flexDirection: 'column', height: '100%' }}>
              <View style={{ flex: data[index].income / (data[index].income + data[index].spending), backgroundColor: '#FF6633' }} /> {/* Orange for income */}
              <View style={{ flex: data[index].spending / (data[index].income + data[index].spending), backgroundColor: '#7F3FBF' }} /> {/* Purple for spending */}
            </View>
          )}
          width={data.length * 120}
          height={300}
          barWidth={50} // Single wide bar width for both
          barSpacing={20} // Adjust spacing between groups
          yAxisThickness={0} // Remove Y axis line
          xAxisThickness={2} // Set X axis line thickness
          xAxisColor={colors.background}
          showYAxisLabel={false} // Hide Y axis labels
          hideRules={true} // Disable background grid lines
          barBorderRadius={10}
          showGradient
          frontColor={'#E06E21'}
          gradientColor={'#6438F5'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  tooltipContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  tooltipText: {
    color: '#000',
    fontSize: 8,
  },
});

export default DualColorBarChart;

