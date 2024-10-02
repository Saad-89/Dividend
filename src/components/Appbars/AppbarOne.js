// src/components/AppBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatIcon from '../../assets/svg/chat.svg';
import colors from '../../utils/config/colors';

const AppBarOne = ({ toggleDrawer }) => {
  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
        <Icon name="menu" size={28} color="black" />
      </TouchableOpacity>

      {/* Centered Text */}
      <View style={styles.centerContainer}>
        <Text style={styles.greeting}>Hello <Text style={styles.greetingName}>Robyn,</Text></Text>
        <Text style={styles.subGreeting}>How Can I Help You Today?</Text>
      </View>

      {/* Add Icon */}
      <TouchableOpacity style={styles.plusButton}>
        <ChatIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1, // Use flex to take available space
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Blue color for the greeting
  },
  greetingName:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  subGreeting: {
    fontSize: 14,
    color: colors.black, // Default color for the sub greeting
  },
  plusButton: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  plusText: {
    color: colors.white,
    fontSize: 24,
    position: 'absolute',
  },
});

export default AppBarOne;


// // src/components/AppBar.js
// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Logo from '../../assets/svg/Logo.svg';
// import colors from '../../utils/config/colors';


// const AppBarOne = ({ toggleDrawer }) => {
//   return (
//     <View style={styles.container}>
//       {/* Hamburger Icon */}

//       <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
//           <Icon name="menu" size={28} color="black" />
//         </TouchableOpacity>
     
//       {/* Centered SVG Image */}
//       <View style={styles.logoAndName}>
//           <Logo width={28} height={28} />
//           <Text style={styles.name}>Hey Dividend</Text>
//         </View>
     

//       {/* Add Icon */}
//       <TouchableOpacity style={styles.plusButton}>
//           <Text style={styles.plusText}>+</Text>
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     paddingHorizontal: 20,
//     backgroundColor: colors.background,
//   },
//   logoAndName: {
//     flexDirection: 'row',
//     alignItems: 'center', // Align items vertically in the center
//   },
//   name: {

//     fontSize: 20,
//     fontWeight: 'bold',
//     color:colors.black,
//   },
//   plusButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.primary, // Background color for the button
//     borderRadius: 50,
//     height: 30,
//     width: 30,
//   },
//   plusText: {
//     color: colors.white,
//     fontSize: 24,
//     position: 'absolute',
//   },
// });

// export default AppBarOne;
