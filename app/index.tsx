import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    return (
        <View style={styles.container}>
          <Text>Edit my ass. Hello World!</Text>
        </View>
  );
}
