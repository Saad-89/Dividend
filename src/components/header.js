



import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/svg/Logo.svg';
import colors from '../utils/config/colors';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContent}>
        {/* Hamburger Icon () => navigation.openDrawer() */}
        <TouchableOpacity style={styles.hamburger} onPress={null}>
          <Icon name="menu" size={28} color="black" />
        </TouchableOpacity>

        {/* Logo and Name */}
        <View style={styles.logoAndName}>
          <Logo width={28} height={28} />
          <Text style={styles.name}>Hey Dividend</Text>
        </View>

        {/* Circular + Button */}
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  hamburger: {
    justifyContent: 'center',
    alignItems: 'center',

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

export default Header;
