import { View, Text,StyleSheet ,  TextInput,
    TouchableOpacity,
    Image,
    Alert,
  } from 'react-native'
  import React, { useState } from 'react'
  import {Colors, Fonts} from '../contents';
  import {Display} from '../utils';
  import { FontAwesome5 } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  import { MaterialIcons } from '@expo/vector-icons';
  import { StatusBar } from 'expo-status-bar';
  import { Separator } from '../components';

  import { Ionicons } from '@expo/vector-icons';
  
  
  const SigninScreen = ({navigation}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const signIn = async () => {
      console.log('button click')
    }
    let facebook ={ uri: 'data:image/png;base64,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'};
    let google ={ uri: 'data:image/jpeg;base64,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'};

    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
      <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />  
            <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome to Loundry </Text>
      <Text style={styles.content}>
        Enter your username and password, and enjoy ordering food
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
        <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
        <MaterialIcons name="password" size={24} color="black" />
          <TextInput
            secureTextEntry={isPasswordShow ? false : true}
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setPassword(text)}
          />
       <AntDesign name="eye" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          {/* <ToggleButton size={0.5} /> */}
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password
        </Text>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => signIn()}
        activeOpacity={0.8}>
        
          <Text style={styles.signinButtonText}>Sign In</Text>
    
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('Plear')}>
          Sign Up
        </Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image  source={facebook} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
            Connect with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={google} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
    )
  }
  
  
  
  const styles = StyleSheet.create({ 
      container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
      },
      title: {
        fontSize: 29,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
      },
      content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
      },
      inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 10,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
      },
      forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      rememberMeText: {
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD,
      },
      signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      signupContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
      },
      orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center',
      },
      facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      signinButtonLogo: {
        height: 18,
        width: 18,
      },
      signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 25,
      },
      socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      socialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      errorMessage: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        color: Colors.DEFAULT_RED,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginHorizontal: 20,
        marginTop: 3,
        marginBottom: 10,
      },
    });
  export default SigninScreen