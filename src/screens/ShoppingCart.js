import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  const ListFooterComponent = () => {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>4100 US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>10 US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>4110 US$</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return <CartListItem cartItem={item} />;
  };
  return (
    <>
      <FlatList
        data={cart}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    paddingTop: 10,
    margin: 20,
    borderTopWidth: 1,
    borderColor: "gainsboro",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "#000",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default ShoppingCart;
