import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { Gap, HeaderBack } from '../../components'
import { IconBitcoin, IconSettingBlack } from '../../assets'
import { fonts } from '../../utils/fonts'

const TransactionDetail = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Transaction Detail' Icon={IconSettingBlack} onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 24, flex: 1 }}>
                    <View style={styles.card}>
                        <Text style={styles.text}>Bitcoin</Text>
                        <Image source={IconBitcoin} style={{ width: 24, height: 24, borderRadius: 12 }} />
                    </View>
                    <View style={styles.card2}>
                        <Text style={styles.text2}>0.18712946 BTC</Text>
                        <Text style={styles.text3}>$6,849</Text>
                        <Gap height={8}/>
                        <Text style={styles.text5}>This transaction was first broadcast to the Bitcoin network on May 20, 2022 at 12:29 AM GMT+4. The transaction currently has 14 confirmations on the network. At the time of this transaction, 0.00110671 BTC was sent with a value of $33.22</Text>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.text5}>From</Text>
                                <Text style={styles.text6}>bc1qq</Text>
                            </View>
                            <View>
                                <Text style={styles.text5}>0.1871 BTC</Text>
                                <Text style={styles.text4}>$6,598.61</Text>
                            </View>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.text5}>To</Text>
                                <Text style={styles.text6}>bc1qq</Text>
                            </View>
                            <View>
                                <Text style={styles.text5}>0.1871 BTC</Text>
                                <Text style={styles.text4}>$6,598.61</Text>
                            </View>
                        </View>
                        <View style={styles.border} />
                        <Text style={styles.text5}>Fee</Text>
                        <Text style={styles.text6}>$2.35</Text>
                    </View>
                    <Gap height={24} />
                    <View style={styles.card}>
                        <Text style={styles.text}>Det</Text>
                    </View>
                    <View style={styles.card2}>
                        <View style={styles.row}>
                            <Text style={styles.text5}>Hash</Text>
                            <Text style={styles.text4}>6,598.61</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Status</Text>
                            <Text style={styles.text4}>Confirmed</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Received Time</Text>
                            <Text style={styles.text4}>2022-05-20 00:29</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Size</Text>
                            <Text style={styles.text4}>224 bytes</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Weight</Text>
                            <Text style={styles.text4}>566</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Include in Block</Text>
                            <Text style={styles.text4}>737085</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Confirmation</Text>
                            <Text style={styles.text4}>14</Text>
                        </View>
                        <View style={styles.border} />
                        <View style={styles.row}>
                            <Text style={styles.text5}>Total Input</Text>
                            <Text style={styles.text4}>598.61 BTC</Text>
                        </View>
                        <Gap height={24}/>
                        <TouchableOpacity>
                            <Text style={styles.text4}>See more detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TransactionDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    text: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.primary[600]
    },
    text2: {
        fontSize: 32,
        color: colors.black,
        fontFamily: fonts.primary[800]
    },
    text3: {
        fontSize: 18,
        color: colors.black2,
        fontFamily: fonts.primary[400],
        lineHeight: 24
    },
    text4: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[600],
    },
    text5: {
        fontSize: 16,
        color: colors.black2,
        fontFamily: fonts.primary[400],
    },
    text6: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[400],
    },
    card: {
        borderWidth: 1,
        borderColor: colors.grey2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        justifyContent: 'space-between'
    },
    card2: {
        borderWidth: 1,
        borderColor: colors.grey2,
        padding: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    border: {
        backgroundColor: colors.grey2,
        height: 1,
        marginVertical: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})