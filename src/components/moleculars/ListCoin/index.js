import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconEuroBlack } from '../../../assets'
import { colors } from '../../../utils'
import { fonts } from '../../../utils/fonts'

const ListCoin = ({ name, value1, value2, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={{ width: 36, height: 36, borderRadius: 18 }} />
            <View style={{ marginLeft: 24, flex: 1 }}>
                <Text style={styles.text}>{name}</Text>
                <Text style={[styles.text2, { marginTop: 2 }]}>{value1}</Text>
            </View>
            {
                value2 != undefined && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={IconEuroBlack} style={styles.image} />
                    <Text style={styles.text2}>{value2}</Text>
                </View>
            }
        </View>
    )
}

export default ListCoin

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        marginBottom: 4
    },
    text: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[600]
    },
    text2: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[400]
    },
    image: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    }
})