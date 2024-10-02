import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose another icon set if preferred
import colors from '../../utils/config/colors';

const WatchlistRow = () => {
  return (
    <View style={styles.container}>
      {/* Your Watchlist with Add Icon */}
      <View style={styles.leftSection}>
        <Text style={styles.watchlistText}>Your Watchlist</Text>
        <TouchableOpacity style={styles.circle}>
          <Icon name="add" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Right Section with < and > Icons */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="chevron-back" size={20} color={colors.primary}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}>
          <Icon name="chevron-forward" size={20} color={colors.primary}  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   paddingVertical: 15,
    backgroundColor: colors.background,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchlistText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EAEDF2', // Background color for the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default WatchlistRow;
