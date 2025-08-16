import { StyleSheet, Text, View,Platform,StatusBar, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StarterScreen = () => {
  const ChangeScreen = useNavigation();

  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/pizza.png")}
        resizeMode='cover' 
        style={{
          flex:1,
          width:"100%",
          height:"100%"
        }}>
          <View style={{flex:1,marginTop:570}}>
            
            
            <Text style={{color:"white",fontSize:27,fontWeight:"800",textAlign:"center"}}>Cook Like a Chef</Text>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white",fontWeight:"500"}}>Taste Taker is a user-friendly app designed</Text>
            <Text style={{color:"white",fontWeight:"500"}}>for those who are new to cooking and want to</Text>
            <Text style={{color:"white",fontWeight:"500"}}>try new recipes at home</Text>
          </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity style={{ width:200,height:60,backgroundColor:"#25AE87", justifyContent:"center",alignItems:"center",borderRadius:15, marginTop:24}} onPress={()=>ChangeScreen.navigate("Login")}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ width:200,height:60,backgroundColor:"#f4511e", justifyContent:"center",alignItems:"center",borderRadius:15, marginTop:16}} onPress={()=>ChangeScreen.navigate("MainDrawer")}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Go to App</Text>
          </TouchableOpacity>
          </View>


          </View>
          


        </ImageBackground>
    </View>
  )
}

export default StarterScreen

const styles = StyleSheet.create({
     container:{
            flex: 1,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})