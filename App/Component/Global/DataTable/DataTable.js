import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react';
import DataTable, { COL_TYPES, Row, Column } from 'react-native-datatable-component';
import { mdscale } from '../../../PixelRatio';
import { COLORS } from '../../../Constant/Colors';
import { Container, Header, Content, Button, } from 'native-base';

const DataTableShow = () => {

    const [data, setData] = useState([
        {
            select: false,
            branchName: 'Sanatikari', groupCode: 'FHAJ1123456',
            oldGroupCode: 12345678, monthelyTargetsavingsAmount: 200,
            numberofMember: 10,
            status: 'Active'
        },

        {
            select: false,
            branchName: 'Sanatikari', groupCode: 'FHAJ1123456',
            oldGroupCode: 12345678, monthelyTargetsavingsAmount: 200,
            numberofMember: 10,
            status: 'Action'
        },

        {
            select: false,
            branchName: 'Sanatikari', groupCode: 'FHAJ1123456',
            oldGroupCode: 12345678, monthelyTargetsavingsAmount: 200,
            numberofMember: 10,
            status: 'Active'
        },

        {
            select: false,
            branchName: 'Sanatikari', groupCode: 'FHAJ1123456',
            oldGroupCode: 12345678, monthelyTargetsavingsAmount: 200,
            numberofMember: 10,
            status: 'Active'
        },

    ]);





    const Action = () => {
        return (

            <Text>Click Me!</Text>

        )
    }

    const nameOfCols = ['Select', 'branchName',
        'groupCode', 'oldGroupCode', 'monthelyTargetsavingsAmount', 'numberofMember', 'status'];




    return (
        <ScrollView
            horizontal={true}
            style={{
                height: mdscale(300),
                width: '95%',
                alignSelf: 'center',
                borderRadius: 8,


            }}>
            <DataTable
                onRowSelect={Action}
                // onRowSelect={(row) => {
                //     return (
                //         <Text>Hello</Text>
                //     )
                // }}
                data={data}
                colNames={nameOfCols}
                noOfPages={1}
                backgroundColor={'#ffffff'}

                colSettings={[{ name: 'Select', type: COL_TYPES.CHECK_BOX, width: 55 },
                { name: 'branchName', type: COL_TYPES.STRING, width: 90 },
                { name: 'monthelyTargetsavingsAmount', type: COL_TYPES.INT, width: 90 },
                { name: 'numberofMember', type: COL_TYPES.INT, width: 90 },
                { name: 'status', width: 120, },

                ]}

                headerLabelStyle={{
                    color: '#000000', fontSize: 12, fontWeight: 'bold',
                    marginBotton: 10, marginLeft: 20, textAlign: 'center'

                }}
            />
        </ScrollView>
    )
}

export default DataTableShow

