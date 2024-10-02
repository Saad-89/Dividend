import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FreeModeToggle from '../../components/freeModeToggle';
import SettingContainerComponent from '../../components/SettingComponent/SettingContainerComponent';
import colors from '../../utils/config/colors';
import ListTile from '../../components/SettingComponent/ListTileComponent';

import AccountIcon from '../../assets/svg/SettingSvg/account.svg'; // Import SVG as component
import Password  from '../../assets/svg/SettingSvg/lock.svg';
import Payment from '../../assets/svg/SettingSvg/payment.svg';
import Subscription from '../../assets/svg/SettingSvg/subscription.svg';
import TellAFriend from '../../assets/svg/SettingSvg/tellAFriend.svg';

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Free mode */}
      <View style={styles.freemode}>
        <Text style={styles.portfolioText}>Settings</Text>
        <FreeModeToggle />
      </View>

      <SettingContainerComponent />

      <View>
        {/* Example of ListTile with correct SVG icon */}
        <ListTile
          icon={AccountIcon} // SVG component as icon
          title="Account Information"
          description="Change your Account information"
        />
        <ListTile
          icon={Password} // SVG component as icon
          title="Password"
          description="Change Your Password"
        />
        <ListTile
          icon={Subscription} // SVG component as icon
          title="Subscription"
          description="Upgrade to more Features"
        />
        <ListTile
          icon={Payment} // SVG component as icon
          title="Payment Method"
          description="Add Your Card/Wallet"
        />
        <ListTile
          icon={TellAFriend} // SVG component as icon
          title="Tell a Friend or Two"
          description="Get $3 for Each Invitation"
        />
        {/* ... other list items */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    paddingHorizontal: 20,
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
