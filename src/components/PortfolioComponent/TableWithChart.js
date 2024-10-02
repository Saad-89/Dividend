import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import colors from '../../utils/config/colors';

const { width } = Dimensions.get('window');

const TableWithChart = ({ data }) => {
  const chartWidth = width * 0.25;

  return (
    <View style={styles.container}>
      {/* Table Heading */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Company</Text>
        <Text style={styles.headerText}>Last Price</Text>
        <Text style={styles.headerText}>Change</Text>
        <Text style={styles.headerText}>7 Day Chart</Text>
      </View>

      {/* Table Rows */}
      <ScrollView>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.companyText}>{item.company}</Text>
            <Text style={styles.cell}>{`$${item.lastPrice}`}</Text>
            <Text
              style={[
                styles.cell,
                { color: item.change.startsWith('-') ? 'red' : 'green' },
              ]}
            >
              {item.change}
            </Text>

            {/* 7 Day Chart */}
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: item.chartData,
                  },
                ],
              }}
              width={chartWidth} // width of the chart
              height={50} // height of the chart
              withHorizontalLabels={false} // remove horizontal labels
              withVerticalLabels={false} // remove vertical labels
              withDots={false} // remove dots
              withInnerLines={false} // remove inner grid lines
              withOuterLines={false} // remove outer grid lines
              chartConfig={{
                color: (opacity = 1) => item.change.startsWith('-') ? `rgba(255, 0, 0, ${opacity})` : `rgba(0, 255, 0, ${opacity})`,
                backgroundColor: colors.background,
                backgroundGradientFrom: colors.background,
                backgroundGradientTo: colors.background,
              }}
              bezier // for a smooth curve
              style={styles.chartStyle}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  
    backgroundColor: colors.backgroundColor,
    paddingBottom: 10,
 
    
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  companyText: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.primary
  },
  chartStyle: {
    flex: 1,
    paddingRight: 0, // no margin on right side
  },
});

export default TableWithChart;
