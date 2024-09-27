import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust import based on your icon library

const InputField = ({ iconName, placeholder, isPassword, keyboardType, value, setValue }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      {/* Conditionally render the Icon */}
      {iconName && (
        <Icon name={iconName} size={20} color="#A0A0A0" style={styles.inputIcon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        secureTextEntry={isPassword && isPasswordVisible}
        value={value}
        onChangeText={setValue}
         keyboardType= {keyboardType}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} style={styles.eyeIconContainer}>
          <Icon name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0A0A0" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginHorizontal: 10,
  },
  eyeIconContainer: {
    marginHorizontal: 10,
  },
});

export default InputField;

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Adjust import based on your icon library

// const InputField = ({ iconName, placeholder, isPassword, value, setValue }) => {
//   const [isPasswordVisible, setPasswordVisible] = useState(isPassword);

//   return (
//     <View style={styles.inputContainer}>
//       <Icon name={iconName} size={20} color="#A0A0A0" style={styles.inputIcon} />
//       <TextInput
//         style={styles.input}
//         placeholder={placeholder}
//         placeholderTextColor="#A0A0A0"
//         secureTextEntry={isPassword && isPasswordVisible}
//         value={value}
//         onChangeText={setValue}
//       />
//       {isPassword && (
//         <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} style={styles.eyeIconContainer}>
//           <Icon name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0A0A0" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1, // Border width
//     borderColor: '#D9D9D9', // Border color
//     borderRadius: 8, // Rounded corners
//     marginBottom: 10,
//     height: 50,
//     paddingHorizontal: 10, // Padding inside the container
//     backgroundColor: '#F5F5F5', // Background color to make the border stand out
//   },
//   input: {
//     flex: 1,
//     height: 40, // Set a specific height for the TextInput
//     fontSize: 14,
//     color: '#000',
//     fontFamily: 'Roboto-Regular',
//     paddingHorizontal: 10,

//   },
//   inputIcon: {
//     marginHorizontal: 10,
//   },
//   eyeIconContainer: {
//     marginHorizontal: 10,
//   },
// });

// export default InputField;
