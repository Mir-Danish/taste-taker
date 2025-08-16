import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "../Components/BottomBar";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigation = useNavigation();

  // Fetch recipes on mount
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
      .catch(e => console.log(e));
  }, []);

  // Filter recipes as user types
  useEffect(() => {
    if (search.trim() === "") {
      setFiltered([]);
    } else {
      setFiltered(
        recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, recipes]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("DetailsScreen", { recipe: item })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.cuisine} | ⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Search Recipes</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type Here..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          search.trim() !== "" && filtered.length === 0 ? (
            <Text style={styles.noResults}>No recipes found.</Text>
          ) : null
        }
      />
    </View>
    <BottomBar />
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#eee",
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  itemSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  noResults: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
    fontSize: 16,
  },
});
