import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../utils/config/colors';

// Random data for the table
const data = [
  { ticker: 'bito', jul: '$9,320', aug: '$9,320', sep: '$9,320', oct: '$9,320' },
  { ticker: 'voo', jul: '$8,123', aug: '$8,456', sep: '$8,789', oct: '$8,000' },
  { ticker: 'spy', jul: '$10,432', aug: '$10,532', sep: '$10,632', oct: '$10,733' },
  { ticker: 'qqq', jul: '$7,222', aug: '$7,111', sep: '$7,444', oct: '$7,555' },
];

// Component to render each row of the table
const TableRow = ({ ticker, jul, aug, sep, oct }) => (
  <View style={styles.row}>
    <Text style={[styles.cell, styles.ticker]}>{ticker}</Text>
    <Text style={styles.cell}>{jul}</Text>
    <Text style={styles.cell}>{aug}</Text>
    <Text style={styles.cell}>{sep}</Text>
    <Text style={styles.cell}>{oct}</Text>
  </View>
);

const AnalyticTableComponent = () => {
  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.header}>
        <Text style={styles.headerCell}>Ticker</Text>
        <Text style={styles.headerCell}>Jul-24</Text>
        <Text style={styles.headerCell}>Aug-24</Text>
        <Text style={styles.headerCell}>Sep-24</Text>
        <Text style={styles.headerCell}>Oct-24</Text>
      </View>

      {/* Table Rows */}
      <ScrollView>
        {data.map((item, index) => (
          <TableRow
            key={index}
            ticker={item.ticker}
            jul={item.jul}
            aug={item.aug}
            sep={item.sep}
            oct={item.oct}
          />
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    paddingVertical:20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  ticker: {
    color: '#1E90FF', // Blue color for ticker names
    fontWeight: 'bold',
  },
});

export default AnalyticTableComponent;
