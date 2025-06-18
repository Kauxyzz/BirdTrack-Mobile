import { Stack } from "expo-router";

export default function MonitoramentoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Monitoramento de Produção" }} />
      <Stack.Screen name="novo" options={{ title: "Novo Monitoramento" }} />
    </Stack>
  );
}
