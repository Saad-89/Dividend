import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const GroupBarComponent = () => {
  const dummyData = {
    type1: [50, 70, 30, 40, 60, 80, 90], // Dummy data for type1
    type2: [10, 40, 20, 50, 70, 60, 80], // Dummy data for type2
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    yAxisSuffix: '', // Add your preferred suffix here
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <BarChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: dummyData.type1,
                color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // Yellow for type1
              },
              {
                data: dummyData.type2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black for type2
              },
            ],
          }}
          width={Dimensions.get('window').width} // Use the full width of the screen
          height={220} // Use a fixed height
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          withInnerLines={false} // Set withInnerLines to false
        />
      </View>
    </ScrollView>
  );
};

export default GroupBarComponent;


// import React from 'react';
// import { View, ScrollView } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const GroupedBarChart = ({ data }) => {
//   return (
//     <View>
//       <ScrollView horizontal>
//         <BarChart
//           data={{
//             labels: data.labels,
//             datasets: [
//               {
//                 data: data.datasets[0].data,
//                 color: () => data.datasets[0].color, // Set color for the first dataset
//               },
//               {
//                 data: data.datasets[1].data,
//                 color: () => data.datasets[1].color, // Set color for the second dataset
//               },
//             ],
//           }}
//           width={screenWidth * 1.5} // Adjust width to allow horizontal scrolling
//           height={220}
//           yAxisLabel=""
//           chartConfig={{
//             backgroundColor: '#fff',
//             backgroundGradientFrom: '#fff',
//             backgroundGradientTo: '#fff',
//             decimalPlaces: 0, // Optional
//             color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: '6',
//               strokeWidth: '2',
//               stroke: '#ffa726',
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//           barPercentage={0.5} // Adjust the bar width
//           withInnerLines={false} // Optional: Hide inner lines for clarity
//         />
//       </ScrollView>
//     </View>
//   );
// };

// export default GroupedBarChart;


// // // GroupedBarChart.js

// // import React from 'react';
// // import { View, Text, ScrollView } from 'react-native';
// // import { BarChart } from 'react-native-chart-kit';
// // import { Dimensions } from 'react-native';

// // const screenWidth = Dimensions.get('window').width;

// // const GroupedBarChart = ({ data }) => {
// //   return (
// //     <View>
    
// //       <ScrollView horizontal>
// //         <BarChart
// //           data={{
// //             labels: data.labels,
// //             datasets: data.datasets,
// //           }}
// //           width={screenWidth * 1.5} // Adjust width to allow horizontal scrolling
// //           height={220}
// //           yAxisLabel=""
// //           chartConfig={{
// //             backgroundColor: '#fff',
// //             backgroundGradientFrom: '#fff',
// //             backgroundGradientTo: '#fff',
// //             decimalPlaces: 0, // Optional
// //             color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
// //             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
// //             style: {
// //               borderRadius: 16,
// //             },
// //             propsForDots: {
// //               r: '6',
// //               strokeWidth: '2',
// //               stroke: '#ffa726',
// //             },
// //           }}
// //           style={{
// //             marginVertical: 8,
// //             borderRadius: 16,
// //           }}
// //         />
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // export default GroupedBarChart;
