import { ImageBackground, Platform, StatusBar, StyleSheet, Text, TextInput, View,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const changeScreen = useNavigation();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  const handleLogin = async() => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if(!storedUser) {
         alert('Error','No User Found. Please Register');
          return
        }

        const parsedUser = JSON.parse(storedUser);
        if(email === parsedUser.email && password === parsedUser.password) {
         alert('Success', 'Logged in successfully');
         changeScreen.navigate("MainDrawer");
         console.log("data is getted")
        } else {
        alert('Error', "Invalid Credentials");
        }
      } catch (error) {
        alert(error)
      }
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/pizza.png")} 
      resizeMode='cover'
      style={{flex:1,width:"100%",height:"100%"}}>
          <View style={{flex:1, justifyContent:"center",alignItems:"center",}}>
            <View style={{backgroundColor:"#000",justifyContent:"center",alignItems:"center",borderRadius:25,width:280,height:320}}
            >

            <Text style={{color:"white",fontSize:28,fontWeight:"900"}}>Login</Text>
            {/* <Text style={{color:"white",}}>Name:</Text>        */}
                <TextInput 
                placeholder='Enter your email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}/>

                 <TextInput 
                placeholder='Enter your Password'
                value={password}
                onChangeText={setPassword}
                style={styles.input}/>

                    {/* <View style={{marginLeft:140,marginTop:8}}> 
                      <TouchableOpacity>
                    <Text style={{color:"red",}}>Forgot Password</Text>
                    </TouchableOpacity>
                    </View> */}
                  
            <TouchableOpacity style={{width:140,height:50,backgroundColor:"#25AE87",justifyContent:"center", alignItems:"center",borderRadius:10,marginTop:15}} onPress={handleLogin} >
              <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight:"900"}}>Login</Text>
            </TouchableOpacity>

            <View style={{flexDirection:"row",marginTop:10}}>
            <Text style={{color:"white",fontSize:16,fontWeight:600,}}>Didn't have an account {"  "}</Text>
            <TouchableOpacity onPress={()=>changeScreen.navigate("Register")}>
              <Text style={{fontSize:16,color:"red",fontWeight:600,}}>Sign Up</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  input:{
    backgroundColor:"white",width:230,height:40,borderRadius:10, marginTop:20, padding:12,
  }
})