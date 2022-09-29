import { StyleSheet, Text, View ,FlatList, Image, Dimensions} from 'react-native'
import React from 'react'
import { BESTSELLER } from '../assets/Data'
import Rating from './Rating'


const {height,width} = Dimensions.get('screen')


const Card = ({item}) =>{

    

    return (
        <View style= {{
            height:360,
            width:width*0.40,
            flex:1,
            alignItems:'flex-start',
            marginHorizontal:15
        }}>

            <Image source={item.image} resizeMode='cover' style={{width:"100%", height:250, borderRadius:12,marginBottom:10,}} />
            <View  style={{height:80,marginBottom:5, flex:1,justifyContent:'flex-start',alignItems:'flex-start',}}>
                
                    <Text numberOfLines={2}  style= {{fontSize:15,fontWeight:'500',color:'black'}}>{item.title}</Text>
                    <Text style= {{fontSize:14,fontWeight:'400',color:'black'}}>by {item.author}</Text>
                    <Rating  rating= {item.rating} /> 
              
                
              
            </View>

        </View>
    )
}











const BestSeller = () => {
  return (
    <View>
       <FlatList 
        data={BESTSELLER}
        keyExtractor={ item =>item.id}
        horizontal
        contentContainerStyle={{paddingHorizontal:15}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
            return <Card item={item} />
        }}

       />
    </View>
  )
}

export default BestSeller

const styles = StyleSheet.create({})