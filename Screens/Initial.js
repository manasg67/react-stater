import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const App = () => {
  const Navigation = useNavigation()
  return (
    <SafeAreaView style={{height:'100%',backgroundColor:'#ede7e1'}}>
      <ScrollView style={{height:'100%',backgroundColor:'#ede7e1'}}>
        <View style={{marginTop:'5%',alignSelf:'center'}} >
          <View> 
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/2203/2203124.png'}}
            style={{height:300,width:320}}
            />
          </View>
          <View>
            <Text style={{fontSize:34,textAlign:'center',fontWeight:800}}>
              India's #1 Surplus Food Management App
            </Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'10%'}}>
            <View style={[styles.container]}>
              <TouchableOpacity
              onPress={()=>{Navigation.navigate('Provider')}}
              >
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/2989/2989545.png'}}
                style={{height:65,width:65,marginTop:'8%',marginStart:'7%'}}
                />
                <Text style={{fontSize:21,fontWeight:700,}}>Provider</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.container]}>
              <TouchableOpacity
               onPress={()=>{Navigation.navigate('Provider')}}
              >
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/5890/5890966.png'}}
                style={{height:65,width:65,marginStart:'15%',marginTop:'8%'}}
                />
                <Text style={{fontSize:21,fontWeight:700}}>Consumer</Text>
              </TouchableOpacity>
            </View>

          </View>

            

          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    height:'110%',
    width:'30%',
    borderRadius:10,
    backgroundColor:'#fff',
    alignItems:'center',
  }
})
