// Mahesh
//02/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Screen11() {
    this.state = {
        tableHead: ['Date', 'R.No', 'Inst No', 'Dr','Cr', 'Bal'],
        tableData: [
            ['01', '01', '01','02','120','120'],

        ]
    };
    const state = this.state;
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>

                <View>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Member Ledger
            </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Account Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                        <View style={{ marginLeft: 10, top: 8 }}><Icon name="user" size={30} color="#FEEE0A" /></View>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Address</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Mobile Number</Text>
                        <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <View style={{ marginLeft: 10, top: 8 }}><Icon name="phone" size={30} color="#FEEE0A" /></View>
                            <TextInput style={{ width: '100%' }} />
                        </View>
                    </View>

                    
                    <View style={{ paddingTop: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#95989A' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} style={styles.head2} textStyle={styles.text} />
                        </Table>

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
    container2: { flex: 1, padding: 16, paddingTop: 30 },
    head: { height: 50 },
    head2: { height: 50 },
    text: { margin: 6 },
    text_View: {
        marginTop: 5,
        fontSize: 14,
        // fontWeight: 'bold',
        width: 120
    },

    view_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },


});



