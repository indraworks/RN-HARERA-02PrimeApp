import React,{useState} from 'react'

import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export const CounterScreen = () => {
  const [counter,setCounter] = useState<number>(0)
  return (
    <View style={style.container}>
      <Text style={style.Title}>Counter: {counter}</Text>
       <TouchableOpacity 
        style={style.fabLocationL}
       onPress={()=>setCounter(counter+1)}>
            <View style={style.fab}>
              <Text style={style.fabTitle}>+1</Text>
            </View>
       </TouchableOpacity>
       <TouchableOpacity 
        style={style.fabLocationR}
       onPress={()=>setCounter(counter-1)}>
            <View style={style.fab}>
              <Text style={style.fabTitle}>-1</Text>
            </View>
       </TouchableOpacity>

    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    fab:{backgroundColor:'blue',
    width:50,
    height:50,
    borderRadius:100,
    justifyContent:'center'
     },
    Title:{textAlign:'center',fontSize:35},
    fabTitle:{color:"white",
    fontSize:24,
    alignSelf:'center',
    },
    
    fabLocationL:{position:'absolute',left:25,bottom:25},
    fabLocationR:{position:'absolute',right:25,bottom:25}
   

})