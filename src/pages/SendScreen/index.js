import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconEnter, IconScan, IconSettingBlack, IconUser } from '../../assets'
import { Gap, HeaderBack, ListRecent, ListSend } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const SendScreen = () => {
    const [datarecent, setdatarecent] = useState([
        {
            id: 1,
            name: 'Charles Parrish',
            image: IconUser
        },
        {
            id: 2,
            name: 'Bella Smith',
            image: IconUser
        },
        {
            id: 1,
            name: 'Coinbase',
            image: IconUser
        },
    ])
    const [datasend, setdatasend] = useState([
        {
            id: 1,
            name: 'Bella Smith',
            image: IconUser,
        },
        {
            id: 2,
            name: 'Charles Parrish',
            image: IconUser,
        },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Send ($currency) to' Icon={IconSettingBlack} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder='Paste address, scan or search' />
                        <TouchableOpacity>
                            <Image source={IconEnter} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={IconScan} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.list}>
                    <ListRecent data={datarecent} />
                    <Gap height={24} />
                    {/* <ListSend data={datasend}/> */}
                    <View style={styles.card}>
                        <Text style={styles.text}>A</Text>
                    </View>
                    <Gap height={12} />
                    <View style={styles.card2}>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Andrew Black</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Anna Anderson</Text>
                        </TouchableOpacity>
                    </View>
                    <Gap height={12} />
                    <View style={styles.card}>
                        <Text style={styles.text}>B</Text>
                    </View>
                    <Gap height={12} />
                    <View style={styles.card2}>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Broke Brown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Bella Smith</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Ben Willams</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row2}>
                            <Image source={IconUser} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>Ector Sanchez</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SendScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
        paddingHorizontal: 24
    },
    input: {
        height: 48,
        borderRadius: 25,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: colors.white,
        padding: 12,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black,
        width: '76%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    list: {
        padding: 24
    },
    card: {
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.grey3,
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    card2: {
        borderRadius: 16,
        backgroundColor: colors.grey3,
        justifyContent: 'center',
        padding: 12
    },
    text: {
        fontSize: 14,
        color: colors.grey,
        fontFamily: fonts.primary[600]
    },
    text2: {
        fontSize: 14,
        color: colors.black2,
        fontFamily: fonts.primary[400]
    },
})