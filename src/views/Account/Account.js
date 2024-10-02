import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import FreeModeToggle from '../../components/freeModeToggle';
import colors from '../../utils/config/colors';
import CustomButton from '../../components/customButtons';
import EditIcon from '../../assets/svg/edit-icon.svg';

// Reusable InputField Component
const InputField = ({ placeholder, value, onChangeValue, editable = true }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeValue}
        editable={editable}
        placeholderTextColor="#8E8E93"
      />
      {editable && (
        <TouchableOpacity style={styles.icon}>
          <EditIcon color="grey" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const AccountInformationScreen = () => {
  // State for input values
  const [name, setName] = useState('Joseph Ren');
  const [email, setEmail] = useState('JosephRen@gmail.com');
  const [phone, setPhone] = useState('+1 213 5748 3759');
  const [street, setStreet] = useState('Street Number');
  const [apartment, setApartment] = useState('Apt/House Number');
  const [city, setCity] = useState('City');
  const [state, setState] = useState('State');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Free mode */}
        <View style={styles.freemode}>
          <Text style={styles.portfolioText}>Account Info</Text>
          <FreeModeToggle />
        </View>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} // Replace with user's image URI
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Joseph Ren</Text>
        </View>

        {/* Input Fields */}
        <InputField placeholder="Joseph Ren" value={name} onChangeValue={setName} />
        <InputField placeholder="JosephRen@gmail.com" value={email} onChangeValue={setEmail} />
        <InputField placeholder="+1 213 5748 3759" value={phone} onChangeValue={setPhone} />
        <InputField placeholder="Street Number" value={street} onChangeValue={setStreet} />
        <InputField placeholder="Apt/House Number" value={apartment} onChangeValue={setApartment} />

        {/* City and State - Row */}
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <InputField placeholder="City" value={city} onChangeValue={setCity} />
          </View>
          <View style={styles.spacer} />
          <View style={styles.halfInputContainer}>
            <InputField placeholder="State" value={state} onChangeValue={setState} />
          </View>
        </View>

        {/* Update Button */}
        <CustomButton title="Update" onPress={null} />
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // Add some padding to prevent content from hiding behind the keyboard
  },
  freemode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  portfolioText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 0, // Remove horizontal padding
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingLeft: 10, // Ensure some padding for text inside input
  },
  icon: {
    paddingHorizontal: 10, // Icon will have some spacing
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfInputContainer: {
    flex: 1,
  },
  spacer: {
    width: 10,
  },
});

export default AccountInformationScreen;


// import React from 'react';
// import {View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Switch, Image } from 'react-native';
// import FreeModeToggle from '../../components/freeModeToggle';
// import SettingContainerComponent from '../../components/SettingComponent/SettingContainerComponent';
// import colors from '../../utils/config/colors';
// import ListTile from '../../components/SettingComponent/ListTileComponent';

// import AccountIcon from '../../assets/svg/SettingSvg/account.svg'; // Import SVG as component
// import Password  from '../../assets/svg/SettingSvg/lock.svg';
// import Payment from '../../assets/svg/SettingSvg/payment.svg';
// import Subscription from '../../assets/svg/SettingSvg/subscription.svg';
// import TellAFriend from '../../assets/svg/SettingSvg/tellAFriend.svg';

// import EditIcon from '../../assets/svg/edit-icon.svg';
// import CustomButton from '../../components/customButtons';


// const InputField = ({ placeholder, value, editable = true, icon }) => {
//     return (
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={placeholder}
//           value={value}
//           editable={editable}
//         />
//         {editable && (
//           <TouchableOpacity style={styles.icon}>
//             <EditIcon  color="grey" />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

// const AccountInformationScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Free mode */}
//       <View style={styles.freemode}>
//         <Text style={styles.portfolioText}>Account Info</Text>
//         <FreeModeToggle />
//       </View>

//             {/* Profile Image */}
//             <View style={styles.profileContainer}>
//           <Image
//             source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} // Replace with user's image URI
//             style={styles.profileImage}
//           />
//           <Text style={styles.profileName}>Joseph Ren</Text>
//         </View>


//                 {/* Input Fields */}
//                 <InputField placeholder="Joseph Ren" value="Joseph Ren" icon="edit-2" />
//         <InputField placeholder="JosephRen@gmail.com" value="JosephRen@gmail.com" icon="edit-2" />
//         <InputField placeholder="+1 213 5748 3759" value="+1 213 5748 3759" icon="edit-2" />
//         <InputField placeholder="Street Number" value="Street Number" icon="edit-2" />
//         <InputField placeholder="Apt/House Number" value="Apt/House Number" icon="edit-2" />

//            {/* City and State - Row */}
//            <View style={styles.row}>
//           <InputField placeholder="City" value="City" icon="chevron-down" />
//           <View style={styles.spacer} />
//           <InputField placeholder="State" value="State" icon="chevron-down" />
//         </View>

//         <CustomButton
//         title="Update"
//         onPress={null}
//         />


     
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   freemode: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Space between items
//     alignItems: 'baseline',
//     paddingVertical: 10,
//   },
//   portfolioText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   profileContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingTop: 20
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 10,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginBottom: 15,
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   spacer: {
//     width: 10,
//   },
// });

// export default AccountInformationScreen;

