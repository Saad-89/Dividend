import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../components/textFields';
import Dropdown from '../../components/dropDown';
import CustomButton from '../../components/customButtons';

const PortfolioScreen = ({navigation}) => {
  const [portfolioName, setPortfolioName] = useState('');
  const [portfolioCurrency, setPortfolioCurrency] = useState('');
  const [dripPortfolio, setDripPortfolio] = useState('');

  const currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' },
  ];

  const handlePortfolioCreate = () => {
    console.log('Portfolio Created!');

  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a Portfolio</Text>
      <Text style={styles.subtitle}>
        Your account starts with setting up a Portfolio. You can do that multiple ways:
      </Text>


      <Text style={styles.label}>New Portfolio Name </Text>
      <InputField
        label="New Portfolio Name"
        placeholder="Enter portfolio name"
        value={portfolioName}
        setValue={setPortfolioName}
      />
      <Dropdown
        label="Portfolio Currency"
        selectedValue={portfolioCurrency}
        onValueChange={setPortfolioCurrency}
        items={currencyOptions}
      />
      <Text style={styles.label}>DRIP Portfolio</Text>
      <InputField
        label="DRIP Portfolio"
        placeholder="Connect Your Brokerage Account"
        value={dripPortfolio}
        editable={false}
        setValue={setDripPortfolio}
      />
      <View style = {styles.space} />

      <CustomButton title="Create Portfolio" onPress={()=> navigation.navigate('CreateDividendPortfolioScreen')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginBottom: 5,
    fontWeight: 'Bold',
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
    marginTop:30,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  space:{
    height:40,
  }
});

export default PortfolioScreen;
