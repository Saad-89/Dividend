import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import FontStyles from '../../utils/styles/fontStyle';
import CustomButton from '../../components/customButtons';
import Feature from '../../components/splashInforFeatures';

// Main Gradient Info Screen
const SplashGradientInfoScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#163B64', '#0A1236']}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Start your 30-day free trial</Text>
          <View style={styles.subTextContainer}>
            <Icon name="checkmark-circle-outline" size={18} color="#8996A9" style={styles.checkIcon} />
            <Text style={FontStyles.body}>No credit card required</Text>
          </View>
        </View>

        {/* Features List */}
        <Feature
          iconName="image-outline"
          title="Dividend Portfolio Management"
          description="Integrate with guaranteed developer-friendly APIs or openly to choose a build-ready or low-code solution."
        />
        <Feature
          iconName="analytics-outline"
          title="Portfolio Analysis"
          description="Receive detailed insights on all your numbers in real-time, see where visitors are coming from."
        />
        <Feature
          iconName="chatbubble-outline"
          title="Ask Hey Dividend"
          description="Keep your team members and customers in the loop by sharing your dashboard public."
        />

        {/* Continue Button */}

        <CustomButton
        title="Continue"
        onPress={() => navigation.navigate('SignInScreen')}
        />




      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'start',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'start',

  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },





});

export default SplashGradientInfoScreen;

