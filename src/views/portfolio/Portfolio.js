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



const tabs = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

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

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Daily');




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
          <Text style={styles.portfolioText}>Portfolio summary</Text>
          <FreeModeToggle />
        </View>

        <View style={styles.incomebox}>
          {/* IncomeBox component */}
          <IncomeBox title="Total Dividend Income" amount="$8,636.80" />
        </View>

        {/* Status container */}
        <StatsContainer />

        {/* Today's Profit/Loss Portfolio Yield */}
        <View style={styles.freemode}>
          <Text style={styles.rowText}>Today's Profit/Loss</Text>
          <Text style={styles.rowText}>Portfolio Yield</Text>
        </View>

        <View style={styles.freemode}>
          <Text style={styles.percentText}>+$85.04</Text>
          <ArrowContainer />
          <Text style={styles.percentText}>0.21%</Text>
          <ArrowContainer />
        </View>

        <View style={styles.dropdown}>
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

        <ScrollableFilledLineGraph />
        <WatchlistRow />
        <TableWithChart data={data} />

         {/* Table */}
          {/* Tabs */}
          <PayoutRow text='Payout Frequency:' />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}  tabs={tabs}/>
      <View style={styles.tableContainer}>
        {activeTab === 'Daily' && <TableComponent data={tableData} />}
      </View>

      <DividendPayoutCalculator />
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
    fontSize: 18,
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
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Space between items
   
    paddingVertical: 10,
  },
  tableContainer: {
    marginBottom: 20,
  },
});

export default Portfolio;
