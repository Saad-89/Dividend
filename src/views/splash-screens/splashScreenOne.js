

// src/components/Logo.js
import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import SplashLogo from '../../assets/images/splash_screen_one.png';

const { width, height } = Dimensions.get('window');

const SplashScreenOne = ({ navigation }) => {
  useEffect(() => {
    // Wait for 3 seconds, then navigate to the "SplashScreenTwo" screen
    const timeout = setTimeout(() => {
      navigation.replace('SplashScreenTwo');  // Use 'replace' to avoid going back to SplashScreen
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

export default SplashScreenOne;





// // src/components/SplashScreenOne.js
// import React, { useEffect } from 'react';
// import { Image, StyleSheet, View, Dimensions, StatusBar } from 'react-native';
// import SplashLogo from '../../assets/images/splash_screen_one.png';

// const { height, width } = Dimensions.get('window');

// const SplashScreenOne = ({ navigation }) => {
//   useEffect(() => {
//     // Hide the status bar during splash screen
//     StatusBar.setHidden(true);

//     // Navigate to the next screen after 3 seconds
//     const timer = setTimeout(() => {
//       navigation.replace('SplashScreenTwo'); // Replace 'Home' with your next screen
//     }, 3000);

//     // Cleanup timer and show status bar when component is unmounted
//     return () => {
//       clearTimeout(timer);
//       StatusBar.setHidden(false);
//     };
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={SplashLogo}
//         style={styles.logo}
//         resizeMode="cover" // Use "cover" to make sure the image covers the entire view
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: width,
//     height: height,
//   },
// });

// export default SplashScreenOne;

