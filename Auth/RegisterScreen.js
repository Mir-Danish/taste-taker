import { StyleSheet, Text, View,ImageBackground,Platform,StatusBar,TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const changeScreen = useNavigation();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("")

  const handleRegister = async() => {
    if(!name || !email || !password) {
    alert("Error", "Please fill all fields");
      return
    }

    try {
      const user = {name,email,password};
      await AsyncStorage.setItem('user', JSON.stringify(user));
      alert('Success', 'Registered Successfully');
      changeScreen.navigate("Login");
      console.log("data is saved")
    } catch (error) {
      alert("Error","Failed to register")
    }
  };

  

  return (
    <View style={styles.container}>
      <ImageBackground
            source={require("../assets/pizza.png")}
              resizeMode="cover"
              style={{flex:1,width:"100%",height:"100%"}}
            >

              <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <View style={{backgroundColor:"#000",justifyContent:"center",alignItems:"center",borderRadius:25,width:300,height:400}}>
                 

                    <Text style={{color:"white",fontSize:28,fontWeight:"900"}}>Sign Up</Text>
                                    <TextInput 
                                    placeholder='Enter your name'
                                    value={name}
                                    onChangeText={setName}
                                    style={styles.input}/>

                        
                                    <TextInput 
                                    placeholder='Enter your email'
                                    value={email}
                                    onChangeText={setEmail}
              style={styles.input}/>

                                    {/* <TextInput 
                  placeholder='Enter your name'
                                    value={phone}
                                    onChangeText={setPhone}
                                    style={styles.input}/> */}


                                    <TextInput 
                                    placeholder='Enter your password'
                                    value={password}
                  onChangeText={setPassword}
                                    style={styles.input}/>


                        <TouchableOpacity style={{width:140,height:50,backgroundColor:"#25AE87",justifyContent:"center", alignItems:"center",borderRadius:10,marginTop:15}} onPress={handleRegister}>
                                      <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight:"900"}}>Sign Up</Text>
                     </TouchableOpacity>
                                    <View style={{flexDirection:"row",marginTop:10}}>
                                   <Text style={{color:"white",fontSize:16,fontWeight:600,}}>Already have an account {" "}</Text>
                                                <TouchableOpacity onPress={()=>changeScreen.navigate("Login")}>
                                                  <Text style={{fontSize:16,color:"red",fontWeight:600,}}>Login</Text>
                                                </TouchableOpacity>
                                                </View>



                 </View>
              </View>
                
              
            </ImageBackground>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  input:{
    backgroundColor:"white",width:230,height:40,borderRadius:10, marginTop:20, padding:12,
  }
})