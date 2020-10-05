// Mahesh
//01/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';0

export default function Screen5() {
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Enrollment Request Form
            </Text>
                    </View>

                    <View>
                        <Text style={{ color: '#909090', fontSize: 12, marginLeft: 80 }}>Date</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 220, borderColor: '#95989A', borderRadius: 5, alignSelf: 'center' }}>
                            <TextInput />
                        </View>
                    </View>

                    
                    <View style={{ flexDirection: 'row', padding: 20, alignSelf: 'center' }}>

                        <TouchableOpacity>
                            <Text style={styles.button_upload}>
                            <Icon name="file" size={30}  color="#FEEE0A"/>
                                Upload Your Photo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 10 }}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold' }}>To</Text>
                        <Text style={{}}>The President</Text>
                        <Text style={{}}>Rapid Technologies Pvt Ltd</Text>
                        <Text style={{}}>Warangal</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Subject :</Text>
                            <Text style={{ marginLeft: 10 }}>Request to enroll as a member in your Corporation</Text>
                        </View>
                        <Text>Sir,</Text>
                        <Text style={{ left: 30 }}>I would like to join as a member in your organisation</Text>
                        <Text style={{ left: 60 }}>I am ready to pay the accumulated share </Text>
                        <Text >amount along with joining fee(if any) as one time/(. ) installments.</Text>
                        <Text style={{ left: 30 }}>I will abide to the rules laid by your corporation.</Text>
                        <Text style={{ left: 100 }}>I am introduced by your existing </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 60 }}>
                            <Text style={{ top: 10 }}>Member Name:</Text>
                            <TextInput style={{ borderWidth: 1, width: 150, borderRadius: 5, borderColor: '#95989A', left: 10 }} />
                        </View>
                        <Text style={{ left: 30 }}>of your corporation. </Text>
                        <Text style={{ left: 60, marginTop: 10 }}>I request to give an opportunity to join</Text>
                        <Text style={{ left: 60 }}>as a member in your corporation.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#5CC5E4' }}>Introducer Details</Text>
                        <Text style={{ color: '#5CC5E4' }}>Joining Member Details</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Signature</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Signature</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Father/Husband</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Father/Husband</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Address</Text>
                            <View style={{ borderWidth: 1, height: 70, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Address</Text>
                            <View style={{ borderWidth: 1, height: 70, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Conatct Number</Text>
                            <View style={{ borderWidth: 1,flexDirection:'row', height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                            <Icon name="phone" size={30} style={{top:8,left:5}} color="#FEEE0A"/>
                            <TextInput placeholder="95025577525" />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Conatct Number</Text>
                            <View style={{ borderWidth: 1,flexDirection:'row', height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                            <Icon name="phone" size={30} style={{top:8,left:5}} color="#FEEE0A"/>
                            <TextInput placeholder="95025577525" />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Aadhar Number</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Aadhar Number</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 143, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput />
                            </View>
                        </View>
                    </View>
                    













                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                        <View style={{ marginRight: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#02ACE6', marginTop: 10 }}>
                                    Cancel
            </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 60 }}>
                            <TouchableOpacity>
                                <Text style={styles.button}>
                                    Submit
            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        alignItems: "center",
        width: 270,
        alignSelf: 'center'
    },
    button: {
        color: 'white',
        padding: 15,
        borderRadius: 5,
        paddingLeft: 50,
        // bottom: 20,
        borderColor: 'black',
        width: 150,
        backgroundColor: '#02ACE6'
    },
    button_upload:
    {
        color: '#909090',
        padding: 8,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#95989A',
        // paddingLeft: 50,
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});



