import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconBitcoin, IconCopy, IconDown, IconEuro, IconFire, IconLeftWhite, IconQR, IconSetting } from '../../assets'
import { Button, Gap } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const Receive = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={[colors.blue2, colors.blue3]} style={styles.header}>
                <View style={styles.headerChild}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={IconLeftWhite} />
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Image source={IconFire} />
                        <Gap width={4} />
                        <Text style={styles.text}>Warm Wallet</Text>
                        <Gap width={4} />
                        <Image source={IconDown} />
                    </View>
                    <TouchableOpacity>
                        <Image source={IconSetting} style={styles.image2} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', alignSelf: 'center', padding: 12 }}>
                    <View style={styles.row}>
                        <Image source={IconEuro} style={styles.image} />
                        <Text style={styles.text2}>391.09</Text>
                    </View>
                    <Text style={styles.text3}>Total Balance</Text>
                </View>
            </LinearGradient>
            <View style={{ marginTop: -12, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: colors.white, flex: 1, padding: 24 }}>
                <Text style={styles.text4}>Receive Money</Text>
                <Gap height={24} />
                <Image source={IconQR} style={styles.image3} />
                <Gap height={24} />
                <View style={styles.card}>
                    <View style={styles.headerChild}>
                        <Text style={styles.text5}>Assets</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Image source={IconBitcoin} />
                            <Gap width={8} />
                            <Text style={styles.text4}>Bitcoin</Text>
                        </View>
                        <View style={{ width: 12, height: 12, borderWidth: 1 }} />
                    </View>
                    <View style={{ marginVertical: 12, width: '100%', backgroundColor: colors.grey, height: 1 }} />
                    <View style={styles.headerChild}>
                        <Text style={styles.text5}>Address</Text>
                        <View style={[styles.headerChild, { flex: 1 }]}>
                            <Text style={styles.text4}>bc1qxy</Text>
                            <Gap width={8} />
                            <TouchableOpacity>
                                <Image source={IconCopy} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
                <Button text='Share BTC Address' backColor={colors.blue} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        padding: 24,
        backgroundColor: colors.blue
    },
    headerChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 16
    },
    text2: {
        color: colors.white,
        fontSize: 46,
        fontFamily: fonts.primary[800]
    },
    text3: {
        color: colors.white,
        fontSize: 14
    },
    text4: {
        color: colors.black,
        fontSize: 18,
        fontFamily: fonts.primary[700]
    },
    text5: {
        color: colors.black,
        fontSize: 14,
        fontFamily: fonts.primary[500],
        width: 70
    },
    image3: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    image2: {
        width: 36,
        height: 36,
        resizeMode: 'contain'
    },
    card: {
        backgroundColor: colors.grey2,
        padding: 12,
        borderRadius: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 36,
        height: 36,
        resizeMode: 'contain'
    },
})

export default Receive