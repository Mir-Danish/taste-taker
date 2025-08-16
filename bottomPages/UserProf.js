import React, { useEffect, useState } from "react";
import { Platform, StatusBar, View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomBar from "../Components/BottomBar";
import { useNavigation } from "@react-navigation/native";

const UserProf = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

 
//Gets all the details from the ASync Storage
  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (e) {
        console.log("Failed to load user data", e);
      }
    };
    getUser();
  }, []);

   // to sign out the user 
  const handleSignOut = async () => {
    Alert.alert(
      "Sign Out",
      "Clear all data and sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Sign Out", 
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              navigation.navigate('StarterPage');
            } catch (error) {
              Alert.alert('Error', 'Sign out failed');
            }
          }
        }
      ]
    );
  }
 

  return (
    <>
      <View style={styles.container}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.profileCard}>
          <Image
            source={require("../assets/icon.png")} // Use a user image if available, else fallback to app icon
            style={styles.avatar}
          />
          <Text style={styles.name}>{user?.name || "Guest User"}</Text>
          <Text style={styles.email}>{user?.email || "No email found"}</Text>
        </View>
        </View>



        <View style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Account Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{user?.name || "N/A"}</Text>
          </View>
       <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user?.email || "N/A"}</Text>
          </View>
          </View>
          {/* Add more info fields here if needed */}
        </View>


          {/* //Sign-out button */}
          <View style={{justifyContent:"center",alignItems:"center", marginHorizontal:1,marginTop:15}}>
            <TouchableOpacity style={{backgroundColor:"#000", height:40,width:250,borderRadius:50}} onPress={handleSignOut}>
             <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight:"600",padding:5}}>Sign Out</Text>
            </TouchableOpacity>
            
          </View>
      </View>
      <BottomBar />
    </>
  );
};

export default UserProf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f6f6f6",
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  profileCard: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    marginTop: 40,
    width: "85%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#25AE87",
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 12,
  },
  infoSection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    width: "85%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#25AE87",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
  },
  infoValue: {
    fontSize: 16,
    color: "#222",
  },
});
