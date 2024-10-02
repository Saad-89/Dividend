// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import colors from '../utils/config/colors';

// import affiliate from '../assets/svg/DrawerSvg/affiliate.svg';
// import chat from '../assets/svg/DrawerSvg/chat.svg';
// import element from '../assets/svg/DrawerSvg/element.svg';
// import elements from '../assets/svg/DrawerSvg/elements.svg';
// import invoice from '../assets/svg/DrawerSvg/invoice.svg';
// import transaction from '../assets/svg/DrawerSvg/transaction.svg';
// import tuning from '../assets/svg/DrawerSvg/Tuning.svg';
// import graph from '../assets/svg/DrawerSvg/Graph.svg';
// import money from '../assets/svg/DrawerSvg/Money.svg';
// import square from '../assets/svg/DrawerSvg/Square.svg';
// import user from '../assets/svg/DrawerSvg/User.svg';

// import MoreInfo from '../assets/svg/DrawerSvg/more-fill.svg';
// import Pixem from '../assets/images/Pixem.png';

// const CustomDrawer = ({ onClose, navigation }) => {
//   const [selectedMenu, setSelectedMenu] = useState('Dashboard'); // Initialize with the first menu item

//   const handleMenuSelection = (menu) => {
//     setSelectedMenu(menu);
//     navigation.navigate(menu); // Navigate to the selected screen
//     onClose(); // Close the drawer after selection
//   };

//   // Effect to reset selected menu on drawer open
//   useEffect(() => {
//     setSelectedMenu(prev => prev || 'Dashboard'); // Keep the previous selection or default to 'Dashboard'
//   }, []);

//   return (
//     <View style={styles.drawerWrapper}>
//       <View style={styles.drawer}>
//         <ScrollView>
//           {/* Close Button and Search Bar */}
//           <View style={styles.topBar}>
//             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//               <Icon name="close-outline" style={styles.closeButtonText} />
//             </TouchableOpacity>

//             <View style={styles.searchSection}>
//               <Icon name="search-outline" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search..."
//                 placeholderTextColor="#999"
//               />
//             </View>
//           </View>

//           {/* Main Section */}
//           <Text style={styles.sectionTitle}>Main</Text>
//           {renderDrawerItem('Dashboard', elements, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Ask Hey Dividend', element, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Portfolio', graph, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Strategy', tuning, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Forecasting', tuning, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Screener', chat, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Income', money, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Balances', invoice, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('History', transaction, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Education', square, selectedMenu, handleMenuSelection)}

//           {/* Other Section */}
//           <Text style={styles.sectionTitle}>Other</Text>
//           {renderDrawerItem('Account', user, selectedMenu, handleMenuSelection)}
//           {renderDrawerItem('Connected Accounts', affiliate, selectedMenu, handleMenuSelection)}

//           {/* User Info Section */}
//           <View style={styles.userInfoSection}>
//             <Image source={Pixem} style={styles.avatar} />
//             <View style={styles.userInfoTextWrapper}>
//               <Text style={styles.userInfoText}>Pixem</Text>
//               <Text style={styles.userEmailText}>hipixem@gmail.com</Text>
//             </View>
//             <TouchableOpacity style={styles.moreOptions}>
//               <MoreInfo width={24} height={24} style={styles.drawerIcon} />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const renderDrawerItem = (label, IconComponent, selectedMenu, handleMenuSelection) => (
//   <TouchableOpacity
//     style={[
//       styles.drawerItem,
//       selectedMenu === label && styles.selectedDrawerItem,
//     ]}
//     onPress={() => handleMenuSelection(label)}
//   >
//     <IconComponent width={24} height={24} style={styles.drawerIcon} />
//     <Text style={styles.drawerItemText}>{label}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   drawerWrapper: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   drawer: {
//     height: '100%',
//     backgroundColor: '#fff',
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   closeButton: {},
//   closeButtonText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   searchSection: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginLeft: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//   },
//   searchIcon: {
//     marginHorizontal: 5,
//     fontSize: 18,
//     color: colors.lightGrey,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     color: colors.black,
//     marginBottom: 10,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingLeft: 10,
//     borderRadius: 8,
//   },
//   selectedDrawerItem: {
//     borderWidth: 1,
//     borderColor: colors.primary,
//     backgroundColor: colors.background,
//   },
//   drawerIcon: {
//     marginRight: 15,
//   },
//   drawerItemText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   userInfoSection: {
//     marginTop: 30,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     paddingTop: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   userInfoTextWrapper: {
//     flex: 1,
//   },
//   userInfoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   userEmailText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   moreOptions: {
//     padding: 5,
//   },
// });

// export default CustomDrawer;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/config/colors';

import affiliate from '../assets/svg/DrawerSvg/affiliate.svg';
import chat from '../assets/svg/DrawerSvg/chat.svg';
import element from '../assets/svg/DrawerSvg/element.svg';
import elements from '../assets/svg/DrawerSvg/elements.svg';
import invoice from '../assets/svg/DrawerSvg/invoice.svg';
import transaction from '../assets/svg/DrawerSvg/transaction.svg';
import tuneing from '../assets/svg/DrawerSvg/tuneing.svg';
import graph from '../assets/svg/DrawerSvg/Graph.svg';
import money from '../assets/svg/DrawerSvg/Money.svg';
import square from '../assets/svg/DrawerSvg/Square.svg';
import tuning from '../assets/svg/DrawerSvg/Tuning.svg';
import user from  '../assets/svg/DrawerSvg/User.svg';

import MoreInfo from '../assets/svg/DrawerSvg/more-fill.svg';

import Pixem from '../assets/images/Pixem.png';









const CustomDrawer = ({ onClose, navigation }) => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard'); // Initialize with the first menu item

 
const handleMenuSelection = (menu) => {
    setSelectedMenu(menu);
    // Navigate to the selected screen
    console.log(menu);
    navigation.navigate(menu);
    onClose(); // Close the drawer after selection
  };

  // Effect to reset selected menu on drawer open
  useEffect(() => {
    setSelectedMenu(prev => prev || 'Dashboard'); // Keep the previous selection or default to 'Dashboard'
  }, []);

  return (
    <View style={styles.drawerWrapper} >
      <View style={styles.drawer}>
        <ScrollView  showsVerticalScrollIndicator={false}>

          {/* Close Button and Search Bar */}
          <View style={styles.topBar}>
            {/* Close Icon */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close-outline" style={styles.closeButtonText} />
          
            
            </TouchableOpacity>

            {/* Search Bar */}
            <View style={styles.searchSection}>
              
               <Icon name="search-outline" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Main Section */}
          <Text style={styles.sectionTitle}>Main</Text>
          {renderDrawerItem('Dashboard', elements, selectedMenu, handleMenuSelection)}
          {renderDrawerItem('Ask Hey Dividend', element, selectedMenu, handleMenuSelection)}
          {renderDrawerItem('Portfolio', graph, selectedMenu, handleMenuSelection)}
          {renderDrawerItem('Strategy', tuning, selectedMenu, handleMenuSelection)} {/* New Item 1 */}
          {renderDrawerItem('Forecasting', tuneing, selectedMenu, handleMenuSelection)} {/* New Item 2 */}
          {renderDrawerItem('Screener', chat, selectedMenu, handleMenuSelection)} {/* New Item 3 */}
          {renderDrawerItem('Income', money, selectedMenu, handleMenuSelection)} {/* New Item 4 */}
          {renderDrawerItem('Balances',invoice, selectedMenu, handleMenuSelection)} {/* New Item 5 */}
          {renderDrawerItem('History' , transaction, selectedMenu, handleMenuSelection)} {/* New Item 6 */}
          {renderDrawerItem('Education',square, selectedMenu, handleMenuSelection)} {/* New Item 7 */}
         

          {/* Other Section */}
          <Text style={styles.sectionTitle}>Other</Text>
          {renderDrawerItem('Account',user, selectedMenu, handleMenuSelection)}
          {renderDrawerItem('Connected Accounts',affiliate, selectedMenu, handleMenuSelection)}

          {/* User Info Section */}
          <View style={styles.userInfoSection}>
            {/* Circular Avatar */}
            <Image
              source={Pixem}
               
              style={styles.avatar}
            />
            <View style={styles.userInfoTextWrapper}>
              <Text style={styles.userInfoText}>Pixem</Text>
              <Text style={styles.userEmailText}>hipixem@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.moreOptions}>

            <MoreInfo width={24} height={24} style={styles.drawerIcon} />
           
           
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};



const renderDrawerItem = (label, IconComponent, selectedMenu, handleMenuSelection) => (
    <TouchableOpacity
      style={[
        styles.drawerItem,
        selectedMenu === label && styles.selectedDrawerItem, // widgetNumber === 10 ? <MyComponent /> : null
      ]}
      onPress={() => handleMenuSelection(label)}
    >
      {/* Use the passed IconComponent */}
      <IconComponent width={24} height={24} style={styles.drawerIcon} />
  
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
  

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    
  },
  drawer: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    // padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
 
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  
    alignSelf: 'baseline',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginHorizontal: 5,
     fontSize: 18,
 
        color: colors.lightGrey
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.black,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 8,
    showsVerticalScrollIndicator: false
  },
  selectedDrawerItem: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  drawerIcon: {
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
  userInfoSection: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfoTextWrapper: {
    flex: 1,
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmailText: {
    fontSize: 14,
    color: '#666',
  },
  moreOptions: {
    padding: 5,
  },
  moreOptionsIcon: {
    marginLeft: 10,
    fontSize: 16
  },
  moreItemsText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default CustomDrawer;




