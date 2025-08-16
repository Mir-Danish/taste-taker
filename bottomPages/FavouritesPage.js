import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import { Platform,View,Text,StyleSheet,StatusBar, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import BottomBar from "../Components/BottomBar";

const FavouritesPage = () => {
    const [favourites,setFavourites] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const favs = JSON.parse(await AsyncStorage.getItem('favourites')) || [];
                setFavourites(favs);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFavourites();
    },[])

    const removeFromFavourites = async (itemToRemove) => {
        try {
            const updatedFavs = favourites.filter(item => item !== itemToRemove);
            await AsyncStorage.setItem('favourites', JSON.stringify(updatedFavs));
            setFavourites(updatedFavs);
        } catch (error) {
            console.error('Error removing from favourites:', error);
        }
    };
    return(
        <>
        <View style={styles.maincontainer}>
            <Text style={{textAlign:"center",fontSize:22,fontWeight:"500"}}>Favourites Page</Text>
            {favourites.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Icon name="hearto" size={60} color="#ccc" />
                    <Text style={styles.emptyText}>No favorites added yet</Text>
                    <Text style={styles.emptySubText}>Add some recipes to your favorites to see them here</Text>
                </View>
            ) : (
                favourites.map((item) => (
                    <View key={item} style={styles.favouriteitems}>
                        <Text style={styles.favouriteitemstext}>{item}</Text>
                        <TouchableOpacity 
                            style={styles.deleteButton}
                            onPress={() => removeFromFavourites(item)}
                        >
                            <Icon name="delete" size={20} color="#fff"/>
                        </TouchableOpacity>
                    </View> 
                ))
            )}
        </View>
        <BottomBar />
        </>
    );
};

export default FavouritesPage;


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0
        
    },
    favouriteitems:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#f8f8f8",
        marginTop:10,
        marginHorizontal:15,
        paddingVertical:12,
        paddingHorizontal:15,
        borderRadius:10,
        elevation:2,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.22,
        shadowRadius:2.22
    },
    favouriteitemstext:{
        flex:1,
        fontSize:16,
        fontWeight:"500",
        color:"#333",
        marginRight:10
    },
    deleteButton:{
        backgroundColor:"#ff4757",
        borderRadius:20,
        padding:8,
        justifyContent:"center",
        alignItems:"center"
    },
    emptyContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20
    },
    emptyText:{
        fontSize:20,
        fontWeight:"600",
        color:"#666",
        marginTop:15,
        textAlign:"center"
    },
    emptySubText:{
        fontSize:14,
        color:"#999",
        marginTop:8,
        textAlign:"center",
        lineHeight:20
    }
});
