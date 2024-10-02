import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import DollarBadge from '../../assets/svg/dollar-badge.svg';
import colors from '../../utils/config/colors';

const BalanceComponent = () => {
  // Define the path for the curved line using a cubic Bezier curve (now in red)
  const curvePath = "M 0 60 C 50 0, 50 50, 100 25";

  return (
    <View style={styles.container}>
      
      {/* First Row: Icon and "Total Balance" Text */}
      <View style={styles.firstRow}>
        {/* SVG Icon */}
        <DollarBadge style={styles.icon} />
        
        <Text style={styles.title}>Total Balance</Text>
      </View>

      {/* Second Row: Balance amount and percentage change on the left, graph on the right */}
      <View style={styles.secondRow}>
        {/* Left side: Balance and Percentage */}
        <View style={styles.leftContainer}>
          <Text style={styles.value}>$53,546.31</Text>
          <Text style={styles.percentage}>+10 <Text style={styles.greyText}>(From last week)</Text></Text>
        </View>

        {/* Right side: Line graph */}
        <View style={styles.rightContainer}>
          <Svg height="50" width="100%">
            <Path
              d={curvePath}
              stroke="#FF0000" // Red line for the graph
              strokeWidth="2"
              fill="none"
            />
            {/* Circular dot at the end of the line */}
            <Circle cx="100" cy="25" r="4" stroke="#FF0000" strokeWidth="2" fill="#fff" />
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 15,
    backgroundColor: '#fff',
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Adds space between the icon and the text
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    width: 110,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  percentage: {
    fontSize: 14,
    color: '#FF0000', // Updated to red to match the line graph
  },
  greyText: {
    color: 'grey',
  },
});

export default BalanceComponent;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Svg, { Path, Circle } from 'react-native-svg';

// const BalanceComponent = () => {
//   // Define the path for the curved line using a cubic Bezier curve
//   const curvePath = "M 0 60 C 50 0, 50 50, 100 25";

//   return (
//     <View style={styles.container}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.title}>Total Value</Text>
//         <Text style={styles.value}>$44,780</Text>
//         <Text style={styles.percentage}>+04.16% <Text style={styles.greyText}>(From last month)</Text></Text>
//       </View>
//       <View style={styles.rightContainer}>
//         <Svg height="50" width="100%">
//           <Path
//             d={curvePath}
//             stroke="#37B793"
//             strokeWidth="2"
//             fill="none"
//           />
//           {/* Circular dot at the end of the line */}
//           <Circle cx="100" cy="25" r="4" stroke="#37B793" strokeWidth="2" fill="#fff" />
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
//     paddingRight: 1,
//   },
//   rightContainer: {
//     width: 110, 
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

// export default BalanceComponent;