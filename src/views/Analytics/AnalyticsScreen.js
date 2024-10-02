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
import AnalyticTableComponent from '../../components/AnalyticComponent/AnalyticComponent';






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
const AnalyticsScreen = () => {
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
          <Text style={styles.portfolioText}>Analytics</Text>
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

      <StatsContainer />

      <View style={styles.stockPayoutText}>
      <Text style={styles.portfolioText}>Stock Payout Calendar</Text>
      </View>

      <AnalyticTableComponent />

      <WatchlistRow />


      
     
   

       

      
     
        <TableWithChart data={data} />


        <View style={styles.stockPayoutText}>
      <Text style={styles.portfolioText}>Expected / Received Dividend Income </Text>
      </View>

      <ScrollableFilledLineGraph />

      <StatsContainer />
    

     
        <View style={styles.columnData}>
        <Text style={styles.portfolioText}>Average Dividend Payment</Text>
        <Text style={styles.columnDataValue}>$422.34</Text>

        <Text style={styles.portfolioText}>Highest Dividend Payment</Text>
        <Text style={styles.columnDataValue}>$422.34</Text>
        <Text style={styles.portfolioText}>Lowest Dividend Payment</Text>
        <Text style={styles.columnDataValue}>$422.34</Text>
        <Text style={styles.portfolioText}>Variance</Text>
        <Text style={styles.columnDataValue}>5.2%</Text>
        </View>
       


     
    

     
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
  stockPayoutText:{
        paddingVertical: 20,
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
  columnData:{
        flexDirection: 'column',
        paddingVertical: 20
  },
  columnDataValue: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 5
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

export default AnalyticsScreen;
