
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Animated, Dimensions, Text } from 'react-native';
// import CustomDrawer from './src/test/CustomDrawer';
// import Home from './src/test/HomeScreen';
// import Profile from './src/test/ProfileScreen';
// import Settings from './src/test/SettingsScreen';

// const { width } = Dimensions.get('window');

// const App = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [currentScreen, setCurrentScreen] = useState('Home');
//   const animation = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: drawerOpen ? 1 : 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, [drawerOpen]);

//   const drawerTranslateX = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-width * 0.75, 0], // 75% width for drawer
//   });

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const onCloseDrawer = () => {
//     setDrawerOpen(false);
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'Home':
//         return <Home />;
//       case 'Profile':
//         return <Profile />;
//       case 'Settings':
//         return <Settings />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Main Button to Toggle Drawer */}
//       <TouchableOpacity onPress={toggleDrawer} style={styles.button}>
//         <Text style={styles.buttonText}>Toggle Drawer</Text>
//       </TouchableOpacity>

//       {/* Drawer Overlay */}
//       {drawerOpen && <TouchableOpacity style={styles.overlay} onPress={onCloseDrawer} />}

//       {/* Drawer Animation */}
//       <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerTranslateX }] }]}>
//         <CustomDrawer onClose={onCloseDrawer} navigation={{ navigate: setCurrentScreen }} />
//       </Animated.View>

//       {/* Main Screen Content */}
//       <View style={styles.mainContent}>
//         {renderScreen()}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     margin: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darkened background with 70% opacity
//     zIndex: 1,
//   },
//   drawerContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     width: width * 0.75, // Drawer width (75%)
//     backgroundColor: '#fff',
//     zIndex: 2, // Ensures drawer is above overlay
//   },
//   mainContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;



// App.js  import MainNavigator from './src/utils/navigation/MainNavigation';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/utils/navigation/AppNavigator';
import MainNavigator from './src/utils/navigation/MainNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;


// import React from 'react';

// import AppNavigator from './src/utils/navigation/AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;





// // App.js
// import React from 'react';
// import AppNavigator from './src/utils/navigation/AppNavigator';



// const App = () => {
//   return <AppNavigator />;
// };

// export default App;

