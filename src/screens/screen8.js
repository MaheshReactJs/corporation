// Mahesh
//02/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Screen8() {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 80 }}>

                    <View>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Loan Application Form
            </Text>
                    </View>


                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Account Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <TextInput />
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Male" value="11" />
                                    <Picker.Item label="Female" value="12" />
                                </Picker>
                            </View>
                        </View>
                    </View>


                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Amount Required</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Number of months</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="15" value="1" />
                                    <Picker.Item label="20" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>For Month</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="06/2020" value="11" />
                                    <Picker.Item label="07/2020" value="12" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Conatct Details</Text>
                        <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <View style={{ marginLeft: 10, top: 8 }}><Icon name="phone" size={30} color="#A7A7A7" /></View>
                            <TextInput style={{ width: '100%' }} />
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
        alignItems: "center"
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
        padding: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#95989A',
        // paddingLeft: 50,
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});

