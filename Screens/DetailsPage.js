import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailsPage = ({ route }) => {
  const { recipe } = route.params;
console.log("Hello 3")
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.headerImage} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.subtitle}>{recipe.cuisine} • {recipe.difficulty} • {recipe.caloriesPerServing} kcal</Text>
        <Text style={styles.rating}>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</Text>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ing, idx) => (
          <Text key={idx} style={styles.ingredient}>• {ing}</Text>
        ))}
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((step, idx) => (
          <Text key={idx} style={styles.instruction}>{idx + 1}. {step}</Text>
        ))}
        <Text style={styles.sectionTitle}>Details</Text>
        <Text>Prep Time: {recipe.prepTimeMinutes} min</Text>
        <Text>Cook Time: {recipe.cookTimeMinutes} min</Text>
        <Text>Servings: {recipe.servings}</Text>
        <Text>Tags: {recipe.tags.join(', ')}</Text>
        <Text>Meal Type: {recipe.mealType.join(', ')}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: '#25AE87',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 6,
    color: '#222',
  },
  ingredient: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
    marginBottom: 2,
  },
  instruction: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
    marginBottom: 2,
  },
});