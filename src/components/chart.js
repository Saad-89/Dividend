import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View, StyleSheet } from 'react-native';
import colors from '../utils/config/colors'; // Assuming you have a color config

const { width } = Dimensions.get('window');

const ChartComponent = ({ data }) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [
            {
              data: data,
              strokeWidth: 2,
            },
          ],
        }}
        width={width - 20} // Subtract padding for left and right (20 + 20)
        height={240}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // Sets the interval for y-axis labels
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(90, 105, 244, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(136, 136, 136, ${opacity})`, // Label color
          style: {
            paddingHorizontal: 20, // Added padding to the chart
          },
          propsForDots: {
            r: '0',
            strokeWidth: '0',
          },
          propsForBackgroundLines: {
            strokeDasharray: '4', // Dashed grid lines
          },
          propsForHorizontalLabels: {
            paddingHorizontal: 20,
          },
        }}
        bezier
        fromZero={true} // Ensure the graph starts at 0
        yAxisMin={0}    // Minimum value for y-axis
        yAxisMax={10000} // Maximum value for y-axis
        style={{
          paddingHorizontal: 20, // Ensure padding is applied
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingleft: 20,
    paddingHorizontal: 20, // Added horizontal padding to container
    backgroundColor: colors.background, // Use background color from the config
  },
});

export default ChartComponent;
