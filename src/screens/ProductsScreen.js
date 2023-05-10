import { FlatList, Image, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import PRODUCTS from "../data/products";

const ProductsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Pressable onPress={() => navigation.navigate("Product Details")}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </Pressable>
    </View>
  );

  return <FlatList data={PRODUCTS} renderItem={renderItem} numColumns={2} />;
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
