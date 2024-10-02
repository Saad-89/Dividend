// src/components/AppBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/svg/Logo.svg';
import colors from '../../utils/config/colors';


const AppBar = ({ toggleDrawer }) => {
  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}

      <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
          <Icon name="menu" size={28} color="black" />
        </TouchableOpacity>
     
      {/* Centered SVG Image */}
      <View style={styles.logoAndName}>
          <Logo width={28} height={28} />
          <Text style={styles.name}>Hey Dividend</Text>
        </View>
     

      {/* Add Icon */}
      <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  
    backgroundColor: colors.background,
  },
  logoAndName: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
  },
  name: {

    fontSize: 20,
    fontWeight: 'bold',
    color:colors.black,
  },
  plusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary, // Background color for the button
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  plusText: {
    color: colors.white,
    fontSize: 24,
    position: 'absolute',
  },
});

export default AppBar;
