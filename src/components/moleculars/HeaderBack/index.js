import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconLeft } from '../../../assets'
import { colors } from '../../../utils'
import { fonts } from '../../../utils/fonts'

const HeaderBack = ({text, onPress, Icon}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image source={IconLeft} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image source={Icon} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBack

const styles = StyleSheet.create({
    card: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 24
    },
    text:{
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.primary[800]
    },
    image:{
        width: 36,
        height: 36,
        resizeMode: 'contain'
    }
})