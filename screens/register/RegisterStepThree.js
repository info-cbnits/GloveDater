import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';
//import Colors from '../../constants/color';

import Header from '../../components/Header';

const RegisterStepThree = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('')
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intent, _intent] = useState()

    const intens = [
        {"dating":"Dating"},
        {"travel":"Travel"},
        {"dating":"Dating"},
        {"dating":"Dating"},

    ]   
  const countryHandler = (enteredCountry) => {
    _country(enteredCountry);
};

const cityHandler = (enteredCity) => {
    _city(enteredCity);
};

const selectIntent = (enterIntent) => {
    _intent(enterIntent);
    Object.value;
  };

  React.useEffect(()=>{
    console.log(props.navigation.state.params.param.email, "+++++++props email"),
    console.log(props.navigation.state.params.param.password, "+++++++props pass"),
    console.log(props.navigation.state.params.param.gender, "+++++++props gender"),
    console.log(props.navigation.state.params.param.looking, "+++++++props looking for"),
    console.log(intens, "++++++++++++++++++++++++intens")
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password),
    _gender(props.navigation.state.params.param.gender),
    _looking(props.navigation.state.params.param.looking)

  },[])
    return(
        <View style={styles.mainbody}>
            <Header onSelect = {() =>{ props.navigation.navigate({routeName: 'RegisterTwo'});}} title="Propile" />
            <ScrollView style={rstyles.formview3}>
                <Text style={rstyles.formviewtxt}>Country</Text>
                <View style={rstyles.inputarea}>
                    <TextInput 
                    style={rstyles.inputtext} 
                    placeholder='Enter Country Name . . .'
                    onChangeText={countryHandler}
                    value={country}
                    />
                    <Image source={require('../../assets/images/delete-icon.png')} 
                    style={{width: 27, height: 30, resizeMode: 'contain'}}
                />
                </View>
                <Text style={rstyles.formviewtxt}>City</Text>
                <View style={rstyles.inputarea}>
                    <TextInput
                     onChangeText={cityHandler}
                     value={city} 
                    style={rstyles.inputtext} placeholder='Enter City Name . . .' />
                    <Image source={require('../../assets/images/delete-icon.png')} 
                    style={{width: 27, height: 30, resizeMode: 'contain'}}
                />
                </View>
                <Text style={rstyles.formviewtxt}>Intent</Text>
                <View style={rstyles.intentview}>
                    {/* {intens && (
                        {
                            intens.map(inten =>{
                                console.log(inten, "++++++++++++++++++++inten")
                                (
                                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                                        <Text style={rstyles.chktxt}>Dating</Text>
                                    </TouchableOpacity> 
                                )
                            })
                        }
                    )

                    } */}
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Dating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Travel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Experiences</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Romance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Emotional connection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>NSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>FWB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Short term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Long term</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={selectIntent} style={rstyles.intentchk}>
                        <Text style={rstyles.chktxt}>Arrangement</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity  onPress={() =>
                props.navigation.navigate('RegisterFour', {
                param: {
                    "email": email, 
                    "password": password, 
                    "gender": gender, 
                    "looking": looking,
                    "country": country,
                    "city": city,
                    "intent": intent
                    }
                })}
                style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepThree;