import { StyleSheet, Text, View } from "react-native";

function WelComeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>We're glad to have you here.</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#f5f5f5", // Light gray for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc", // Subtle gray for the subtitle
    textAlign: "center",
  },
});

export default WelComeScreen;
