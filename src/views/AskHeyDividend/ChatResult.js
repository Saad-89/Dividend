import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';
import colors from '../../utils/config/colors';

const PredictionScreen = () => {
  const screenWidth = Dimensions.get('window').width * 0.9; // Responsive chart width

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>
            Hello <Text style={styles.userName}>Robyn,</Text>
          </Text>
          <Text style={styles.subHeader}>How Can I Help You Today?</Text>
        </View>
        <Icon name="chat" size={25} color="#000" />
      </View>

      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual avatar
          style={styles.avatar}
        />
        <Text style={styles.avatarText}>
          Predict the best time to sell my Ethereum based on past trends
        </Text>
      </View>

      {/* Chat Section */}
      <View style={styles.chatSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual avatar
          style={styles.avatar}
        />
        <Text style={styles.chatText}>
          Based on current predictions from various sources, Ethereum's price is
          expected to rise in the near future. For instance, Forbes predicts
          that by the end of 2024, Ethereum could reach $5,000. Coinpedia also
          forecasts that Ethereum’s March 2024 price may reach a potential high
          of $4,900. Another source mentions that Ethereum might increase by
          5%, potentially reaching $3,687.11 by the next day.
        </Text>
      </View>

      {/* Price Prediction Card */}
      <View style={styles.priceCard}>
        <Text style={styles.priceValue}>$3,326.18</Text>
        <View style={styles.priceRow}>
          <Icon name="trending-up" size={24} color="green" />
          <Text style={styles.ethValue}>Ethereum ETH 12.32%</Text>
        </View>

        {/* Chart */}
        <LineChart
  data={{
    labels: [], // No labels for the axes
    datasets: [
      {
        data: [3200, 3300, 3450, 3600, 3480, 3326],
      },
    ],
  }}
  width={screenWidth}
  height={220}
  yAxisLabel="$"
  withVerticalLabels={false} // Remove vertical labels
  withHorizontalLabels={false} // Remove horizontal labels
  withDots={false} // Remove dots on the line
  chartConfig={{
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
  
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '0', // No radius for dots
      strokeWidth: '0', // No stroke for dots
    },
  }}
  bezier // Keep the bezier curve for smoothness
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>

        {/* Method Info */}
        <View style={styles.methodInfo}>
          <Icon name="info" size={24} color="#007bff" />
          <Text style={styles.methodText}>
            Method: LSTM, Accuracy: 87%
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.sellButton}>
            <Text style={styles.sellText}>Sell ETH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alertButton}>
            <Text style={styles.alertText}>Set Alert</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTextContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  userName: {
    color: '#007bff',
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  avatarText: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  chatSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  chatText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  priceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ethValue: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  methodText: {
    marginLeft: 10,
    color: '#666',
  },
  buttonContainer: {
    marginTop: 15,
  },
  sellButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  alertButton: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  sellText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  alertText: {
    color: '#555',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default PredictionScreen;
