import { View, Text, TextInput, StyleSheet, ScrollView ,} from 'react-native';
import React from 'react'
import { DataTable } from 'react-native-paper';

export default function Prices() {
  return (
    <View style={{flex: 1,marginTop:60}}>

      <View>
      <ScrollView horizontal>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
        <DataTable.Title numeric>Weight</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
        <DataTable.Title numeric>Weight</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
        <DataTable.Title numeric>Weight</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell numeric>35</DataTable.Cell>
        <DataTable.Cell numeric>180</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Jane</DataTable.Cell>
        <DataTable.Cell numeric>28</DataTable.Cell>
        <DataTable.Cell numeric>150</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView>
  </View>
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

