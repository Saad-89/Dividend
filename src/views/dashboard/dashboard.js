import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,

 } from 'react-native';


import DatePickerComponent from '../../components/datePicker';
import FilterBox from '../../components/filterBox';
import Header from '../../components/header';
import FreeModeToggle from '../../components/freeModeToggle';
import IncomeBox from '../../components/incomBox';
import ChartComponent from '../../components/chart';
import BarChartComponent from '../../components/barChart';
import HalfDoughnutChartComponent from '../../components/doughnutChart';
import DividendPayoutCalculator from '../../components/dividendPayoutCalculator';
import UpcomingPayouts from '../../components/upcomingPayouts';
import DashBoardComponent from '../../components/dashBoardComponent';
import CustomDropdown from '../../components/customDropDown';


import colors from '../../utils/config/colors';
import Vector from '../../assets/svg/Vector.svg';
import Bell from '../../assets/svg/bell.svg';
import QusetionCircleIcon from '../../assets/svg/question-circle-outlined.svg';
import IncomeComponent from '../../components/incomeComponent';

const DividendDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [period, setPeriod] = useState('monthly');
  const [filter, setFilter] = useState('all');



  const handleSelect = (value) => {
    setSelectedOption(value);
  };


  const chartData = [0, 2000, 4000, 6000, 8000, 10000, 9000, 8000, 6000];


  const data = [2000, 1500, 1000, 2000]; // Example data
  // const labels = ['July 24', 'Aug 24', 'Sept 24', 'Oct 24']; // Example labels


  const income = 1500;
  const investment = 12254;
  const earnings = 1145;



  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data1 = [30, 45, 28, 80, 99, 43, 50]; // Data for the first bar
  const data2 = [20, 35, 40, 60, 78, 39, 45]; // Data for the second bar


  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  return (
    <SafeAreaView style={styles.container}>
      {/* Header Component */}
      <Header />

      {/* Dashboard Content */}
      <ScrollView contentContainerStyle={styles.dashboardContent}>


        {/* icons.....  */}

        <View style = {styles.iconsRow}>
          <QusetionCircleIcon height={24} width={24} style={styles.icon} />
          <Bell height={24} width={24} style={styles.icon}  />
          <Vector height={24} width={24} style={styles.icon} />
        </View>


        {/* IncomeBox and free mode */}

        <View style={styles.IncomeBoxFreeModeToggleContainer}>
      {/* IncomeBox component */}
      <IncomeBox title="Total Dividend Income" amount="$8,636.80" />

      {/* FreeModeToggle component */}
      <FreeModeToggle />
    </View>
{/* // overview */}

<View style={styles.rowContainer}>
      <Text style={styles.overviewText}>Overview</Text>

      <View style={styles.rightSide}>
        {/* First Dropdown (Period) */}
        <CustomDropdown
  items={[
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
  ]}
  value={'monthly'}
  onSelect={(val) => console.log(val)}
  dropdownWidth={80}
  dropdownHeight={30}
  borderRadius={10}
  borderColor={'#333'}
  textSize={10}
/>

        {/* Second Dropdown (Filter) */}

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

        <FilterBox/>





      </View>
    </View>




    {/* income components */}

    <IncomeComponent
        title="Income"
        percentage={160}
        amount="86,044"
        subAmount="175,26"
        iconName="university"
      />
      <IncomeComponent
        title="Expenses"
        percentage={-80}
        amount="10,200"
        subAmount="45,26"
        iconName="wallet"
      />
      <IncomeComponent
        title="Savings"
        percentage={50}
        amount="5,600"
        subAmount="3,200"
        iconName="piggy-bank"
      />



<View style={styles.twoDropdownsRow}>
<CustomDropdown
  items={[
    { label: 'All Income', value: 'all income' },
    { label: 'Income', value: 'income' },
  ]}
  value={'all income'}
  onSelect={(val) => console.log(val)}
  dropdownWidth={80}
  dropdownHeight={30}
  borderRadius={10}
  borderColor={'#333'}
  textSize={10}
/>

        {/* Second Dropdown (Filter) */}

        <CustomDropdown
  items={[
    { label: 'Last Year', value: 'last year' },
    { label: 'Last Month', value: 'last month' },

  ]}
  value={'last year'}
  onSelect={(val) => console.log(val)}
  dropdownWidth={80}
  dropdownHeight={30}
  borderRadius={10}
  borderColor={'#333'}
  textSize={10}
/>


</View>
      {/* graph component */}
      {/* <GraphComponent data={data} labels={labels} /> */}
      <ChartComponent data={chartData} />


      <View style={styles.twoDropdownsRow}>
      <Text style={styles.overviewText}>Monthly Total</Text>
      {/* <DatePickerComponent/> */}
      </View>


      <DashBoardComponent />


      <BarChartComponent data1={data1} data2={data2} labels={labels} />

      {/*  */}
      {/* <BarChartComponent data={data} labels={labels} /> */}






      <HalfDoughnutChartComponent income={income} investment={investment} earnings={earnings} />




      <DividendPayoutCalculator />
      <UpcomingPayouts />









      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  dashboardContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    alignSelf:'flex-end',

  },
  icon: {
    marginRight: 6,
  },
  IncomeBoxFreeModeToggleContainer:{
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.background,
  },
  overviewText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  twoDropdownsRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },

  dropDowncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
  },
});

export default DividendDashboard;












// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, Switch, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';
// import logo from '../../assets/icons/Logo.png';
// import bank from '../../assets/icons/bank.png';
// import bell from '../../assets/icons/bell.png';
// import element from '../../assets/icons/elements.png';
// import leadIcon from '../../assets/icons/lead-icon.png';
// import setting from '../../assets/icons/settings.png';
// import vector from '../../assets/icons/Vector.png';
// import transaction from '../../assets/icons/transaction.png';
// import downdown from '../../assets/icons/dropdown.png';
// import { Picker } from '@react-native-picker/picker';



// const screenWidth = Dimensions.get('window').width;

// const DividendDashboard = () => {
//   const [isFreeMode, setIsFreeMode] = useState(false);
//   const [selectedPayout, setSelectedPayout] = useState('Monthly');
//   const [selectedDividend, setSelectedDividend] = useState('All Dividends');

//   const toggleSwitch = () => setIsFreeMode(previousState => !previousState);

//   return (
//     <ScrollView style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <Image source={logo} style={styles.logo} />
//         <View style={styles.icons}>
//           <Image source={bell} style={styles.icon} />
//           <Image source={setting} style={styles.icon} />
//           <Image source={leadIcon} style={styles.icon} />
//         </View>
//       </View>

//       {/* Total Dividend Income Card */}
//       <View style={styles.dividendCard}>
//         <Text style={styles.dividendText}>Total Dividend Income</Text>
//         <Text style={styles.dividendAmount}>$8,636.80</Text>
//         <Image source={downdown} style={styles.dropdownIcon} />
//       </View>

//       {/* Free Mode Switch */}
//       <View style={styles.freeMode}>
//         <Text>Free Mode</Text>
//         <Switch
//           trackColor={{ false: '#767577', true: '#34C759' }}
//           thumbColor={isFreeMode ? '#ffffff' : '#f4f3f4'}
//           onValueChange={toggleSwitch}
//           value={isFreeMode}
//         />
//       </View>

//       {/* Overview Section */}
//       <Text style={styles.sectionTitle}>Overview</Text>

//       {/* Dropdowns */}
//       <View style={styles.dropdownContainer}>
//         <Picker
//           selectedValue={selectedPayout}
//           style={styles.picker}
//           onValueChange={(itemValue) => setSelectedPayout(itemValue)}
//         >
//           <Picker.Item label="Monthly" value="Monthly" />
//           <Picker.Item label="Yearly" value="Yearly" />
//         </Picker>
//         <Picker
//           selectedValue={selectedDividend}
//           style={styles.picker}
//           onValueChange={(itemValue) => setSelectedDividend(itemValue)}
//         >
//           <Picker.Item label="All Dividends" value="All Dividends" />
//           <Picker.Item label="Specific Dividends" value="Specific Dividends" />
//         </Picker>
//       </View>

//       {/* Income, Yield, Average Payment */}
//       <View style={styles.statsContainer}>
//         <View style={styles.statCard}>
//           <Text style={styles.statTitle}>Income</Text>
//           <Text style={styles.statAmount}>$86,044</Text>
//           <Text style={styles.statSubtitle}>From $175.26</Text>
//           <Image source={bank} style={styles.statIcon} />
//         </View>
//         <View style={styles.statCard}>
//           <Text style={styles.statTitle}>Yield</Text>
//           <Text style={styles.statAmount}>13%</Text>
//           <Text style={styles.statSubtitle}>From 8 months</Text>
//           <Image source={element} style={styles.statIcon} />
//         </View>
//         <View style={styles.statCard}>
//           <Text style={styles.statTitle}>Average Payment</Text>
//           <Text style={styles.statAmount}>$6,144</Text>
//           <Text style={styles.statSubtitle}>Down from $6,629.21</Text>
//           <Image source={transaction} style={styles.statIcon} />
//         </View>
//       </View>

//       {/* Graph Section */}
//       <LineChart
//         data={{
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//           datasets: [
//             {
//               data: [5000, 6000, 6500, 7000, 7200, 6800, 7300, 7500, 8600],
//               color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
//               strokeWidth: 2,
//             },
//           ],
//         }}
//         width={screenWidth * 0.9} // from react-native
//         height={220}
//         yAxisLabel="$"
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#ffffff',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         bezier
//         style={styles.chart}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//     paddingHorizontal: 20,
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   logo: {
//     width: 40,
//     height: 40,
//   },
//   icons: {
//     flexDirection: 'row',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginLeft: 15,
//   },
//   dividendCard: {
//     backgroundColor: '#e6f0ff',
//     borderRadius: 8,
//     padding: 15,
//     marginVertical: 20,
//   },
//   dividendText: {
//     fontSize: 16,
//     color: '#555555',
//   },
//   dividendAmount: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 5,
//     color: '#333333',
//   },
//   dropdownIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//     width: 12,
//     height: 12,
//   },
//   freeMode: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   dropdownContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   picker: {
//     width: '45%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//   },
//   statsContainer: {
//     marginVertical: 15,
//   },
//   statCard: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statTitle: {
//     fontSize: 16,
//     color: '#555555',
//   },
//   statAmount: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   statSubtitle: {
//     fontSize: 14,
//     color: '#999999',
//   },
//   statIcon: {
//     width: 24,
//     height: 24,
//   },
//   chart: {
//     marginVertical: 15,
//     borderRadius: 16,
//   },
// });

// export default DividendDashboard;

