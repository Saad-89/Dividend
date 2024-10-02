

import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,

 } from 'react-native';

import CustomDrawer from '../../components/drawer';
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

import GroupedBars from '../../components/Charts/GroupedChart';

const DividendDashboard = ({navigation}) => {
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
      {/* <Header />
      <CustomDrawer navigation={navigation} /> */}

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
     
      <ChartComponent data={chartData} />


      <View style={styles.twoDropdownsRow}>
      <Text style={styles.overviewText}>Monthly Total</Text>
      {/* <DatePickerComponent/> */}
      </View>


      <DashBoardComponent />


      {/* <BarChartComponent data1={data1} data2={data2} labels={labels} /> */}


      {/*  */}
      {/* <BarChartComponent data={data} labels={labels} /> */}
      <View style={styles.groupBar}>
      <GroupedBars />
      </View>
      






      <HalfDoughnutChartComponent income={income} investment={investment} earnings={earnings} />




      <View style={styles.dividendPayoutBox}>
      <DividendPayoutCalculator />
      </View>
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
    width: '100%'
  },
  dashboardContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
    fontSize: 18,
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
  groupBar: {
    paddingVertical: 20
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
  dividendPayoutBox:{
    paddingVertical: 20
  }
});

export default DividendDashboard;











