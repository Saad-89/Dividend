import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // For country picker
import InputField from '../../components/textFields';
import CustomButton from '../../components/customButtons';
import SocialButton from '../../components/socialButtonComponent';

const PaymentScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState('United States of America');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      {/* Cardholder Name */}
      <Text style={styles.label}>Cardholder Name <Text style={styles.required}>*</Text></Text>
      <InputField
          placeholder="Rafay Saleem"
          value={name}
          setValue={setName}
      />


      {/* Card Number */}
      <Text style={styles.label}>Card Number <Text style={styles.required}>*</Text></Text>
      <InputField
           placeholder="4548 3589 3588 3580"
           value={cardNumber}
          setValue={setCardNumber}
          keyboardType="numeric"
      />


      {/* Expiry Date and CVV */}
      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Expiry Date <Text style={styles.required}>*</Text></Text>
          <InputField
           placeholder="07/28"
           value={expiryDate}
          setValue={setExpiryDate}
      />


        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>CVV <Text style={styles.required}>*</Text></Text>
          <InputField
            placeholder="***"
            value={cvv}
          setValue={setCvv}
           keyboardType="numeric"
      />

        </View>
      </View>

      {/* Country */}
      <Text style={styles.label}>Country <Text style={styles.required}>*</Text></Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="United States of America" value="United States of America" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="United Kingdom" value="United Kingdom" />
          {/* Add more countries as needed */}
        </Picker>
      </View>

      {/* Total Payment */}
      <Text style={styles.totalPayment}>Total Payment: $21.00</Text>

      {/* Pay Button */}
      <CustomButton
        title="Pay"
        onPress={() => navigation.navigate('GettingStartedScreen')}
        />


      {/* Or Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Apple Pay Button */}
      <SocialButton
        iconSource="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
        buttonText="Continue with Apple"
        onPress={() => console.log('Apple login pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    marginBottom: 0,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  totalPayment: {
    textAlign: 'right',
    fontSize: 16,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
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

});

export default PaymentScreen;
