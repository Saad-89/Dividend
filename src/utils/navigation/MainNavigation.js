// src/utils/navigation/MainNavigator.js

import React, { useState, useEffect } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import AppBar from '../../components/Appbars/Appbar';
import AppBarOne from '../../components/Appbars/AppbarOne'; // Ensure AppBarOne is imported
import CustomDrawer from '../../test/CustomDrawer';
import Home from '../../test/HomeScreen';
import DividendDashboard from '../../views/dashboard/dashboard';
import AskHeyDividend from '../../views/AskHeyDividend/AskHeyDividend';
import Portfolio from '../../views/portfolio/Portfolio';
import BalanceScreen from '../../views/Balance/BalanceScreen';
import Screening from '../../views/Screening/Screening';
import ForcastingScreen from '../../views/Forcasting/ForecastingScreen';
import AnalyticsScreen from '../../views/Analytics/AnalyticsScreen';
import EducationScreen from '../../views/Education/EducationScreen';
import SettingScreen from '../../views/SettingScreen/SettingScreen';
import AccountInformationScreen from '../../views/Account/Account';
import AccountInfoTwoScreen from '../../views/Account/AccountInfoTwo';
import TransactionHistoryScreen from '../../views/TransctionScreen/TransctionScreen';
import PredictionScreen from '../../views/AskHeyDividend/ChatResult';
import AppBarThree from '../../components/Appbars/AppBarThree';
import StrategyScreen from '../../views/Strategy/StrategyScreen';
import IcomeScreen from '../../views/Income/IncomeScreen';

const { width } = Dimensions.get('window');

const MainNavigator = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Dashboard'); // Set initial screen to Dashboard
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: drawerOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerOpen]);

  const drawerTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 0.75, 0], // 75% width for drawer
  });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Dashboard':
        return <DividendDashboard />; // Render Dashboard
      case 'Ask Hey Dividend':
        return <AskHeyDividend />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Balances':
        return <BalanceScreen />;
      case 'Screener':
        return <Screening />;
      case 'Income':
        return <IcomeScreen />;
        case 'Strategy':
          return <StrategyScreen />;       
      case 'Forecasting':
        return <ForcastingScreen />;
      case 'History':
        return <AnalyticsScreen />;
      case 'Education':
        return <EducationScreen />;
      case 'Account':
        return <SettingScreen />;
      case 'Connected Accounts':
        return <AccountInfoTwoScreen />;
      default:
        return <Home />; // Default to Home if something goes wrong
    }
  };

  const renderAppBar = () => {
    if (currentScreen === 'Ask Hey Dividend') {
      return <AppBarOne toggleDrawer={toggleDrawer} />;
    }
    if (currentScreen === 'Dashboard' || currentScreen === 'Portfolio') {
      return <AppBar toggleDrawer={toggleDrawer} />;
    }
    // Default to AppBar for other screens
    return <AppBarThree toggleDrawer={toggleDrawer} />;
  };

  return (
    <View style={{ flex: 1 }}>
      {/* App Bar */}
      {renderAppBar()}

      {/* Drawer Overlay */}
      {drawerOpen && <View style={styles.overlay} onPress={onCloseDrawer} />}

      {/* Drawer Animation */}
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerTranslateX }] }]}>
        <CustomDrawer onClose={onCloseDrawer} navigation={{ navigate: setCurrentScreen }} />
      </Animated.View>

      {/* Main Screen Content */}
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>
    </View>
  );
};

const styles = {
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darkened background with 70% opacity
    zIndex: 1,
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.75, // Drawer width (75%)
    backgroundColor: '#fff',
    zIndex: 2, // Ensures drawer is above overlay
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MainNavigator;


// // src/utils/navigation/MainNavigator.js

// import React, { useState, useEffect } from 'react';
// import { View, Animated, Dimensions } from 'react-native';
// import AppBar from '../../components/Appbars/Appbar';
// import CustomDrawer from '../../test/CustomDrawer';
// import Home from '../../test/HomeScreen';
// import Profile from '../../test/ProfileScreen';
// import Settings from '../../test/SettingsScreen';
// import DividendDashboard from '../../views/dashboard/dashboard';
// import AskHeyDividend from '../../views/AskHeyDividend/AskHeyDividend';
// import Portfolio from '../../views/portfolio/Portfolio';
// import BalanceScreen from '../../views/Balance/BalanceScreen';
// import Screening from '../../views/Screening/Screening';
// import ForcastingScreen from '../../views/Forcasting/ForecastingScreen';
// import AnalyticsScreen from '../../views/Analytics/AnalyticsScreen';
// import EducationScreen from '../../views/Education/EducationScreen';
// import SettingScreen from '../../views/SettingScreen/SettingScreen';
// import AccountInformationScreen from '../../views/Account/Account';
// import AccountInfoTwoScreen from '../../views/Account/AccountInfoTwo';
// import TransactionHistoryScreen from '../../views/TransctionScreen/TransctionScreen';
// import PredictionScreen from '../../views/AskHeyDividend/ChatResult';
// import AppBarOne from '../../components/Appbars/AppbarOne';

// const { width } = Dimensions.get('window');

// const MainNavigator = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [currentScreen, setCurrentScreen] = useState('Dashboard'); // Set initial screen to Dashboard
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
//       case 'Dashboard':
//         return <DividendDashboard />; // Render Dashboard
//       case 'Ask Hey Dividend':
//         return <AskHeyDividend />;
//       case 'Portfolio':
//         return <Portfolio />;  // BalanceScreen  
//         case 'Strategy':
//           return <TransactionHistoryScreen />; 
//       case 'Balances':
//         return <BalanceScreen />;
//       case 'Screener':
//         return <Screening />;
//         case 'Income':
//           return <PredictionScreen />;        
//       case 'Forecasting':
//           return <ForcastingScreen />;   
//       case 'History':
//           return <AnalyticsScreen />;   /// 
//       case 'Education':
//          return <EducationScreen />;             
//       case 'Account':
//         return <SettingScreen />;
//         case 'Connected Accounts':
//           return <AccountInfoTwoScreen />;       
//       default:
//         return <Home />; // Default to Dashboard if something goes wrong
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* App Bar */}
//       <AppBarOne toggleDrawer={toggleDrawer} />

//       {/* Drawer Overlay */}
//       {drawerOpen && <View style={styles.overlay} onPress={onCloseDrawer} />}

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

// const styles = {
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
// };

// export default MainNavigator;

