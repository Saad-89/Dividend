// src/components/Logo.js
import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import SplashLogo from '../../assets/images/splash_screen_two.png';

const { width, height } = Dimensions.get('window');

const SplashScreenOTwo = ({ navigation }) => {
  useEffect(() => {
    // Wait for 3 seconds, then navigate to the "Home" screen
    const timeout = setTimeout(() => {
      navigation.replace('SplashGradientInfoScreen');  // Use 'replace' to avoid going back to SplashScreen
    }, 3000);

    // Cleanup the timeout if the component unmounts before 3 seconds
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={SplashLogo}
        style={styles.logo}
        resizeMode="cover"  // Ensure it covers the entire screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width,  // Full screen width
    height: height,  // Full screen height
  },
});

export default SplashScreenOTwo;
