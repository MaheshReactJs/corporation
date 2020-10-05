// Mahesh
//02/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Screen9() {
    this.state = {
        tableHead: ['S.No', 'Name','Loan Amount'],
        tableData: [
            ['01', 'Mahesh','1200'],
            ['02', 'Ramesh','1200'],
           
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
                        <Text style={{ fontSize:12, color: '#B4A6A6' }}>
                        Loans request For The Month
            </Text>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#95989A'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} style={styles.head2} textStyle={styles.text} />
                        </Table>
                       
                    </View>
                    <View style={{marginTop:20}}><Text style={{color:'#02ABE5', fontSize:18, alignSelf:'center'}}>Loan Sanctioning</Text></View>

                    <View style={{marginTop:20}}><Text style={{color:'#02ABE5', fontSize:18}}>Click here once</Text></View>

                    <View style={{marginTop:20}}><Text style={{color:'#02ABE5', fontSize:14}}>The following will be displayed :</Text></View>

                  
                <View style={{marginTop:20}}>
                    
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Acc.No</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="123456"></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Name</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="Mahesh"></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Gender</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="Male"></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Amount Required</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="1200"></TextInput>
                    </View>
                   
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>For Month</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="05/2020"></TextInput>
                    </View>
                  
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>No of Months</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="24"></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Mobile Number</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}} placeholder="123456"></TextInput>
                    </View>
                   
                 </View>


                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                       
                 <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity>
                                <Text style={styles.button}>
                                    Approve
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#02ACE6', marginTop: 10 }}>
                                   Reject
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
        width:120
    },
    
     view_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
   

});



