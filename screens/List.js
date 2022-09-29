import * as React from 'react';
import { StatusBar, FlatList, Image, Text, View, Dimensions, StyleSheet, Animated } from 'react-native';
const { width, height } = Dimensions.get('screen');

import {faker} from '@faker-js/faker';
import { useRef } from 'react'; 





const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE +  3* SPACING ;



const ListHeader = () => <View style={{height:60, 
width:"100%", flex:1,flexDirection:'row',backgroundColor:'#574680',opacity:.7,
  marginBottom:SPACING/2,
 }}>
  

</View>













const List = () => {
  
const scrollY  = useRef(new Animated.Value(0)).current;



faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
       
        key: i,
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
        name: faker.name.fullName(),
        image: `https://randomuser.me/api/portraits/women/${faker.random.numeric(2)}.jpg`,
    };
});


const BG_Image = 'https://images.pexels.com/photos/1076607/pexels-photo-1076607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';





    return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
         <StatusBar backgroundColor={'#574680'}  translucent={true}     />
      <Image  source={{uri:BG_Image}}   style={StyleSheet.absoluteFillObject}  blurRadius={70} /> 

        <Animated.FlatList   
        data={DATA}
        
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
         
         ListHeaderComponent = {
          <ListHeader />
         }

         
        keyExtractor = {(item) => item.key }
        // contentContainerStyle={{paddingTop:StatusBar.currentHeight || 40    }}
        renderItem = {({item,index}) =>{
           
            const threshold = Math.round( height/ITEM_SIZE);
     
            const opacity = scrollY.interpolate(
              {
                inputRange:[-1,0,ITEM_SIZE * index, ITEM_SIZE*(index+.7)],
                outputRange:[1,1,1,0],
              }
            )
            
            const inputRange = [ -1,0, ITEM_SIZE * index, ITEM_SIZE*(index+1)] ;
            const scale3 = scrollY.interpolate(
            { inputRange:inputRange, 
              outputRange:[1,1,1,0],}
          );
           
         

           const  checkIndex = ()=>  {
            if (index>=threshold-1) {
               const scale = scrollY.interpolate(
                {
                  inputRange :  [0,ITEM_SIZE*(index+1-threshold),ITEM_SIZE*(index+2.2-threshold), ITEM_SIZE*(index+2.3-threshold), ITEM_SIZE * index, ITEM_SIZE*(index+1)],
                  outputRange:[0,0,1,1,1,0]
                }
               );
               return {scale}

            }   

             else  {
              const scale = scrollY.interpolate(
                {
                  inputRange:[ -1,0, ITEM_SIZE * index, ITEM_SIZE*(index+1)], 
                  outputRange:[1,1,1,0],
                }
              )
              return {scale}
             }
           }

         
         
             
       
           
            
    
          
          return(
          <Animated.View  style={[{flexDirection:'row', alignItems:'center' , marginHorizontal:SPACING/2, 
          borderRadius:SPACING-2,backgroundColor:'rgba(255,255,255,0.9)',marginBottom:SPACING,padding:SPACING,
          //  ios only shadowColor:"#000", shadowOffset:{ width:0,height:10} ,  shadowOpacity:0.3 , shadowRadius:20, 
          transform:(index>=threshold-1)?[checkIndex()] :[checkIndex()],
          elevation:7,
          opacity,
       

         }] }>

              <Image source={{uri:item.image}} 
               style= {{height:AVATAR_SIZE,width:AVATAR_SIZE,borderRadius:AVATAR_SIZE ,marginRight:SPACING/2}}     />

               <View style={{ flex:1}}>
                      <Text style={{fontSize:18,fontWeight:'700', color:'black',}}  >{item.name}</Text>
                      <Text   numberOfLines={1}    style={{fontSize:14,opacity:.8, color:'black'}}>{item.jobTitle}</Text>
                      <Text  numberOfLines={1}  style={{fontSize:14,opacity:.8, color:'grey'}}>{item.email}</Text>
                     
               </View>
          </Animated.View>)} } 
        
        
        />
    </View>)
}


export default List;