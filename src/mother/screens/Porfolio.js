import { View, Platform, Text ,StyleSheet,Button,DatePickerAndroid, TouchableOpacity,ScrollView, KeyboardAvoidingView} from 'react-native'
import React,{useState} from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Separator } from '../../components'
// import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
export default function Portfolio() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jatayat,setJatayat]= useState("")
  const [nasta, setNasta] = useState('');
  const [officeEx,setOfficeEx] = useState('');
  const [sellery,setSellery] = useState("");
  const [boosting, setBoosting] = useState('');
  const [cloth,setCloth] = useState('');
  const [btnOthers,setBtnOthers] = useState('');
  const [panjabi,setPanjabi] = useState("");
  const [ambroida,setAmbroda] = useState("");
  const [othersPanjabi,setOtherPanj]= useState('');
  const [vibid,setVibid]= useState('') 
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };
  const handleNasta = (text) => {
    setNasta(text);
  };
  const handleJatayat =(text)=>{
    setJatayat(text)
  }
  const handleOffice = (text) => {
    setOfficeEx(text);
  };
  const handleSellery = (text) => {
    setSellery(text);
  };
  const handleBooting = (text) => {
    setBoosting(text);
  };
  const handleCloth = (text) => {
    setCloth(text);
  };
  const hanldeButtonOthers = (text) => {
    setBtnOthers(text);
  };
  const hanldePanjabi = (text) => {
    setPanjabi(text);
  };
  const hanldeAmboida = (text) => {
    setAmbroda(text);
  };
  const handleOtherPan = (text) => {
    setOtherPanj(text);
  };
  const handleVivid = (text) => {
    setVibid(text);
  };


  const handleSubmit = async() => {
    // Do something with the form data, e.g., send it to a server
    // Clear the form fields
    const data = {
      date:selectedTime,
      jatayat:jatayat,
      nasta:nasta,
      sellery:sellery,
      boosting:boosting,
      btnOthers:btnOthers,
      cloth:cloth,
      panjabi:panjabi,
      ambroida:ambroida,
      othersPanjabi:othersPanjabi,
      vibid:vibid
    }
    try {
      const response = await fetch('https://deltaorders.onrender.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Order submitted successfully!');
        // Handle success, maybe show a success message to the user
      } else {
        console.log('Failed to submit order');
        // Handle error, maybe show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      // Handle network errors
    }
    console.log(data)
  
    setNasta('');
    setOfficeEx('');
    setSellery('');
    setBoosting('');
    setCloth('');
    setBtnOthers('');
    setPanjabi('');
    setAmbroda('');
    setOtherPanj('');
    setVibid('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.inner}>
      <Text style={{color:'green',fontSize:20,margin:20,textAlign:'center',marginTop:50}}>Daily Expense</Text>
      <View style={{ marginBottom: 5 }}>
      <Button title={selectedTime?selectedTime:'Sellect Time'} onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
      <TextInput
       mode="outlined"
       label="Nasta"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={nasta}
        onChangeText={handleNasta}
        keyboardType="email-address"
      />
        <TextInput
       mode="outlined"
       label="Jatayat"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={jatayat}
        onChangeText={handleJatayat}
        keyboardType="email-address"
      />

<TextInput
       mode="outlined"
       label="Office Expance"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={officeEx}
        onChangeText={handleOffice}
        keyboardType="email-address"
      />

<TextInput
       mode="outlined"
       label="Sellery"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={sellery}
        onChangeText={handleSellery}
        keyboardType="email-address"
      />

<TextInput
       mode="outlined"
       label="Boosting Expnace"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={boosting}
        onChangeText={handleBooting}
        keyboardType="email-address"
      />
 <TextInput
       mode="outlined"
       label="Cloth Buy"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={cloth}
        onChangeText={handleCloth}
        keyboardType="email-address"
      />
       <TextInput
      mode="outlined"
      label="Button + Others"
      placeholder="Type something"
      right={<TextInput.Affix text="sells" />}
      style={styles.input}
       value={btnOthers}
       onChangeText={hanldeButtonOthers}
       keyboardType="email-address"
     />
 
 <TextInput
       mode="outlined"
       label="Panjabi Seleni"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={panjabi}
        onChangeText={hanldePanjabi}
        keyboardType="email-address"
      />
  <TextInput
       mode="outlined"
       label="Ambroida Ri"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={ambroida}
        onChangeText={hanldeAmboida}
        keyboardType="email-address"
      />
  <TextInput
       mode="outlined"
       label="Ohters Panjabi"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={othersPanjabi}
        onChangeText={handleOtherPan}
        keyboardType="email-address"
      />
      <TextInput
       mode="outlined"
       label="Vibid"
       placeholder="Type something"
       right={<TextInput.Affix text="sells" />}
       style={styles.input}
        value={vibid}
        onChangeText={handleVivid}
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
