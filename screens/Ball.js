
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PanResponder,
  Text,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';





const App = () => {


  
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (event,gesture) =>{
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },

      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  )[0]



  const moveBall = () =>{
      Animated.timing(value,
        {
          toValue: 50,
          duration:1000,
          useNativeDriver:false,
        }).start();
  }

  return (
    <View style={{flex:1,alignItems:'center', justifyContent:'center',}}>
  
        <Animated.View  style={{
          
          height:80,
          width:80,
          borderRadius:40,
          backgroundColor:'red',
          transform:[{translateX:pan.x}, {translateY:pan.y}]
        }
       
        }
        
        {...panResponder.panHandlers}
        >
        
        
        </Animated.View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
