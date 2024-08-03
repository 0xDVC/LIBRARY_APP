import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

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
          <Text>Edit my bitch ass. Hello World!</Text>
            <Link href="/profile">Go to Profile</Link>
        </View>
  );
}
