import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React from 'react'


  const Login = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>

      <View>
        <Text style={[styles.description]}>Login to your account</Text>
      </View>
      
      <View style={[styles.content]}>
        <View style={[styles.button]}>
          <TouchableOpacity
          onPress={()=>{
            // console.log("phone pressed")
              navigation.navigate('Phone')
          }}         
          >
            <TextInput
            style={{fontSize:20,textAlign:'center',paddingVertical:8}}
            placeholder='Enter Username'
            placeholderTextColor={'#000000'}
            />          
          </TouchableOpacity>
        </View>

        <View style={[styles.button]}>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Email')
          }}          
          >
            <TextInput
            style={{fontSize:20,textAlign:'center',paddingVertical:8}}
            placeholder='Enter Password'
            placeholderTextColor={'#000000'}
            />  
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignSelf:'center',width:'100%',marginStart:'60%',marginTop:'10%'}}>
        <View style={{borderWidth:2,width:'35%',height:'15%',borderRadius:20}}>
            <TouchableOpacity>
             <Text style={{fontSize:24,fontWeight:700,textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>

           
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    height:2000,
    backgroundColor: '#FAF9F6',  
  },
  title: {
    color: 'red',
    fontSize: 56,
    fontWeight:'700',
    letterSpacing:2,
    textAlign:'center',
    marginTop:40   
  },

  description: {
    color: 'black',
    fontSize:28,
    textAlign:'center',
    marginTop: 50,
    fontWeight:800
    
  },

  button: {
    borderColor:'black',
    borderWidth: 2,
    borderRadius:25,
    marginBottom: 20,
    width: 300,
    height: 50,
    alignSelf:'center'
    
  },

  option: {
    color: 'black',
    fontSize:18,
    alignSelf:'center',
    paddingVertical: 10
  },

  content: {
    verticalAlign:'bottom',
    marginTop: 120
  },



  /*Footer*/ 

  footer: {
    color:'black',
    flexDirection:'row',
    justifyContent:'center',
    verticalAlign:'bottom',
    marginTop: 240
  },

  footer1: {
    color:'black'
  },
  create: {
    color:'#FAD02E'
  },

});