// // src/navigation/AppNavigator.js
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import SplashScreenOne from '../../views/splash-screens/splashScreenOne';
// import SplashScreenTwo from '../../views/splash-screens/splashScreenTwo';
// import SplashGradientInfoScreen from '../../views/splash-screens/splashInfoScreen';
// import SignInScreen from '../../views/registration-screens/signInScreen';
// import SignUpScreen from '../../views/registration-screens/signUpScreen';
// import ForgotPasswordScreen from '../../views/registration-screens/forgetPasswordScreen';
// import OTPVerificationScreen from '../../views/registration-screens/otpVerificationScreen';
// import CreateNewPasswordScreen from '../../views/registration-screens/createNewPassword';
// import PaymentPlansScreen from '../../views/payment-plans-screen/paymentPlansScreen';
// import PaymentScreen from '../../views/payment-plans-screen/payment';
// import GettingStartedScreen from '../../views/get-starter-screen/getStarterScreen';
// import PortfolioScreen from '../../views/get-starter-screen/porifolioScreen';
// import CreateDividendPortfolioScreen from '../../views/get-starter-screen/createDividendPortfolio';
// import MainDashboardScreen from '../../views/dashboard/dashboard';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DashboardNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="MainDashboardScreen">
//       <Drawer.Screen name="MainDashboardScreen" component={MainDashboardScreen} />
//       {/* Add more drawer screens as needed */}
//     </Drawer.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreenOne">
//         <Stack.Screen name="SplashScreenOne" component={SplashScreenOne} options={{ headerShown: false }} />
//         <Stack.Screen name="SplashScreenTwo" component={SplashScreenTwo} options={{ headerShown: false }} />
//         <Stack.Screen name="SplashGradientInfoScreen" component={SplashGradientInfoScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="PaymentPlansScreen" component={PaymentPlansScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="PortfolioScreen" component={PortfolioScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CreateDividendPortfolioScreen" component={CreateDividendPortfolioScreen} options={{ headerShown: false }} />

//         {/* Use the DashboardNavigator for MainDashboardScreen */}
//         <Stack.Screen name="Dashboard" component={DashboardNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;


// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreenOne from '../../views/splash-screens/splashScreenOne';
import SplashScreenTwo from '../../views/splash-screens/splashScreenTwo';
import SplashGradientInfoScreen from '../../views/splash-screens/splashInfoScreen';
import SignInScreen from '../../views/registration-screens/signInScreen';
import SignUpScreen from '../../views/registration-screens/signUpScreen';
import ForgotPasswordScreen from '../../views/registration-screens/forgetPasswordScreen';
import OTPVerificationScreen from '../../views/registration-screens/otpVerificationScreen';
import CreateNewPasswordScreen from '../../views/registration-screens/createNewPassword';
import PaymentPlansScreen from '../../views/payment-plans-screen/paymentPlansScreen';
import PaymentScreen from '../../views/payment-plans-screen/payment';
import GettingStartedScreen from '../../views/get-starter-screen/getStarterScreen';
import PortfolioScreen from '../../views/get-starter-screen/porifolioScreen';
import CreateDividendPortfolioScreen from '../../views/get-starter-screen/createDividendPortfolio';
import MainDashboardScreen from '../../views/dashboard/dashboard';








const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenOne">

        <Stack.Screen name="SplashScreenOne" component={SplashScreenOne} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreenTwo" component={SplashScreenTwo} options={{ headerShown: false }} />
        <Stack.Screen name="SplashGradientInfoScreen" component={SplashGradientInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentPlansScreen" component={PaymentPlansScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PortfolioScreen" component={PortfolioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateDividendPortfolioScreen" component={CreateDividendPortfolioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainDashboardScreen" component={MainDashboardScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
