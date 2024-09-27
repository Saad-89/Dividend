import React, { useState, useRef } from 'react';  // Import useRef here
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import OTPVerificationPopup from './otpVerificationPopUp';  // Ensure the path is correct

const OtpVerificationScreen = ({navigation}) => {
  const [otpCode, setOtpCode] = useState('');
  const otpPopupRef = useRef(null);  // Initialize useRef

  const handleVerify = () => {
    if (otpCode.length === 4) {
      // Simulate successful OTP verification
      console.log(`OTP Code: ${otpCode} verified!`);

      otpPopupRef.current.openModal();  // Open the OTP success modal
    } else {
      alert('Please enter a valid OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Verification Code</Text>
      <Text style={styles.subText}>Enter code sent to bill******@example.com</Text>

      <OTPTextInput
        handleTextChange={(code) => setOtpCode(code)}
        inputCount={4}
        textInputStyle={styles.otpInput}
        tintColor="#afccf5" // Selected field border color
      />

      <View style={styles.resendContainer}>
        <Text style={styles.needNewCodeText}>Need a New Code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Modal for OTP verification success */}
      <OTPVerificationPopup ref={otpPopupRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto-Regular',
    marginVertical: 20,
    marginTop: 50,
  },
  subText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 20,
    color: '#000',
    padding: 10,
    width: 50,
    height: 50,
    textAlign: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  needNewCodeText: {
    fontSize: 14,
    color: '#777',
  },
  resendLink: {
    fontSize: 14,
    color: '#007BFF',
    marginLeft: 5,
  },
  verifyButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  verifyButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#005294',
    marginBottom: 20,
    marginTop: 30,
  },
});

export default OtpVerificationScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import CustomButton from '../../components/customButtons';
// import InputField from '../../components/textFields';
// import SocialButton from '../../components/socialButtonComponent';
// const ForgotPasswordScreen = ({navigation}) => {
//     const [email, setEmail] = useState('');
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <Text style={styles.subtitle}>Enter Your Registered Email</Text>

//       <Text style={styles.label}>E-mail <Text style={styles.required}>*</Text></Text>
//       <InputField
//         iconName="mail-outline"
//         placeholder="Your Email"

//         value={email}
//         setValue={setEmail}
//       />

// <View style={{ height: 30 }} />



//       <CustomButton
//       title='Send OTP'
//       onPress={() => navigation.navigate('OTPVerificationScreen')}
//         />

//       <View style={styles.separatorContainer}>
//         <View style={styles.line} />
//         <Text style={styles.orText}>or</Text>
//         <View style={styles.line} />
//       </View>

//       <SocialButton
//         iconSource="https://img.icons8.com/color/48/000000/google-logo.png"
//         buttonText="Continue with Google"
//         onPress={() => console.log('Google login pressed')}
//       />

//       <SocialButton
//         iconSource="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
//         buttonText="Continue with Apple"
//         onPress={() => console.log('Apple login pressed')}
//       />

// <View style={styles.signUpContainer}>
//       <Text style={styles.signUpText}>Don't have an account? </Text>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//         <Text style={styles.signUpLink}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 40,
//   },
//   subtitle: {
//     fontSize: 15,
//     textAlign: 'start',
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 20,
//   },

//   label: {
//     fontSize: 16,
//     fontFamily: 'Roboto-Regular',
//     marginBottom: 5,
//     fontWeight: '600',
//     color: '#000',
//   },
//   required: {
//     color: 'red',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },

//   separatorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   orText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//     color: '#aaa',
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   socialIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   signUpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   signUpText: {
//     fontSize: 14,
//     color: '#000',
//     marginTop: 20
//   },
//   signUpLink: {
//     fontSize: 14,
//     color: '#007AFF',
//     marginTop: 20
//   },
// });

// export default ForgotPasswordScreen;
