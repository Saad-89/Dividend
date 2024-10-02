// Import necessary components and hooks
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../utils/config/colors';
import ArrowLogo from '../assets/svg/arrow-down.svg';

// IncomeBox Component
const IncomeBox = ({ title, amount }) => {
  return (
    <TouchableOpacity style={styles.incomeBox}>
      <Text style={styles.incomeBoxTitle}>{title}</Text>
      <View style={styles.amountAndArrowIcon}>
        <Text style={styles.incomeBoxAmount}>{amount}</Text>
        <ArrowLogo />
      </View>
    </TouchableOpacity>
  );
};

export default IncomeBox;

// Styles for the components
const styles = StyleSheet.create({
  incomeBox: {
    backgroundColor: colors.secondary, // Light purple color
    borderRadius: 8,
    padding: 12,
    width: '55%', // Adjust width as per your design
  },
  incomeBoxTitle: {
    color: '#ffffff', // White text for the title
    fontSize: 14,
    fontWeight: '400',
  },
  incomeBoxAmount: {
    color: '#ffffff', // White text for the amount
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Make amount take available space
  },
  amountAndArrowIcon: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between',
  },
});


// // Import necessary components and hooks
// import React from 'react';
// import {  Text, StyleSheet, TouchableOpacity, View } from 'react-native';
// import colors from '../utils/config/colors';

// import ArrowLogo from '../assets/svg/arrow-down.svg';

// // IncomeBox Component
// const IncomeBox = ({ title, amount }) => {
//   return (
//     <TouchableOpacity style={styles.incomeBox}>
//       <Text style={styles.incomeBoxTitle}>{title}</Text>
//     <View style={styles.amountAndArrowIcon}>
//     <Text style={styles.incomeBoxAmount}>{amount}</Text>
//     <ArrowLogo />
//     </View>
//     </TouchableOpacity>
//   );
// };

// export default IncomeBox;

// // Styles for the components
// const styles = StyleSheet.create({

//   incomeBox: {
//     backgroundColor: colors.secondary, // Light purple color
//     borderRadius: 8,
//     padding: 12,
//     width: '55%', // Adjust width as per your design
//   },
//   incomeBoxTitle: {
//     color: '#ffffff', // White text for the title
//     fontSize: 14,
//     fontWeight: '400',
//   },
//   incomeBoxAmount: {
//     color: '#ffffff', // White text for the amount
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   amountAndArrowIcon:{
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }

// });


