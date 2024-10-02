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

import DualColorBarChart from '../../components/Charts/DualColorBarChart';





const tableData = [
  { symbol: 'PSP', price: 61.87, change: 0.29, lastDiv: 3.518, exDiv: 'Jun 24', payoutFreq: 'Quarterly' },
  { symbol: 'AVGO', price: 1703.3, change: -1.50, lastDiv: 5.250, exDiv: 'May 9', payoutFreq: 'Quarterly' },
  { symbol: 'NVDA', price: 125.83, change: -1.91, lastDiv: 0.010, exDiv: 'Jun 11', payoutFreq: 'Quarterly' },
  { symbol: 'PSP', price: 61.87, change: 0.29, lastDiv: 3.518, exDiv: 'Jun 24', payoutFreq: 'Quarterly' },
  { symbol: 'AVGO', price: 1703.3, change: -1.50, lastDiv: 5.250, exDiv: 'May 9', payoutFreq: 'Quarterly' },
  { symbol: 'PSP', price: 61.87, change: 0.29, lastDiv: 3.518, exDiv: 'Jun 24', payoutFreq: 'Quarterly' },
  { symbol: 'AVGO', price: 1703.3, change: -1.50, lastDiv: 5.250, exDiv: 'May 9', payoutFreq: 'Quarterly' },
  { symbol: 'NVDA', price: 125.83, change: -1.91, lastDiv: 0.010, exDiv: 'Jun 11', payoutFreq: 'Quarterly' },
];





const BalanceScreen = () => {
  const [activeTab, setActiveTab] = useState('Daily');
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
          <Text style={styles.portfolioText}>Balances</Text>
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

    <View style={styles.dropdown}>
    <Text style={styles.portfoliorowText}>Portfolio Balance</Text>
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
        </View>


       

        <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
            <View style={styles.dotAndText}>
            <View style={[styles.legendColor, { backgroundColor: '#745CE6' }]} />
            <Text style={styles.legendLabel}>Total Income</Text>
            </View>

         
        </View>
        <View style={styles.legendItem}>
          <View style={styles.dotAndText}>
          <View style={[styles.legendColor, { backgroundColor: '#FE6A57' }]} />
          <Text style={styles.legendLabel}>Total Spending</Text>
          </View>
         
        </View>
      
      </View>

      <View style={styles.balanceComponent}>
      <DualColorBarChart />
      </View>

        < BalanceComponent />
        <View style={styles.balanceComponent}>
        <PaymentList />
      </View>
       

     

         {/* Table */}
          {/* Tabs */}
          <PayoutRow text='Holding'/>


     
      <View style={styles.tableContainer}>
        <TableComponent data={tableData} />
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
  containerComponent:{
    flex: 1,
paddingBottom: 20,
    backgroundColor: colors.background,
    borderColor: colors.lightGrey
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
   
    // paddingVertical: 10,
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

export default BalanceScreen;
