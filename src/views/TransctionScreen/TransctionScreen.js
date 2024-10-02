import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FreeModeToggle from '../../components/freeModeToggle';
import IncomeBox from '../../components/incomBox';

import Vector from '../../assets/svg/Vector.svg';
import Bell from '../../assets/svg/bell.svg';
import QusetionCircleIcon from '../../assets/svg/question-circle-outlined.svg';

const TransactionHistoryScreen = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, invoice: "Inv # 0631, 28 Jun", amount: "$14,000", date: "28 Jun", status: "Success", isChecked: true },
    { id: 2, invoice: "Inv # 0632, 29 Jun", amount: "$10,000", date: "29 Jun", status: "Pending", isChecked: false },
    { id: 3, invoice: "Inv # 0633, 30 Jun", amount: "$5,000", date: "30 Jun", status: "Pending", isChecked: false },
    { id: 4, invoice: "Inv # 0634, 1 Jul", amount: "$2,500", date: "1 Jul", status: "Success", isChecked: false },
  ]);

  const handleCheckboxToggle = (id) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, isChecked: !transaction.isChecked };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
  };

  const renderStatusDot = (status) => {
    let color = '#28A745'; // Green for Success
    if (status === 'Pending') color = '#FFC107'; // Yellow for Pending
    if (status === 'Failed') color = '#DC3545';  // Red for Failed
    return <View style={[styles.statusDot, { backgroundColor: color }]} />;
  };

  return (
    <View style={styles.container}>

<View style={styles.iconsRow}>
          <QusetionCircleIcon height={24} width={24} style={styles.icon} />
          <Bell height={24} width={24} style={styles.icon} />
          <Vector height={24} width={24} style={styles.icon} />
        </View>

         <View style={styles.freemode}>
         <IncomeBox title="Total Dividend Income" amount="$8,636.80" />
        <FreeModeToggle />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Transaction History</Text>
          <Text style={styles.headerSubtitle}>Update 20/07/24 at 04:30 PM</Text>
        </View>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderText, styles.invoiceColumn]}>Invoice</Text>
        <Text style={[styles.tableHeaderText, styles.amountColumn]}>Amount</Text>
        <Text style={[styles.tableHeaderText, styles.dateColumn]}>Date</Text>
        <Text style={[styles.tableHeaderText, styles.statusColumn]}>Status</Text>
        <Text style={[styles.tableHeaderText, styles.manageColumn]}>Manage</Text>
      </View>

      {/* Table Content */}
      <ScrollView>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.tableRow}>
            <TouchableOpacity style={styles.checkbox} onPress={() => handleCheckboxToggle(transaction.id)}>
              <Icon
                name={transaction.isChecked ? 'checkbox-outline' : 'square-outline'}
                size={20}
                color={transaction.isChecked ? '#007AFF' : '#C4C4C4'}
              />
            </TouchableOpacity>

            <Text style={[styles.tableRowText, styles.invoiceColumn]}>{transaction.invoice}</Text>
            <Text style={[styles.tableRowText, styles.amountColumn]}>{transaction.amount}</Text>
            <Text style={[styles.tableRowText, styles.dateColumn]}>{transaction.date}</Text>

            <View style={[styles.statusContainer, styles.statusColumn]}>
              {renderStatusDot(transaction.status)}
              <Text style={styles.statusText}>{transaction.status}</Text>
            </View>

            <TouchableOpacity style={[styles.downloadButton, styles.manageColumn]}>
             
              <Text style={styles.downloadButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    width: '100%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6C757D',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  tableRowText: {
    fontSize: 8,
    textAlign: 'center',
  },
  checkbox: {
    width: 30,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 2,
  },
  statusText: {
    fontSize: 8,
    marginRight: 5,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    height: 30,
    borderRadius: 3,
    marginLeft: 10
   
  },
  downloadButtonText: {
    fontSize: 8,
    marginLeft: 5,

  },
  invoiceColumn: {
    flex: 2,  // Make the invoice column wider
  },
  amountColumn: {
    flex: 1,  // Adjust based on the data length
    textAlign: 'center',
  },
  dateColumn: {
    flex: 1,
    textAlign: 'center',
  },
  statusColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  manageColumn: {
    flex: 1.5, // Slightly wider for the download button
    justifyContent: 'center',
    alignItems: 'center',
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
    alignItems: 'center',
    paddingVertical: 10,
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  
});

export default TransactionHistoryScreen;
