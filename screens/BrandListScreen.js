import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const BrandListScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([
    { id: '1', name: 'Marca 1', status: 'Ativa' },
    { id: '2', name: 'Marca 2', status: 'Renovação Pendente' },
    { id: '3', name: 'Marca 3', status: 'Inativa' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Marcas Registradas</Text>
      
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('BrandDetail', { brand: item })}
          >
            <Text style={styles.brandName}>{item.name}</Text>
            <Text style={[
              styles.status,
              item.status === 'Ativa' ? styles.active : 
              item.status === 'Inativa' ? styles.inactive : styles.pending
            ]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddBrand')}
      >
        <Text style={styles.addButtonText}>+ Adicionar Nova Marca</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  brandName: {
    fontSize: 18,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  active: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
  inactive: {
    color: 'red',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BrandListScreen;