import { StyleSheet } from 'react-native';

const FontStyles = StyleSheet.create({
  header: {
    fontFamily: 'Roboto-Bold',  // Bold font

    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'start', // Center the title
    marginBottom: 5,        // Keep fontWeight bold for compatibility
  },
  subheader: {
    fontFamily: 'Roboto-Medium', // Medium font
    fontSize: 20,
  },
  body: {
    fontFamily: 'Roboto-Regular', // Regular font

    fontSize: 16,
    color: '#8996A9',
    marginLeft: 5,
  },
  // Add any other styles if needed
});

export default FontStyles;
