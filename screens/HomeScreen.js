import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donadi Propriedade Industrial</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Lista de Marcas" 
          onPress={() => navigation.navigate('Brands')}
        />
        <Button
          title="Lançamentos de Caixa"
          onPress={() => navigation.navigate('CashEntry')} 
        />
        <Button
          title="Cálculo de Taxas"
          onPress={() => navigation.navigate('TaxSummary')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  buttonContainer: {
    gap: 15
  }
});