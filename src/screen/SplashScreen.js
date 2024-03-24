import { View, Text ,TextInput,StyleSheet,StatusBar,Image} from 'react-native'
import React,{useEffect} from 'react'
import { Colors,Fonts } from '../contents';
import { Display } from '../utils';


export default function SplashScreen({navigation}) {
useEffect(()=>{
    setTimeout(() => { navigation.navigate('Welcome')
  }, 3000);
})
let imager ={ uri: 'https://restaumatic-production.imgix.net/uploads/restaurants/275281/logo/1689151634.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=500&w=500'};

  return (
    <View style={styles.container}>
           <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
        <Image source={imager} resizeMode="contain" style={styles.image} />
        <Text style={styles.titleText}>FooDelivery</Text>
     
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors.DEFAULT_GREEN,
     
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        // fontFamily: Fonts.POPPINS_LIGHT,
       
    
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60),
      },
  });