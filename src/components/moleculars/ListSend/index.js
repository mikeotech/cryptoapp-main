import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'
import { fonts } from '../../../utils/fonts'

const ListSend = ({ data }) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.text}>A</Text>
            </View>
            <Gap height={12} />
            <View style={styles.card2}>
                {
                    data.map(datasend => {
                        return <TouchableOpacity style={styles.row}>
                            <Image source={datasend.image} style={{ width: 24, height: 24, borderRadius: 16 }} />
                            <Gap width={12} />
                            <Text style={styles.text2}>{datasend.name}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
        </View>
    )
}

export default ListSend

const styles = StyleSheet.create({
    card: {
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.grey3,
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    card2: {
        borderRadius: 16,
        backgroundColor: colors.grey3,
        justifyContent: 'center',
        padding: 12
    },
    text: {
        fontSize: 14,
        color: colors.grey,
        fontFamily: fonts.primary[600]
    },
    text2: {
        fontSize: 14,
        color: colors.black2,
        fontFamily: fonts.primary[400]
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    }
})