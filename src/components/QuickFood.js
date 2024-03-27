import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  

const QuickFood = () => {
    const data =  [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/w1rrow27w3vb3ur5xbi9",
            name:"McDonald's",
            rating:4.3,
            time:"30-40",
            offer:"50%"
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ch07avzpos83wrfdfhyh",
            name:"Special Biriyani",
            rating:3.8,
            time:"30-40",
            offer:"60%"
    
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hiezygiuixjqjogg6w2b",
            name:"Hyderabadi Bawarchi",
            rating:4.1,
            time:"25-35",
            offer:"55%",
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/q391dhemwszg9orhgldh",
            name:"Calofornia Burrito",
            rating:4.5,
            time:"20-30",
            offer:"30%"
        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ei26sjhizcjrk9gmjy5r",
            name:"udupi Utsav",
            rating:4.3,
            time:"30-40",
            offer:"60%"
        }
    ]
  return (
    <View style={{ margin: 10 }}>
    <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <Pressable style={{ margin: 10 }} key={index}>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          >
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: 27,
                fontWeight: "900",
                color: "white",
              }}
            >
              {item.offer} OFF
            </Text>
          </ImageBackground>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
            {item.name}
          </Text>
          <View style={{flexDirection:"row",alignItems:"center",marginTop:3}}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.rating}</Text>
            <Text style={{marginLeft:3}}>•</Text>
            <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.time}mins</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  </View>
  )
}

export default QuickFood