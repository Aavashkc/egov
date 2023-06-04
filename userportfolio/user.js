import React,{Component} from 'react';
import {View , ScrollView, TouchableHeight, TouchableOpacity,Image,Text} from 'react-native';


const  User = () => {
  return (
    <View>
                <ScrollView>
                    <View style={{padding:10 ,width:'100%',backgroundColor: '#000',height :200}}>
            <TouchableOpacity>
                <Image source={require('../pic/black.jpg')} style={{ width:30, height:30}}></Image>
            <View></View>
            <View></View>
            </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../pic/userp.jpg')} style={{width:140 , height:140,borderRadius:100,marginTop:-70}}></Image>
                   <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>Username</Text>
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:5,
                        marginTop: 20
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Age</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>
                    Gender
                    </Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:5,
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Height='20'</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Weight</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Race</Text>
                        
                    </View>
                    <View style={{
                        alignSelf:'center',
                        flexDirection: 'row',
                        padding:5,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        paddingBottom:10,
                        
                        marginTop: 5,
                        marginBottom:40
                        }}>
                    <Text style={{fontSize:20,padding:10,justifyContent:'center'}}>Contact</Text>
                        
                    </View>
                </ScrollView>
            </View>
        )
  
}


export default  User;