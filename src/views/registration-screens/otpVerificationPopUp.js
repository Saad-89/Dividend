import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/customButtons';

const OTPVerificationPopup = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();  // Get navigation object

  useImperativeHandle(ref, () => ({
    openModal() {
      setModalVisible(true);
    },
  }));

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('CreateNewPasswordScreen');  // Navigate to new screen
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon name="check-circle" size={50} color="#34A853" />
          <Text style={styles.title}>OTP Verification Success!</Text>
          <Text style={styles.message}>
            Your OTP was successfully verified. You can now proceed to create a new password.
          </Text>

          <CustomButton
            style={styles.button}
            title="Create New Password"
            onPress={closeModal}
          />
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 10,
    },
    message: {
      fontSize: 14,
      color: '#6c757d',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#0057FF',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  export default OTPVerificationPopup;





// import React, { useState, forwardRef, useImperativeHandle } from 'react';
// import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import CustomButton from '../../components/customButtons';
// import CreateNewPasswordScreen from './createNewPassword';

// // Use forwardRef to expose the openModal function
// const OTPVerificationPopup = forwardRef((props, ref) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   // This will allow the parent to call openModal
//   useImperativeHandle(ref, () => ({
//     openModal() {
//       setModalVisible(true);
//     }
//   }));

//   const closeModal = ({navigation}) => {
//     setModalVisible(false);
//     ()=> navigation.navigate("CreateNewPasswordScreen");

//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={closeModal}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <Icon name="check-circle" size={50} color="#34A853" />
//           <Text style={styles.title}>OTP Verification Success!</Text>
//           <Text style={styles.message}>
//             Your OTP was successfully verified. You can now proceed to create
//             a new password.
//           </Text>

//       <CustomButton style={styles.button}
//         title="Create New Password"
//         onPress={closeModal}
//         />

//         </View>
//       </View>
//     </Modal>
//   );
// });

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//     marginVertical: 10,
//   },
//   message: {
//     fontSize: 14,
//     color: '#6c757d',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#0057FF',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default OTPVerificationPopup;


