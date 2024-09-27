// // App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Use icons from Ionicons

// // Screens
// const Dashboard = () => <View style={styles.screen}><Text>Dashboard Screen</Text></View>;
// const AskHeyDividend = () => <View style={styles.screen}><Text>Ask Hey Dividend Screen</Text></View>;
// const Portfolio = () => <View style={styles.screen}><Text>Portfolio Screen</Text></View>;
// // Define other screens similarly

// const Drawer = createDrawerNavigator();

// // Custom Drawer Content Component
// function CustomDrawerContent(props) {
//   return (
//     <View style={styles.drawerContainer}>
//       <View style={styles.drawerHeader}>
//         <Icon name="search-outline" size={20} color="#000" />
//         <Text style={styles.headerTitle}>Search...</Text>
//       </View>
//       <View style={styles.drawerSection}>
//         <Text style={styles.sectionTitle}>Main</Text>
//         <DrawerItem label="Dashboard" icon="md-speedometer" {...props} />
//         <DrawerItem label="Ask Hey Dividend" icon="md-chatbox-ellipses" {...props} />
//         <DrawerItem label="Portfolio" icon="md-briefcase" {...props} />
//         {/* Add other drawer items similarly */}
//       </View>
//       <View style={styles.drawerSection}>
//         <Text style={styles.sectionTitle}>Others</Text>
//         <DrawerItem label="Account" icon="md-person" {...props} />
//         <DrawerItem label="Connected Accounts" icon="md-link" {...props} />
//         {/* Add other drawer items similarly */}
//       </View>
//       <View style={styles.footer}>
//         <Icon name="md-person-circle" size={40} color="black" />
//         <Text style={styles.footerText}>hipixem@gmail.com</Text>
//       </View>
//     </View>
//   );
// }

// // Custom DrawerItem Component for Drawer Icons and Text
// const DrawerItem = ({ label, icon, ...props }) => (
//   <View style={styles.drawerItem}>
//     <Icon name={icon} size={20} color="#000" />
//     <Text style={styles.drawerItemText} onPress={() => props.navigation.navigate(label)}>{label}</Text>
//   </View>
// );

// // Main App with Drawer Navigator
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Dashboard"
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{
//           headerShown: false,
//           drawerType: 'front',
//         }}
//       >
//         <Drawer.Screen name="Dashboard" component={Dashboard} />
//         <Drawer.Screen name="Ask Hey Dividend" component={AskHeyDividend} />
//         <Drawer.Screen name="Portfolio" component={Portfolio} />
//         {/* Add other screens similarly */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   drawerContainer: {
//     flex: 1,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   drawerHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//     paddingLeft: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerTitle: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000',
//   },
//   drawerSection: {
//     marginVertical: 10,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingLeft: 10,
//     marginBottom: 5,
//   },
//   drawerItemText: {
//     marginLeft: 15,
//     fontSize: 14,
//     color: '#000',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   footerText: {
//     marginLeft: 10,
//     fontSize: 14,
//     color: '#000',
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
