// Mahesh
//02/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Screen11() {
    this.state = {
        tableHead: ['S.No', 'Receipt No','Acc.No','Name','Amount'],
        tableData: [
            ['01', '011', '001', 'Mahesh', '1000'],
            ['01', '011', '001', 'Mahesh', '1000'],

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
                        <Text style={{ fontSize: 12, color: '#B4A6A6' }}>
                            Collection Sheet For The Month
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10, top: 8 }}><Icon name="caret-down" size={30} color="#A7A7A7" /></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>From date</Text>
                            <View style={{ borderWidth: 1, width: 117, height:38, borderRadius: 5, borderColor: '#95989A' }}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={{backgroundColor:'#F3F3F3',top:15, borderWidth: 1, width: 44, height:38, borderRadius: 5, borderColor: '#95989A' }}>
                             <TouchableOpacity>
                             <View style={{ marginLeft: 10, top: 3 }}><Icon name="caret-down" size={30} color="#A7A7A7" /></View>
                             </TouchableOpacity>
                            </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>To date</Text>
                            <View style={{ borderWidth: 1, width: 117, height:38, borderRadius: 5, borderColor: '#95989A' }}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={{ backgroundColor:'#F3F3F3',top:15, borderWidth: 1, width: 44, height:38, borderRadius: 5, borderColor: '#95989A' }}>
                             <TouchableOpacity>
                             <View style={{ marginLeft: 10, top: 3 }}><Icon name="caret-down" size={30} color="#A7A7A7" /></View>
                             </TouchableOpacity>
                            </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#95989A' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} style={styles.head2} textStyle={styles.text} />
                        </Table>

                    </View>

                    <View style={{ marginTop: 20 }}><Text style={{ color: '#02ABE5', fontSize: 18 }}>Click here once</Text></View>

                    <View style={{ marginTop: 20 }}><Text style={{ color: '#02ABE5', fontSize: 14 }}>The following will be displayed :</Text></View>


                    <View style={{ marginTop: 20 }}>

                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Acc.No</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="123456"></TextInput>
                        </View>
                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Name</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="Mahesh"></TextInput>
                        </View>
                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Amount Paid</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="Male"></TextInput>
                        </View>
                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Loan Amount</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="1200"></TextInput>
                        </View>

                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Loan Installment</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="05/2020"></TextInput>
                        </View>

                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>For Month</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="24"></TextInput>
                        </View>
                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Receipt Date</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="24"></TextInput>
                        </View>
                        <View style={styles.view_1}>
                            <Text style={styles.text_View}>Mobile Number</Text>
                            <Text style={styles.text_View}>:</Text>
                            <TextInput style={{ width: 110 }} placeholder="123456"></TextInput>
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

        alignSelf: 'center'
    },
    container2: { flex: 1, padding: 16, paddingTop: 30 },
    head: { height: 50 },
    head2: { height: 50 },
    text: { margin: 6, fontSize:14 },
    text_View: {
        marginTop: 5,
        fontSize: 14,
        // fontWeight: 'bold',
        width:120
    },
    view_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
});



