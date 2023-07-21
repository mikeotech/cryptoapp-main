import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconCoin2, IconSettingBlack, IconUser3 } from '../../assets'
import { HeaderBack, ListTransactionHistory } from '../../components'
import { colors } from '../../utils'

const TransactionHistory = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Recent Transaction' Icon={IconSettingBlack} onPress={() => navigation.goBack()} />
            <View style={styles.card}>
                <ListTransactionHistory image={IconUser3} text='John Wink' text2='1234 recently' />
                <ListTransactionHistory image={IconUser3} text='Jean Offman' text2='137 recently' />
                <ListTransactionHistory image={IconUser3} text='John Martin' text2='137 recently' />
                <ListTransactionHistory image={IconCoin2} text='Jack @Coinbase' text2='2137 recently' />
                <ListTransactionHistory image={IconUser3} text='Julia Heinz' text2='137 recently' />
            </View>
        </SafeAreaView>
    )
}

export default TransactionHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    card: {
        backgroundColor: colors.grey3,
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 24
    }
})