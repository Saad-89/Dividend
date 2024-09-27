import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox'; // For the checkbox
import InputField from '../../components/textFields';
import CustomButton from '../../components/customButtons';
import SocialButton from '../../components/socialButtonComponent';

// SignIn Screen Component
const CreateNewPasswordScreen = ({ navigation }) => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <ScrollView contentContainerStyle={styles.container0} >
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>

      {/* Email Input */}
      <Text style={styles.label}>Password <Text style={styles.required}>*</Text></Text>
      <InputField
      iconName="lock-closed-outline"
        placeholder="**************"
        isPassword={true}
        value={password}
        setValue={setPassword}
      />

      {/* Password Input */}
      <Text style={styles.label}>Confirm Password <Text style={styles.required}>*</Text></Text>
      <InputField
        iconName="lock-closed-outline"
        placeholder="**************"
        isPassword={true}
        value={confirmPassword}
        setValue={setConfirmPassword}
      />

      <View style= {{height: 30}} />



      {/* Sign In Button */}
      <CustomButton
        title="Reset Password"
        onPress={null}
        />


      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>



      <SocialButton
        iconSource="https://img.icons8.com/color/48/000000/google-logo.png"
        buttonText="Continue with Google"
        onPress={() => console.log('Google login pressed')}
      />

      <SocialButton
        iconSource="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
        buttonText="Continue with Apple"
        onPress={() => console.log('Apple login pressed')}
      />



      {/* Sign Up */}
      <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signUpLink}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView >
  );
};

// Styles
const styles = StyleSheet.create({
    container0: {
        flexGrow: 1, // Ensures that the container takes up the full screen space
      },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Roboto-Regular',
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 5,
    fontWeight: '600',
    color: '#000',
  },
  required: {
    color: 'red',
  },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007AFF',
  },
  signInButton: {
    backgroundColor: '#005294',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    fontSize: 14,
    color: '#A0A0A0',
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#000',
  },
  signUpLink: {
    fontSize: 14,
    color: '#007AFF',
  },
});

export default CreateNewPasswordScreen;
