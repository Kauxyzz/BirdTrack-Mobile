import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="login" options={{ title: 'Login', presentation: 'modal' }} />
      <Stack.Screen name="documentos" options={{ title: 'Documentos' }} />
      <Stack.Screen name="mortalidade" options={{ title: 'Mortalidade' }} />
    </Stack>
  );
}
