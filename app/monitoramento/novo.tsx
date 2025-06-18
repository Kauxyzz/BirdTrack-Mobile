import { useState } from "react";
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useRouter } from "expo-router";

export default function NovoMonitoramento() {
  const [data, setData] = useState(new Date().toISOString().split("T")[0]);
  const [granjaId, setGranjaId] = useState("");
  const [mediaPeso, setMediaPeso] = useState("");
  const [mortalidade, setMortalidade] = useState("");
  const [numeroGranja, setNumeroGranja] = useState("");
  const [observacao, setObservacao] = useState("");
  const [status, setStatus] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const router = useRouter();

  const salvar = async () => {
    if (!numeroGranja || !mortalidade || !mediaPeso) {
      Alert.alert("Erro", "Preencha os campos obrigatórios");
      return;
    }

    try {
      await addDoc(collection(db, "monitoramento"), {
        data,
        granjaId,
        mediaPeso: parseFloat(mediaPeso),
        mortalidade: parseInt(mortalidade),
        numeroGranja,
        observacao,
        status,
        usuarioId,
      });
      Alert.alert("Sucesso", "Registro salvo com sucesso!");
      router.replace("/monitoramento");
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar dados.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Novo Registro de Monitoramento</Text>
      <TextInput style={styles.input} placeholder="Data" value={data} onChangeText={setData} />
      <TextInput style={styles.input} placeholder="ID da Granja" value={granjaId} onChangeText={setGranjaId} />
      <TextInput style={styles.input} placeholder="Número da Granja" value={numeroGranja} onChangeText={setNumeroGranja} />
      <TextInput style={styles.input} placeholder="Mortalidade" value={mortalidade} onChangeText={setMortalidade} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Média de Peso" value={mediaPeso} onChangeText={setMediaPeso} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} />
      <TextInput style={styles.input} placeholder="Observações" value={observacao} onChangeText={setObservacao} multiline />
      <TextInput style={styles.input} placeholder="ID do Usuário" value={usuarioId} onChangeText={setUsuarioId} />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flexGrow: 1 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#003366", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
