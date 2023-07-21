import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { IconEuroBlack, IconLogout } from '../../../assets'
import { fonts } from '../../../utils/fonts'

const ListActivity = ({ image, name, value1, value2, value3 }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={{ marginLeft: 24, flex: 1 }}>
                <Text style={styles.text}>{name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text2, { marginTop: 2 }]}>{value1}</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 12, height: 12, marginLeft: 4 }} source={IconLogout} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={IconEuroBlack} style={styles.image2} />
                    <Text style={styles.text2}>{value2}</Text>
                </View>
                <Text style={[styles.text2, { marginTop: 2 }]}>{value3}</Text>
            </View>
        </View>
    )
}

export default ListActivity

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
        width: 36,
        height: 36,
        borderRadius: 18
    },
    image2: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    }
})