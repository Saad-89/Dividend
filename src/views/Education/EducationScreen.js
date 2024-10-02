import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

import colors from '../../utils/config/colors';
import Vector from '../../assets/svg/Vector.svg';
import Bell from '../../assets/svg/bell.svg';
import QusetionCircleIcon from '../../assets/svg/question-circle-outlined.svg';
import ArrowContainer from '../../components/LeadingPercentage';
import FreeModeToggle from '../../components/freeModeToggle';
import IncomeBox from '../../components/incomBox';
import EducationComponent from '../../components/EducationComponent/EducationComponent';

import CircularChart from '../../components/EducationComponent/CircularChart';
import ImagePhoto from '../../assets/images/youtube.png';








const EducationScreen = () => {


 




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
          <Text style={styles.portfolioText}>Education</Text>
          <FreeModeToggle />
        </View>

        <View style={styles.incomebox}>
          {/* IncomeBox component */}
          <IncomeBox title="Total Dividend Income" amount="$8,636.80" />
        </View>



        <View style={styles.imageContainer}>
      <Image 
        source={ImagePhoto} // Path to your local image
        style={styles.image} 
      />
    </View>

 <View style={styles.circularChart}>
 <CircularChart />
 </View>


     




      
     
   

       

      
     


       
      <Text style={styles.portfolioText}>The  Best Dividend Course</Text>
      


    

     
        <View style={styles.columnData}>
        <Text style={styles.portfolioText}>What is a Dividend?</Text>
        <Text style={styles.columnDataValue}>Understanding users is crucial in creating a great user experience. Explore what drives human behavior and how and when to use this knowledge to improve.</Text>

       
        </View>


        <View style={styles.rowData}>
        <Text style={styles.rowText}>Name</Text>
        <Text style={styles.rowText}>Length</Text>

        </View>

        <EducationComponent />
       


     
    

     
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
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
   
    resizeMode: 'contain', // Control how the image fits in the container
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
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stockPayoutText:{
        paddingVertical: 20,
  },
  circularChart:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  icon: {
    marginRight: 6,
  },
  incomebox: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  rowData:{
        flexDirection: 'row',
        justifyContent: 'space-between'
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
  simpleAndAdvancetabs:{
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  containerComponent:{
    flex: 1,
paddingBottom: 20,
    backgroundColor: colors.background,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
   
    paddingVertical: 10,
  },
  columnData:{
        flexDirection: 'column',
        paddingVertical: 20
  },
  columnDataValue: {
    fontSize: 14,
    
    paddingVertical: 5
  },
  portfoliorowText:{
    fontSize: 20,
    fontWeight: '700'
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    width: '100%',
    paddingVertical: 20,
    // paddingHorizontal: 30,
  },
  legendItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotAndText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendLabel: {
    fontSize: 14,
    color: '#6B6B6B',
    marginRight: 10,
  },
  legendValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 20,
  },
  balanceComponent: {
    paddingVertical: 20,
  }
});

export default EducationScreen;
