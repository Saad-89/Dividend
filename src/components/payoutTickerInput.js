// components/PayoutTickerInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PayoutTickerInput = ({ payout, setPayout, ticker, setTicker }) => {
  return (
    <View style={styles.row}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Payout:</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={payout}
            onValueChange={(itemValue) => setPayout(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Monthly" value="Monthly" />
            <Picker.Item label="Yearly" value="Yearly" />
          </Picker>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Ticker:</Text>
        <TextInput
          value={ticker}
          onChangeText={setTicker}
          placeholder="Search and Add to Portfolio"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  fieldContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default PayoutTickerInput;
