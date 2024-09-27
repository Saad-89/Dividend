// components/TableComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../utils/config/colors';

const TableComponent = ({ data }) => {
  return (
    <View>
      <View style={styles.tableHeader}>
        {['Symbol', 'Price', 'Chg %', 'Last Div.', 'Ex Div.', 'Payout Frequency'].map((header, index) => (
          <Text key={index} style={styles.tableHeaderText}>{header}</Text>
        ))}
      </View>
      {data.map((row, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCellSymbol}>{row.symbol}</Text>
          <Text style={styles.tableCell}>{row.price}</Text>
          <Text style={row.change >= 0 ? styles.positiveChange : styles.negativeChange}>{row.change}%</Text>
          <Text style={styles.tableCell}>{row.lastDiv}</Text>
          <Text style={styles.tableCell}>{row.exDiv}</Text>
          <Text style={styles.tableCell}>{row.payoutFreq}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  tableHeaderText: {
    fontSize: 10,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCellSymbol:{
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
    color: colors.primary,

  },
  tableCell: {
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  positiveChange: {
    color: 'green',
    flex: 1,
    textAlign: 'center',
  },
  negativeChange: {
    color: 'red',
    flex: 1,
    textAlign: 'center',
  },
});

export default TableComponent;
