


import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import { LinearGradient } from 'react-native-svg'; 
import colors from '../../utils/config/colors';

const GroupedBars = () => {
  const barData = [
    {
      value: 70,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
      
      

  
        
      
    },
    {value: 20,
         
         showGradient: true,
         frontColor: 'white', 
         gradientColor: '#5EC7ED',
         capColor: '#5EC7ED' 
        }, 
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
    },
    {value: 40, showGradient: true,
        frontColor: 'white', 
        capColor: '#5EC7ED' ,
        gradientColor: '#5EC7ED'},
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
    },
    {value: 25, showGradient: true,
        frontColor: 'white', 
        capColor: '#5EC7ED' ,
        gradientColor: '#5EC7ED'},
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
    },
    {value: 20, showGradient: true,
        frontColor: 'white', 
        capColor: '#5EC7ED' ,
        gradientColor: '#5EC7ED'},
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
    },
    {value: 40,showGradient: true,
        frontColor: 'white', 
        capColor: '#5EC7ED' ,
        gradientColor: '#5EC7ED'},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      showGradient: true,
      frontColor: 'white', 
      gradientColor: '#8360F7',
      capColor: '#8360F7'
    },
    {value: 30, showGradient: true,
        frontColor: 'white', 
        capColor: '#5EC7ED' ,
        gradientColor: '#5EC7ED'},
  ];


  return (
    <View
      style={{
        backgroundColor: colors.background, // Changed background color to white
        paddingBottom: 30,
        borderRadius: 10,
      }}>
      
      <BarChart
        data={barData}
        barWidth={30} // Increased bar width
        spacing={24}
        barBorderRadius= {10} 
        isAnimated
        
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'gray'}}
        noOfSections={3}
        maxValue={75}
        

        cappedBars
        capRadius={12}
        capThickness={8}
        
        
       
       
       
        
      />
    </View>
  );
};

export default GroupedBars;
