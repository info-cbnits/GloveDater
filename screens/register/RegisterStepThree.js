import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../constants/globalstyle';
import rstyles from '../rstyles';

import Header from '../../components/Header';

const RegisterStepThree = props => {

    const [email, _email] = useState('');
    const [password, _password] = useState('');
    const [User_name, _User_name] = useState('');
    const [gender, _gender] = useState('');
    const [looking, _looking] = useState('');
    const [country, _country] = useState('');
    const [city, _city] = useState('');
    const [intentArr, _intentArr] = useState([])
    const intens = [
        {"name":"dating","value":"Dating"},
        {"name":"travel","value":"Travel"},
        {"name":"experiences","value":"Experiences"},
        {"name":"romance","value":"Romance"},
        {"name":"emotional","value":"Emotional"},
        {"name":"open","value":"Open"},
        {"name":"nsa","value":"NSA"},
        {"name":"fwb","value":"FWB"},
        {"name":"shortterm","value":"Short term"},
        {"name":"longterm","value":"Longterm"},
        {"name":"arrangement","value":"Arrangement"},
    ]


  const countryHandler = (enteredCountry) => {
    _country(enteredCountry);
};

const cityHandler = (enteredCity) => {
    _city(enteredCity);
};

const selectIntent = (enterIntent) => {   
    if(intentArr.indexOf(enterIntent) === -1)  {
        _intentArr([...intentArr, enterIntent])
        
    } else{
        console.log(enterIntent, "====enterIntent")
        var index = intentArr.indexOf(enterIntent)
        console.log(index)
        if (index !== -1) {
            intentArr.splice(index, 1);
           // _intentArr(intentArr)
        }
    }
    
    console.log(intentArr, "+++++++++++++intent");

  };

  React.useEffect(()=>{
    console.log(props.navigation.state.params.param.gender, "+++++++props gender"),
    console.log(props.navigation.state.params.param.looking, "+++++++props looking for"),
    _email(props.navigation.state.params.param.email),
    _password(props.navigation.state.params.param.password),
    _User_name(props.navigation.state.params.param.User_name),
    _gender(props.navigation.state.params.param.gender),
    _looking(props.navigation.state.params.param.looking)

  },[])

 
    return (
        <View style={styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'RegisterTwo' }); }} title="Profile" />
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
                        style={{ width: 27, height: 30, resizeMode: 'contain' }}
                    />
                </View>
                <Text style={rstyles.formviewtxt}>City</Text>
                <View style={rstyles.inputarea}>
                    <TextInput
                        onChangeText={cityHandler}
                        value={city}
                        style={rstyles.inputtext} placeholder='Enter City Name . . .' />
                    <Image source={require('../../assets/images/delete-icon.png')}
                        style={{ width: 27, height: 30, resizeMode: 'contain' }}
                    />
                </View>
                <Text style={rstyles.formviewtxt}>Intent</Text>
                <View style={rstyles.intentview}>
                    {intens &&
                        intens.map(inten =>
                            <TouchableOpacity key={inten.name} onPress={() => selectIntent(inten.name)} style={intentArr.find(el => el === inten.name) ? rstyles.intentChecked : rstyles.intentchk}>
                                <Text style={intentArr.find(el => el === inten.name) ? rstyles.chktxted : rstyles.chktxt}>{inten.value}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ScrollView>
            <View style={rstyles.btnview}>
                <TouchableOpacity onPress={() =>
                    props.navigation.navigate('RegisterFour', {
                        param: {
                            "email": email,
                            "password": password,
                            "User_name": User_name,
                            "gender": gender,
                            "looking": looking,
                            "country": country,
                            "city": city,
                            "intentArr": intentArr
                        }
                    })
                }
                    style={rstyles.btncontainer2}>
                    <Text style={rstyles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterStepThree;