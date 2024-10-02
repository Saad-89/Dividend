import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Rect } from 'react-native-svg';
import colors from '../../utils/config/colors';

// Main Container Component
const PaymentList = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Upcoming Payments</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Payment Rows */}
      <PaymentDetail
        title="IWMY"
        amount="$1,232"
        description="Defiance R2000 Ebch op in"
        progress={0.7}
        progressColor="#6438F5" // Orange
      />
      <PaymentDetail
        title="ABC Corp"
        amount="$5,670"
        description="Dividend Yield Index"
        progress={0.45}
        progressColor="#F17B2C" // Green
      />
      <PaymentDetail
        title="Tesla Inc"
        amount="$22,345"
        description="High Growth Fund"
        progress={0.9}
        progressColor="#DE2C41" // Red
      />
    </View>
  );
};

// Payment Detail Component
const PaymentDetail = ({ title, amount, description, progress, progressColor }) => {
  return (
    <View style={styles.paymentContainer}>
      {/* Top Row: Title and Amount */}
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <Svg height="10" width="100%">
          <Rect
            x="0"
            y="0"
            width="100%"
            height="10"
            fill="#EAEDF2" // Background color for progress bar
            rx="5"
            ry="5"
          />
          <Rect
            x="0"
            y="0"
            width={`${progress * 100}%`}
            height="10"
            fill={progressColor} // Dynamic progress bar color
            rx="5"
            ry="5"
          />
        </Svg>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 15,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentContainer: {
    marginBottom: 20,
    backgroundColor: '#f8fafb', // Light grey background for each payment detail
    borderRadius: 8, // Rounded corners for a better look
    padding: 15, // Padding inside the container
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  progressBarContainer: {
    width: '100%',
  },
});

export default PaymentList;
