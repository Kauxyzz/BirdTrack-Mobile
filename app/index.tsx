import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao BirdTrack</Text>
      <Button title="Acessar Login" onPress={() => router.replace('/auth/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8fafd',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#003366',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
