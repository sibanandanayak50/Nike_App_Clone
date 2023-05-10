import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductsDetailsScreen from "./src/screens/ProductsDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductsDetailsScreen /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
