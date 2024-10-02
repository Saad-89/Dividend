


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
import MainNavigator from './MainNavigation';

import MainDashboardScreen from '../../views/dashboard/dashboard';
import ChatResult from '../../views/AskHeyDividend/ChatResult';


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
        <Stack.Screen name="MainNavigator" component={MainNavigator} options={{ headerShown: false }}  />

        <Stack.Screen name="MainDashboardScreen" component={MainDashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatResult" component={ChatResult} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
