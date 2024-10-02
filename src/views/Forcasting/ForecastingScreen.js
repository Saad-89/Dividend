import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import colors from '../../utils/config/colors';
import Vector from '../../assets/svg/Vector.svg';
import Bell from '../../assets/svg/bell.svg';
import QusetionCircleIcon from '../../assets/svg/question-circle-outlined.svg';
import ArrowContainer from '../../components/LeadingPercentage';
import FreeModeToggle from '../../components/freeModeToggle';
import IncomeBox from '../../components/incomBox';
import StatsContainer from '../../components/PortfolioComponent/statusContainer';
import CustomDropdown from '../../components/customDropDown';
import ScrollableFilledLineGraph from '../../components/PortfolioComponent/FilledGraph';
import TableWithChart from '../../components/PortfolioComponent/TableWithChart';
import WatchlistRow from '../../components/PortfolioComponent/WatchListRow';
import TableComponent from '../../components/tableComponent';
import Tabs from '../../components/tabs';
import PayoutRow from '../../components/PortfolioComponent/RowPayout';
import DividendPayoutCalculator from '../../components/dividendPayoutCalculator';
import GroupBarComponent from '../../components/BalancesComponent/GroupedBarChart';
import ContainerComponent from '../../components/BalancesComponent/ContainerComponent';
import BalanceComponent from '../../components/BalancesComponent/BalanceComponent';
import PaymentList from '../../components/BalancesComponent/PaymentList';
import ForecastingComponent from '../../components/ForecastingComponent/ForcastingComponent';







const data = [
  {
    company: 'DIS',
    lastPrice: '2500',
    change: '+6.87',
    chartData: [2000, 2500, 3000, 3500, 4500, 5000, 2500], // Sample 7-day chart data
  },
  {
    company: 'BST',
    lastPrice: '2500',
    change: '-5.87',
    chartData: [2600, 2550, 2000, 2450, 2400, 1800, 2300],
  },
  {
    company: 'DIS',
    lastPrice: '2500',
    change: '+6.87',
    chartData: [2000, 2200, 2700, 3500, 4000, 2550, 2500], // Sample 7-day chart data
  },
  {
    company: 'BST',
    lastPrice: '2500',
    change: '-5.87',
    chartData: [2600, 3000, 2500, 2450, 2400, 2350, 2300],
  },
  // Add more rows as needed...
];



const tabs = ['Simple', 'Advance'];
const ForcastingScreen = () => {
  const [activeTab, setActiveTab] = useState('Simple');
  const [selectedIndex, setSelectedIndex] = useState(null); // To track the selected component

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const componentsData = [
    { title: 'Portfolio', description: 'Create an invoice requesting payment on specific date' },
    { title: 'Watchlist', description: 'Automatically charge a payment method on file' },
    { title: 'Screening', description: 'Automatically charge a payment method on file' },
  ];




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.dashboardContent} 
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        bounces={false} // Disable bouncing effect
      >
        {/* Icons */}
        <View style={styles.iconsRow}>
          <QusetionCircleIcon height={24} width={24} style={styles.icon} />
          <Bell height={24} width={24} style={styles.icon} />
          <Vector height={24} width={24} style={styles.icon} />
        </View>

        {/* Free mode */}
        <View style={styles.freemode}>
          <Text style={styles.portfolioText}>Forecasting</Text>
          <FreeModeToggle />
        </View>

        <View style={styles.incomebox}>
          {/* IncomeBox component */}
          <IncomeBox title="Total Dividend Income" amount="$8,636.80" />
        </View>


        <View style={styles.containerComponent}>
      {componentsData.map((item, index) => (
        <ContainerComponent
          key={index}
          title={item.title}
          description={item.description}
          onSelect={() => handleSelect(index)}
          isSelected={selectedIndex === index} // Determine if the component is selected
        />
      ))}
    </View>


      {/* Green Forecasting Components */}
      <ForecastingComponent earnings={11324} percentage={2.7} />
      <ForecastingComponent earnings={15000} percentage={5.0} />

      {/* Red Forecasting Components */}
      <ForecastingComponent earnings={8000} percentage={-1.5} />
      <ForecastingComponent earnings={6000} percentage={-3.2} />



      <View style={styles.simpleAndAdvancetabs}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}  tabs={tabs}/>
      </View>

    <View style={styles.dropdown}>
       {/* dropdown 1 */}
          <CustomDropdown
            items={[
              { label: 'Monthly', value: 'monthly' },
              { label: 'Yearly', value: 'yearly' },
            ]}
            value={'monthly'}
            onSelect={(val) => console.log(val)}
            dropdownWidth={100}
            dropdownHeight={30}
            borderRadius={10}
            borderColor={'#333'}
            textSize={10}
          />
            {/* dropdown 2 */}
            <CustomDropdown
            items={[
              { label: 'Daily', value: 'daily' },
              { label: 'Weekly', value: 'weekly' },
            ]}
            value={'daily'}
            onSelect={(val) => console.log(val)}
            dropdownWidth={100}
            dropdownHeight={30}
            borderRadius={10}
            borderColor={'#333'}
            textSize={10}
          />
            {/* dropdown 3 */}
            <CustomDropdown
            items={[
              { label: 'Price', value: 'price' },
              { label: 'Filter', value: 'filter' },
            ]}
            value={'price'}
            onSelect={(val) => console.log(val)}
            dropdownWidth={100}
            dropdownHeight={30}
            borderRadius={10}
            borderColor={'#333'}
            textSize={10}
          />
        </View>


       

      
     
        <TableWithChart data={data} />
    

     

       


     
    

     
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
  },
  dashboardContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20, // Add some padding at the bottom to prevent cut-off
  },
  iconsRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 6,
  },
  incomebox: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  rowText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6BBB5E',
  },
  simpleAndAdvancetabs:{
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  containerComponent:{
    flex: 1,
paddingBottom: 20,
    backgroundColor: colors.background,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
   
    paddingVertical: 10,
  },
  portfoliorowText:{
    fontSize: 20,
    fontWeight: '700'
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    width: '100%',
    paddingVertical: 20,
    // paddingHorizontal: 30,
  },
  legendItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotAndText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendLabel: {
    fontSize: 14,
    color: '#6B6B6B',
    marginRight: 10,
  },
  legendValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 20,
  },
  balanceComponent: {
    paddingVertical: 20,
  }
});

export default ForcastingScreen;
