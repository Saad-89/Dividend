// App.js

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PlanCard from '../../components/planCard';
import PaginationDots from '../../components/paginationDots';

const { width } = Dimensions.get('window');
const planCardWidth = width * 0.8;
const spacing = (width - planCardWidth) / 2;

const plans = {
  monthly: [
    { id: 1, price: 'Free', name: 'Silver', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
    { id: 2, price: '7$', name: 'Gold', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
    { id: 3, price: '21$', name: 'Platinum', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
  ],
  yearly: [
    { id: 1, price: '60$', name: 'Silver', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
    { id: 2, price: '70$', name: 'Gold', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
    { id: 3, price: '210$', name: 'Platinum', features: ['Unlimited Watch list', 'Create a single Portfolio', 'HeyDividend Calculator', 'Track Current Dividend Payments', 'Unlimited Watch list', 'Create a single Portfolio'] },
  ],
};

const PaymentPlansScreen = ({navigation}) => {
  const [planType, setPlanType] = useState('monthly');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / planCardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {/* Header Data */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plans & Pricing</Text>
        <Text style={styles.headerDescription}>
          Whether your time-saving automation needs are large or small, we’re here to help you scale.
        </Text>
      </View>

      {/* Tabs for Monthly and Yearly */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setPlanType('monthly')} style={[styles.tab, planType === 'monthly' && styles.activeTab]}>
          <Text style={[styles.tabText, planType === 'monthly' && styles.activeTabText]}>MONTHLY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPlanType('yearly')} style={[styles.tab, planType === 'yearly' && styles.activeTab]}>
          <Text style={[styles.tabText, planType === 'yearly' && styles.activeTabText]}>YEARLY</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll for Plans */}
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={planCardWidth}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
      >
        {plans[planType].map((plan, index) => (
          <View key={plan.id} style={[styles.planContainer, { marginLeft: index === 0 ? spacing : 0, marginRight: index === plans[planType].length - 1 ? spacing : 10 }]}>
            <PlanCard price={plan.price} name={plan.name} features={plan.features} navigation={navigation} />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots - Positioned directly below the cards */}
      <View style={styles.paginationContainer}>
        <PaginationDots currentIndex={activeIndex} total={plans[planType].length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  headerDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#eee',
  },
  activeTab: {
    backgroundColor: '#005294',
  },
  tabText: {
    color: '#000',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  scrollView: {
    paddingHorizontal: 0,
  },
  planContainer: {
    width: planCardWidth,
    //height: 480,  // Set the height of the plan card
    paddingHorizontal: 6,
  },
  paginationContainer: {
    alignItems: 'center',
   // marginTop: 10,
   marginBottom: 20,
  },
});

export default PaymentPlansScreen;
