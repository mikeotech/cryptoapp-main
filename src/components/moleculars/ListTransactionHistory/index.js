import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconEuroBlack } from '../../../assets'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'
import { fonts } from '../../../utils/fonts'

const ListTransactionHistory = ({ image, text, text2 }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={image} style={{ width: 36, height: 36, borderRadius: 18 }} />
                <Gap width={8} />
                <View>
                    <Text style={styles.text}>{text}</Text>
                    <Gap height={4} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text2}>You sent</Text>
                        <Image source={IconEuroBlack} style={{ width: 8, height: 10, resizeMode: 'stretch', marginHorizontal: 4 }} />
                        <Text style={styles.text2}>{text2}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 0.4, backgroundColor: colors.grey4 }} />
        </View>
    )
}

export default ListTransactionHistory

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    text: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[700]
    },
    text2: {
        fontSize: 12,
        color: colors.black,
        fontFamily: fonts.primary[400]
    }
})