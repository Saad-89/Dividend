// UpcomingPayouts.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import colors from '../utils/config/colors';

import UserLogo1 from '../assets/images/76.png';
import UserLogo2 from '../assets/images/75.png';

const payoutsData = [
  {
    id: 1,
    imageUrl: UserLogo1, // Replace with actual image URLs
    symbol: 'USOY',
    date: 'Sep 18',
    amount: '$1.24',
  },
  {
    id: 2,
    imageUrl: UserLogo2, // Replace with actual image URLs
    symbol: 'IWMY',
    date: 'Sep 18',
    amount: '$1.04',
  },
];

const UpcomingPayouts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Payouts</Text>

      {payoutsData.map((item) => (
        <View key={item.id} style={styles.payoutRow}>
          <Image source={item.imageUrl} style={styles.userImage} />
          <View style={styles.payoutDetails}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <Text style={styles.amount}>{item.amount}/month</Text>
        </View>
      ))}
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
  payoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  payoutDetails: {
    flex: 1,
  },
  symbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,

  },
  date: {
    fontSize: 12,
    color: colors.black,


  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,

  },
});

export default UpcomingPayouts;
