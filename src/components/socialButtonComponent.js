import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SocialButton = ({ iconSource, buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <Image source={{ uri: iconSource }} style={styles.socialIcon} />
      <Text style={styles.socialButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SocialButton;
