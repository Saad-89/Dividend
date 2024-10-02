// screens/CreateDividendPortfolioScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TableComponent from '../../components/tableComponent';
import Tabs from '../../components/tabs';
import PayoutTickerInput from '../../components/payoutTickerInput';
import CustomButton from '../../components/customButtons';


const CreateDividendPortfolioScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Dividend');
  const [payout, setPayout] = useState('Monthly');
  const [ticker, setTicker] = useState('');

  const data = [
    { symbol: 'PSP', price: 61.87, change: 0.29, lastDiv: 3.518, exDiv: 'Jun 24', payoutFreq: 'Quarterly' },
    { symbol: 'AVGO', price: 1703.3, change: -1.50, lastDiv: 5.250, exDiv: 'May 9', payoutFreq: 'Quarterly' },
    { symbol: 'NVDA', price: 125.83, change: -1.91, lastDiv: 0.010, exDiv: 'Jun 11', payoutFreq: 'Quarterly' },
    { symbol: 'PSP', price: 61.87, change: 0.29, lastDiv: 3.518, exDiv: 'Jun 24', payoutFreq: 'Quarterly' },
    { symbol: 'AVGO', price: 1703.3, change: -1.50, lastDiv: 5.250, exDiv: 'May 9', payoutFreq: 'Quarterly' },
  ];

  const tabs = ['General', 'Holdings', 'Dividend', 'View All'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Dividend Portfolio</Text>
      <Text style={styles.subtitle}>Your account starts with setting up a Portfolio. You can do that multiple ways:</Text>

      {/* Payout and Ticker Input */}
      <PayoutTickerInput
        payout={payout}
        setPayout={setPayout}
        ticker={ticker}
        setTicker={setTicker}
      />

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>

      {/* Table */}
      <View style={styles.tableContainer}>
        {activeTab === 'Dividend' && <TableComponent data={data} />}
      </View>

      {/* Create Button */}
      <CustomButton
        title="Create"
        onPress={() => navigation.navigate('MainNavigator')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
    marginTop: 30,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  tableContainer: {
    marginBottom: 50,
  },
});

export default CreateDividendPortfolioScreen;


