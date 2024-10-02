import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import colors from '../../utils/config/colors';

// Dummy data for the bar chart (four bars for each group)
const generateBarData = (percentage) => {
  const isPositive = percentage > 0;

  return [
    // Group 1 (Four bars)
    { value: 3, frontColor: isPositive ? '#4CAF50' : '#DE2C41' },
    { value: 2.5, frontColor: isPositive ? '#4CAF50' : '#DE2C41' },
    { value: 3.5, frontColor: isPositive ? '#4CAF50' : '#DE2C41' },
    { value: 2, frontColor: isPositive ? '#4CAF50' : '#DE2C41' },

    // Group 2 (Four bars)
    { value: 4, frontColor: isPositive ? '#66BB6A' : '#DE2C41' },
    { value: 3.5, frontColor: isPositive ? '#66BB6A' : '#DE2C41' },
    { value: 4.5, frontColor: isPositive ? '#66BB6A' : '#DE2C41' },
    { value: 4, frontColor: isPositive ? '#66BB6A' : '#DE2C41' },

    // Group 3 (Four bars)
    { value: 2.5, frontColor: isPositive ? '#81C784' : '#DE2C41' },
    { value: 2, frontColor: isPositive ? '#81C784' : '#DE2C41' },
    { value: 3, frontColor: isPositive ? '#81C784' : '#DE2C41' },
    { value: 2.5, frontColor: isPositive ? '#81C784' : '#DE2C41' },

    // Group 4 (Four bars)
    { value: 4.5, frontColor: isPositive ? '#A5D6A7' : '#DE2C41' },
    { value: 4, frontColor: isPositive ? '#A5D6A7' : '#DE2C41' },
    { value: 5, frontColor: isPositive ? '#A5D6A7' : '#DE2C41' },
    { value: 4.5, frontColor: isPositive ? '#A5D6A7' : '#DE2C41' },

    // Group 5 (Four bars)
    { value: 3.5, frontColor: isPositive ? '#C8E6C9' : '#DE2C41' },
    { value: 3, frontColor: isPositive ? '#C8E6C9' : '#DE2C41' },
    { value: 4, frontColor: isPositive ? '#C8E6C9' : '#DE2C41' },
    { value: 3.5, frontColor: isPositive ? '#C8E6C9' : '#DE2C41' },
  ];
};

const ForecastingComponent = ({ earnings, percentage }) => {
  const barData = generateBarData(percentage);

  return (
    <View style={styles.container}>
      {/* Left Side Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Total Earnings</Text>
        <Text style={styles.earnings}>${earnings.toLocaleString()}</Text>
        <Text style={[styles.percentage, { color: percentage > 0 ? '#4CAF50' : '#f44336' }]}>
          {percentage > 0 ? `⬈` : `⬊`} {Math.abs(percentage)}% from last month
        </Text>
      </View>

      {/* Right Side Bar Chart */}
      <View style={styles.chartContainer}>
        <BarChart
          data={barData}
          height={100}
          barWidth={15}  // Narrower bars to fit 4 bars in a group
          spacing={10}  // Spacing between each bar
          initialSpacing={15}  // Initial padding before the first bar
          hideRules={true} // Hide grid lines
          noOfSections={4}  // Defines number of Y-axis sections
          maxValue={5}  // Max value for Y-axis
          isAnimated={true}
          yAxisThickness={0}  // Hides Y-axis lines
          xAxisThickness={0}  // Hides X-axis lines
          hideAxesAndRules={true}  // Completely hides all axes and rules
        />
      </View>
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: colors.lightGrey,
    marginVertical: 10,
    
  },
  textContainer: {
    flex: 1,
  },
  chartContainer: {
    flex: 1,
    width: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  earnings: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  percentage: {
    fontSize: 12,
    marginTop: 8,
  },
});

export default ForecastingComponent;




// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';
// import Tabs from '../tabs';

// // Dummy data for the bar chart
// const generateBarData = (percentage) => {
//   const barColor = percentage > 0 ? '#4CAF50' : '#f44336'; // Green for positive, red for negative

//   return {
//     labels: ['', '', '', ''], // Four bars
//     datasets: [
//       {
//         data: [
//           Math.abs(percentage), // First bar based on percentage
//           Math.abs(percentage) * 0.75, // Second bar as a smaller value
//           Math.abs(percentage) * 0.5, // Third bar as a smaller value
//           Math.abs(percentage) * 0.25 // Fourth bar as the smallest value
//         ],
//         colors: [
//           () => barColor, // Color for all bars based on percentage
//           () => barColor,
//           () => barColor,
//           () => barColor,
//         ],
//       },
//     ],
//   };
// };

// const ForecastingComponent = ({ earnings, percentage }) => {
//   const barData = generateBarData(percentage);

//   return (
//     <View style={styles.container}>
//       {/* Left Side Texts */}
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>Portfolio Total Earnings</Text>
//         <Text style={styles.earnings}>${earnings.toLocaleString()}</Text>
//         <Text style={[styles.percentage, { color: percentage > 0 ? '#4CAF50' : '#f44336' }]}>
//           {percentage > 0 ? `⬈` : `⬊`} {Math.abs(percentage)}% from last month
//         </Text>
//       </View>

//       {/* Right Side Bar Chart */}
//       <View style={styles.chartContainer}>
//         <BarChart
//           data={barData}
//           width={Dimensions.get('window').width / 2.5} // Adjust width to fit within container
//           height={100}
//           chartConfig={{
//             backgroundColor: '#fff',
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             // Disable grid lines and dots
//             withInnerLines: false,
//             withHorizontalLabels: false,
//             withVerticalLabels: false,
//           }}
//           withHorizontalLabels={false}
//           showBarTops={false}
//           fromZero={true}
//           style={{
//             marginVertical: 8,
//             borderRadius: 8,
//             paddingRight: 15, // Add padding to the right if needed
//           }}
//           barStyle={{
//             // Customize the bar width and height
//             width: 10, // Adjust the width of each bar
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//     marginVertical: 10,
//   },
//   textContainer: {
//     flex: 2,
//   },
//   chartContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     paddingVertical: 10, // Optional padding for better layout
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   earnings: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//     marginTop: 5,
//   },
//   percentage: {
//     fontSize: 14,
//     marginTop: 8,
//   },
// });

// export default ForecastingComponent;

