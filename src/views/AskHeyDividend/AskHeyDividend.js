import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import SvgIncome from '../../assets/svg/HeyDividendSvg/withdraw.svg'; 
import Svgw from '../../assets/svg/HeyDividendSvg/w.svg'; 
import SvgSavings from '../../assets/svg/HeyDividendSvg/alerts.svg';
import SvgInvestments from '../../assets/svg/HeyDividendSvg/bulk-alerts.svg';
import Container from '../../assets/svg/HeyDividendSvg/container.svg';
import SvgGo from '../../assets/svg/HeyDividendSvg/button-container.svg';

import colors from '../../utils/config/colors';
import CustomDropdown from '../../components/customDropDown';

const AskHeyDividend = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  // Sample data for the grid boxes
  const gridData = [
    { id: '1', title: 'Smart Dividend', description: 'Get insights based on user-defined criteria, using AI algorithms', icon: Svgw, bgColor: '#FFF6EB' },
    { id: '2', title: 'Real-Time Answers', description: 'Get real-time answers on specified dividends, such as drastic price changes and declaration dates', icon: SvgInvestments, bgColor: '#F5EDFA' },
    { id: '3', title: 'Create Dividend Alerts', description: 'Use AI to Setup Alerts for Your Favorite Dividends', icon: SvgSavings, bgColor: '#DFF9E8' },
    { id: '4', title: 'Auto Withdraw', description: 'Automate trades based on user-defined criteria, using AI algorithms to time trades optimally.', icon: SvgIncome, bgColor: '#D8F0FF' },
  ];

  // Box component
  const GridItem = ({ item, navigation }) => {
    const IconComponent = item.icon;

    return (
      <TouchableOpacity 
        style={[styles.gridItem, { backgroundColor: item.bgColor }]}
        onPress={null} // () => navigation.navigate('ChatResult', { itemId: item.id })
      >
        <Text style={styles.gridTitle}>{item.title}</Text>
        <Text style={styles.gridDescription}>{item.description}</Text>
        <IconComponent width={50} height={50} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropDownContainer}>
        <CustomDropdown
          items={[
            { label: 'All', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
          ]}
          value={'all'}
          onSelect={(val) => console.log(val)}
          dropdownWidth={80}
          dropdownHeight={30}
          borderRadius={10}
          borderColor={'#333'}
          textSize={10}
        />
      </View>

      {/* Search Bar with Icons */}
      <View style={styles.searchContainer}>
        <Container />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <SvgGo />
      </View>

      {/* Grid View */}
      <FlatList
        data={gridData}
        renderItem={({ item }) => <GridItem item={item} navigation={navigation} />} // Pass navigation here
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.background,
    width: '100%',
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  gridContainer: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
    textAlign: 'left',
  },
  gridDescription: {
    fontSize: 12,
    color: colors.black,
    marginBottom: 10,
    textAlign: 'left',
  },
});

export default AskHeyDividend;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import SvgIncome from '../../assets/svg/HeyDividendSvg/withdraw.svg'; 
// import Svgw from '../../assets/svg/HeyDividendSvg/w.svg'; 
// import SvgSavings from '../../assets/svg/HeyDividendSvg/alerts.svg';
// import SvgInvestments from '../../assets/svg/HeyDividendSvg/bulk-alerts.svg';
// import Container from '../../assets/svg/HeyDividendSvg/container.svg';
// import SvgGo from '../../assets/svg/HeyDividendSvg/button-container.svg';

// import colors from '../../utils/config/colors';
// import CustomDropdown from '../../components/customDropDown';

// const AskHeyDividend = ({ navigation }) => {
//   const [searchText, setSearchText] = useState('');

//   // Sample data for the grid boxes
//   const gridData = [
//     { id: '1', title: 'Smart Dividend', description: 'Get insights based on user-defined criteria, using AI algorithms', icon: Svgw, bgColor: '#FFF6EB' },
//     { id: '2', title: 'Real-Time Answers', description: 'Get real-time answers on specified dividends, such as drastic price changes and declaration dates', icon: SvgInvestments, bgColor: '#F5EDFA' },
//     { id: '3', title: 'Create Dividend Alerts', description: 'Use AI to Setup Alerts for Your Favorite Dividends', icon: SvgSavings, bgColor: '#DFF9E8' },
//     { id: '4', title: 'Auto WithDraw', description: 'Automate trades based on user-defined criteria, using AI algorithms to time trades optimally.', icon: SvgIncome, bgColor: '#D8F0FF' },
//   ];

//   // Box component
//   const GridItem = ({ item }) => {
//     const IconComponent = item.icon;

//     return (
//       <TouchableOpacity 
//         style={[styles.gridItem, { backgroundColor: item.bgColor }]}
//         onPress={() => navigation.navigate('ChatResult', { itemId: item.id })}
//       >
//         <Text style={styles.gridTitle}>{item.title}</Text>
//         <Text style={styles.gridDescription}>{item.description}</Text>
//         <IconComponent width={50} height={50} />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.dropDowncontainer}>
//         <CustomDropdown
//           items={[
//             { label: 'All', value: 'all' },
//             { label: 'Active', value: 'active' },
//             { label: 'Inactive', value: 'inactive' },
//           ]}
//           value={'all'}
//           onSelect={(val) => console.log(val)}
//           dropdownWidth={80}
//           dropdownHeight={30}
//           borderRadius={10}
//           borderColor={'#333'}
//           textSize={10}
//         />
//       </View>

//       {/* Search Bar with Icons */}
//       <View style={styles.searchContainer}>
//         <Container />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search..."
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//         />
//         <SvgGo />
//       </View>

//       {/* Grid View */}
//       <FlatList
//         data={gridData}
//         renderItem={({ item }) => <GridItem item={item} navigation={navigation} />}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.gridContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: colors.background,
//     width: '100%',
//   },
//   dropDowncontainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     paddingVertical: 10,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
//   gridContainer: {
//     flexGrow: 1,
//     padding: 0,
//     margin: 0,
//   },
//   gridItem: {
//     flex: 1,
//     margin: 10,
//     borderRadius: 8,
//     padding: 15,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   gridTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: colors.black,
//     marginBottom: 5,
//     textAlign: 'left',
//   },
//   gridDescription: {
//     fontSize: 12,
//     color: colors.black,
//     marginBottom: 10,
//     textAlign: 'left',
//   },
// });

// export default AskHeyDividend;
