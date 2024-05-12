import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View,Animated , Dimensions, ScrollView} from 'react-native'
import React, { useRef } from 'react'
import { BOOKS } from '../assets/Data'
import Card from '../components/Card'
import BestSeller from '../components/BestSeller'

import Circle from '../assets/images/Circle.svg'

import Icon from 'react-native-vector-icons/MaterialIcons'

const {height,width} =  Dimensions.get('screen');

const Books = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const Item_Size = width*0.45;
    const Spacer_Size = (width-Item_Size) /2
  return (
       <ScrollView      style={{  zIndex:0,  }}>
            <StatusBar  hidden />
            <View style={{height:35,width:"90%",  flexDirection:'row', alignItems:'center',justifyContent:'space-between',
                marginTop:40,zIndex:0, marginBottom:10 }}> 
                <Text style ={{color:'white', fontSize:24}}> Our Top Picks  </Text>
                <TouchableOpacity  >
                    <Text ><Icon name='menu' size={30} color="white" /></Text>
                </TouchableOpacity>
           </View> 

      <Animated.FlatList   
      data={BOOKS}

      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX} } }],
        { useNativeDriver: true }
      )} 
      keyExtractor={ item => item.id}
      renderItem = {({item,index}) =>{ 

      const translateY = scrollX.interpolate(
            {
                inputRange:[Item_Size*(index-2),Item_Size*(index-1),Item_Size*(index)],
                outputRange:[0,-50,0]
            }
        )
        
        if(!item?.image) return <View style={{width:Spacer_Size,}}></View>
         return   <Card book={item} width={Item_Size} translateY={{translateY}}  />
      }}
      horizontal
      showsHorizontalScrollIndicator= {false}
      contentContainerStyle={{paddingTop:50}}
      />
      <View style={{marginTop:20}}>
        <Text style={{fontSize:24, color:'black',fontWeight:'bold', marginLeft:20,marginVertical:20}}>Bestsellers </Text>
      <BestSeller  />
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center',top:-180,zIndex:-1,position:'absolute'}}> 
            <Circle   />
        </View>
    </ScrollView>
  )
}

export default Books;

const styles = StyleSheet.create({})
