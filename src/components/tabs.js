// components/Tabs.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
 

  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab ? styles.activeTab : styles.inactiveTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  activeTab: {
    borderColor: '#007AFF',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    borderColor: 'white',
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
  },
  activeTabText: {
    color: '#007AFF',
  },
});

export default Tabs;
