import { FlatList, Image, View, StyleSheet } from "react-native";
import React from "react";
import PRODUCTS from "../data/products";

const ProductsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
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
