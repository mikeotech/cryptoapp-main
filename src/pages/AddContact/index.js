import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IconBitcoin, IconETH, IconSettingBlack } from '../../assets'
import { Button, Gap, HeaderBack, ListContact } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const AddContact = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack Icon={IconSettingBlack} onPress={() => navigation.goBack()} />
            <View style={{ marginHorizontal: 24, flex: 1, marginBottom: 24 }}>
                <Text style={styles.text}>Add Contact</Text>
                <Gap height={24} />
                <Text style={styles.text2}>My Kraken Account</Text>
                <Gap height={12} />
                <View style={styles.content}>
                    <ListContact Icon={IconBitcoin} text='BTC' text2='Bitcoin wallet address' text3='fd701d3b26fe50da75be32bdba8c7df471ffob2397bece6b25bcef6eeafaa1885'/>
                    <View style={{ height: 0.3, width: '100%', backgroundColor: colors.grey4 }} />
                    <ListContact Icon={IconETH} text='ETH' text2='Ethereum wallet address' text3='0xa36ec7202D3fd32180573ABFF939f04B39BAf20d'/>
                </View>
                <View style={{ flex: 1 }} />
                <Button text='Add a new wallet address' backColor={colors.blue} />
            </View>
        </SafeAreaView>
    )
}

export default AddContact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    text: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.primary[800]
    },
    text2: {
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.primary[700]
    },
    content: {
        backgroundColor: colors.grey3,
        padding: 12,
        borderRadius: 12,
    }
})