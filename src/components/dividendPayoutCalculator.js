// DividendPayoutCalculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../utils/config/colors';

const DividendPayoutCalculator = () => {
  const [selectedDividend, setSelectedDividend] = useState('Last Dividend');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dividend Payout Calculator</Text>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Stock Symbol:</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Price:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity style={styles.radioOption} onPress={() => setSelectedDividend('Last Dividend')}>
            <View style={[styles.radioCircle, selectedDividend === 'Last Dividend' && styles.radioSelected]} />
            <Text>Last Dividend</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.radioOption} onPress={() => setSelectedDividend('Avg. Dividend')}>
            <View style={[styles.radioCircle, selectedDividend === 'Avg. Dividend' && styles.radioSelected]} />
            <Text>Avg. Dividend</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Investment Amount:</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Expected Earnings:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: colors.black,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: colors.black,

  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 6,
    borderRadius: 6,
    height: 35,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  radioCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginRight: 4,
  },
  radioSelected: {
    backgroundColor: '#C4C4C4',
  },
});

export default DividendPayoutCalculator;
