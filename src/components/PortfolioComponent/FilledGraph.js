import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../utils/config/colors';

const { width } = Dimensions.get('window');

const ScrollableFilledLineGraph = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipValue, setTooltipValue] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [clickedPoint, setClickedPoint] = useState(null); // Track the clicked point

  // Sample data for the graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [
          10000, 10500, 10700, 10800, 10900, 10900, 10800, 10800, 10900, 10900, 10800, 11000
       
        ],
        color: () => `rgba(239, 240, 251, 1)`, // Fill color
        strokeWidth: 3, // Adjust stroke width for better visibility
      },
    ],
  };

  const handleDataPointClick = (data) => {
    setTooltipVisible(true);
    setTooltipValue(data.value.toFixed(2)); // Format to 2 decimal places
    setTooltipPosition({ x: data.x, y: data.y });
    setClickedPoint(data.index); // Save the clicked point index
  };

  const handleTooltipClose = () => {
    setTooltipVisible(false);
    setClickedPoint(null); // Reset clicked point on close
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <TouchableWithoutFeedback onPress={handleTooltipClose}>
          <View style={styles.chartContainer}>
            <LineChart
              data={data}
              width={width * 1.2} // 20% extra width for horizontal scrolling
              height={220}
              verticalLabelRotation={0}
              yAxisLabel=""
              yAxisSuffix=""
              withHorizontalLabels={false} // Hide horizontal labels if not needed
              withVerticalLines={false} // Remove vertical lines
              withDots={true} // Show dots on the line
              chartConfig={{
                backgroundColor: colors.background, // Set to your provided background color
                backgroundGradientFrom: colors.background,
                backgroundGradientTo: colors.background,
                fillShadowGradient: 'rgba(239, 240, 251, 0.8)',
                fillShadowGradientOpacity: 1,
                color: () => `#EFF0FB`,
                labelColor: () => `rgba(0, 0, 0, 0.6)`,
                style: {
                  borderRadius: 0, // No radius
                  marginLeft: 0, // Align to the left
                },
                propsForDots: {
                  r: '4', // Dot size
                  strokeWidth: '2',
                  stroke: '#ffffff',
                },
              }}
              bezier
              style={styles.graphStyle}
              onDataPointClick={handleDataPointClick}
            />
            {tooltipVisible && (
              <>
                <Text style={[styles.tooltip, { left: tooltipPosition.x, top: tooltipPosition.y }]}>
                  {tooltipValue}
                </Text>
                {clickedPoint !== null && (
                  <View style={[
                    styles.dot,
                    {
                      left: (clickedPoint * (width * 1.2 / data.labels.length)) - 6, // Adjust for dot size
                      top: 220 - (data.datasets[0].data[clickedPoint] * (220 / 100)) - 6, // Adjust for dot position
                    },
                  ]} />
                )}
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: colors.background,
  },
  scrollContainer: {
    overflow: 'hidden',
  },
  chartContainer: {
    position: 'relative',
  },
  graphStyle: {
    marginVertical: 8,
  },
  tooltip: {
    position: 'absolute',
    color: '#000',
    fontSize: 14,
    padding: 4,
    zIndex: 999,
  },
  dot: {
    position: 'absolute',
    backgroundColor: colors.background, // Dot color
    borderRadius: 50,
    width: 12, // Dot size
    height: 12,
    zIndex: 1000,
  },
});

export default ScrollableFilledLineGraph;
