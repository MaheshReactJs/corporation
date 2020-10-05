// Mahesh
//02/10/2020

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Screen7() {
    this.state = {
        tableHead: ['S.No', 'Name', 'Ac.No','Total Amt'],
        tableData: [
            ['01', 'Mahesh', '001','1200'],
            ['02', 'Ramesh', '002','1200'],
           
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
                        Oustanding List For The Month Of June2020
            </Text>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#95989A'}}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} style={styles.head2} textStyle={styles.text} />
                        </Table>
                        <View style={{borderWidth:1,borderTopWidth:0, borderColor:'#95989A', height:40}}><Text style={{marginLeft:200}}>Total : 2400</Text></View>
                    </View>
                    <View style={{marginTop:20}}><Text style={{color:'#02ABE5', fontSize:18}}>Click here once</Text></View>

                    <View style={{marginTop:20}}><Text style={{color:'#02ABE5', fontSize:14}}>The following will be displayed :</Text></View>

                    {/* <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color:'#95989A', fontSize:12}}>S.No </Text>
                        <View style={{width:20}}><Text style={{color:'#95989A', fontSize:12}}>: </Text></View>
                        
                        <Text style={{color:'#95989A', fontSize:12}}>01 </Text>
                    </View> */}

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>S.No</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Ac.No</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Name of the Member</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Share Paid</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Share Due</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                   
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Loan Issued</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                  
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Loan paid</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>loan due</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Loan Amount</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{width:110}}></TextInput>
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



