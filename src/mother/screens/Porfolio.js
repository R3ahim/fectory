import { View, Platform, Text ,StyleSheet,Button, TouchableOpacity,ScrollView, KeyboardAvoidingView} from 'react-native'
import React,{useState} from 'react'
import { Separator } from '../../components'
// import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
export default function Portfolio() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Do something with the form data, e.g., send it to a server
    console.log('Form submitted:', { name, email, message });
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.inner}>
      <Text style={{color:'green',fontSize:20,margin:20,textAlign:'center',marginTop:50}}>Daily Expense</Text>
      <TextInput
       mode="outlined"
       label="Outlined input"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
        <TextInput
       mode="outlined"
       label="Outlined input"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
 
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
 
 <TextInput
       mode="outlined"
       label="Outlined input"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
  <TextInput
       mode="outlined"
       label="Outlined input"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
 
      <TextInput
        style={styles.input}
        label={"Out Link INput"}
        mode='outlined'
        placeholder="Out Link INput"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <TextInput
       mode="outlined"
       label="Outlined input"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
 
    
 
 
   <View style={styles.buttonContainer}>
    
   <TouchableOpacity
          style={styles.gettingStartedButton}
          ode="contained"
          activeOpacity={0.8}
          onPress={handleSubmit}>
          <Text style={styles.gettingStartedButtonText}>Submit</Text>
        </TouchableOpacity>
   </View>
    </View>
    </ScrollView>
        </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50, // Add padding bottom to avoid button being hidden by keyboard
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
 
    marginBottom: 10,
  },
  gettingStartedButton:{
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonContainer: {
    marginBottom: 40,
    alignSelf: 'center',
  },
  gettingStartedButtonText:{
    fontSize: 20,
    color:'white',
    lineHeight: 20 * 1.4,
  }
});
