import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Prices() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Prices</Text>
      <TextInput
        style={{ fontSize: 17 }}
        placeholder="Search for Restaurant item or more"
      />
    </View>
  )
}


const styles = StyleSheet.create({
   continue:{
    fontSize:20,
    borderRadius:10,
    backgroundColor:'green'
   }
})

