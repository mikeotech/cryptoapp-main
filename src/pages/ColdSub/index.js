import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, HeaderBack } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const ColdSub = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack onPress={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <View style={styles.cardTop}>
                        <Text style={styles.text}>Welcome to URWallet`s cold storage area. You are currently not subscribed to this service</Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <Text style={styles.text2}>What do subscribers enjoy?</Text>
                        <Text style={styles.text3}>- A higher level of security</Text>
                        <Text style={styles.text3}>- Lower transaction fees</Text>
                        <Text style={styles.text3}>- Enhanced AI Anti-Fraud detection</Text>
                        <Text style={styles.text3}>- Priority customer support</Text>
                        <Gap height={12}/>
                        <Text style={styles.text2}>How much does it cost?</Text>
                        <Text style={styles.text3}>- 3/month billed annually</Text>
                        <Gap height={12}/>
                        <Text style={styles.text2}>Who do you care?</Text>
                        <Text style={styles.text3}>- Cryptocurrency is an amazing technologi and it is essential to have the highest level of security to secure your funds</Text>
                        <Gap height={12}/>
                        <Text style={styles.text2}>How does the security work?</Text>
                        <Text style={styles.text3}>- The master key to your funds is split into several parts known as shares. Each share is stored on different devices. We provide you with an NFC card where one of the shares will be securely stored. To ensure no one else can send funds from your phone you will need to present this NFC card to your phone you will need to present this NFC card to your phone when sending cryptocurrency</Text>
                        <View style={{ paddingHorizontal: 80, marginTop: 12 }}>
                            <Button text='SUBSCRIBE' backColor={colors.green} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ColdSub

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    cardTop: {
        borderWidth: 1,
        borderColor: colors.grey2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 12,
        marginHorizontal: 24
    },
    cardBottom: {
        borderWidth: 1,
        borderColor: colors.grey2,
        padding: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginHorizontal: 24,
        marginBottom: 24
    },
    text: {
        fontSize: 20,
        color: colors.black2,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    text2: {
        fontSize: 18,
        color: colors.black2,
        fontFamily: fonts.primary[600],
    },
    text3: {
        fontSize: 16,
        color: colors.black2,
        fontFamily: fonts.primary[500],
        marginBottom: 4,
        lineHeight: 24
    }
})