
// GettingStartedScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import BorkerageLogo from '../../assets/icons/link-brokerage-account.png';
import UploadProfileLogo from '../../assets/icons/upload-portfolio.png';
import ManualStupLogo from '../../assets/icons/manual-setup.png';
import PortfolioOption from '../../components/portfolioOption';



// Main screen component
const GettingStartedScreen = ({navigation}) => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionPress = (option) => {
    setActiveOption(option);
    console.log(`${option} selected`); // Print something to the console
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <Text style={styles.subtitle}>
        Your account starts with setting up a Portfolio. You can do that multiple ways:
      </Text>

      <PortfolioOption
        title="Link Brokage Account"
        description="Connect your Brokage Account"
        icon={BorkerageLogo}  // Replace with your PNG/SVG
        active={activeOption === 'link'}
        onPress={() => handleOptionPress('link')}
      />

      <PortfolioOption
        title="Upload Portfolio"
        description="Use import file to upload Portfolio data"
        icon={UploadProfileLogo}  // Replace with your PNG/SVG
        active={activeOption === 'upload'}
        onPress={() => handleOptionPress('upload')}
      />

      <PortfolioOption
        title="Manually setup Portfolio"
        description="Manually enter Portfolio information"
        icon={ManualStupLogo}  // Replace with your PNG/SVG
        active={activeOption === 'manual'}
        onPress={() => navigation.navigate('PortfolioScreen')}
      />
    </View>
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start', // Centers vertically
    alignItems: 'center',      // Centers horizontally
    padding: 20,
    backgroundColor: '#fff',


  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: 'black',
    textAlign:'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign:'center',
  },

});

export default GettingStartedScreen;
