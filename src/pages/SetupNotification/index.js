import { SafeAreaView, StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { HeaderBack } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const SetupNotification = () => {
    const [product, setProduct] = useState(false);
    const [reminders, setReminders] = useState(false);
    const [promotion, setPromotion] = useState(false);
    const [policy, setPolicy] = useState(false);
    const [account, setAccount] = useState(false);
    const [payment, setPayment] = useState(false);
    const onChangeProduct = () => {
        setProduct(!product)
    }
    const onChangeReminders = () => {
        setReminders(!reminders)
    }
    const onChangePromotion = () => {
        setPromotion(!promotion)
    }
    const onChangePolicy = () => {
        setPolicy(!policy)
    }
    const onChangeAccount = () => {
        setAccount(!account)
    }
    const onChangePayment = () => {
        setPayment(!payment)
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Notifications' />
            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Product updates</Text>
                        <Text style={product ? styles.text3 : styles.text2}>Receive messages from platform</Text>
                    </View>
                    <Switch
                        trackColor={product ? colors.blue : colors.black}
                        thumbColor={product ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangeProduct}
                        value={product}
                    />
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2 }} />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Reminders</Text>
                        <Text style={reminders ? styles.text3 : styles.text2}>Receive booking reminders</Text>
                    </View>
                    <Switch
                        trackColor={reminders ? colors.blue : colors.black}
                        thumbColor={reminders ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangeReminders}
                        value={reminders}
                    />
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2 }} />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Promotion and tips</Text>
                        <Text style={promotion ? styles.text3 : styles.text2}>Receive coupon, promotions</Text>
                    </View>
                    <Switch
                        trackColor={promotion ? colors.blue : colors.black}
                        thumbColor={promotion ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangePromotion}
                        value={promotion}
                    />
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2 }} />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Policy and community</Text>
                        <Text style={policy ? styles.text3 : styles.text2}>Receive update on job regulations</Text>
                    </View>
                    <Switch
                        trackColor={policy ? colors.blue : colors.black}
                        thumbColor={policy ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangePolicy}
                        value={policy}
                    />
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2 }} />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Account support</Text>
                        <Text style={account ? styles.text3 : styles.text2}>Receive messages about</Text>
                    </View>
                    <Switch
                       trackColor={account ? colors.blue : colors.black}
                        thumbColor={account ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangeAccount}
                        value={account}
                    />
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2 }} />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Reminders</Text>
                        <Text style={payment ? styles.text3 : styles.text2}>Upcoming payments</Text>
                    </View>
                    <Switch
                        trackColor={payment ? colors.blue : colors.black}
                        thumbColor={payment ? colors.blue : colors.black}
                        ios_backgroundColor={colors.white}
                        onValueChange={onChangePayment}
                        value={payment}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SetupNotification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12
    },
    text: {
        fontSize: 14,
        color: colors.black2,
        fontFamily: fonts.primary[400]
    },
    text2: {
        fontSize: 16,
        color: colors.black2,
        fontFamily: fonts.primary[600]
    },
    text3: {
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.primary[600]
    },
    card: {
        backgroundColor: colors.grey3,
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 24
    }
})