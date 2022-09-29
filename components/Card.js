import { Dimensions, StyleSheet, Text, View, Image,Animated } from 'react-native'
import React from 'react'


const {height,width} =  Dimensions.get('screen');



const Card = ({book,translateY,width}) => {

  return (
    <Animated.View style={{height:330,width ,flex:1,alignItems:'center',     transform:[translateY],borderRadius:10,
    justifyContent:'flex-start', paddingHorizontal:10, zIndex:1,
   
    }} >
        <View  style={{height:'70%', width:"100%",marginTop:10, borderRadius:20,  marginBottom:15 }}>
                <Image  source={book.image} resizeMode="cover" style={{height:'100%', width:"100%",marginTop:10,borderRadius:20, }}    />
        </View>
       <View style={{padding:5,width:"95%"}}>
        <Text numberOfLines={2} style={{fontSize:16, textAlign:'center',color:'black',fontWeight:'600'}}>{book.title}</Text>
        <Text style={{ fontSize:14,textAlign:'center',color:'black',fontWeight:'400'}}>{book.author}</Text>
        
       </View>
      
    </Animated.View>
  )
}

export default Card

const styles = StyleSheet.create({})