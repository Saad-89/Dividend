import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import colors from '../../utils/config/colors';

const StatsContainer = () => {
  // Define the path for the curved line using a cubic Bezier curve
  const curvePath = "M 0 60 C 50 0, 50 50, 100 25";

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Total Value</Text>
        <Text style={styles.value}>$44,780</Text>
        <Text style={styles.percentage}>+04.16% <Text style={styles.greyText}>From last month</Text></Text>
      </View>
      <View style={styles.rightContainer}>
        <Svg height="50" width="100%">
          <Path
            d={curvePath}
            stroke="#37B793"
            strokeWidth="2"
            fill="none"
          />
          {/* Circular dot at the end of the line */}
          <Circle cx="100" cy="25" r="4" stroke="#37B793" strokeWidth="2" fill="#fff" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    height: 160,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  leftContainer: {
    flex: 1,
    paddingRight: 1,
  },
  rightContainer: {
    width: 110, 
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  percentage: {
    fontSize: 14,
    color: '#37B793',
  },
  greyText: {
    color: 'grey',
  },
});

export default StatsContainer;


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Svg, { Line } from 'react-native-svg';

// const StatsContainer = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.title}>Total Value</Text>
//         <Text style={styles.value}>$44,780</Text>
//         <Text style={styles.percentage}>+04.16% <Text style={styles.greyText}>(From last month)</Text></Text>
//       </View>
//       <View style={styles.rightContainer}>
//         <Svg height="50" width="100">
//           <Line
//             x1="0"
//             y1="25"
//             x2="100"
//             y2="25"
//             stroke="#37B793"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </Svg>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     alignItems: 'center',
//     backgroundColor: '#fff',
    
//   },
//   leftContainer: {
//     flex: 1,
//     paddingRight: 10,
//   },
//   rightContainer: {
//     width: 100, // Set width according to your graph's requirement
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   value: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   percentage: {
//     fontSize: 14,
//     color: '#37B793',
//   },
//   greyText: {
//     color: 'grey',
//   },
// });

// export default StatsContainer;
