import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCart = () => {
  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  const ListFooterComponent = () => {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subTotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>
            {deliveryFee === 0 ? "Free" : deliveryFee + " US$"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return <CartListItem cartItem={item} />;
  };

  const cartItem = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItem}
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
