import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import OTPVerificationPopup from './otpVerificationPopUp';
const OtpVerificationScreen = ({navigation}) => {
  const [otpCode, setOtpCode] = useState('');
  const otpPopupRef = useRef(null);

//   const handleVerify = () => {
//     if (otpCode.length === 4) {
//       console.log(`Code is ${otpCode}, you are good to go!`);
//       Alert.alert('OTP Verification Success!', `Code: ${otpCode}`);
//     } else {
//       Alert.alert('Error', 'Please fill in the correct OTP');
//     }
//   };
const handleVerify = (openModal) => {
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
    borderWidth: 1, // Border around the input field
    borderColor: '#ccc', // Default border color
    borderRadius: 10, // Rounded corners
    fontSize: 20,
    color: '#000',
    padding: 10, // Padding inside the input
    width: 50, // Width for each input field
    height: 50, // Height for each input field
    textAlign: 'center', // Center the input text
  },
  highlightedStyle: {
    borderColor: '#afccf5', // Highlighted color when focused
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

    width: '100%', // This makes the button take up the full width of the container
    paddingVertical: 12, // Vertical padding for height
    borderRadius: 5, // Rounded corners
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center',
    backgroundColor: '#005294',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
});

export default OtpVerificationScreen;



// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// import OTPInputView from '@twotalltotems/react-native-otp-input';

// const OtpVerificationScreen = () => {
//   const handleCodeFilled = (code) => {
//     console.log(`Code is ${code}, you are good to go!`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Verification Code</Text>
//       <Text style={styles.subText}>Enter code sent to bill******@example.com</Text>

//       <OTPInputView
//         style={styles.otpInputContainer}
//         pinCount={4}
//         autoFocusOnLoad
//         codeInputFieldStyle={styles.underlineStyleBase}
//         codeInputHighlightStyle={styles.underlineStyleHighLighted}
//         onCodeFilled={handleCodeFilled}
//       />

//       <View style={styles.resendContainer}>
//         <Text style={styles.needNewCodeText}>Need a New Code?</Text>
//         <TouchableOpacity>
//           <Text style={styles.resendLink}>Resend</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.verifyButton}>
//         <Text style={styles.verifyButtonText}>Verify</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   subText: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 20,
//   },
//   otpInputContainer: {
//     width: '80%',
//     height: 100,
//   },
//   underlineStyleBase: {
//     width: 40,
//     height: 45,
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     fontSize: 20,
//     color: '#000',
//   },
//   underlineStyleHighLighted: {
//     borderBottomWidth: 2,
//     borderColor: '#03DAC6',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//   },
//   needNewCodeText: {
//     fontSize: 14,
//     color: '#777',
//   },
//   resendLink: {
//     fontSize: 14,
//     color: '#007BFF',
//     marginLeft: 5,
//   },
//   verifyButton: {
//     backgroundColor: '#007BFF',
//     width: '80%',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   verifyButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default OtpVerificationScreen;
