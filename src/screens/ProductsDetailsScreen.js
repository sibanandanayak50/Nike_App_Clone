import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";

const ProductsDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();

  const addToCart = () => console.warn("Add To Cart");

  const renderItem = ({ item }) => (
    <View>
      <Image source={{ uri: item }} style={{ width: width, aspectRatio: 1 }} />
    </View>
  );
  return (
    <View>
      <ScrollView>
        {/* Image Carousel  */}
        <FlatList
          data={product.images}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.details}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {/* Add To Cart Button */}
        <Pressable onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
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

export default ProductsDetailsScreen;
