// // src/navigation/DrawerNavigator.js
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DividendDashboard from '../../views/dashboard/dashboard';
// import SignInScreen from '../../views/registration-screens/signInScreen';
// import CustomDrawerContent from './customDrawer';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Drawer.Screen name="DividendDashboard" component={DividendDashboard} />
//       <Drawer.Screen name="SignInScreen" component={SignInScreen} />
//       {/* Add other screens as needed */}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;
