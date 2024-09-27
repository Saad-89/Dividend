import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../utils/config/colors';
import UniversityIcon from '../assets/svg/elements.svg';
import WalletIcon from '../assets/svg/money-send-circle.svg';
import PiggyBankIcon from '../assets/svg/transaction.svg';
import LeadingIcon from '../assets/svg/lead-icon.svg';

// Map for SVG icons
const iconMap = {
  university: UniversityIcon,
  wallet: WalletIcon,
  'piggy-bank': PiggyBankIcon,
};

const IncomeComponent = ({ title, percentage, amount, subAmount, iconName }) => {
  const IconComponent = iconMap[iconName] || iconMap.university; // Default to university if no icon is provided

  return (
    <View style={styles.container}>
      <View style={styles.iconAndText}>
        {/* Render the SVG component */}
        <IconComponent width={24} height={24} />
        <Text style={styles.incomeText}>{title}</Text>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>↑ {percentage}%</Text>
        </View>
      </View>

      <View style={styles.amountAndIcon}>
        <Text style={styles.amountText}>${amount}</Text>
        <LeadingIcon width={24} height={24} />
      </View>

      <Text style={styles.subText}>From ${subAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incomeText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  amountAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between amount and icon
    alignItems: 'center',
    width: '100%', // Ensure it takes the full width
  },
  percentageContainer: {
    backgroundColor: colors.percentangeBackground,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  percentageText: {
    fontSize: 12,
    color: '#29896E',
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  subText: {
    fontSize: 16,
    color: colors.lightGrey,
  },
});

export default IncomeComponent;
