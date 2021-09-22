import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../constants/globalstyle';
import hometabstyles from "./hometabstyles";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Ionicons } from '@expo/vector-icons';
import aboutstyle from "./aboutstyle";

const HomeAbout = props => {
    return (
        <View style={Styles.mainbody}>
            <Header onSelect={() => { props.navigation.navigate({ routeName: 'Home' }); }} title="About Me" />
            <View style={hometabstyles.mainarea}>
                <View style={hometabstyles.tabarea}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Home' });
                        }}
                        style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={hometabstyles.tabselect}>
                        <Text style={hometabstyles.tabselecttxt}>About</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Homeexp' });
                        }}
                         style={hometabstyles.tabs}>
                        <Text style={hometabstyles.tabtext}>Experiences</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={Styles.pb50, Styles.mv20}>
                    <View style={aboutstyle.infobox}>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Age:</Text>
                            <Text style={aboutstyle.infovalue}>25</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Body:</Text>
                            <Text style={aboutstyle.infovalue}>Tall</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Height:</Text>
                            <Text style={aboutstyle.infovalue}>165 cm</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Ethnicity:</Text>
                            <Text style={aboutstyle.infovalue}>Cool</Text>
                        </View>
                        <View style={aboutstyle.info}>
                            <Text style={aboutstyle.infotitle}>Intent</Text>
                            <Text style={aboutstyle.infovalue}>Open</Text>
                        </View>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.title}>About Me</Text>
                    <Text style={Styles.mt10,Styles.bodytext}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                        </Text>
                    </View>
                    <View style={aboutstyle.infoarea}>
                        <Text style={Styles.title}>Looking For</Text>
                        <Text style={Styles.mt10, Styles.bodytext}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                        </Text>
                    </View>
                    <View style={Styles.spacediv}></View>
                </ScrollView>
            </View>
            <Footer />
        </View>

    );
};

export default HomeAbout;