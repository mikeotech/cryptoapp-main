import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconBitcoin, IconETH, IconTether, IconUSDC } from '../../assets'
import { Gap, HeaderBack, ListCoin } from '../../components'
import { colors } from '../../utils'

const CurrencyChoiceFull = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Send Money' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={styles.text}>Choose the currency and the wallet from where to send to</Text>
                    <Gap height={24} />
                    <Text style={styles.text}>Warm Wallet</Text>
                    <Gap height={4} />
                    <ListCoin image={IconBitcoin} name='Bitcoin' value1='00.6 BTC' value2='1657.57' />
                    <ListCoin image={IconETH} name='Ethereum' value1='00.6 ETH' value2='1657.57' />
                    <ListCoin image={IconUSDC} name='USDC' value1='00.6 USDC' value2='1657.57' />
                    <Gap height={12} />
                    <Text style={styles.text}>Cold Wallet</Text>
                    <Gap height={4} />
                    <ListCoin image={IconBitcoin} name='Bitcoin' value1='00.6 BTC' value2='1657.57' />
                    <ListCoin image={IconETH} name='Ethereum' value1='00.6 ETH' value2='1657.57' />
                    <ListCoin image={IconUSDC} name='USDC' value1='00.6 USDC' value2='1657.57' />
                    <ListCoin image={IconTether} name='USDC' value1='00.6 USDC' value2='1657.57' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CurrencyChoiceFull

const styles = StyleSheet.create({
    text: {
        color: colors.grey,
        fontSize: 14,
        
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
        paddingHorizontal: 24
    }
})