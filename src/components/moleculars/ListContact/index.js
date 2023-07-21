import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDown2, IconUser } from '../../../assets'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'
import { fonts } from '../../../utils/fonts'

const ListContact = ({Icon, text, text2, text3}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={Icon} style={styles.image} />
                <Gap width={12} />
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Currency</Text>
                        <Gap width={4} />
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, padding: 4, borderRadius: 4 }}>
                            <Text style={styles.text2}>{text}</Text>
                            <Gap width={4} />
                            <Image source={IconDown2} style={{ width: 12, height: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <Gap height={2} />
                    <Text style={styles.text2}>{text2}</Text>
                </View>
            </View>
            <Gap height={8} />
            <Text style={styles.text3} >{text3}</Text>
        </View>
    )
}

export default ListContact

const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    image: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    text: {
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.primary[800]
    },
    text2: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.primary[400]
    },
    text3: {
        fontSize: 12,
        color: colors.black,
        fontFamily: fonts.primary[400]
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})