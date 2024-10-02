import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView } from 'react-native';
import { AreaChart as GiftedAreaChart } from 'react-native-gifted-charts'; // Use alias for imported AreaChart
import colors from '../../utils/config/colors';

const { width } = Dimensions.get('window');

const CustomAreaChart = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipValue, setTooltipValue] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [clickedPoint, setClickedPoint] = useState(null); // Track the clicked point

  // Sample data for the graph
  const data = [
    { value: 5000, label: 'Jan' },
    { value: 8000, label: 'Feb' },
    { value: 12000, label: 'Mar' },
    { value: 15000, label: 'Apr' },
    { value: 10000, label: 'May' },
    { value: 18000, label: 'Jun' },
    { value: 8000, label: 'Jul' },
    { value: 14000, label: 'Aug' },
    { value: 16000, label: 'Sep' },
    { value: 20000, label: 'Oct' },
    { value: 12000, label: 'Nov' },
    { value: 25000, label: 'Dec' },
  ];

  const handleDataPointClick = (point) => {
    setTooltipVisible(true);
    setTooltipValue(point.value); // Show clicked point value
    setTooltipPosition({ x: point.x, y: point.y });
    setClickedPoint(point.index); // Save clicked point index
  };

  const handleTooltipClose = () => {
    setTooltipVisible(false);
    setClickedPoint(null); // Reset clicked point on close
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.chartContainer}>
          <GiftedAreaChart
            data={data}
            width={width * 1.2} // 20% extra width for horizontal scrolling
            height={250}
            hideRules={true} // Hide background lines
            disableScroll={true} // Disable scroll inside the chart itself
            adjustToWidth={true} // Adjust to given width
            initialSpacing={0} // No initial horizontal padding
            color="#EFF0FB" // Color of the fill
            startFillColor="rgba(239, 240, 251, 1)"
            endFillColor="rgba(239, 240, 251, 0.1)"
            dataPointsColor={colors.primary} // Customize data point color
            onPress={handleDataPointClick} // Click on data point
            yAxisThickness={0} // Hide Y-Axis line
            xAxisThickness={0} // Hide X-Axis line
          />
          {tooltipVisible && (
            <>
              <Text style={[styles.tooltip, { left: tooltipPosition.x, top: tooltipPosition.y }]}>
                {tooltipValue}
              </Text>
              {clickedPoint !== null && (
                <View
                  style={[
                    styles.dot,
                    {
                      left: (clickedPoint * (width * 1.2 / data.length)) - 6, // Adjust for dot size
                      top: 250 - (data[clickedPoint].value * (250 / 25000)) - 6, // Adjust for dot position
                    },
                  ]}
                />
              )}
            </>
          )}
        </View>
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
  tooltip: {
    position: 'absolute',
    color: '#000',
    fontSize: 14,
    padding: 4,
    zIndex: 999,
  },
  dot: {
    position: 'absolute',
    backgroundColor: colors.primary, // Dot color
    borderRadius: 50,
    width: 12, // Dot size
    height: 12,
    zIndex: 1000,
  },
});

export default CustomAreaChart;
