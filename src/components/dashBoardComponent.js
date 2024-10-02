import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import colors from '../utils/config/colors';

const verticalBarcolors = ['#6438F5', '#37B793', '#36B9E9']; // Random color options

const DashBoardComponent = () => {
  const scrollViewRef = useRef(null);

  const [monthlyIncome, setMonthlyIncome] = useState('$4,180,332.54');
  const [avgMonthlyPayment, setAvgMonthlyPayment] = useState('$25,296');
  const [monthlyROI, setMonthlyROI] = useState('$18,043');

  const handleScrollToIndex = (index) => {
    scrollViewRef.current?.scrollTo({
      x: index * 200, // Adjust the offset based on your component's dimensions
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => handleScrollToIndex(0)}>
            <View style={styles.itemWrapper}>
              <View style={[styles.verticalBorder, { backgroundColor: verticalBarcolors[0] }]} />
              <View style={styles.item}>
                <Text style={styles.label}>Monthly Income</Text>
                <View style = {styles.amountAndPercentage}>
                <Text style={styles.value}>{monthlyIncome}</Text>
                <Text style={[styles.percentage, { backgroundColor: '#E1F4EF' }]}>+4.2%</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => handleScrollToIndex(1)}>
            <View style={styles.itemWrapper}>
              <View style={[styles.verticalBorder, { backgroundColor: verticalBarcolors[1] }]} />
              <View style={styles.item}>
                <Text style={styles.label}>Avg. Monthly Payment</Text>
                <View style = {styles.amountAndPercentage}>
                <Text style={styles.value}>{avgMonthlyPayment}</Text>
                <Text style={[styles.percentage, { backgroundColor: '#FDEBDF' }]}>-3.5%</Text>
                </View>


              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => handleScrollToIndex(2)}>
            <View style={styles.itemWrapper}>
              <View style={[styles.verticalBorder, { backgroundColor: verticalBarcolors[2] }]} />
              <View style={styles.item}>
                <Text style={styles.label}>Monthly ROI</Text>
                <View style = {styles.amountAndPercentage}>
                <Text style={styles.value}>{monthlyROI}</Text>
                <Text style={[styles.percentage, { backgroundColor: '#E1F4EF' }]}>+10.9%</Text>
                </View>

              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
paddingVertical: 20,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemWrapper: {
    flexDirection: 'row', // Add row direction to handle border and content
    alignItems: 'center',
  },
  verticalBorder: {
    width: 5, // Border width
    height: 35, // Border height
    marginRight: 10, // Space between border and content
    borderRadius: 10,
  },
  item: {

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 4,
  },
  amountAndPercentage: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 12,
   

    marginBottom: 4,
    textAlign: 'center',
    color: 'black'

  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  percentage: {
    marginLeft: 2,
    fontSize: 8,
    color: 'black',
    padding: 4,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default DashBoardComponent;


// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const colors = ['#FF5252', '#4CAF50', '#2196F3']; // Random color options

// const DashBoardComponent = ({ }) => {
//   const scrollViewRef = useRef(null);



//   const [monthlyIncome, setMonthlyIncome] = useState('$4,180,332.54');
//   const [avgMonthlyPayment, setAvgMonthlyPayment] = useState('$25,296');
//   const [monthlyROI, setMonthlyROI] = useState('$18,043');

//   const handleScrollToIndex = (index) => {
//     scrollViewRef.current?.scrollTo({
//       x: index * 200, // Adjust the offset based on your component's dimensions
//       animated: true,
//     });
//   };


//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={() => handleScrollToIndex(0)}>
//             <View style={[styles.item, { borderColor: colors[0] }]}>
//               <Text style={styles.label}>Monthly Income</Text>
//               <Text style={styles.value}>{monthlyIncome}</Text>
//               <Text style={styles.percentage}>+4.2%</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={() => handleScrollToIndex(1)}>
//             <View style={[styles.item, { borderColor: colors[1] }]}>
//               <Text style={styles.label}>Avg. Monthly Payment</Text>
//               <Text style={styles.value}>{avgMonthlyPayment}</Text>
//               <Text style={styles.percentage}>-3.5%</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={() => handleScrollToIndex(2)}>
//             <View style={[styles.item, { borderColor: colors[2] }]}>
//               <Text style={styles.label}>Monthly ROI</Text>
//               <Text style={styles.value}>{monthlyROI}</Text>
//               <Text style={styles.percentage}>+10.9%</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   item: {
//     width: 200,
//     height: 100, // Adjust height as needed
//     borderWidth: 2,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 8,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     textAlign: 'center', // Center the label
//   },
//   value: {
//     fontSize: 16,
//     textAlign: 'center', // Center the value
//   },
//   percentage: {
//     fontSize: 12,
//     color: 'gray',
//     textAlign: 'center', // Center the percentage
//   },
// });

// export default DashBoardComponent;
