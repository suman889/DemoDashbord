import {
    StyleSheet, Text, View,
    Pressable, TextInput, ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Header from '../../Component/Global/Header';
import SchreenHeader from '../../Component/Global/SereenHeader';
import { COLORS } from '../../Constant/Colors';
import { vrscale, mdscale } from '../../PixelRatio';

import { Picker } from '@react-native-picker/picker';
import { Radio } from 'native-base';

const AddMember = () => {

    const DropwownMenu = () => {
        const [selectedLanguage, setSelectedLanguage] = useState();
        return (

            <Picker
                style={{
                    width: '100%',
                    color: "#000000",
                }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>

                <Picker.Item label="All" value="All"
                    style={{ fontFamily: 'Poppins-Regular', }} />
                <Picker.Item label="Kolkata" value="jan" />
                <Picker.Item label="Mumbai" value="feb" />
                <Picker.Item label="Malda" value="js" />
                <Picker.Item label="Kalyani" value="js" />

            </Picker>

        );

    }

    const PlaceDropwownMenu = () => {
        const [place, setPlace] = useState();
        return (

            <Picker
                style={{
                    width: '100%',
                    color: "#000000",
                }}
                selectedValue={place}
                onValueChange={(itemValue, itemIndex) =>
                    setPlace(itemValue)
                }>

                <Picker.Item label="Westbangal" value="All"
                    style={{ fontFamily: 'Poppins-Regular', }} />
                <Picker.Item label="Punjab" value="jan" />
                <Picker.Item label="Karnataka" value="feb" />
                <Picker.Item label="Assam" value="js" />
                <Picker.Item label="Odisha" value="js" />

            </Picker>

        );

    }

    const EducationDropwown = () => {
        const [education, setEducation] = useState();
        return (

            <Picker
                style={{
                    width: '100%',
                    color: "#000000",
                }}
                selectedValue={education}
                onValueChange={(itemValue, itemIndex) =>
                    setEducation(itemValue)
                }>

                <Picker.Item label="B.A" value="All"
                    style={{ fontFamily: 'Poppins-Regular', }} />
                <Picker.Item label="B.Com" value="jan" />
                <Picker.Item label="Arts" value="feb" />
                <Picker.Item label="B.Sc" value="js" />
                <Picker.Item label="Deploma" value="js" />

            </Picker>

        );

    }

    const SkillDropwown = () => {
        const [skill, setSkill] = useState();
        return (

            <Picker
                style={{
                    width: '100%',
                    color: "#000000",
                }}
                selectedValue={skill}
                onValueChange={(itemValue, itemIndex) =>
                    setSkill(itemValue)
                }>

                <Picker.Item label="Medium Skill" value="All"
                    style={{ fontFamily: 'Poppins-Regular', }} />
                <Picker.Item label="High Skill" value="jan" />
                <Picker.Item label="NaN" value="feb" />
                <Picker.Item label="Modarate" value="js" />


            </Picker>

        );

    }




    return (
        <View style={{ flex: 1, backgroundColor: COLORS.thimColor }}>
            <SchreenHeader />

            <ScrollView>

                <Text style={{
                    color: '#000000',
                    fontSize: 16,
                    marginTop: 10,
                    marginLeft: 10
                }}> Add Member </Text>


                <View style={styles.card}>
                    {/**Picker */}
                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Branch Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Old Member Code */}
                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Old Member Code</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Old Group Code"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Full Name */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Full Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>
                    {/**radio Button

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Gender</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            marginLeft: 10, marginTop: 10,
                            flexDirection: 'row', marginRight: mdscale(40)
                        }}>

                            <Radio selected={true} />
                            <Text style={{
                                color: "#3C3C3C",
                                fontSize: mdscale(14), paddingLeft: 4, fontFamily: "Poppins-Medium"
                            }}>Male</Text>

                        </View>

                        <View style={{
                            marginLeft: 10, marginTop: 10,
                            flexDirection: 'row', marginRight: mdscale(40)
                        }}>

                            <Radio selected={false} color="#9C9C9C" />
                            <Text style={{
                                color: "#3C3C3C",
                                fontSize: mdscale(14), paddingLeft: 4, fontFamily: "Poppins-Medium"
                            }}>Female</Text>

                        </View>
                    </View> */}


                    {/**Husband's / Guardian's Name */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Husband's / Guardian's Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Husband's / Guardian's Name"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**  Address*/}
                    <Text style={{
                        color: '#000000',
                        marginVertical: 10, fontSize: 14,
                    }}> Address</Text>
                    <View style={styles.inputBoxP}>
                        <TextInput
                            placeholder=" Address"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**State & Dirstic Picker */}

                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>State Name</Text>

                        <View style={styles.picker}>
                            <PlaceDropwownMenu />
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>District Name</Text>

                        <View style={styles.picker}>
                            <DropwownMenu />
                        </View>
                    </View>

                    {/**Bank Name */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Bank Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Bank Name"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Gram Panchayat Name */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Gram Panchayat Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Gram Panchayat Name"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Date of Birth*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Date of Birth</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="16-10-2023"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/***Education And Skil Picker */}

                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Education Level</Text>

                        <View style={styles.picker}>
                            <EducationDropwown />
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Skill Category</Text>

                        <View style={styles.picker}>
                            <SkillDropwown />
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        //backgroundColor: 'green'
                    }}>

                        <Text style={{
                            color: '#000000',
                            marginTop: 10, fontSize: 14
                        }}>Skill Level</Text>

                        <View style={styles.picker}>
                            <SkillDropwown />
                        </View>
                    </View>



                    {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ##############*/}


                    {/*Mobile No. */}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Mobile No.</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Mobile No."
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>

                    {/**Aadhar No.*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Aadhar No.</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Aadhar No."
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>


                    {/**Job Card No.*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Job Card No.</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Job Card No."
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>




                    {/**No. of Household Member*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>No. of Household Member</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="No. of Household Member"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**No. of Children*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>No. of Children</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="No. of Children"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**Current Monthly Income*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Current Monthly Income</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Current Monthly Income"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/*Family Land Area*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Family Land Area</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Family Land Area"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**House Type*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>House Type</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="House Type"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**No. of Rooms*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>No. of Rooms</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="No. of Rooms"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**Bank Account No.*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>Bank Account No.</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="Bank Account No."
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>



                    {/**IFSC Code*/}

                    <Text style={{
                        color: '#000000',
                        marginTop: 10, fontSize: 14
                    }}>IFSC Code</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            placeholder="IFSC Code"
                            placeholderTextColor="#c1c1c1"
                            style={{
                                //fontWeight: 'bold',
                                color: "#000000",
                                width: mdscale(200),
                            }}
                        />

                    </View>




                    {/**button */}

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginTop: 10, marginBottom: 20,
                        marginLeft: '44%',
                        flex: 1

                    }}>

                        <Pressable

                            style={{

                                backgroundColor: COLORS.buttonViewColor,

                                width: 80,
                                height: 40, borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}> Submit</Text>
                        </Pressable>

                        <Pressable

                            style={{

                                backgroundColor: "#c82333",

                                marginLeft: 10,
                                width: 80,
                                height: 40, borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ color: '#ffffff', fontSize: 15 }}>Cancel</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default AddMember

const styles = StyleSheet.create({

    card: {
        width: '95%',
        backgroundColor: COLORS.thimColor,
        borderRadius: 8, marginTop: vrscale(20),
        elevation: 5,
        alignSelf: 'center',
        paddingHorizontal: mdscale(15),
        marginBottom: 10
    },

    picker: {
        height: vrscale(30), width: mdscale(305), backgroundColor: '#FFFFFF',
        justifyContent: 'center', borderRadius: 3, borderColor: COLORS.grayColor,
        borderWidth: 0.5,
        marginTop: 10,
    },
    inputBox: {
        backgroundColor: '#ffffff',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        marginTop: 10,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },

    inputBoxT: {
        backgroundColor: 'white',

        height: vrscale(35), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },

    inputBoxP: {
        backgroundColor: '#ffffff',

        height: vrscale(55), width: mdscale(305),
        borderRadius: 4,
        //alignItems: 'center',
        paddingStart: mdscale(15),
        borderColor: COLORS.grayColor,
        borderWidth: 0.5
    },
})