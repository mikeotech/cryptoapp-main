import React, { useState } from 'react'
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconApe, IconBitcoin, IconCoin, IconDown, IconEthereum, IconEuro, IconExpand, IconFire, IconHeadset, IconKey, IconPlus, IconReload, IconRight, IconSetting, IconUSDC, IconUser, IconUser2, IconUser3, IconUser4 } from '../../assets'
import { Gap, ListActivity, ListCoin } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const MainPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [warmWallet, setWarmWallet] = useState(false);
    const [coldWallet, setColdWallet] = useState(false);

    const goWarmWallet = () => {
        setWarmWallet(true)
        setColdWallet(false)
    }

    const goColdWallet = () => {
        setWarmWallet(false)
        setColdWallet(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={[colors.blue2, colors.blue3]} style={styles.header}>
                <View style={styles.headerChild}>
                    <TouchableOpacity>
                        <Image source={IconHeadset} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row} onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={IconFire} />
                        <Gap width={4} />
                        <Text style={styles.text}>Warm Wallet</Text>
                        <Gap width={4} />
                        <Image source={IconDown} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={IconSetting} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', alignSelf: 'center', padding: 12 }}>
                    <View style={styles.row}>
                        <Image source={IconEuro} style={styles.image} />
                        <Text style={styles.text2}>2088.77</Text>
                    </View>
                    <Text style={styles.text3}>Total Balance</Text>
                </View>
            </LinearGradient>
            <View style={{ marginTop: -12, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: colors.white, flex: 1 }}>
                <View style={[styles.headerChild, { padding: 24 }]}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonTop} onPress={() => navigation.navigate('Receive')}>
                            <Image source={IconPlus} style={styles.imageButton} />
                        </TouchableOpacity>
                        <Text style={[styles.text4, { marginTop: 2 }]}>Receive</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonTop} onPress={() => navigation.navigate('CurrencyChoiceFull')}>
                            <Image source={IconRight} style={styles.imageButton} />
                        </TouchableOpacity>
                        <Text style={[styles.text4, { marginTop: 2 }]}>Send</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonTop}>
                            <Image source={IconCoin} style={styles.imageButton} />
                        </TouchableOpacity>
                        <Text style={[styles.text4, { marginTop: 2 }]}>Buy</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonTop}>
                            <Image source={IconReload} style={styles.imageButton} />
                        </TouchableOpacity>
                        <Text style={[styles.text4, { marginTop: 2 }]}>Transfer</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={[styles.text4, { marginBottom: 4 }]}>Portfolio</Text>
                        <ListCoin image={IconBitcoin} name='Bitcoin' value1='00.6 BTC' value2='1657.57' />
                        <ListCoin image={IconEthereum} name='Ethereum' value1='00.6 ETH' value2='1657.57' />
                        <ListCoin image={IconUSDC} name='USDC' value1='00.6 USDC' value2='1657.57' />
                        <ListCoin image={IconApe} name='NFT' value1='#2365 Some cool NFT' />
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', paddingHorizontal: 24, paddingVertical: 12 }}>
                        <Image source={IconExpand} style={styles.image2} />
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={[styles.text4, { marginBottom: 4 }]}>Activity</Text>
                        <ListActivity image={IconUser3} name='Carolyn Kayle' value1='23 Feb' value2='1657.57' value3='+ 0.12' />
                        <ListActivity image={IconUser} name='John Farrow' value1='11 Feb' value2='1657.57' value3='+ 0.127' />
                        <ListActivity image={IconUser2} name='Coinbase' value1='01 Feb' value2='1657.57' value3='+ 0.12' />
                        <ListActivity image={IconUser4} name='Carolyn Kayle' value1='23 Feb' value2='1657.57' value3='+ 0.12' />
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() =>
                        setModalVisible(!modalVisible)
                    }>
                    <View style={styles.centeredView}>
                        <TouchableOpacity style={styles.modalView} onPress={goWarmWallet}>
                            <Image source={IconFire} style={styles.image} />
                            <Gap width={4} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.modalText}>Warm Wallet</Text>
                                <Text style={styles.modalText2}>Day to day spending wallet</Text>
                            </View>
                            <Gap width={4} />
                            <View style={styles.whiteIn}>
                                <View style={warmWallet ? styles.blackIn : styles.blueIn} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalView} onPress={goColdWallet}>
                            <Image source={IconKey} style={styles.image} />
                            <Gap width={4} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.modalText}>Cold Wallet</Text>
                                <Text style={styles.modalText2}>More secure wallet suitable for larger amounts of money</Text>
                            </View>
                            <Gap width={4} />
                            <View style={styles.whiteIn}>
                                <View style={coldWallet ? styles.blackIn : styles.blueIn} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
        paddingHorizontal: 24,
        paddingBottom: 24,
        paddingTop: 12,
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
        fontSize: 16,
        fontFamily: fonts.primary[400]
    },
    text2: {
        color: colors.white,
        fontSize: 46,
        fontFamily: fonts.primary[800]
    },
    text3: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.primary[400]
    },
    text4: {
        color: colors.black,
        fontSize: 14
    },
    buttonTop: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 36,
        height: 36,
        resizeMode: 'contain'
    },
    image2: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    imageButton: {
        height: 40,
        width: 40
    },
    centeredView: {
        flex: 1,
        backgroundColor: colors.white2,
        paddingHorizontal: 24,
        paddingVertical: 12,
        justifyContent: 'flex-end'
    },
    modalView: {
        backgroundColor: colors.blue,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        padding: 12
    },
    modalText: {
        fontSize: 16,
        fontFamily: fonts.primary[800],
        color: colors.white
    },
    modalText2: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.white,
        maxWidth: '90%'
    },
    whiteIn: {
        width: 24,
        height: 24,
        borderRadius: 16,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blackIn: {
        width: 12,
        height: 12,
        borderRadius: 16,
        backgroundColor: colors.black
    },
    blueIn: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: colors.blue
    }
})

export default MainPage