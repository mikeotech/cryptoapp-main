import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'
import { fonts } from '../../../utils/fonts'

const ListRecent = ({ data }) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.text}>Recent</Text>
            </View>
            <View style={{ marginTop: 12 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map(datarecent => {
                        return <TouchableOpacity style={{ maxWidth: 55, alignItems: 'center', marginRight: 12 }}>
                            <Image source={datarecent.image} style={styles.image}/>
                            <Gap height={4} />
                            <Text style={styles.text2}>{datarecent.name}</Text>
                        </TouchableOpacity>
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default ListRecent

const styles = StyleSheet.create({
    card: {
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.grey3,
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    text: {
        fontSize: 16,
        color: colors.black2,
        fontFamily: fonts.primary[700]
    },
    text2: {
        fontSize: 12,
        color: colors.black2,
        fontFamily: fonts.primary[400],
        textAlign: 'center'
    },
    image:{
        width: 24,
        height: 24
    }
})