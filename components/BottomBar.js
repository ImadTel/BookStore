import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import List from '../screens/List';
import Books from '../screens/Books';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor:"#5abd8c"}} 
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#5abd8c"
      

      
      >


      <Tab.Screen name="Home" component={Books}    
         options={{
            tabBarLabel:"",
             tabBarIcon: ({ color }) => (
            <Icon name="home" color={"white"} size={28} />
          ),
        }}  />

      <Tab.Screen name="Search" component={List}
                       options={{
                        tabBarLabel:"",
                        tabBarIcon: ({ color }) => (
                          <Icon name="search" color={"white"} size={28} />
                        ),
                      }} 
               />


      <Tab.Screen name="Wish list" component={List}
                     options={{
                        tabBarLabel:"",
                        tabBarIcon: ({ color }) => (
                          <Icon name="menu" color={"white"} size={28} />
                        ),
                      }} 
        
      />
      
      <Tab.Screen name="cart" component={List}
                     options={{
                        tabBarLabel:"",
                        tabBarIcon: ({ color }) => (
                          <Icon name="shopping-cart" color={"white"} size={28} />
                        ),
                      }} 
        
      />
      
    </Tab.Navigator> 
  )
}

export default BottomBar

const styles = StyleSheet.create({})