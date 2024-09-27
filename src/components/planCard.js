import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './customButtons';
import BlueCheckIcon from '../assets/icons/blue-check.png';

const PlanCard = ({ price, name, features, navigation }) => {
  return (
    <View style={styles.card}>
      {/* Card content */}
      <View style={styles.content}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>Research, Track, and Maintain list of Dividend</Text>

        {/* Features list */}
        <View style={styles.features}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureRow}>

              <Image
        source={BlueCheckIcon}
      />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Select Plan"
          onPress={() => navigation.navigate('PaymentScreen')} // Example of onPress action
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a2b45',
    padding: 20,
    borderRadius: 10,
    width: '100%', // Make the card take full width of its container
    maxWidth: 340, // Set a max width for larger screens
    marginVertical: 10,
    alignSelf: 'center', // Center card horizontally
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
  },
  content: {
    // Removed flex: 1 to avoid pushing the content out of view
    marginBottom: 10, // Add margin to separate content from the button
  },
  price: {
    color: '#fff',
    fontSize: 28, // Slightly larger font size for emphasis
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 20, // Increased margin for better spacing
  },
  features: {
    marginBottom: 8, // Give space before the button
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    color: '#fff',
    fontSize: 12, // Larger text size for better readability
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center', // Center the button horizontally
  },
});

export default PlanCard;




// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import CustomButton from './customButtons';


// const PlanCard = ({ price, name, features }) => {
//   return (
//     <View style={styles.card}>
//       {/* Card content */}
//       <View style={styles.content}>
//         <Text style={styles.price}>{price}</Text>
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.text}>Research, Track, and Maintain list of Dividend</Text>

//         <View style={styles.features}>
//           {features.map((feature, index) => (
//             <View key={index} style={styles.featureRow}>
//               <Ionicons name="checkmark-circle" size={20} color="#007bff" />
//               <Text style={styles.featureText}>{feature}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* Button pinned at the bottom */}
//       <CustomButton
//         title="Select Plan"
//         onPress={null}
//         />
//       {/* <TouchableOpacity style={styles.selectButton}>
//         <Text style={styles.selectText}>Select Plan</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#1a2b45',
//     padding: 20,
//     borderRadius: 10,
//     height: 520, // Set the height of the card
//     width: 310,
//     justifyContent: 'space-between', // Makes sure content is spaced and the button is pinned at the bottom
//   },
//   content: {
//     flex: 1,
//   },
//   price: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   name: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   text: {
//     color: '#ddd',
//     fontSize: 14,
//     marginVertical: 10,
//   },
//   features: {
//     marginVertical: 20,
//   },
//   featureRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   featureText: {
//     color: '#fff',
//     fontSize: 14,
//     marginLeft: 10, // Space between icon and text
//   },
//   selectButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   selectText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default PlanCard;
