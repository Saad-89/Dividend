import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import colors from '../utils/config/colors';

const screenWidth = Dimensions.get('screen').width;

const BarChartComponent = ({ data1, data2, labels }) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <BarChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data1, // First dataset
                colors: [(opacity = 1) => `#8360F7`], // First bar color
              },
              {
                data: data2, // Second dataset
                colors: [(opacity = 1) => 'green'], // Second bar color
              },
            ],
          }}
          width={screenWidth * 1.2} // Make the chart scrollable horizontally
          height={220}
          fromZero={true}
          yAxisLabel="" // Ensure no yAxisLabel to avoid extra padding
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: colors.background,
            backgroundGradientTo: colors.background,
            decimalPlaces: 0,
            barPercentage: 1, // Increase bar width
            barRadius: 8, // Round top corners only
            fillShadowGradientOpacity: 1,
            backgroundGradientFromOpacity: 1,
            backgroundGradientToOpacity: 1,
            spacingInner: 0.2, // Increase space between bars in a group
            color: (opacity = 1) => `rgba(131, 96, 247, ${opacity})`, // Default bar color
            labelColor: () => `black`,
            withShadow: false,
              // Remove background lines



            // Reduce padding for horizontal labels
            propsForHorizontalLabels: {
              paddingHorizontal: 0, // Reduce padding to remove extra left margin
            },
          }}
          verticalLabelRotation={0}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingLeft: 0, // Ensure no padding on the left
            marginLeft: 0,  // Ensure no margin on the left
          }}
          showValuesOnTopOfBars={true}
          showBarTops={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 20,
    paddingRight: 40,
    backgroundColor: colors.background, // Use background color from the config
  },
});

export default BarChartComponent;




// // BarChartComponent.js
// import React from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';

// import colors from '../utils/config/colors';

// const screenWidth = Dimensions.get('window').width;

// const BarChartComponent = ({ data, labels }) => {
//   return (
//     <View>
//       <BarChart
//         data={{
//           labels: labels,
//           datasets: [
//             {
//               data: data,
//             },
//           ],
//         }}
//         width={screenWidth} // Adjust according to your screen size
//         height={220}
//         fromZero={true}
//         yAxisLabel=""
//         yAxisSuffix="k"
//         chartConfig={
//           {
//             backgroundGradientFrom: colors.background,
//             fillShadowGradient: '#8360F7',
//             decimalPlaces: 0,
//             barPercentage: 0.7,

//             barRadius :4,
//             fillShadowGradientOpacity: 1,
//             backgroundGradientFromOpacity: 1,
//             backgroundGradientTo: colors.background,
//             spacingInner: 0.3,
//             backgroundGradientToOpacity: 1,
//             color: () => `#8360F7`,
//             labelColor: () => `black`,
//             withShadow: false,

//             propsForLabels: {
//               fontSize: 10,


//             },
//             propsForHorizontalLabels: {
//               paddingHorizontal: 20,

//             },

//             propsForBackgroundLines: {
//               strokeWidth: 0,
//             },

//       }}
//         verticalLabelRotation={0}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//         showValuesOnTopOfBars={true}
//       />
//     </View>
//   );
// };

// export default BarChartComponent;
