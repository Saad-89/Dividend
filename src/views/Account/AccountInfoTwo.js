import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import FreeModeToggle from '../../components/freeModeToggle';
import colors from '../../utils/config/colors';
import CheckMarkIcon from '../../assets/svg/checkmarkicon.svg';
import LicenseOption from '../../components/AccountComponent/LicenseOption';
import CustomButton from '../../components/customButtons';

// Reusable Verification Card component
const VerificationCard = () => (
    <View style={styles.verificationCard}>
      <Text style={styles.verificationTitle}>Let's get verified your information</Text>
      <Text style={styles.verificationDescription}>
        We require some additional details about you and your business to comply with regulations and begin processing your payments.
      </Text>
      <View style={styles.bulletPointsContainer}>
        <View style={styles.bulletPoint}>
          <CheckMarkIcon />
          <Text style={styles.bulletPointText}>Click on "Verify Account" to submit your details and start the verification process.</Text>
        </View>
        <View style={styles.bulletPoint}>
          <CheckMarkIcon />
          <Text style={styles.bulletPointText}>Stay updated on your progress through email.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify Your Account</Text>
      </TouchableOpacity>
    </View>
  );


// Main screen component
const AccountInfoTwoScreen = () => {
  const [selectedLicense, setSelectedLicense] = useState('Commercial License');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.freemode}>
          <Text style={styles.portfolioText}>Account Setup</Text>
          <FreeModeToggle />
        </View>

        {/* Account Setup Section */}
       
        <Text style={styles.verificationDescription}>Register to enjoy insights from HeyDividend!</Text>

        {/* Verification Card */}
        <VerificationCard />

        {/* License Options */}
        <LicenseOption
          title="Personal License"
          description="A commercial license perfect for small design teams, agencies, and startups."
          price="from $19.00"
          isSelected={selectedLicense === 'Personal License'}
          onSelect={() => setSelectedLicense('Personal License')}
        />

        <LicenseOption
          title="Commercial License"
          description="A commercial license perfect for small design teams, agencies, and startups."
          price="from $43.00"
          isSelected={selectedLicense === 'Commercial License'}
          onSelect={() => setSelectedLicense('Commercial License')}
        />

        <LicenseOption
          title="Extended License"
          description="An extended commercial license perfect for larger design teams, agencies, and enterprises."
          price="from $79.00"
          isSelected={selectedLicense === 'Extended License'}
          onSelect={() => setSelectedLicense('Extended License')}
        />

        {/* Upgrade Button */}
        <CustomButton
        title="Upgrade"
        onPress={null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  freeModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  freeModeText: {
    marginRight: 10,
    fontSize: 14,
    color: '#8E8E93',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  verificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  verificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  verificationDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 10,
  },
  bulletPointsContainer: {
    marginBottom: 20,
  },
  bulletPoint: {
    flexDirection: 'row',  // Aligns icon and text in a row
    alignItems: 'center',  // Align items vertically in the center
    marginBottom: 10,
  },
  bulletPointText: {
    fontSize: 12,
    color: '#8E8E93',
    marginLeft: 10,  // Adds some space between the icon and the text
  },
  verifyButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  licenseOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  licenseOptionSelected: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  licenseTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  licenseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  licensePrice: {
    fontSize: 14,
    color: '#8E8E93',
  },
  licenseDescription: {
    fontSize: 14,
    color: '#8E8E93',
  },
  upgradeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  upgradeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AccountInfoTwoScreen;
