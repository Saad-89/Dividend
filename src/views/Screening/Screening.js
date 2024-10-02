import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import colors from '../../utils/config/colors';
import Vector from '../../assets/svg/Vector.svg';
import Bell from '../../assets/svg/bell.svg';
import QusetionCircleIcon from '../../assets/svg/question-circle-outlined.svg';
import FreeModeToggle from '../../components/freeModeToggle';
import IncomeBox from '../../components/incomBox';
import CustomDropdown from '../../components/customDropDown';
import ScreenerDropdown from '../../components/ScreenerComponent/screenerDropDown';
import InputField from '../../components/textFields';
import CustomButton from '../../components/customButtons';
import ScreenerTableComponent from '../../components/ScreenerComponent/ScrenerTable';

import ScreenerIcon from '../../assets/svg/screeneerIcon.svg';
import EditIcon from '../../assets/svg/edit.svg';
import DeleteIcon  from '../../assets/svg/delete.svg';

const Screening = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [distributation, setDistributation] = useState('');
    const [etf, setEtf] = useState('');
    const [dYield, setdYeild] = useState('');




    const [dividendCategory, setDividendCategory] = useState('');
    const [portfolioCurrency, setPortfolioCurrency] = useState('');

    const currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
      ];

      const frequency = [
        { label: 'CAT1', value: 'CAT1' },
        { label: 'CAT2', value: 'CAT2' },
        { label: 'CAT3', value: 'CAT3' },
      ];
 




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.dashboardContent} 
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        bounces={false} // Disable bouncing effect
      >
        {/* Icons */}
        <View style={styles.iconsRow}>
          <QusetionCircleIcon height={24} width={24} style={styles.icon} />
          <Bell height={24} width={24} style={styles.icon} />
          <Vector height={24} width={24} style={styles.icon} />
        </View>

        {/* Free mode */}
        <View style={styles.freemode}>
          <Text style={styles.portfolioText}>Dividend Screeners</Text>
          <FreeModeToggle />
        </View>

        <View >
            <Text style= {styles.screenerText}>Screeners lets you choose from various data filters to learn about Dividend Paying Stocks and ETFs </Text>
        </View>

        <View style={styles.incomebox}>
          {/* IncomeBox component */}
          <IncomeBox title="Total Dividend Income" amount="$8,636.80" />
        </View>

          {/* Screener name*/}
      <Text style={styles.label}>Screener Name</Text>
      <InputField
        placeholder="Name"
        value={name}
        setValue={setName}
      />
<Text style={styles.label}>Dividend by Category</Text>

        <ScreenerDropdown
        selectedValue={dividendCategory}
        onValueChange={setDividendCategory}
        items={currencyOptions}
      />

<Text style={styles.label}>Dividend Company</Text>
      <InputField
        placeholder="+ Add Dividend company"
        value={company}
        setValue={setCompany}
      />
      

      <Text style={styles.label}>Frequency <Text>optional</Text></Text>

        <ScreenerDropdown
        selectedValue={portfolioCurrency}
        onValueChange={setPortfolioCurrency}
        items={frequency}
      />

<View style={styles.labelAndLink}>
<Text style={styles.label}>Distribution Price</Text>
<Text style={styles.linkText}>Greater Than ＞</Text>

</View>
      <InputField
        placeholder=""
        value={distributation}
        setValue={setDistributation}
      />



      
<View style={styles.labelAndLink}>
<Text style={styles.label}>ETF/Stock Price</Text>
<Text style={styles.linkText}>Greater Than ＞</Text>

</View>
      <InputField
        placeholder=""
        value={etf}
        setValue={setEtf}
      />
      

      <Text style={styles.label}>Dividend Yield%</Text>
      <InputField
        placeholder=""
        value={dYield}
        setValue={setdYeild}
      />

      <View style={styles.addScreenerToMyListText} >
        <Text style={styles.linkText}>+ Add screener to my list</Text>
      </View>
    
      <CustomButton
        title="Find Dividends"
        onPress={null}
        />
     
     <Text style={styles.portfolioText}>Result</Text>

    <View style={styles.screenerIcon}>
    <ScreenerIcon />
    </View>



    <View >
            <Text style= {styles.screenerIconText}>Use the selection options above and click 'Find Dividens' for results to show here </Text>
        </View>

     

        
        <Text style={styles.portfolioText}>My Dividend Screeners List</Text>

        <ScreenerTableComponent />
       

       

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
  },
  dashboardContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20, // Add some padding at the bottom to prevent cut-off
  },
  iconsRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  screenerText:{
    color: '#ccc',
   
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    paddingBottom:10,
  },
  icon: {
    marginRight: 6,
  },
  incomebox: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  labelAndLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText:{
    color: '#2F78EE',
  },
  rowText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6BBB5E',
  },
  addScreenerToMyListText:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  screenerIcon: {
flexDirection: 'row',
justifyContent: 'center',
paddingVertical: 20
  },
  screenerIconText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  dropdown: {
   
   
    flexDirection: 'row',
    justifyContent: 'flex-end', // Space between items
   
    paddingVertical: 10,
  },
  tableContainer: {
    marginBottom: 20,
  },
});

export default Screening;
