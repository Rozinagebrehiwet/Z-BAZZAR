import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProductDetails() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Product Images */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageContainer}
        >
          {[1, 2, 3].map((item) => (
            <Image
              key={item}
              source={{ uri: 'https://via.placeholder.com/400' }}
              style={styles.productImage}
            />
          ))}
        </ScrollView>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>Premium Product Name</Text>
          <Text style={styles.productPrice}>$299.99</Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={16} color="#FFD700" />
              ))}
            </View>
            <Text style={styles.ratingText}>(4.5)</Text>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          <View style={styles.sizeContainer}>
            <Text style={styles.sectionTitle}>Select Size</Text>
            <View style={styles.sizeOptions}>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <TouchableOpacity key={size} style={styles.sizeButton}>
                  <Text style={styles.sizeText}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  imageContainer: {
    height: 400,
  },
  productImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    marginLeft: 8,
    color: '#666',
  },
  description: {
    marginTop: 16,
    lineHeight: 24,
    color: '#666',
  },
  sizeContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  addToCartButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 