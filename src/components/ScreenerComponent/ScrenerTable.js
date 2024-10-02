import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // Assuming you have SVG icons
import EditIcon from '../../assets/svg/edit.svg';
import DeleteIcon from '../../assets/svg/delete.svg';
import colors from '../../utils/config/colors';
// Row Component
const ScreenerRow = ({ name, type, matches, onEdit, onDelete }) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.typeText}>{type}</Text>
      <Text style={styles.matchesText}>{matches}</Text>
      
      {/* Edit Icon */}
      <TouchableOpacity onPress={onEdit} style={styles.iconContainer}>
        <EditIcon height={20} width={20} />
       
      </TouchableOpacity>

      {/* Delete Icon */}
      <TouchableOpacity onPress={onDelete} style={styles.iconContainer}>
        <DeleteIcon height={20} width={20}/>
        
      </TouchableOpacity>
    </View>
  );
};

// Table Component
const ScreenerTableComponent = () => {
  const handleEdit = (item) => {
    console.log('Edit', item);
  };

  const handleDelete = (item) => {
    console.log('Delete', item);
  };

  const data = [
    { name: 'Aggressive small cap stocks', type: 'stocks', matches: '50+' },
    { name: 'Moderate large cap stocks', type: 'stocks', matches: '120+' },
    { name: 'Balanced index funds', type: 'funds', matches: '70+' },
  ];

  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Matches</Text>
      </View>

      {/* Table Rows */}
      {data.map((item, index) => (
        <ScreenerRow
          key={index}
          name={item.name}
          type={item.type}
          matches={item.matches}
          onEdit={() => handleEdit(item)}
          onDelete={() => handleDelete(item)}
        />
      ))}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
 
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '30%',
    textAlign: 'left',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
  },
  nameText: {
    width: '40%',
    fontSize: 14,
  },
  typeText: {
    width: '20%',
    fontSize: 14,
  },
  matchesText: {
    width: '20%',
    fontSize: 14,
  },
  iconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenerTableComponent;
