import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Display} from '../utils';
import {Fonts, Colors} from '../contents';;

const WelcomeCard = ({title, content, image}) => {
  let imager ={ uri: 'https://restaumatic-production.imgix.net/uploads/restaurants/275281/logo/1689151634.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=500&w=500'};

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imager} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    fontSize: 22,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  contentText: {
    fontSize: 18,
    // fontFamily: Fonts.POPPINS_BOLD,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default WelcomeCard;