import React from 'react'
import { Carousel } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import FoodTypes from '../../components/FoodTypes'
import QuickFood from '../../components/QuickFood'
import ManuItem from '../../components/ManuItem'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export default function Home() {
const data = [
  {
      id:"0",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi",
      name:"Meghana Foods",
      rating:4.4,
      time:"30-40",
      adress:"Residency Road, Ashok Nagar",
      ratings:"1k",
      cost_for_two:500,
      cuisines:"north Indian, South Indian",
      menu:[
          {
              id:"20",
              name:"Recommended",
              items:[
                  {
                      id:"101",
                      name:"Paneer 65",
                      price:275,
                      description:"E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)",
                      rating:4.1,
                      ratings:43,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
                      veg:true,
                      bestSeller:false,
                      quantity:1,
                  },
                  {
                      id:"102",
                      name:"Chilly Chicken (Boneless)",
                      price:285,
                      description:"E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
                      rating:4.3,
                      ratings:34,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
                      veg:false,
                      bestSeller:true,
                      quantity:1,
                  },
                  {
                      id:"103",
                      name:"Spl Veg Biryani",
                      price:250,
                      description:"E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
                      rating:4.5,
                      ratings:56,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
                      veg:true,
                      bestSeller:false,
                      quantity:1,
                  },
                  {
                      id:"104",
                      name:"Chilly Paneer",
                      price:220,
                      description:"E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
                      rating:3.8,
                      ratings:22,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
                      veg:true,
                      bestSeller:true,
                      quantity:1,
                  },
                  {
                      id:"105",
                      name:"Chicken 65",
                      price:300,
                      description:"E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
                      rating:4.5,
                      ratings:45,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
                      veg:false,
                      bestSeller:true,
                      quantity:1,
                  }
              ]
          },
          {
              id:"11",
              name:"Rice",
              items:[
                  {
                      id:"201",
                      name:"Chicken Fried Rice",
                      price:260,
                      description:"E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
                      rating:4.3,
                      ratings:34,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
                      veg:false,
                      bestSeller:true,
                  },
                  {
                      id:"202",
                      name:"Egg Fried Rice",
                      price:220,
                      description:"E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
                      rating:4.3,
                      ratings:52,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
                      veg:false,
                      bestSeller:false,
                  },
                  {
                      id:"203",
                      name:"Veg Fried Rice",
                      price:190,
                      description:"E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
                      rating:4.6,
                      ratings:56,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
                      veg:true,
                      bestSeller:true,
                  },
                  {
                      id:"204",
                      name:"Jeera Rice",
                      price:195,
                      description:"E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
                      rating:4.5,
                      ratings:48,
                      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
                      veg:true,
                      bestSeller:false,
                  }
              ]
          }
      ]
  },
  {
      id:"1",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/lvxyt7qdchtmzh8telc2",
      name:"Beijing Bites",
      rating:4.2,
      time:"30-40",
      adress:"Richmond Town, Ashok Nagar ",
      ratings:"500",
      cost_for_two:450,
      cuisines:"north Indian, South Indian"

  },
  {
      id:"2",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/pbtwdcg4rcktb89hrxbc",
      name:"Behrouz Biriyani",
      rating:4.3,
      time:"45-50",
      adress:"Residency Road, Shantinagar",
      ratings:"100",
      cost_for_two:430,
      cuisines:"north Indian, South Indian"

  }
]
  return (
    <ScrollView style={{ marginTop: 50 }}>
    {/* Search Bar  */}
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: "#C0C0C0",
        borderRadius: 7,
      }}
    >
      <TextInput
        style={{ fontSize: 17 }}
        placeholder="Search for Restaurant item or more"
      />
      <AntDesign name="search1" size={24} color="#E52B50" />
    </View>

    {/* Image slider Component */}
    <Carousel />

    {/* Food Item Types */}
    <FoodTypes />

    {/* Quick Food Component */}
    <QuickFood />

    {/* Filter buttons */}
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          width:120,
          justifyContent: "center",
        }}
      >
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
      </Pressable>

      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          width:120
        }}
      >
        <Text>Sort By Rating</Text>
       
      </Pressable>

      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Sort By Price</Text>
       
      </Pressable>
    </View>
    {data.map((item,index) => (
      <ManuItem key={index} item={item}/>
    ))}
  </ScrollView>
  )
}