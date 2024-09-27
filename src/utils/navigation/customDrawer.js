// // src/navigation/CustomDrawerContent.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/Ionicons';

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Welcome to My App!</Text>
//       </View>

//       <DrawerItemList {...props} />

//       <TouchableOpacity style={styles.logoutButton} onPress={() => {/* Add logout functionality here */}}>
//         <Icon name="log-out-outline" size={20} color="white" />
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     padding: 20,
//     backgroundColor: '#f4f4f4',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ff4444',
//     padding: 15,
//     margin: 10,
//     borderRadius: 5,
//   },
//   logoutText: {
//     color: 'white',
//     marginLeft: 10,
//   },
// });

// export default CustomDrawerContent;
