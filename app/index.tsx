import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>🚧NEUVIS on going development🚧</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  text: {
    color: "#252525",
  }
});
