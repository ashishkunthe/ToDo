import { Button, StyleSheet, Text, View } from "react-native";

function UserScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Screen</Text>
      <Text style={styles.subtitle}>Welcome to your profile!</Text>
      <Button title="open drawer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // Dark background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5", // Light gray text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc", // Subtle gray text
  },
});

export default UserScreen;
