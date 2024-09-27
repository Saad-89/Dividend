// components/PaginationDots.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const PaginationDots = ({ currentIndex, total }) => {
  return (
    <View style={styles.dotContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: currentIndex === index ? '#005294' : '#ddd' },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default PaginationDots;
