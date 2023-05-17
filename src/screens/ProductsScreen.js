import { FlatList, Image, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => {
          //update selected product
          dispatch(productSlice.actions.setSelectedProduct(item.id));
          navigation.navigate("Product Details");
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
      </Pressable>
    </View>
  );

  return <FlatList data={products} renderItem={renderItem} numColumns={2} />;
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
